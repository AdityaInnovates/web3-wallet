import { ethers } from "ethers";

// Set up the provider
const provider = new ethers.JsonRpcProvider(
  "https://cosmological-misty-layer.ethereum-sepolia.quiknode.pro/4e5f69b7f657e0ca453805d9220b66c1a0ca59a5"
);

const abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "player",
        type: "address",
      },
      {
        indexed: false,
        internalType: "enum CoinFlip.Side",
        name: "side",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "win",
        type: "bool",
      },
    ],
    name: "CoinFlipped",
    type: "event",
  },
  {
    inputs: [],
    name: "BET_AMOUNT",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "enum CoinFlip.Side",
        name: "_side",
        type: "uint8",
      },
    ],
    name: "flipCoin",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];
const contractAddress = "0x67e7Cb263457D62Ef8983F08987003DBCd43354D";

// Create a contract instance
export const coinFlipContract = new ethers.Contract(
  contractAddress,
  abi,
  provider
);

// Get signer for transactions
export const getSigner = () => {
  const signer = provider.getSigner();
  return signer;
};

export default provider;
