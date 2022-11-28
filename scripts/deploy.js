async function main() {

    let MyToken1, MyToken2, UniswapV2RouterContract, UniswapV2ERC20Contract, WethContract, FactoryContract;


    const [deployer] = await ethers.getSigners();
  
    console.log("Deploying contracts with the account:", deployer.address);
  
    console.log("Account balance:", (await deployer.getBalance()).toString());
  
    const Token1 = await ethers.getContractFactory("MyToken1");
    MyToken1 = await Token1.deploy();
    await MyToken1.deployed();

    const awaitTimeout = delay =>
  new Promise(resolve => setTimeout(resolve, delay));

awaitTimeout(30000).then(() => console.log('Hi'));


    // const Token2 = await ethers.getContractFactory("MyToken2");
    // MyToken2 = await Token2.deploy();

    // const UniswapV2ERC20 = await ethers.getContractFactory("UniswapV2ERC20");
    // UniswapV2ERC20Contract = await UniswapV2ERC20.deploy();
    // await UniswapV2ERC20Contract.deployed();

    // const weth = await ethers.getContractFactory("WETH9");
    // WethContract = await weth.deploy();

    // const factory = await ethers.getContractFactory("UniswapV2Factory");
    // FactoryContract = await factory.deploy();

    // const UniswapV2Pair = await ethers.getContractFactory("UniswapV2Pair");
    // UniswapV2PairContract = await UniswapV2Pair.deploy();

    // const UniswapV2Router = await ethers.getContractFactory("UniswapV2Router02");
    // UniswapV2RouterContract = await UniswapV2Router.deploy(
    //   FactoryContract.address,
    //   WethContract.address
    // );
  
    console.log("mytoken1 address:", MyToken1.address);
    // console.log("mytoken2 address:", MyToken2.address);
    // console.log("UniswapV2ERC20 address: ", UniswapV2ERC20Contract.address);
    // console.log("UniswapV2Router02 address: ", UniswapV2RouterContract.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });