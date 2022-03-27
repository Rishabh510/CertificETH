import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
// import { Link } from "react-scroll";
// Components
import Sidebar from "../Nav/Sidebar";

import Backdrop from "../Elements/Backdrop";
// Assets
import LogoIcon from "../../assets/svg/icon.svg";
import BurgerIcon from "../../assets/svg/BurgerIcon";
//import SVGComponent1 from "../../assets/img/svgviewer-react-output";

export default function TopNavbar() {
  const [y, setY] = useState(window.scrollY);
  const [sidebarOpen, toggleSidebar] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => setY(window.scrollY));
    return () => {
      window.removeEventListener("scroll", () => setY(window.scrollY));
    };
  }, [y]);

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
            <li className="semiBold font15 pointer">
              <Link
                activeClass="active"
                style={{ padding: "10px 15px", marginRight: "60px" }}
                to="/"
                spy={true}
                smooth={true}
                offset={-80}
              >
                Home
              </Link>
            </li>

            <li className="semiBold font15 pointer flexCenter">
              <a
                href="/events"
                className="radius8 lightBg"
                style={{ padding: "10px 15px" }}
              >
                Get Started
              </a>
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
