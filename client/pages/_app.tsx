import '../styles/globals.css'
import type { AppProps } from 'next/app'
import '@rainbow-me/rainbowkit/styles.css'
import { ChakraProvider } from '@chakra-ui/react'
import { getDefaultWallets, RainbowKitProvider } from '@rainbow-me/rainbowkit'
import { Chain, chain, configureChains, createClient, WagmiConfig } from 'wagmi'
import { publicProvider } from 'wagmi/providers/public'

const fevmChain: Chain = {
  id: 31415,
  name: 'Filecoin Wallaby',
  network: 'wallaby',
  nativeCurrency: {
    decimals: 18,
    name: 'wallaby',
    symbol: 'tFIL',
  },
  rpcUrls: {
    default: 'https://wallaby.node.glif.io/rpc/v0',
  },
  testnet: true,
}
 
const { chains, provider } = configureChains(
  [fevmChain],
  [publicProvider()],
)

const { connectors } = getDefaultWallets({
  appName: 'My RainbowKit App',
  chains,
})

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains}>
        <Component {...pageProps} />
      </RainbowKitProvider>
    </WagmiConfig>
    </ChakraProvider>
  )
}
