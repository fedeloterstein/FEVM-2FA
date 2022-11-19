export const CONTRACT_ADDRESS = "0x96bAc1210C951fFCC0Ca22B19f46114403836D5c"

export const CONTRACT_ABI = [
    {
      "inputs": [],
      "name": "getNotice",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_notice",
          "type": "string"
        }
      ],
      "name": "getUserByNotice",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_notice",
          "type": "string"
        }
      ],
      "name": "setNotice",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ]
