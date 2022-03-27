// Sections
import React, { useEffect, useState } from "react";
import { NFTStorage, File } from "nft.storage";
import "../styles/App.css";
import Button from "@mui/material/Button";
import { AppBar, Box, TextField } from "@mui/material";

export default function mainApp() {
  return (
    <div className="App">
      <AppBar
        style={{
          borderRadius: "0px",
          backgroundColor: "#39A2DB",
          height: "auto",
          marginBottom: "20px",
          padding: "1px",
        }}
      >
        <p
          style={{
            fontSize: "40px",
            fontStyle: "italic",
            fontFamily: "cursive",
            margin: "15px",
          }}
        >
          CertificΞTH
        </p>
      </AppBar>
      <div className="container">
        <div className="header-container">
          <p
            className="sub-text"
            style={{
              fontSize: "25px",
              fontStyle: "italic",
              fontFamily: "cursive",
            }}
          >
            Host events/conferences and distribute participation certificates as
            NFTs
          </p>
          {currentAccount === "" ? (
            renderNotConnectedContainer()
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
                  borderBlockColor: "black",
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
                  style={{ margin: "20px", width: "35%" }}
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
  );
}
