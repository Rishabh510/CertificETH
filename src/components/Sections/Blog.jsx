import React from "react";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";
// Components
import BlogBox from "../Elements/BlogBox";
import FullButton from "../Buttons/FullButton";
import "./tempsi.css";
import Footer from "./Footer"

export default function Blog() {
  const navigate = useNavigate();

  return (
    <Wrapper id="blog">
      <div className="whiteBg">
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Events</h1>
          </HeaderInfo>
          <div className="row flexCenter">
            <div style={{ margin: "10px 0", width: "100%" }}>
              <FullButton
                title="View my Certificates"
                action={() => navigate("/profile")}
              />
            </div>
          </div>
          <div className="row textCenter BlogParent">
          <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4 ">
            <BlogBox 
              title="The ETHernals Hackathon"
              text="Supercharge yourself for ETHernals: the first ETHIndia Online hackathon of 2022! ⚡️"
              tag="Hackathon"
              author="Devfolio, 2 days ago"
              action={() =>
                navigate("/mint", {
                  state: {
                    title: "The ETHernals Hackathon",
                    text: "Devfolio",
                  },
                })
              }
            />
          </div>
          
          <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
            <BlogBox
              title="Metaverse Summit 2022"
              text="The first-ever Metaverse Summit in India for school, undergrad and postgrad students! 🤩"
              tag="Conference"
              author="Hobin, 2 days ago"
              action={() => navigate("/mint")}
            />
          </div>
        </div>
        <div className="row textCenter BlogParent">
          <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4 ">
            <BlogBox 
              title="The ETHernals Hackathon"
              text="Supercharge yourself for ETHernals: the first ETHIndia Online hackathon of 2022! ⚡️"
              tag="Hackathon"
              author="Devfolio, 2 days ago"
              action={() =>
                navigate("/mint", {
                  state: {
                    title: "The ETHernals Hackathon",
                    text: "Devfolio",
                  },
                })
              }
            />
          </div>
          
          <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
            <BlogBox
              title="Metaverse Summit 2022"
              text="The first-ever Metaverse Summit in India for school, undergrad and postgrad students! 🤩"
              tag="Conference"
              author="Hobin, 2 days ago"
              action={() => navigate("/mint")}
            />
          </div>
        </div>
        </div>
      </div>
      <Footer  />
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
  padding-top: 20px;
`;
const HeaderInfo = styled.div`
  margin-bottom: 30px;
  @media (max-width: 860px) {
    text-align: center;
  }
`;
