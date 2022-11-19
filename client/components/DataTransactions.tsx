import {
  Center,
  Heading,
  Button,
  TableContainer,
  Table,
  TableCaption,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Badge,
  Tfoot,
} from '@chakra-ui/react'
import { useTransactions } from '../hooks'
import { utils } from 'ethers'
import React from 'react'
import { TransactionForm } from './'
import { useContractWrite, usePrepareContractWrite } from 'wagmi'
import abi from '../contract/abi.json'

export const DataTransactions = () => {
  const transactions = useTransactions()

  const { config } = usePrepareContractWrite({
    address: '0xdd22d3b824B19c2802911D96D755092D3Da5f9cb',
    abi: abi.abi,
    functionName: 'approveTransaction',
    args: [1],
  })
  const { write } = useContractWrite(config)
  

  return (
    <>
      <Center p={5}>
        <Heading>Transactions 💸</Heading>
        <Button onClick={() => write?.()}>Test</Button>
      </Center>
      <TransactionForm />
      <TableContainer>
        <Table variant="simple">
          <TableCaption>Built on ETHGlobal 🚀 Hack FEVM</TableCaption>
          <Thead>
            <Tr>
              <Th>Address To</Th>
              <Th>Amount</Th>
              <Th>Signer Owner One</Th>
              <Th>Signer Owner Two</Th>
            </Tr>
          </Thead>
          <Tbody>
            {transactions.transactions &&
              transactions.transactions.map((tx: any, index) => (
                <Tr key={index}>
                  <Td>{tx.to}</Td>
                  <Td>{utils.formatEther(tx.amount)} tFIL</Td>
                  <Td>
                    {tx.signedByOwnerOne === false ? (
                      <Button
                        onClick={() => write?.()}
                        variant={'outline'}
                        colorScheme={'red'}
                      >
                        Pending
                      </Button>
                    ) : (
                      <Badge colorScheme={'green'}>Approve</Badge>
                    )}
                  </Td>
                  <Td>
                    {tx.signedByOwnerTwo === false ? (
                      <Button
                        onClick={() => write?.()}
                        variant={'outline'}
                        colorScheme={'red'}
                      >
                        Pending
                      </Button>
                    ) : (
                      <Badge colorScheme={'green'}>Approve</Badge>
                    )}
                  </Td>
                </Tr>
              ))}
          </Tbody>
          <Tfoot>
            <Tr>
              <Th>Address To</Th>
              <Th>Amount</Th>
              <Th>Signer Owner One</Th>
              <Th>Signer Owner Two</Th>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
    </>
  )
}
