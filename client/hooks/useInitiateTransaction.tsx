import { utils } from 'ethers'
import { useContractWrite, usePrepareContractWrite } from 'wagmi'
import abi from '../contract/abi.json'

interface Props {
address: string;
amount: string
}
export const useInitiateTransaction = ({address, amount}: Props) => {

  const { config } = usePrepareContractWrite({
    address: '0x45ccC035B8bEf1896104C19105c1203dB7e001Ed',
    abi: abi.abi,
    functionName: 'initiateTransaction',
    args: [
      address,
      utils.parseEther(amount || '0.015'),
    ],
  })
  const { write } = useContractWrite(config)
  return { write }
}
