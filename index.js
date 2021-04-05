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
      uniswapV1Exchange: '0x9a256Dc79dc5f3aE303B453Dd19BfFc6c8aAaB94',
      uniswapV1Factory: '0x41a7C7d0B37db9f141062414Cbc0Ba4bB6E8ac7e',
      uniswapV2Router02: '0x147Ef17Df5204aC7E3193Eb49F2CEA75f9a3bE7B',
      uniswapV2: '0xf53595F349Eb9ab2f3B09600618BAc92119Ba2cF',
    },
    zrx: {
      stakingProxy: '0xFf41bfb8289A655F9Afd10011D1D8178c77BE3f8',
      staking: '0xd69BD7955fF5f8F304a2F5b225Cc158BC3e57C0a',
      zrxToken: '0x0F48E776274fd3060b2D2998f9048dcAC43a1179'
    },
    weth: '0xA94365C1b9abAC2aBE959953155421A7C8fD3b12'
  }
}
