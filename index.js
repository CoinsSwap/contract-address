const zrxContractAddresses = require('@0x/contract-addresses')

const uniswap = {
  uniswapV2Factory: '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f',
  uniswapV2Router02: '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D'
}

// 1 mainnet
// 42 kovan
// 7475 wapnet (CSSTestnet)
module.exports = {
  1: {
    zrx: zrxContractAddresses[1],
    uniswap,
    weth: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2'
  },
  42: {
    zrx: zrxContractAddresses[42],
    uniswap,
    weth: '0xd0a1e359811322d97991e03f863a0c30c2cf029c'
  },
  7475: {
    uniswap: {
      uniswapV2Router02: '0x5B576A652F70111EfA0eBFE1be0A0cC0501d8496',
      uniswapV2Factory: '0x5249ef7bF26c73fdCF2C69F4c2943C6f81F0Af55',
    },
    zrx: {
      stakingProxy: '0xFf41bfb8289A655F9Afd10011D1D8178c77BE3f8',
      staking: '0xd69BD7955fF5f8F304a2F5b225Cc158BC3e57C0a',
      zrxToken: '0xdF0b61355d1dc4c11588Ea1214d34fE305225f1D'
    },
    cssToken: '0x29a969D4f6cd3C2A07a49d361FF705F11A1729E8',
    weth: '0xcA5c8A04C67b6E12da21619e4BFe45C7e75ea7F2'
  }
}
