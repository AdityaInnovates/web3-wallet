"use client";
import { CoinFlipContext } from "@/context/CoinFlip";
import React, { useContext, useEffect, useRef, useState } from "react";

const HomePage = () => {
  var { currentAccount, connectWallet, flipCoin } = useContext(CoinFlipContext);
  var coin = useRef(null);
  var headref = useRef(null);
  var tailsref = useRef(null);

  const [amount, setAmount] = useState("");
  const [side, setSide] = useState(true); // true for heads, false for tails
  const [resultMessage, setResultMessage] = useState("");
  const [headsAndTails, setheadsAndTails] = useState({ heads: 0, tails: 0 });
  useEffect(() => {
    document.getElementById("loader").style.display = "none";
    document.getElementById("wrapper").style.display = "block";
  }, []);

  return (
    <div>
      <div className="flex items-center w-full justify-center mt-[3rem]">
        <h3
          className="text-[3rem] font-semibold"
          style={{ fontFamily: "outfit" }}
        >
          Web3 FlipCoin Game
        </h3>
      </div>
      <div id="loader">
        <div></div>
      </div>
      <form
        id="wrapper"
        onSubmit={(form) => {
          form.preventDefault();
        }}
      >
        <div className="container">
          <div className="stats">
            <p id="heads-count">Heads: {headsAndTails?.heads || 0}</p>
            <p id="tails-count">Tails: {headsAndTails?.tails || 0}</p>
          </div>
          <div className="coin" id="coin" ref={coin}>
            <div className="heads">
              <img src="/images/heads.svg" />
            </div>
            <div className="tails">
              <img src="/images/tails.svg" />
            </div>
          </div>
          <div className="buttons">
            <button
              id="flip-button"
              onClick={async (element) => {
                element.currentTarget.disabled = true;
                headref.current.disabled = true;
                tailsref.current.disabled = true;
                var ele = element.target;
                var won = null;
                flipCoin(side, amount).then((wonn) => (won = wonn));

                var recc = async (deg) => {
                  coin.current.style.transform = `rotateX(${deg}deg)`;
                  await new Promise((res) => setTimeout(res, 150));

                  if (won == true) {
                    ele.disabled = false;
                    headref.current.disabled = false;
                    tailsref.current.disabled = false;
                    if (side == true) {
                      setheadsAndTails((prev) => ({
                        ...prev,
                        heads: headsAndTails.heads + 1,
                      }));
                      if ((deg / 180) % 2 == 0) {
                        return;
                      } else {
                        coin.current.style.transform = `rotateX(${
                          deg + 180
                        }deg)`;
                        // await new Promise((res) => setTimeout(res, 150));
                        // recc(deg + 180);
                      }
                    } else {
                      setheadsAndTails((prev) => ({
                        ...prev,
                        tails: headsAndTails.tails + 1,
                      }));
                      if ((deg / 180) % 2 == 0) {
                        coin.current.style.transform = `rotateX(${
                          deg + 180
                        }deg)`;
                        // recc(deg + 180);
                      } else {
                        return;
                      }
                    }
                  } else if (won == false) {
                    ele.disabled = false;
                    headref.current.disabled = false;
                    tailsref.current.disabled = false;
                    if (side == true) {
                      setheadsAndTails((prev) => ({
                        ...prev,
                        tails: headsAndTails.tails + 1,
                      }));
                      if ((deg / 180) % 2 == 0) {
                        coin.current.style.transform = `rotateX(${
                          deg + 180
                        }deg)`;
                        // recc(deg + 180);
                      } else {
                        return;
                      }
                    } else {
                      setheadsAndTails((prev) => ({
                        ...prev,
                        heads: headsAndTails.heads + 1,
                      }));
                      if ((deg / 180) % 2 == 0) {
                        return;
                      } else {
                        coin.current.style.transform = `rotateX(${
                          deg + 180
                        }deg)`;
                        // recc(deg + 180);
                      }
                    }
                  } else if (won == "error") {
                    ele.disabled = false;
                    headref.current.disabled = false;
                    tailsref.current.disabled = false;
                    return;
                  } else {
                    recc(deg + 180);
                  }
                };
                recc(180);
              }}
              type="submit"
            >
              Flip Coin
            </button>
            <button
              id="reset-button"
              onClick={() => {
                setheadsAndTails({ heads: 0, tails: 0 });
              }}
            >
              Reset
            </button>
          </div>
          <div>
            {/* <h3 className="text-black mt-[0.5rem]">Betting amount:</h3> */}
          </div>
          <input
            type="number"
            value={amount}
            className="text-black bg-slate-100 mt-[0.5rem] w-full px-[0.5rem] py-[0.5rem]"
            min={0.1}
            required
            placeholder="How much you wanna bet?(min 0.1eth)"
            onChange={(e) => setAmount(e.currentTarget.value)}
          />
          <h3 className="text-black mt-[0.5rem] mb-[0.5rem]">Bet on:</h3>
          <div className="flex justify-between items-center">
            <button
              className={`w-fit  px-[1.8rem] /text-[1.2rem] py-[0.5rem] hover:bg-[#4a58d2] hover:text-white text-black ${
                side ? "bg-[#4a58d2] text-white" : ""
              } rounded-full transition-all duration-300`}
              type="button"
              onClick={() => setSide(true)}
              ref={headref}
            >
              Heads
            </button>
            <h3 className="text-black">Or</h3>
            <button
              className={`w-fit  px-[1.8rem] /text-[1.2rem] py-[0.5rem] hover:bg-[#4a58d2]  hover:text-white text-black ${
                !side ? "bg-[#4a58d2] text-white" : ""
              } rounded-full transition-all duration-300`}
              type="button"
              onClick={() => setSide(false)}
              ref={tailsref}
            >
              Tails
            </button>
          </div>
        </div>
      </form>
      {/* <input
        type="number"
        value={amount}
        className="text-black"
        onChange={(e) => setAmount(e.currentTarget.value)}
      />
      <button
        className={`w-fit mt-[1rem] px-[1.8rem] /text-[1.2rem] py-[0.5rem] hover:bg-[#4a58d2] ${
          side ? "bg-[#4a58d2]" : ""
        } rounded-full transition-all duration-300`}
        onClick={() => setSide(true)}
      >
        Heads
      </button>
      <button
        className={`w-fit mt-[1rem] px-[1.8rem] /text-[1.2rem] py-[0.5rem] hover:bg-[#4a58d2] ${
          !side ? "bg-[#4a58d2]" : ""
        } rounded-full transition-all duration-300`}
        onClick={() => setSide(false)}
      >
        Tails
      </button>
      <button
        className="w-fit mt-[1rem] px-[1.8rem] /text-[1.2rem] py-[0.5rem] hover:bg-[#4a58d2] bg-[rgba(87,102,245)] rounded-full transition-all duration-300"
        onClick={() => flipCoin(side, amount)}
      >
        Flip Coin
      </button>
      <div>{resultMessage}</div> */}
    </div>
  );
};

export default HomePage;
