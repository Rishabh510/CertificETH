import React from "react";
// Sections
import TopNavbar from "../components/Nav/TopNavbar";
import Projects from "../components/Sections/Projects";
import Footer from "../components/Sections/Footer";
import { MoralisProvider } from "react-moralis";

const MORALIS_SERVER_URL = import.meta.env.VITE_MORALIS_SERVER_URL;
const MORALIS_APP_ID = import.meta.env.VITE_MORALIS_APP_ID;

export default function Profile() {
  return (
    <>
      <TopNavbar />
      <MoralisProvider serverUrl={MORALIS_SERVER_URL} appId={MORALIS_APP_ID}>
        <Projects />
      </MoralisProvider>
      <Footer />
      
    </>
  );
}
