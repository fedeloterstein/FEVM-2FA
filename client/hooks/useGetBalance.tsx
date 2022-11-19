import { useContractRead } from 'wagmi'
import abi from '../contract/abi.json'

export const useGetBalance = () => {
  const { data, isError, isLoading } = useContractRead({
    address: '0xdd22d3b824B19c2802911D96D755092D3Da5f9cb',
    abi: abi.abi,
    functionName: 'getBalance',
  })
  const balance = data;

  

  return { balance, isError, isLoading }
}
