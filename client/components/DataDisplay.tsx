import { Center, Heading, SimpleGrid, Stack, Text } from '@chakra-ui/react'
import { utils } from 'ethers'
import React from 'react'
import { useGetBalance, useOwner, useTransactions } from '../hooks'

export const DataDisplay = () => {
  const ownerOne = useOwner(1)
  const ownerTwo = useOwner(2)
  const balance = useGetBalance()
  const transactions = useTransactions()

  return (
    <>
      <Center>
        <Heading as={'h1'} size="xl">
          SolShare Wallet 🔐
        </Heading>
      </Center>
      <SimpleGrid columns={2} spacing={10} p="5">
        <Stack>
          <Heading as="h2" size={'lg'}>
            Owners 👻
          </Heading>
          {!ownerOne.isError && !ownerOne.isLoading && (
            <>
              <Text fontWeight={600}>Owner One:</Text>
              <Text color={'gray.400'}>{ownerOne.address as any}</Text>
            </>
          )}
          {!ownerTwo.isError && !ownerTwo.isLoading && (
            <>
              <Text fontWeight={600}>Owner Two: </Text>
              <Text color={'gray.400'}>{ownerTwo.address as any}</Text>
            </>
          )}
        </Stack>
        <Stack>
          <Heading as="h2" size={'lg'}>
            Account 🤑
          </Heading>
          {!balance.isError && !balance.isLoading && (
            <Text>
              Total Balance {utils.formatEther(balance.balance as any)} tFIL
            </Text>
          )}
          {!transactions.isError && !transactions.isLoading && (
            <Text>Transactions: {transactions.transactions.length}</Text>
          )}
        </Stack>
      </SimpleGrid>
    </>
  )
}
