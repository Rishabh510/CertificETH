import React, { useEffect, useState } from "react";
import { NFTStorage, File } from "nft.storage";
import "./styles/App.css";
// import "./styles/index.css";
import { ethers } from "ethers";
import myToken from "./artifacts/contracts/MyToken.sol/MyToken.json";
import Button from "@mui/material/Button";
import { AppBar, Box, TextField } from "@mui/material";
import { padding } from "@mui/system";
import { useLocation } from "react-router-dom";
import Footer from "./components/Sections/Footer";
import  TopNavbar2 from "./components/Nav/TopNavbar2";
import useStore from "./store";

// Constants
const NFT_STORAGE_API_KEY = import.meta.env.VITE_NFT_STORAGE_API_KEY;
const TWITTER_HANDLE1 = "RaizadaRishabh";
const TWITTER_HANDLE2 = "PriyankGupta03";
const TWITTER_LINK1 = `https://twitter.com/${TWITTER_HANDLE1}`;
const TWITTER_LINK2 = `https://twitter.com/${TWITTER_HANDLE2}`;
const CONTRACT_ADDRESS = "0xAB4919E28E7e6bA06D15A3D90c32D798887B469A";

const App = () => {
  const { state } = useLocation();
  const [currentAccount, setCurrentAccount] = useState(useStore((state) => state.account));
  const [myName, setMyName] = useState("");
  const [OrgName, setOrgName] = useState(state.text);
  const [eventName, setEventName] = useState(state.title);
  const [AddressName, setAddressName] = useState("");

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
      setCurrentAccount(account);
      setupEventListener();
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
      setCurrentAccount(accounts[0]);
      setupEventListener();
    } catch (error) {
      console.log(error);
    }
  };

  const setupEventListener = async () => {
    try {
      const { ethereum } = window;
      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const connectedContract = new ethers.Contract(
          CONTRACT_ADDRESS,
          myToken.abi,
          signer
        );

        connectedContract.on("CustomNFTMinted", (from, tokenId) => {
          console.log(from, tokenId.toNumber());
          console.log(
            `NFT Minted: https://testnets.opensea.io/assets/mumbai/${CONTRACT_ADDRESS}/${tokenId.toNumber()}`
          );
        });

        console.log("Event listener setup complete!");
      } else {
        console.log("Ethereum object doesn't exist!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const storeAsset = async () => {
    const client = new NFTStorage({ token: NFT_STORAGE_API_KEY });
    const SVG1 =
      "<svg width='1400' height='980' xmlns='http://www.w3.org/2000/svg' version='1.1' xml:space='preserve'><defs><linearGradient id='XMLID_11_' x1='0.34444' y1='0.26248' x2='0.70953' y2='0.81923'><stop offset='0' stop-color='#282829'/><stop offset='0.4626' stop-color='#333334'/><stop offset='1' stop-color='#141414'/></linearGradient><linearGradient id='XMLID_12_' x1='0.25369' y1='-0.03754' x2='0.60402' y2='0.73992'><stop offset='0' stop-color='#83621A'/><stop offset='0.3503' stop-color='#D5A949'/><stop offset='0.6429' stop-color='#EEE29B'/><stop offset='0.8078' stop-color='#DBB75D'/><stop offset='1' stop-color='#9B7726'/></linearGradient><linearGradient id='XMLID_13_' x1='0.28538' y1='0.00637' x2='0.63299' y2='0.80614'><stop offset='0' stop-color='#BC8C2E'/><stop offset='0.1633' stop-color='#D5A949'/><stop offset='0.3435' stop-color='#EEE29B'/><stop offset='0.4643' stop-color='#DBB75D'/><stop offset='0.5289' stop-color='#CCA244'/><stop offset='0.6241' stop-color='#D3AC50'/><stop offset='0.6922' stop-color='#E9D88C'/><stop offset='0.8282' stop-color='#DDBC66'/><stop offset='1' stop-color='#C49535'/></linearGradient><linearGradient id='SVGID_396_' x1='0.29258' y1='0.03603' x2='0.66807' y2='0.8451'><stop offset='0' stop-color='#BC8C2E'/><stop offset='0.2585' stop-color='#D5A949'/><stop offset='0.5272' stop-color='#EEE29B'/><stop offset='0.7262' stop-color='#DBB75D'/><stop offset='1' stop-color='#C49535'/></linearGradient><linearGradient id='SVGID_397_' x1='0.38383' y1='-0.05614' x2='0.70788' y2='1.16556'><stop offset='0' stop-color='#BC8C2E'/><stop offset='0.2585' stop-color='#D5A949'/><stop offset='0.5272' stop-color='#EEE29B'/><stop offset='0.7262' stop-color='#DBB75D'/><stop offset='1' stop-color='#C49535'/></linearGradient><linearGradient id='SVGID_398_' x1='0.28665' y1='-0.04474' x2='0.71872' y2='0.98548'><stop offset='0' stop-color='#BC8C2E'/><stop offset='0.2585' stop-color='#D5A949'/><stop offset='0.5272' stop-color='#EEE29B'/><stop offset='0.7262' stop-color='#DBB75D'/><stop offset='1' stop-color='#C49535'/></linearGradient><radialGradient gradientTransform='translate(0,0.175) scale(1,0.65)' r='0.87965' cy='0.5' cx='0.5' spreadMethod='pad' id='svg_17'><stop offset='0' stop-opacity='0.99219' stop-color='#fcfcfc'/><stop offset='1' stop-opacity='0.98828' stop-color='#f9e686'/></radialGradient></defs><g><title>Layer 1</title><rect fill-opacity='0.9' id='svg_14' height='1010.76923' width='1426.15385' y='-14.95726' x='-11.62393' fill='url(#svg_17)'/><text id='XMLID_73_' transform='matrix(1 0 0 1 454.097 544.227)' class='st420 st421 st422' fill='#C39333' font-size='100.8924px' y='3.07692' x='-72.30769'>";
    const SVG2 =
      "</text><line id='XMLID_71_' class='st423' x1='328.50001' y1='563.4' x2='1071.50001' y2='563.4' fill='none' stroke-miterlimit='10' stroke='#000000'/><g id='XMLID_72_'/><g id='XMLID_1_'><text transform='matrix(1 0 0 1 516.5782 893.0001)' class='st417 st426 st419' fill='#2B292A' font-size='20px' id='svg_426'>DATE</text></g><line class='st427' x1='411.5' y1='863' x2='673' y2='863' fill='none' stroke='#2B292A' stroke-miterlimit='10' id='svg_427'/><g id='XMLID_5_'><text transform='matrix(1 0 0 1 885.5763 893.0002)' class='st417 st426 st419' fill='#2B292A' font-size='20px' id='svg_428'>SIGNATURE</text></g><line class='st427' x1='806.5' y1='863' x2='1068' y2='863' fill='none' stroke='#2B292A' stroke-miterlimit='10' id='svg_429'/><text id='svg_2' transform='matrix(1 0 0 1 454.097 544.227)' class='st420 st421 st422' fill='#C39333' font-size='64' y='130.76923' x='40' font-weight='bold'>";
    const SVG3 =
      "</text><g id='svg_4'/><text fill='#2B292A' x='637.32375' y='715.81197' id='svg_5' font-size='24' text-anchor='start' xml:space='preserve' font-style='italic'>organized by</text><text fill='#2B292A' x='515.19622' y='447.96056' id='svg_6' font-size='24' text-anchor='start' xml:space='preserve' font-style='italic'>This certificate is proudly presented to</text><text fill='#2B292A' x='611.78417' y='603.50427' id='svg_7' font-size='24' text-anchor='start' xml:space='preserve' font-style='italic'>for being a part of</text><text id='svg_8' transform='matrix(1 0 0 1 454.097 544.227)' class='st420 st421 st422' fill='#C39333' font-size='64' y='243.07692' x='38.46153' font-weight='bold'>";
    const SVG4 =
      "</text><text style='cursor: move;' font-weight='bold' id='svg_1' transform='matrix(0.908151 0 0 0.908151 468.934 510.219)' class='st420 st421 st422' fill='#C39333' font-size='100.8924px' y='-236.42127' x='186.48256'>CERTIFICATE</text><text font-weight='bold' id='svg_10' transform='matrix(0.908151 0 0 0.908151 468.934 510.219)' class='st420 st421 st422' fill='#C39333' font-size='48' y='-165.27079' x='308.45481'>OF APPRECIATION</text><g id='svg_13'><path class='st379' d='m1400,0l-601.8,0c140.5,31.2 403.9,104.8 601.8,249.2l0,-249.2z' fill='#2a4c59' id='svg_381'/><path class='st380' d='m798.2,0l-227.2,0c0,0 616,57 829,381l0,-131.8c-197.9,-144.4 -461.3,-218 -601.8,-249.2z' fill='#d1ae00' id='svg_382'/><path class='st381' d='m1026.2,0l-1026.2,0l0,194.2c82,3.2 558.3,11.7 1026.2,-194.2z' fill='#2a4c59' id='svg_383'/><path class='st382' d='m0,194.2l0,82.9c0,0 487,25.9 1089,-277.1l-62.8,0c-467.9,205.9 -944.2,197.4 -1026.2,194.2z' fill='#d1ae00' id='svg_384'/><path class='st383' d='m1400,884.3l0,-71.3c0,0 -279,112 -700,112s-700,-112 -700,-112l0,72.2c82.9,20.4 328.7,71.8 700,71.8c376.9,0 621.9,-53 700,-72.7z' fill='#d1ae00' id='svg_385'/><path class='st384' d='m700,957c-371.3,0 -617.1,-51.4 -700,-71.8l0,94.8l1400,0l0,-95.7c-78.1,19.7 -323.1,72.7 -700,72.7z' fill='#2a4c59' id='svg_386'/><rect x='119.9' y='-1.1' class='st385' width='151.9' height='221.6' fill='#d1ae00' id='svg_387'/><g id='svg_11'><g id='XMLID_105_'><path id='XMLID_118_' class='st386' d='m196,141.2c-59.6,0 -108.2,48.5 -108.2,108.2c0,59.6 48.5,108.2 108.2,108.2c59.6,0 108.2,-48.5 108.2,-108.2c0,-59.7 -48.5,-108.2 -108.2,-108.2z' fill='url(#XMLID_11_)'/><path id='XMLID_115_' class='st387' d='m336.4,245.6c-1.5,-5.1 -4.3,-9.8 -8.1,-13.8c-2.8,-3.1 -7.4,-8.7 -8.7,-15.3c-2,-9.8 0.8,-16.8 0.8,-16.8s4.8,-12.2 -2.6,-23.4c-7.5,-11.2 -19,-13.1 -19,-13.1s-11.8,-2.3 -18.7,-10.5c-6.9,-8.1 -7.5,-15.3 -7.5,-15.3s-2.2,-12.9 -17.2,-18.1c-10.5,-3.6 -18.3,-1.1 -22,0.8c-3.3,1.7 -7,2.7 -10.7,2.7c-2.4,0 -5.1,-0.2 -8,-0.9c-7.9,-2 -11.6,-6.5 -11.6,-6.5s-10.8,-10.8 -25.9,-8.1c-15.2,2.7 -19.9,14.6 -19.9,14.6s-2.6,7.2 -12.4,9.9c-9.8,2.7 -13.3,0.8 -13.3,0.8s-15.7,-3.6 -26.1,5.7c-10.4,9.3 -9.6,22.6 -9.6,22.6s-0.2,9.4 -6.5,16.4c-4.4,8.3 -13,11.6 -13,11.6s-12.7,3.9 -17.8,16.9c-5.1,13 3.8,26.4 3.8,26.4s3.1,2.6 3.9,12.7c0.8,10.1 -5,15.1 -5,15.1s-9.5,8.6 -6.7,23.8c2.8,15.2 16.7,21.4 16.7,21.4s5.6,1.9 10.2,8.6c1.7,2.5 2.9,5 3.7,7.1c1.2,3.5 1.6,7.2 1.2,10.9c-0.5,4.2 -0.1,12.3 6.9,20.8c10.1,12.3 22.9,9.8 22.9,9.8s6.8,-2.1 16.9,1.6c10.1,3.6 16.4,13.8 16.4,13.8s5.8,10.1 19,13.1c13.1,3.1 22.9,-5.8 22.9,-5.8s5.5,-5.1 15.4,-6.6c6.6,-1.1 13.5,1.2 17.4,2.8c5,2.1 10.4,3.1 15.8,2.7c3.2,-0.2 6.8,-0.9 10.3,-2.4c11.7,-4.8 14,-16.1 14,-16.1s1.8,-7.4 7.2,-12.7c5.5,-5.2 7.6,-5.5 20.6,-8.5c13.1,-3.2 18.1,-14.4 18.1,-14.4c1.1,-1.2 8.5,-9.5 7,-21.8c-1.6,-13.3 -2.2,-15.4 0.8,-22.3c3,-6.9 9.3,-11.1 9.3,-11.1s9.8,-6.1 10.2,-18.8c0.4,-3.7 -0.2,-7.3 -1.1,-10.3zm-140.4,111.9c-59.7,0 -108.2,-48.6 -108.2,-108.2c0,-59.7 48.5,-108.3 108.2,-108.3c59.7,0 108.2,48.6 108.2,108.2c0,59.8 -48.5,108.3 -108.2,108.3z' fill='url(#XMLID_12_)'/><g id='XMLID_111_'><path id='XMLID_112_' class='st388' d='m196,367.3c-65.1,0 -118.1,-53 -118.1,-118.1c0,-65.1 53,-118.1 118.1,-118.1s118.1,53 118.1,118.1c0,65.2 -53,118.1 -118.1,118.1zm0,-226.2c-59.7,0 -108.2,48.5 -108.2,108.2s48.5,108.2 108.2,108.2s108.2,-48.5 108.2,-108.2s-48.5,-108.2 -108.2,-108.2z' fill='url(#XMLID_13_)'/></g></g><g id='XMLID_99_'><g id='svg_400'><polygon class='st399' points='157.1,289.7 160.1,295.8 166.8,296.8 162,301.5 163.1,308.2 157.1,305 151.1,308.2 152.3,301.5      147.4,296.8 154.1,295.8    ' fill='url(#SVGID_396_)' id='svg_401'/></g></g><g id='XMLID_93_'><g id='svg_402'><polygon class='st400' points='234.9,289.7 237.9,295.8 244.6,296.8 239.8,301.5 240.9,308.2 234.9,305 228.9,308.2 230,301.5      225.2,296.8 231.9,295.8    ' fill='url(#SVGID_397_)' id='svg_403'/></g></g><g id='XMLID_87_'><g id='svg_404'><polygon class='st401' points='196,312.5 199,318.6 205.7,319.6 200.9,324.4 202,331 196,327.9 190,331 191.1,324.4 186.3,319.6      193,318.6    ' fill='url(#SVGID_398_)' id='svg_405'/></g></g><text fill='#C39333' x='103.0784' y='254.7393' id='svg_9' font-size='64' text-anchor='start' xml:space='preserve' stroke='null' transform='matrix(0.811418 0 0 0.811418 15.5056 38.3916)'>CertificΞ</text></g></g></g></svg>";
    const metadata = await client.store({
      name: myName,
      description: "My CertificETH's description!",
      image: new File(
        [SVG1 + myName + SVG2 + eventName + SVG3 + OrgName + SVG4],
        "certificate.svg",
        {
          type: "image/svg+xml",
        }
      ),
    });
    console.log("IPFS URL for the metadata:", metadata.url);
    // console.log("metadata.json contents:\n", metadata.data);
    // console.log("metadata.json with IPFS gateway URLs:\n", metadata.embed());
    return metadata.url;
  };

  const askContractToMintNft = async () => {
    try {
      const { ethereum } = window;
      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const connectedContract = new ethers.Contract(
          CONTRACT_ADDRESS,
          myToken.abi,
          signer
        );

        let uri = await storeAsset();
        uri = uri.substring(7);

        console.log("Going to pop wallet now to pay gas...");
        let nftTxn = await connectedContract.safeMint(AddressName, uri);

        console.log("Minting...please wait.");
        await nftTxn.wait();

        console.log(
          `Minted, see transaction: https://mumbai.polygonscan.com/tx/${nftTxn.hash}`
        );
      } else {
        console.log("Ethereum object doesn't exist!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const renderNotConnectedContainer = () => (
    <button
      onClick={connectWallet}
      className="cta-button connect-wallet-button"
    >
      Connect to Wallet
    </button>
  );

  useEffect(() => {
    checkIfWalletIsConnected();
  }, [useStore((state)=>state.account)]);

  return (
    <>    <div className="App">
    <TopNavbar2 />
      <div className="container">
        <div className="header-container">
          <p
            className="sub-text"
            style={{
              fontSize: "25px",
              fontStyle: "italic",
              fontFamily: 'Khula',
            }}
          >
            Host events/conferences and distribute participation certificates as
            NFTs
          </p>
          {currentAccount === "" ? (
            <h1>Please connect your MetaMask account</h1>
          ) : (
            <>
              <Box
                sx={{
                  border: 1,
                  borderColor: "grey.700",
                  borderWidth: "2px",
                  backgroundColor: "#F9F9F9",
                  margin: "50px auto",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  width: "55%",
                  justifyContent: "center",
                  padding: "30px",
                  alignContent: "center",
                  borderBlockColor: "grey",
                  borderRadius: "20px",
                }}
              >
                <TextField
                  id="outlined-basic"
                  label="Enter Organisation Name"
                  fullWidth
                  variant="outlined"
                  value={OrgName}
                  onChange={(e) => setOrgName(e.target.value)}
                  style={{ margin: "20px" }}
                />
                <TextField
                  id="outlined-basic"
                  label="Enter Participant Name"
                  variant="outlined"
                  fullWidth
                  value={myName}
                  onChange={(e) => setMyName(e.target.value)}
                  style={{ margin: "20px" }}
                />
                <TextField
                  id="outlined-basic"
                  label="Enter Recipient Address"
                  fullWidth
                  variant="outlined"
                  value={AddressName}
                  onChange={(e) => setAddressName(e.target.value)}
                  style={{ margin: "20px" }}
                />
                <Button
                  variant="contained"
                  onClick={askContractToMintNft}
                  className="cta-button connect-wallet-button"
                  size="large"
                  style={{ margin: "20px", width: "35%", backgroundColor: "dodgerblue", }}

                >
                  Mint NFT
                </Button>
              </Box>
            </>
          )}
        </div>
        <div className="footer-container">
          <p>
            Built by: &nbsp;
            <a
              className="footer-text"
              href={TWITTER_LINK1}
              target="_blank"
              rel="noreferrer"
            >
              {TWITTER_HANDLE1}
            </a>
            &nbsp; & &nbsp;
            <a
              className="footer-text"
              href={TWITTER_LINK2}
              target="_blank"
              rel="noreferrer"
            >
              {TWITTER_HANDLE2}
            </a>
          </p>
        </div>
      </div>
    </div>

    <Footer />
    </>

  );
};

export default App;
