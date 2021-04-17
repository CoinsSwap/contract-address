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
    uniswap
  },
  42: {
    zrx: zrxContractAddresses[42],
    uniswap
  },
  7475: {
    uniswap: {
      uniswapV2Router02: '0x5B576A652F70111EfA0eBFE1be0A0cC0501d8496',
      uniswapV2Factory: '0x5249ef7bF26c73fdCF2C69F4c2943C6f81F0Af55',
    },
    zrx: {
      stakingProxy: '0xFf41bfb8289A655F9Afd10011D1D8178c77BE3f8',
      staking: '0xd69BD7955fF5f8F304a2F5b225Cc158BC3e57C0a',
      zrxToken: '0xBc2967C107Dd9738b48523DEd108B1Fb7E51e300'
    },
    cssToken: '0x29a969D4f6cd3C2A07a49d361FF705F11A1729E8',
    weth: '0x41a7C7d0B37db9f141062414Cbc0Ba4bB6E8ac7e'
  }
}
