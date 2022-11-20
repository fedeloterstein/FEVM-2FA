#   SolShare Wallet 🔐
Project built in the ETHGlobal FEVM Hackathon

## 👤 Author
- Federico Loterstein ([@fedeloters](https://twitter.com/fedeloters))

## 🌈 About

We are the #1 wallet in FEVM that allows you to configure 2FA with 2 different wallets, increasing the security of your transactions and protecting your assets from possible attacks.

We created a multisig Wallet that increases the security of our assets. This connects with two different wallets, for example one on the cell phone and one on the computer, working as a double authentication factor (2FA) since for any transaction I will need the approval of both devices. In other words, in the event that our cell phone is stolen and they want to access our wallet, they will not be able to steal the funds. Another ideal use case is, for example, in a Hackthon where an award is received, each member registers their Wallet, and when withdrawing the funds, they will need the approval of the team to carry out the transaction.

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