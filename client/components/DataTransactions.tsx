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
import { useOwner, useTransactions } from '../hooks'
import { utils } from 'ethers'
import React from 'react'
import { TransactionForm } from './'
import { useContractWrite, usePrepareContractWrite, useAccount } from 'wagmi'
import abi from '../contract/abi.json'
import { useState } from 'react';

export const DataTransactions = () => {
  const transactions = useTransactions()
  const { address } = useAccount()
  const ownerOne = useOwner(1)
  const ownerTwo = useOwner(2)
  const isOwnerOne = address === ownerOne?.address
  const isOwnerTwo = address === ownerTwo?.address

  const [indextx, setindextx] = useState<number>()

  console.log(transactions.transactions);
  
  const { config } = usePrepareContractWrite({
    address: '0x45ccC035B8bEf1896104C19105c1203dB7e001Ed',
    abi: abi.abi,
    functionName: 'approveTransaction',
    args: [indextx],
  })
  const { write } = useContractWrite(config)

  const Send = (index: number) => {
    setindextx(index)
    write?.()
  }

  return (
    <>
      <Center p={5}>
        <Heading as="h2" size={'lg'}>Transactions 💸</Heading>
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
              <Th>Status</Th>
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
                        onClick={() => Send(index)}
                        variant={'ghost'}
                        colorScheme={'red'}
                        disabled={!isOwnerOne}
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
                        onClick={() => Send(index)}
                        variant={'ghost'}
                        colorScheme={'red'}
                        disabled={!isOwnerTwo}
                      >
                        Pending
                      </Button>
                    ) : (
                      <Badge colorScheme={'green'}>Approve</Badge>
                    )}
                  </Td>
                  <Td>{tx.success ? ( <Badge colorScheme={'green'}>Success</Badge>) : ( <Badge colorScheme={'yellow'}>Programmed</Badge>)}</Td>
                </Tr>
              ))}
          </Tbody>
          <Tfoot>
            <Tr>
              <Th>Address To</Th>
              <Th>Amount</Th>
              <Th>Signer Owner One</Th>
              <Th>Signer Owner Two</Th>
              <Th>Status</Th>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
    </>
  )
}
