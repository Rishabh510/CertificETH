const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("MyToken", function () {
  it("Should mint the NFT to the recipient", async function () {
    const MyToken = await ethers.getContractFactory("MyToken");
    const myToken = await MyToken.deploy();
    await myToken.deployed();

    const recipient = "0x71be63f3384f5fb98995898a86b02fb2426c5788";
    const metadataURI = "cid/test.png";

    let balance = await myToken.balanceOf(recipient);
    expect(balance).to.equal(0);

    const newlyMintedToken = await myToken.safeMint(recipient, metadataURI);

    await newlyMintedToken.wait();

    balance = await myToken.balanceOf(recipient);
    expect(balance).to.equal(1);

    expect(await myToken.isContentOwned(metadataURI)).to.equal(true);
  });
});
