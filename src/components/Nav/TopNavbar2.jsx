import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ethers } from "ethers";
import styled from "styled-components";
// import { Link } from "react-scroll";
// Components
import Sidebar from "../Nav/Sidebar";
import Backdrop from "../Elements/Backdrop";
// Assets
import LogoIcon from "../../assets/svg/icon.svg";
import BurgerIcon from "../../assets/svg/BurgerIcon";

import useStore from "../../store";

export default function TopNavbar2() {
  const [y, setY] = useState(window.scrollY);
  const addAccount = useStore((state)=>state.addAccount)
  const [sidebarOpen, toggleSidebar] = useState(false);
  const [currentAccount, setCurrentAccount] = useState(useStore((state) => state.account));

  // Render Methods
  const checkIfWalletIsConnected = async () => {
    const { ethereum } = window;
    if (!ethereum) {
      console.log("Make sure you have metamask!");
      return;
    } else {
      console.log("Ethereum object found: ", ethereum);
    }

    const accounts = await ethereum.request({ method: "eth_accounts" });
    if (accounts.length !== 0) {
      // User can have multiple authorized accounts, we grab the first one if its there!
      const account = accounts[0];
      console.log("Found an authorized account: ", account);
      addAccount(accounts[0]);
      setCurrentAccount(account);
    } else {
      console.log("No authorized account found");
    }

    let chainId = await ethereum.request({ method: "eth_chainId" });
    console.log("Connected to chain " + chainId);

    // String, hex code of the chainId of the Mumbai test network
    const mumbaiChainId = "0x13881";
    if (chainId !== mumbaiChainId) {
      alert("You are not connected to the Polygon Mumbai TestNetwork!");
    }
  };

  const connectWallet = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        alert("Get MetaMask!");
        return;
      }
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });

      console.log("Connected: ", accounts[0]);
      addAccount(accounts[0]);
      setCurrentAccount(accounts[0]);
    } catch (error) {
      console.log(error);
    }
  };

  const renderNotConnectedContainer = () => (
    <button
      onClick={connectWallet}
      className="cta-button connect-wallet-button"
    >
      Connect 🦊
    </button>
  );

  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);

  return (
    <>
      <Sidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      {sidebarOpen && <Backdrop toggleSidebar={toggleSidebar} />}
      <Wrapper
        className="flexCenter animate whiteBg"
        style={y > 100 ? { height: "60px" } : { height: "80px" }}
      >
        <NavInner className="container flexSpaceCenter">
          {/* <a href="/"> */}
          <Link className="pointer flexNullCenter" to="/" smooth={true}>
            <img src={LogoIcon} style={{ height: 70, width: 55 }} />
            <h1 style={{ marginLeft: "15px" }} className="font20 extraBold">
              CertificΞTH
            </h1>
          </Link>
          {/* </a> */}
          <BurderWrapper
            className="pointer"
            onClick={() => toggleSidebar(!sidebarOpen)}
          >
            <BurgerIcon />
          </BurderWrapper>

          <UlWrapperRight className="flexNullCenter">
            <li className="semiBold font15 pointer flexCenter">
              {(currentAccount.length)?
              <a
                className="radius8 lightBg"
                style={{ padding: "10px 15px" }}
              >
                ✅ Connected: {currentAccount.substr(0,4)}..{currentAccount.substr(currentAccount.length-2)}
              </a>
              :renderNotConnectedContainer()}
              </li>
          </UlWrapperRight>
        </NavInner>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.nav`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
`;
const NavInner = styled.div`
  position: relative;
  height: 100%;
`;
const BurderWrapper = styled.button`
  outline: none;
  border: 0px;
  background-color: transparent;
  height: 100%;
  padding: 0 15px;
  display: none;
  @media (max-width: 760px) {
    display: block;
  }
`;
const UlWrapper = styled.ul`
  display: flex;
  @media (max-width: 760px) {
    display: none;
  }
`;
const UlWrapperRight = styled.ul`
  @media (max-width: 760px) {
    display: none;
  }
`;
