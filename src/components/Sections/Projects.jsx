import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useMoralisWeb3Api, useMoralis } from "react-moralis";
// Components
import ProjectBox from "../Elements/ProjectBox";
import FullButton from "../Buttons/FullButton";
import "./tempsi.css";
import useStore from "../../store";
import "./tempsi.css";

export default function Projects() {
  const [currentAccount, setCurrentAccount] = useState(
    useStore((state) => state.account)
  );
  const addAccount = useStore((state)=>state.addAccount);
  const { isInitialized } = useMoralis();
  const Web3Api = useMoralisWeb3Api();
  const [NFTs, SetNFTs] = useState(null);

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
      // addAccount(account);
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

  const NFTGrid = () => {
    console.log("FOUND:",useStore((state)=>state.account));
    console.log("FOUND2:",currentAccount);
    return currentAccount.length ? (
      NFTs && (
        <div style={styling.topsection} className="yoyo">
          {NFTs.map((nft) => {
            let metadata = JSON.parse(nft.metadata);
            const gateway = "https://ipfs.io/ipfs/";
            return (
              metadata && (
                <div style={styling.section}>
                  <ProjectBox
                    key={nft.token_id}
                    img={gateway + metadata["image"].substring(7)}
                    title={metadata["name"]}
                    text={metadata["description"]}
                    action={() => alert("clicked")}
                  />
                </div>
              )
            );
          })}
        </div>
      )
    ) : (
      <h1 className="yoyo123">Please connect your MetaMask account</h1>
    );
  };

  useEffect(() => {
    checkIfWalletIsConnected();
    console.log("currentAccount: ",currentAccount);
    const fetchNFTsForContract = async () => {
      console.log("RUNNING>>>: ");
      const options = {
        chain: "mumbai",
        address: currentAccount,
        token_address: "0xab4919e28e7e6ba06d15a3d90c32d798887b469a",
      };
      const polygonNFTs = await Web3Api.account.getNFTsForContract(options);
      SetNFTs(polygonNFTs.result);
    };
    if (isInitialized && currentAccount.length) {
      fetchNFTsForContract();
    }
  }, [useStore((state) => state.account), currentAccount, isInitialized]);

  return (
    <Wrapper id="projects">
      <div className="whiteBg">
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Your Certificates</h1>
          </HeaderInfo>
          <NFTGrid />
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;
const HeaderInfo = styled.div`
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const Advertising = styled.div`
  padding: 100px 0;
  margin: 100px 0;
  position: relative;
  @media (max-width: 1160px) {
    padding: 60px 0 40px 0;
  }
  @media (max-width: 860px) {
    flex-direction: column;
    padding: 0 0 30px 0;
    margin: 80px 0 0px 0;
  }
`;
const ButtonsRow = styled.div`
  @media (max-width: 860px) {
    justify-content: space-between;
  }
`;
const AddLeft = styled.div`
  position: relative;
  width: 50%;
  p {
    max-width: 475px;
  }
  @media (max-width: 860px) {
    width: 80%;
    order: 2;
    text-align: center;
    h2 {
      line-height: 3rem;
      margin: 15px 0;
    }
    p {
      margin: 0 auto;
    }
  }
`;
const AddRight = styled.div`
  width: 50%;
  @media (max-width: 860px) {
    width: 80%;
    order: 2;
  }
`;
const AddLeftInner = styled.div`
  width: 100%;
  position: absolute;
  top: -300px;
  left: 0;
  @media (max-width: 1190px) {
    top: -250px;
  }
  @media (max-width: 920px) {
    top: -200px;
  }
  @media (max-width: 860px) {
    order: 1;
    position: relative;
    top: -60px;
    left: 0;
  }
`;
const ImgWrapper = styled.div`
  width: 100%;
  padding: 0 15%;
  img {
    width: 75%;
    height: auto;
  }
  @media (max-width: 400px) {
    padding: 0;
  }
`;

const styling = {
  topsection: {
    width: "100%",

    display: "grid",

    gap: "0.25em",
    marginbottom: "1em",
  },

  section: {
    width: "80%",
    fontSize: "2rem",
    color: "#292b2c",
    backgroundColor: "#fff",
    textAlign: "center",
    margin: "50px auto",
    fontsize: "3rem",
  },
};
