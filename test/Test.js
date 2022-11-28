const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Uniswap Contract", function () {
  let owner, addr1, addr2, MyToken1, MyToken2, UniswapV2Contract, FactoryContract, WethContract, UniswapV2ERC20Contract, UniswapV2PairContract;

  beforeEach(async function () {
    [owner, addr1, addr2] = await ethers.getSigners();

    const Token1 = await ethers.getContractFactory("MyToken1");
    MyToken1 = await Token1.deploy();
    await MyToken1.deployed();

    const Token2 = await ethers.getContractFactory("MyToken2");
    MyToken2 = await Token2.deploy();
    await MyToken2.deployed();

    const factory = await ethers.getContractFactory("UniswapV2Factory");
    FactoryContract = await factory.deploy();
    await FactoryContract.deployed();

    const weth = await ethers.getContractFactory("WETH9");
    WethContract = await weth.deploy();
    await WethContract.deployed();

    const UniswapV2ERC20 = await ethers.getContractFactory("UniswapV2ERC20");
    UniswapV2ERC20Contract = await UniswapV2ERC20.deploy();
    await UniswapV2ERC20Contract.deployed();

    const UniswapV2Pair = await ethers.getContractFactory("UniswapV2Pair");
    UniswapV2PairContract = await UniswapV2Pair.deploy();
    await UniswapV2PairContract.deployed();

    const UniswapV2 = await ethers.getContractFactory("UniswapV2Router02");
    UniswapV2Contract = await UniswapV2.deploy(
      FactoryContract.address,
      WethContract.address
    );
    await UniswapV2Contract.deployed();
  });

  it("adding liquidity", async function () {
    await MyToken1.mint(100000);
    await MyToken2.mint(100000);

    expect(await MyToken1.balanceOf(owner.address)).to.equal(100000);
    expect(await MyToken2.balanceOf(owner.address)).to.equal(100000);


    await MyToken1.approve(UniswapV2Contract.address, 10000);
    await MyToken2.approve(UniswapV2Contract.address, 15000);

    await UniswapV2Contract.addLiquidity(
      MyToken1.address,
      MyToken2.address,
      10000,
      15000,
      900,
      1400,
      owner.address,
      1669900000
    );

    expect(await MyToken1.balanceOf(owner.address)).to.equal(100000 - 10000);
    expect(await MyToken2.balanceOf(owner.address)).to.equal(100000 - 15000);

    const val = await UniswapV2PairContract.getReserves();
    console.log(val);

    console.log("address owner --> ", owner.address);

    const balancePair1 = Number(await MyToken1.balanceOf("0x75d894e439b5b98d175eaded10402ea31938b49b"));
    const balancePair2 = Number(await MyToken2.balanceOf("0x75d894e439b5b98d175eaded10402ea31938b49b"));
    // const balancePair3 = Number(await UniswapV2ERC20Contract.balanceOf("0x75d894e439b5b98d175eaded10402ea31938b49b"));
    const balancePair3 = Number(await UniswapV2ERC20Contract.balanceOf(owner.address));
    console.log("balance of token1 of pair contract --> ", balancePair1);
    console.log("balance of token2 of pair contract --> ", balancePair2);
    console.log("balance of LP tokens of owner --> ", balancePair3);

    const totSupply = Number(await UniswapV2ERC20Contract.totalSupply());
    console.log("total supply of liquidity tokens --> ", totSupply); 

    // const balance1 = Number(await UniswapV2ERC20Contract.balanceOf(owner.address));
    // const balance2 = Number(await UniswapV2ERC20Contract.balanceOf(UniswapV2Contract.address));
    // console.log(balance1, balance2)

  });

  // it("remove liquidity", async function() {
  //   await MyToken1.mint(100000);
  //   await MyToken2.mint(100000);

  //   await MyToken1.approve(UniswapV2Contract.address, 10000);
  //   await MyToken2.approve(UniswapV2Contract.address, 15000);

  //   await UniswapV2Contract.addLiquidity(
  //     MyToken1.address,
  //     MyToken2.address,
  //     10000,
  //     15000,
  //     900,
  //     1400,
  //     owner.address,
  //     1669400000
  //   );

  //   // await UniswapV2ERC20Contract.approve(UniswapV2Contract.address, 11247);

  //   await UniswapV2Contract.removeLiquidity(
  //     MyToken1.address,
  //     MyToken2.address,
  //     1,
  //     9,
  //     14000,
  //     owner.address,
  //     1669400000
  //   )



  
});
