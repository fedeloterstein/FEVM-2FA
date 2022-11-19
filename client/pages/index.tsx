import Head from 'next/head'
import { Container } from '@chakra-ui/react'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import { DataDisplay, DataTransactions } from '../components'
import { useContractEvent } from 'wagmi'
import abi from '../contract/abi.json'
import { utils } from 'ethers'
export default function Home() {


  useContractEvent({
    address: '0x45ccC035B8bEf1896104C19105c1203dB7e001Ed',
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
        <title>FEVM-2FA Wallet 🔐</title>
        <meta name="description" content="Project built in the ETHGlobal FEVM Hackathon" />
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
