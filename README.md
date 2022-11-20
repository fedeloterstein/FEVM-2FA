#   SolShare Wallet 🔐
Project built in the ETHGlobal FEVM Hackathon

## 👤 Authors 
- Federico Loterstein ([@fedeloters](https://twitter.com/fedeloters))

## 🌈 About


TODO...

## 🏗 Get Started
### Clone the project
```bash
  git clone https://github.com/fedeloterstein/FEVM-2FA.git
```
### Install node modules
```bash
  cd FEVM-2FA
  yarn install
```
### Update the private key
Add your deployment account private key in hardhat config file.

### Compile the Smart Contracts
```bash
  npx hardhat compile
```
### Fund deployment account
Deposit some tFIL to your deployment account from wallaby faucet - https://wallaby.network/

### Deploy the Smart Contracts on Wallaby Testnet
```bash
  npx hardhat deploy
```

> Note the contract address and locate the contract ABI under deployments folder and replace it inside the contants file under client folder.

### Install node modules inside client folder
```bash
  cd client
  yarn install
```

### To deploy this project run

```bash
  yarn dev
```

## ✅ Contributing 
PRs and issues are always welcome. Feel free to submit any issues or ideas you have at the [issues page](https://github.com/fedeloterstein/FEVM-2FA/issues).