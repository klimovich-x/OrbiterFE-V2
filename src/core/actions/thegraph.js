import Axios from '../utils/Axios'
Axios.axios()

const nowMakerList = [
  {
    makerAddress: '0x80C67432656d59144cEFf962E8fAF8926599bCF8',
    c1ID: 3,
    c2ID: 9,
    c1Name: 'zksync',
    c2Name: 'loopring',
    t1Address: '0x0000000000000000000000000000000000000000',
    t2Address: '0x0000000000000000000000000000000000000000',
    tName: 'ETH',
    c1MinPrice: 0.005,
    c1MaxPrice: 2,
    c2MinPrice: 0.005,
    c2MaxPrice: 2,
    precision: 18,
    c1AvalibleDeposit: 1000,
    c2AvalibleDeposit: 1000,
    c1TradingFee: 0.0007,
    c2TradingFee: 0.0007,
    c1GasFee: 0.3,
    c2GasFee: 0.3,
    c1AvalibleTimes: [
      {
        startTime: 1646064001,
        endTime: 99999999999999,
      },
    ],
    c2AvalibleTimes: [
      {
        startTime: 1646064001,
        endTime: 99999999999999,
      },
    ],
  },
  {
    makerAddress: '0x80C67432656d59144cEFf962E8fAF8926599bCF8',
    c1ID: 1,
    c2ID: 9,
    c1Name: 'mainnet',
    c2Name: 'loopring',
    t1Address: '0x0000000000000000000000000000000000000000',
    t2Address: '0x0000000000000000000000000000000000000000',
    tName: 'ETH',
    c1MinPrice: 0.005,
    c1MaxPrice: 2,
    c2MinPrice: 0.005,
    c2MaxPrice: 2,
    precision: 18,
    c1AvalibleDeposit: 1000,
    c2AvalibleDeposit: 1000,
    c1TradingFee: 0.0007,
    c2TradingFee: 0.003,
    c1GasFee: 0,
    c2GasFee: 0.3,
    c1AvalibleTimes: [
      {
        startTime: 1646064001,
        endTime: 99999999999999,
      },
    ],
    c2AvalibleTimes: [
      {
        startTime: 1646064001,
        endTime: 99999999999999,
      },
    ],
  },
  {
    makerAddress: '0x80C67432656d59144cEFf962E8fAF8926599bCF8',
    c1ID: 9,
    c2ID: 2,
    c1Name: 'loopring',
    c2Name: 'arbitrum',
    t1Address: '0x0000000000000000000000000000000000000000',
    t2Address: '0x0000000000000000000000000000000000000000',
    tName: 'ETH',
    c1MinPrice: 0.005,
    c1MaxPrice: 2,
    c2MinPrice: 0.005,
    c2MaxPrice: 2,
    precision: 18,
    c1AvalibleDeposit: 1000,
    c2AvalibleDeposit: 1000,
    c1TradingFee: 0.0012,
    c2TradingFee: 0.0007,
    c1GasFee: 0.3,
    c2GasFee: 0,
    c1AvalibleTimes: [
      {
        startTime: 1646064001,
        endTime: 99999999999999,
      },
    ],
    c2AvalibleTimes: [
      {
        startTime: 1646064001,
        endTime: 99999999999999,
      },
    ],
  },
  {
    makerAddress: '0x80C67432656d59144cEFf962E8fAF8926599bCF8',
    c1ID: 9,
    c2ID: 6,
    c1Name: 'loopring',
    c2Name: 'polygon',
    t1Address: '0x0000000000000000000000000000000000000000',
    t2Address: '0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619',
    tName: 'ETH',
    c1MinPrice: 0.005,
    c1MaxPrice: 2,
    c2MinPrice: 0.005,
    c2MaxPrice: 2,
    precision: 18,
    c1AvalibleDeposit: 1000,
    c2AvalibleDeposit: 1000,
    c1TradingFee: 0.0007,
    c2TradingFee: 0.0007,
    c1GasFee: 0.3,
    c2GasFee: 0.3,
    c1AvalibleTimes: [
      {
        startTime: 1646064001,
        endTime: 99999999999999,
      },
    ],
    c2AvalibleTimes: [
      {
        startTime: 1646064001,
        endTime: 99999999999999,
      },
    ],
  },
  {
    makerAddress: '0x80C67432656d59144cEFf962E8fAF8926599bCF8',
    c1ID: 9,
    c2ID: 7,
    c1Name: 'loopring',
    c2Name: 'optimism',
    t1Address: '0x0000000000000000000000000000000000000000',
    t2Address: '0x0000000000000000000000000000000000000000',
    tName: 'ETH',
    c1MinPrice: 0.005,
    c1MaxPrice: 2,
    c2MinPrice: 0.005,
    c2MaxPrice: 2,
    precision: 18,
    c1AvalibleDeposit: 1000,
    c2AvalibleDeposit: 1000,
    c1TradingFee: 0.0012,
    c2TradingFee: 0.0007,
    c1GasFee: 0.3,
    c2GasFee: 2.5,
    c1AvalibleTimes: [
      {
        startTime: 1646064001,
        endTime: 99999999999999,
      },
    ],
    c2AvalibleTimes: [
      {
        startTime: 1646064001,
        endTime: 99999999999999,
      },
    ],
  },
  {
    makerAddress: '0x80C67432656d59144cEFf962E8fAF8926599bCF8',
    c1ID: 1,
    c2ID: 3,
    c1Name: 'mainnet',
    c2Name: 'zksync',
    t1Address: '0x0000000000000000000000000000000000000000',
    t2Address: '0x0000000000000000000000000000000000000000',
    tName: 'ETH',
    c1MinPrice: 0.005,
    c1MaxPrice: 5,
    c2MinPrice: 0.005,
    c2MaxPrice: 3,
    precision: 18,
    c1AvalibleDeposit: 1000,
    c2AvalibleDeposit: 1000,
    c1TradingFee: 0.0008,
    c2TradingFee: 0.0035,
    c1GasFee: 0.3,
    c2GasFee: 0,
    c1AvalibleTimes: [
      {
        startTime: 1646064001,
        endTime: 99999999999999,
      },
    ],
    c2AvalibleTimes: [
      {
        startTime: 1646064001,
        endTime: 99999999999999,
      },
    ],
  },
  {
    makerAddress: '0x80C67432656d59144cEFf962E8fAF8926599bCF8',
    c1ID: 1,
    c2ID: 2,
    c1Name: 'mainnet',
    c2Name: 'arbitrum',
    t1Address: '0x0000000000000000000000000000000000000000',
    t2Address: '0x0000000000000000000000000000000000000000',
    tName: 'ETH',
    c1MinPrice: 0.005,
    c1MaxPrice: 3,
    c2MinPrice: 0.005,
    c2MaxPrice: 5,
    precision: 18,
    c1AvalibleDeposit: 1000,
    c2AvalibleDeposit: 1000,
    c1TradingFee: 0.0014,
    c2TradingFee: 0.0045,
    c1GasFee: 0,
    c2GasFee: 0,
    c1AvalibleTimes: [
      {
        startTime: 1646064001,
        endTime: 99999999999999,
      },
    ],
    c2AvalibleTimes: [
      {
        startTime: 1646064001,
        endTime: 99999999999999,
      },
    ],
  },
  {
    makerAddress: '0x80C67432656d59144cEFf962E8fAF8926599bCF8',
    c1ID: 2,
    c2ID: 3,
    c1Name: 'arbitrum',
    c2Name: 'zksync',
    t1Address: '0x0000000000000000000000000000000000000000',
    t2Address: '0x0000000000000000000000000000000000000000',
    tName: 'ETH',
    c1MinPrice: 0.005,
    c1MaxPrice: 3,
    c2MinPrice: 0.005,
    c2MaxPrice: 3,
    precision: 18,
    c1AvalibleDeposit: 1000,
    c2AvalibleDeposit: 1000,
    c1TradingFee: 0.0007,
    c2TradingFee: 0.0014,
    c1GasFee: 0,
    c2GasFee: 0.3,
    c1AvalibleTimes: [
      {
        startTime: 1646064001,
        endTime: 99999999999999,
      },
    ],
    c2AvalibleTimes: [
      {
        startTime: 1646064001,
        endTime: 99999999999999,
      },
    ],
  },
  {
    makerAddress: '0x80C67432656d59144cEFf962E8fAF8926599bCF8',
    c1ID: 1,
    c2ID: 6,
    c1Name: 'mainnet',
    c2Name: 'polygon',
    t1Address: '0x0000000000000000000000000000000000000000',
    t2Address: '0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619',
    tName: 'ETH',
    c1MinPrice: 0.005,
    c1MaxPrice: 3,
    c2MinPrice: 0.005,
    c2MaxPrice: 3,
    precision: 18,
    c1AvalibleDeposit: 1000,
    c2AvalibleDeposit: 1000,
    c1TradingFee: 0.0003,
    c2TradingFee: 0.0045,
    c1GasFee: 0,
    c2GasFee: 0,
    c1AvalibleTimes: [
      {
        startTime: 1646064001,
        endTime: 99999999999999,
      },
    ],
    c2AvalibleTimes: [
      {
        startTime: 1646064001,
        endTime: 99999999999999,
      },
    ],
  },
  {
    makerAddress: '0x80C67432656d59144cEFf962E8fAF8926599bCF8',
    c1ID: 3,
    c2ID: 6,
    c1Name: 'zksync',
    c2Name: 'polygon',
    t1Address: '0x0000000000000000000000000000000000000000',
    t2Address: '0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619',
    tName: 'ETH',
    c1MinPrice: 0.005,
    c1MaxPrice: 3,
    c2MinPrice: 0.005,
    c2MaxPrice: 3,
    precision: 18,
    c1AvalibleDeposit: 1000,
    c2AvalibleDeposit: 1000,
    c1TradingFee: 0.0007,
    c2TradingFee: 0.0007,
    c1GasFee: 0,
    c2GasFee: 0,
    c1AvalibleTimes: [
      {
        startTime: 1646064001,
        endTime: 99999999999999,
      },
    ],
    c2AvalibleTimes: [
      {
        startTime: 1646064001,
        endTime: 99999999999999,
      },
    ],
  },
  {
    makerAddress: '0x80C67432656d59144cEFf962E8fAF8926599bCF8',
    c1ID: 2,
    c2ID: 6,
    c1Name: 'arbitrum',
    c2Name: 'polygon',
    t1Address: '0x0000000000000000000000000000000000000000',
    t2Address: '0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619',
    tName: 'ETH',
    c1MinPrice: 0.005,
    c1MaxPrice: 3,
    c2MinPrice: 0.005,
    c2MaxPrice: 3,
    precision: 18,
    c1AvalibleDeposit: 1000,
    c2AvalibleDeposit: 1000,
    c1TradingFee: 0.0005,
    c2TradingFee: 0.0006,
    c1GasFee: 0,
    c2GasFee: 0,
    c1AvalibleTimes: [
      {
        startTime: 1646064001,
        endTime: 99999999999999,
      },
    ],
    c2AvalibleTimes: [
      {
        startTime: 1646064001,
        endTime: 99999999999999,
      },
    ],
  },
  {
    makerAddress: '0x80C67432656d59144cEFf962E8fAF8926599bCF8',
    c1ID: 2,
    c2ID: 7,
    c1Name: 'arbitrum',
    c2Name: 'optimism',
    t1Address: '0x0000000000000000000000000000000000000000',
    t2Address: '0x0000000000000000000000000000000000000000',
    tName: 'ETH',
    c1MinPrice: 0.005,
    c1MaxPrice: 5,
    c2MinPrice: 0.005,
    c2MaxPrice: 3,
    precision: 18,
    c1AvalibleDeposit: 1000,
    c2AvalibleDeposit: 1000,
    c1TradingFee: 0.00065,
    c2TradingFee: 0.0006,
    c1GasFee: 0,
    c2GasFee: 2.5,
    c1AvalibleTimes: [
      {
        startTime: 1646114401,
        endTime: 99999999999999,
      },
    ],
    c2AvalibleTimes: [
      {
        startTime: 1646114401,
        endTime: 99999999999999,
      },
    ],
  },
  {
    makerAddress: '0x80C67432656d59144cEFf962E8fAF8926599bCF8',
    c1ID: 1,
    c2ID: 7,
    c1Name: 'mainnet',
    c2Name: 'optimism',
    t1Address: '0x0000000000000000000000000000000000000000',
    t2Address: '0x0000000000000000000000000000000000000000',
    tName: 'ETH',
    c1MinPrice: 0.005,
    c1MaxPrice: 5,
    c2MinPrice: 0.005,
    c2MaxPrice: 3,
    precision: 18,
    c1AvalibleDeposit: 1000,
    c2AvalibleDeposit: 1000,
    c1TradingFee: 0.0012,
    c2TradingFee: 0.0038,
    c1GasFee: 0.3,
    c2GasFee: 2.5,
    c1AvalibleTimes: [
      {
        startTime: 1646114401,
        endTime: 99999999999999,
      },
    ],
    c2AvalibleTimes: [
      {
        startTime: 1646114401,
        endTime: 99999999999999,
      },
    ],
  },
  {
    makerAddress: '0x80C67432656d59144cEFf962E8fAF8926599bCF8',
    c1ID: 3,
    c2ID: 7,
    c1Name: 'zksync',
    c2Name: 'optimism',
    t1Address: '0x0000000000000000000000000000000000000000',
    t2Address: '0x0000000000000000000000000000000000000000',
    tName: 'ETH',
    c1MinPrice: 0.005,
    c1MaxPrice: 3,
    c2MinPrice: 0.005,
    c2MaxPrice: 3,
    precision: 18,
    c1AvalibleDeposit: 1000,
    c2AvalibleDeposit: 1000,
    c1TradingFee: 0.00065,
    c2TradingFee: 0.0007,
    c1GasFee: 0,
    c2GasFee: 2.5,
    c1AvalibleTimes: [
      {
        startTime: 1646114401,
        endTime: 99999999999999,
      },
    ],
    c2AvalibleTimes: [
      {
        startTime: 1646114401,
        endTime: 99999999999999,
      },
    ],
  },
  {
    makerAddress: '0x80C67432656d59144cEFf962E8fAF8926599bCF8',
    c1ID: 7,
    c2ID: 6,
    c1Name: 'optimism',
    c2Name: 'polygon',
    t1Address: '0x0000000000000000000000000000000000000000',
    t2Address: '0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619',
    tName: 'ETH',
    c1MinPrice: 0.005,
    c1MaxPrice: 3,
    c2MinPrice: 0.005,
    c2MaxPrice: 5,
    precision: 18,
    c1AvalibleDeposit: 1000,
    c2AvalibleDeposit: 1000,
    c1TradingFee: 0.00025,
    c2TradingFee: 0.00065,
    c1GasFee: 2.5,
    c2GasFee: 0,
    c1AvalibleTimes: [
      {
        startTime: 1646114401,
        endTime: 99999999999999,
      },
    ],
    c2AvalibleTimes: [
      {
        startTime: 1646114401,
        endTime: 99999999999999,
      },
    ],
  },
  // usdc able
  {
    makerAddress: '0x41d3D33156aE7c62c094AAe2995003aE63f587B3',
    c1ID: 1,
    c2ID: 2,
    c1Name: 'mainnet',
    c2Name: 'arbitrum',
    t1Address: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
    t2Address: '0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8',
    tName: 'USDC',
    c1MinPrice: 0.1,
    c1MaxPrice: 200,
    c2MinPrice: 0.1,
    c2MaxPrice: 200,
    precision: 6,
    c1AvalibleDeposit: 1000,
    c2AvalibleDeposit: 1000,
    c1TradingFee: 5.5,
    c2TradingFee: 35,
    c1GasFee: 3,
    c2GasFee: 3,
    c1AvalibleTimes: [
      {
        startTime: 1642393801,
        endTime: 99999999999999,
      },
    ],
    c2AvalibleTimes: [
      {
        startTime: 1642393801,
        endTime: 99999999999999,
      },
    ],
  },
  // usdc able
  {
    makerAddress: '0x41d3D33156aE7c62c094AAe2995003aE63f587B3',
    c1ID: 1,
    c2ID: 3,
    c1Name: 'mainnet',
    c2Name: 'zksync',
    t1Address: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
    t2Address: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
    tName: 'USDC',
    c1MinPrice: 0.1,
    c1MaxPrice: 200,
    c2MinPrice: 0.1,
    c2MaxPrice: 200,
    precision: 6,
    c1AvalibleDeposit: 1000,
    c2AvalibleDeposit: 1000,
    c1TradingFee: 1.5,
    c2TradingFee: 35,
    c1GasFee: 3,
    c2GasFee: 3,
    c1AvalibleTimes: [
      {
        startTime: 1642393801,
        endTime: 99999999999999,
      },
    ],
    c2AvalibleTimes: [
      {
        startTime: 1642393801,
        endTime: 99999999999999,
      },
    ],
  },
  // usdc able
  {
    makerAddress: '0x41d3D33156aE7c62c094AAe2995003aE63f587B3',
    c1ID: 2,
    c2ID: 3,
    c1Name: 'arbitrum',
    c2Name: 'zksync',
    t1Address: '0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8',
    t2Address: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
    tName: 'USDC',
    c1MinPrice: 0.1,
    c1MaxPrice: 200,
    c2MinPrice: 0.1,
    c2MaxPrice: 200,
    precision: 6,
    c1AvalibleDeposit: 1000,
    c2AvalibleDeposit: 1000,
    c1TradingFee: 1.5,
    c2TradingFee: 5.5,
    c1GasFee: 3,
    c2GasFee: 3,
    c1AvalibleTimes: [
      {
        startTime: 1642393801,
        endTime: 99999999999999,
      },
    ],
    c2AvalibleTimes: [
      {
        startTime: 1642393801,
        endTime: 99999999999999,
      },
    ],
  },
]

export default {
  getMakerInfo: function (req, next) {
    return new Promise((resolve, reject) => {
      var res = {}
      res.code = 0
      res.data = nowMakerList
      if (next) {
        resolve(res)
      } else {
        reject(res)
      }
    })
  },
  getAllMakerList: function (req, next) {
    return new Promise((resolve, reject) => {
      var res = {}
      res.code = 0
      res.data = [
        // ETH unAble
      ]
      // push now makerList
      res.data = res.data.concat(nowMakerList)

      if (next) {
        resolve(res)
      } else {
        reject(res)
      }
    })
  },
}
