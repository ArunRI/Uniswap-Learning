// require("@nomicfoundation/hardhat-toolbox");

// /** @type import('hardhat/config').HardhatUserConfig */
// module.exports = {
//   solidity: {
//     compilers: [
//       {
//         version: "0.5.16",
//       },
//       {
//         version: "0.6.6",
//         settings: {
//           optimizer: {
//             enabled: true,
//             runs: 1000,
//           },
//         },
//       },
//     ],
//   },
// };

require("@nomicfoundation/hardhat-toolbox");

// const ALCHEMY_API_KEY = "TWgj5-98lq2iGJVEXO_3DL2IUrUOaUII";

// const GOERLI_PRIVATE_KEY = "e1a90b10017ac41ec5c593ae20668e410e28bedb98af79e77fd9272cac7e678c";

// module.exports = {
//   solidity: {
//     compilers: [
//       {
//         version: "0.5.16",
//       },
//       {
//         version: "0.6.6",
//         settings: {
//           optimizer: {
//             enabled: true,
//             runs: 200,
//           },
//         },
//       },
//     ],
//   },
//   networks: {
//     goerli: {
//       url: `https://eth-goerli.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
//       accounts: [GOERLI_PRIVATE_KEY]
//     }
//   }
// };

module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.5.16",
      },
      {
        version: "0.6.6",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
    ],
  },
  networks: {
    truffle: {
      url: 'http://localhost:24012/rpc',
    }
    }
  }

