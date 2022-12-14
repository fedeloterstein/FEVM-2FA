import { ConnectButton } from '@rainbow-me/rainbowkit'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useAccount } from 'wagmi'
import { utils } from 'ethers'
import { useGetBalance, useOwner, useTransactions } from '../hooks'

export default function Template() {
  const { isConnected } = useAccount()

  const balance = useGetBalance()
  const ownerOne = useOwner(1)
  const ownerTwo = useOwner(2)
  const transactions = useTransactions()

  return (
    <div className={styles.container}>
      <Head>
        <title>Multisig</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">MultiSig Wallet!</a>
        </h1>
        <ConnectButton />
        {isConnected && (
          <div>
            {!balance.isError && !balance.isLoading && (
              <div className={styles.card}>
                <h2>{utils.formatEther(balance.balance as any)} tFIL</h2>
                <p>Total Balance</p>
              </div>
            )}

            {!ownerOne.isError && !ownerOne.isLoading && (
              <div className={styles.card}>
                <h2>Owner One</h2>
                <p>{ownerOne.address as any}</p>
              </div>
            )}

            {!ownerTwo.isError && !ownerTwo.isLoading && (
              <div className={styles.card}>
                <h2>Owner Two</h2>
                <p>{ownerTwo.address as any}</p>
              </div>
            )}

            {!transactions.isError && !transactions.isLoading && (
              <div className={styles.card}>
                <h2>{transactions.transactions.length}</h2>
                <p>Transactions</p>
              </div>
            )}
          </div>
        )}
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
