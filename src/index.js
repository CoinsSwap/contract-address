import zrxContractAddresses from '@0x/contract-addresses'


const uniswap = {
  uniswapV2Factory: '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f',
  uniswapV2Router02: '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D'
}

// 1 mainnet
// 42 kovan
// 7475 wapnet (CSSTestnet)
export default {
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
      uniswapV1Exchange: '0xec16FDf36C412634996Ef7AcAF379c61068970Ca',
      uniswapV1Factory: '0x190A7AC234472c94334516f51A6549aFAEC366F9',
      uniswapV2Router02: '0x930Acbc372Bd73299Cd871AeFa610a93AE419573',
      uniswapV2: '0x93aC90CEF71B46B6B8Cc810D3E825945c88F2C21'
    },
    zrx: {
      stakingProxy: '0xD769A47cd943f78082eE4672cd2Bb1959C33fbBd',
      staking: '0x83122e0C92A99074B77aA4797f0cd5F2252b866a',
      zrxToken: '0x3ea3a770995Dc2439433fD994A58469868f6934c'
    },
    weth: '0x20B4F8ddAD0d2AeFF675ab3C61A469bAae0BbCC3'
  }
}
