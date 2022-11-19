import Head from 'next/head'
import { Container } from '@chakra-ui/react'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import { DataDisplay, DataTransactions } from '../components'
import { useContractEvent } from 'wagmi'
import abi from '../contract/abi.json'
import { utils } from 'ethers'
export default function Home() {


  useContractEvent({
    address: '0xdd22d3b824B19c2802911D96D755092D3Da5f9cb',
    abi: abi.abi,
    eventName: 'NewInitiateTransaction',
    listener( _to, _from, _amount) {
      alert(` To: ${_to}, From: ${_from}, Amount: ${utils.formatEther(_amount)}`)
      location.reload()
    },
  })

  
  return (
    <div>
      <Head>
        <title>MultiSig Wallet 🚧</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container padding={10} maxW={'container.lg'}>
        <ConnectButton />
        <DataDisplay />
        <DataTransactions />
      </Container>
    </div>
  )
}
