import React from "react";
// Sections
import TopNavbar from "../components/Nav/TopNavbar";
import Projects from "../components/Sections/Projects";
import Footer from "../components/Sections/Footer";
import { MoralisProvider } from "react-moralis";

export default function Profile() {
  return (
    <>
      <TopNavbar />
      <MoralisProvider
        serverUrl="https://quw0jhrzdqbp.usemoralis.com:2053/server"
        appId="8Rkh6PMLB96y8lb5RtqT06FHbLU57Oxsynh6nikV"
      >
        <Projects />
      </MoralisProvider>
      <Footer />
    </>
  );
}
