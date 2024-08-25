"use client";
import React, { useState, useEffect } from "react";
import Web3Modal from "web3modal";
import { ethers } from "ethers";

// INTERNAL IMPORTS
import { CoinFlip_ABI, CoinFlip_ADDRESS } from "./Constants";
import { redirect, usePathname, useRouter } from "next/navigation";

// FETCHING SMART CONTRACT
const fetchContract = (signerOrProvider) =>
  new ethers.Contract(CoinFlip_ADDRESS, CoinFlip_ABI, signerOrProvider);

export const CoinFlipContext = React.createContext();

export const CoinFlipProvider = ({ children }) => {
  var router = useRouter();
  const titleData = "CoinFlip";
  var pathname = usePathname();
  const [currentAccount, setCurrentAccount] = useState("");
  const [error, setError] = useState(null);

  var getProvider = async () => {
    const web3Modal = new Web3Modal();
    const connection = await web3Modal.connect();
    const provider = new ethers.BrowserProvider(connection);
    return provider;
  };
  const flipCoin = async (side, amount) => {
    return new Promise(async (res) => {
      var provider = await getProvider();
      const signer = await provider.getSigner();
      const contract = fetchContract(signer);

      // var fund = await contract.fundContract({ value: ethers.parseEther("1") });
      // console.log(fund);

      var getcontractbal = await contract.getContractBalance();
      console.log(
        "Contract balance",
        ethers.formatEther(String(getcontractbal))
      );
      // await contract.withdraw(ethers.parseEther("0.7"));
      // return;
      try {
        const transaction = await contract.flipCoin(side, {
          value: ethers.parseEther(amount),
          gasLimit: 100000,
        });
        await transaction.wait(); // Wait for the transaction to be mined

        const receipt = await contract.queryFilter("CoinFlipped", -1);
        const { win } = receipt[0].args;
        res(win);
        setTimeout(() => {
          alert(win ? "You won 🎉!" : "Better luck next time 😇!");
        }, 300);
      } catch (error) {
        alert("Error Occured");
        res("error");
        console.log("Error", error);
      }
    });
  };

  const ifWalletConnected = async () => {
    try {
      if (!window.ethereum) {
        alert("Install Metamask from metamask.io");
        return false;
      }

      const accounts = await window.ethereum.request({
        method: "eth_accounts",
      });

      if (accounts.length) {
        setCurrentAccount(accounts[0]);
        return true;
      } else {
        console.log("No account found");
      }
    } catch (error) {
      console.log("Something wrong while connecting to the wallet ", error);
      return false;
    }
  };

  useEffect(() => {
    ifWalletConnected();
  }, []);
  const IsAccountConnected = () => (currentAccount ? true : false);
  const connectWallet = async () => {
    try {
      if (!window.ethereum) {
        setError("Install Metamask");
        return;
      }
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      setCurrentAccount(accounts[0]);
    } catch (error) {
      console.log("Something wrong while connecting to the wallet", error);
    }
  };
  useEffect(() => {
    if (Boolean(localStorage.getItem("connected"))) {
      connectWallet();

      if (pathname != "/Homepage") {
        router.push("/Homepage");
      }
    }
    console.log(currentAccount);
  }, [currentAccount]);

  return (
    <CoinFlipContext.Provider
      value={{
        titleData,
        currentAccount,
        connectWallet,
        IsAccountConnected,
        connectWallet,
        flipCoin,
        error,
      }}
    >
      {children}
    </CoinFlipContext.Provider>
  );
};
