import { utils } from 'ethers'
import { useContractWrite, usePrepareContractWrite } from 'wagmi'
import abi from '../contract/abi.json'

interface Props {
address: string;
amount: string
}
export const useInitiateTransaction = ({address, amount}: Props) => {

  const { config } = usePrepareContractWrite({
    address: '0xdd22d3b824B19c2802911D96D755092D3Da5f9cb',
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
