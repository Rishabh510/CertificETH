# Usage

```
# Clone repo
git clone <this-repo>

# Install packages
npm install

# Make .env file and add keys
cp .env.example .env

# Deploy contract
npx hardhat run scripts/deply-contract.js --network mumbai

# Verify contract
npx hardhat verify COONTRACT_ADDRESS --network mumbai

# Launch GUI
npm run dev
```

# Basic Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, a sample script that deploys that contract, and an example of a task implementation, which simply lists the available accounts.

Try running some of the following tasks:

```
npx hardhat accounts
npx hardhat compile
npx hardhat clean
npx hardhat test
npx hardhat node
node scripts/sample-script.js
npx hardhat help
```
