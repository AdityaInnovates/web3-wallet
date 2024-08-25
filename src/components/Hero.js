"use client";

import React, { useEffect, useState, useContext } from "react";
import { CoinFlipContext } from "@/context/CoinFlip";
import { redirect, useRouter } from "next/navigation";

const Hero = () => {
  var router = useRouter();
  var { currentAccount, connectWallet, flipCoin } = useContext(CoinFlipContext);
  useEffect(() => {
    if (currentAccount) {
      router.push("/Homepage");
    }
  }, [currentAccount]);

  return (
    <div className="w-[100vw] h-[100vh]">
      <div className="flex w-full h-full items-center justify-center">
        <div className="flex gap-[0rem] items-center">
          <div className="flex flex-col gap-[1rem] ">
            <h3
              className="w-[50%] font-semibold text-[3rem] leading-[1.2]"
              style={{ fontFamily: "outfit" }}
            >
              <h3 className="w-full text-nowrap">A crypto wallet &</h3>
              <h3 className="w-full text-nowrap">gateway to</h3>
              <h3 className="w-full text-nowrap">decentralized network</h3>
            </h3>
            <h3 className="text-slate-200 w-[80%]">
              Start exploring blockchain wallets in seconds. Trusted by over 100
              million users worldwide.
            </h3>
            <div className="flex mt-[1rem] gap-[0.5rem] items-center">
              <button
                onClick={connectWallet}
                className="w-fit  px-[1.8rem] /text-[1.2rem] py-[0.5rem] hover:bg-[#4a58d2] bg-[rgba(87,102,245)] rounded-full transition-all duration-300"
              >
                Connect Your Wallet
              </button>
              <button
                onClick={() => window.open("https://metamask.io")}
                className="text-[rgba(255,255,255,0.5)] border-0 text-sm hover:text-[rgba(255,255,255,0.8)] transition-all duration-200 cursor-pointer"
              >
                via MetaMask
              </button>
            </div>
          </div>
          <div>
            <img className="h-[12rem]" src="/images/Bitcoin.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
