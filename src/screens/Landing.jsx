import React from "react";
// Sections
import TopNavbar from "../components2/Nav/TopNavbar";
import Header from "../components2/Sections/Header";
import Services from "../components2/Sections/Services";
import Footer from "../components2/Sections/Footer";

export default function Landing() {
  return (
    <>
      <TopNavbar />
      <Header />
      
      //maybe not needed at all
      <Services />
      //maybe not needed at all

      <Footer />
    </>
  );
}
