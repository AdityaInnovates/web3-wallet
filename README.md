# Web3 Coin Flip Game 🎮

A decentralized application (dApp) where users can play a fair coin flip game. Built with **Next.js** and **Tailwind CSS**, it utilizes **Sepolia Ethereum smart contracts** to ensure fairness and transparency. The app is powered by **Ethers.js** and **Web3**, enabling secure, decentralized gameplay.

## Live Demo

🔗 [Play the Coin Flip Game](https://web3-betting.appambient.com/)

## Sepolia Ethereum Contract Address

🔗 [0x6F3E6159b80F9d8B9Dcb4AEb9A578182b0E60455](https://sepolia.etherscan.io/address/0x6F3E6159b80F9d8B9Dcb4AEb9A578182b0E60455)

## Features

- **Fair Coin Flip Game**: Users can bet on heads or tails with a provably fair outcome.
- **Smart Contracts**: Powered by Ethereum smart contracts deployed on the Sepolia testnet.
- **Decentralized**: No central authority controls the game.
- **Web3 Integration**: Users can connect their Ethereum wallets to place bets.
- **Secure**: All transactions are handled through the blockchain, ensuring transparency.

## Tech Stack

- **Frontend**: [Next.js](https://nextjs.org/) & [Tailwind CSS](https://tailwindcss.com/)
- **Blockchain**: [Ethereum Smart Contracts](https://ethereum.org/en/smart-contracts/)
- **Library**: [Ethers.js](https://docs.ethers.io/v5/) & [Web3.js](https://web3js.readthedocs.io/)
- **Testnet**: Sepolia Ethereum

## How It Works

1. **Connect Wallet**: Users connect their Ethereum wallet (e.g., MetaMask).
2. **Place Bet**: Bet 0.1 ether on either heads or tails.
3. **Coin Flip**: The smart contract generates a random result using a pseudo-random number generator (for demo purposes).
4. **Win or Lose**: If the user wins, they receive the bet amount multiplied by 2 minus gas fees. If they lose, the contract keeps the bet.

## Getting Started

### Prerequisites

- **Node.js** (v14 or above)
- **Metamask** (or any other Web3-compatible wallet)
- **Sepolia ETH** for transactions (can be obtained from a [faucet](https://sepolia-faucet.com/))

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/AdityaInnovates/web3-wallet.git
    ```

2. Navigate to the project directory:

    ```bash
    cd web3-wallet
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

4. Create a `.env` file to store your environment variables:

    ```bash
    NEXT_PUBLIC_INFURA_ID=your_infura_project_id
    NEXT_PUBLIC_CONTRACT_ADDRESS=your_contract_address
    NEXT_PUBLIC_NETWORK=sepolia
    ```

5. Run the development server:

    ```bash
    npm run dev
    ```

6. Open your browser and navigate to `http://localhost:3000`.

## Deployment

You can deploy this project to **Vercel** or any platform supporting Next.js apps. For example, to deploy on Vercel:

1. Install the Vercel CLI:

    ```bash
    npm i -g vercel
    ```

2. Deploy the app:

    ```bash
    vercel
    ```

## Smart Contract

The smart contract code can be found in the `contracts` folder. It is written in **Solidity** and uses the **Hardhat** development environment.

To interact with the smart contract, use **Ethers.js**. Example interaction:

```js
import { ethers } from 'ethers';

const provider = new ethers.providers.Web3Provider(window.ethereum);
const contract = new ethers.Contract(contractAddress, abi, provider.getSigner());

async function flipCoin(side) {
    const tx = await contract.flipCoin(side, { value: ethers.utils.parseEther("0.1") });
    await tx.wait();
    console.log('Transaction successful:', tx);
}
```

## Screenshots

1. **Homepage**  
   <img width="1512" alt="Screenshot 2024-10-24 at 7 07 07 PM" src="https://github.com/user-attachments/assets/300b16d9-c9d0-48cf-8959-fcc6b33afe19">

2. **Connected Wallet**  
   ![image](https://github.com/user-attachments/assets/c9b04e13-283e-4e7c-8d08-0fd45d8efc9d)


3. **Placing Bet**  
   ![image](https://github.com/user-attachments/assets/12522889-6301-45fe-a140-167910fe49e7)


## Contributing

Contributions, issues, and feature requests are welcome! Feel free to open a PR or raise an issue.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
