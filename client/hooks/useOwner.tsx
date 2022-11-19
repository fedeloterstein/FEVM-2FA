import { useContractRead } from 'wagmi'
import abi from '../contract/abi.json'

export const useOwner = (owner: number) => {
    const { data, isError, isLoading } = useContractRead({
        address: '0x45ccC035B8bEf1896104C19105c1203dB7e001Ed',
        abi: abi.abi,
        functionName: `owner${owner}`,
      })
      const address = data;
      return { address, isError, isLoading }
}
