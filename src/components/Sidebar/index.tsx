import styled from "@emotion/styled";
import React from "react";
import "./index.css";
import AboutIcon from "../Icon/AboutIcon";
import { useNavigate } from "react-router-dom";
import ResumeIcon from "../Icon/ResumeIcon";
import WorkIcon from "../Icon/WorkIcon";
import ContactIcon from "../Icon/ContactIcon";

const RootContainer = styled.div({
  width: 100,
  background: "white",
  borderRadius: 10,
});

const NavContainer = styled.div({
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  padding: 10,
  gap: 10,
});

const NavBox = styled.div({
  borderRadius: "10px",
  background: "#e0e0e0",
  width: 80,
  height: 80,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const SideBar = () => {
  const navigate = useNavigate();
  return (
    <RootContainer>
      <NavContainer>
        <div className="btn-1" onClick={() => navigate("/")}>
          <a>
            <span
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                gap: 10,
              }}
            >
              <AboutIcon size={20} color="black" />
              <p style={{ fontSize: 10 }}>About</p>
            </span>
          </a>
        </div>
        <div className="btn-1" onClick={() => navigate("/resume")}>
          <a>
            <span
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                gap: 10,
              }}
            >
              <ResumeIcon size={20} color="black" />
              <p style={{ fontSize: 8 }}>resume</p>
            </span>
          </a>
        </div>
        <div className="btn-1" onClick={() => navigate("/work")}>
          <a>
            <span
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                gap: 10,
              }}
            >
              <WorkIcon size={20} color="black" />
              <p style={{ fontSize: 11 }}>work</p>
            </span>
          </a>
        </div>
        <div className="btn-1" onClick={() => navigate("/contact")}>
          <a>
            <span
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                gap: 10,
              }}
            >
              <ContactIcon size={20} color="black" />
              <p style={{ fontSize: 7 }}>contact</p>
            </span>
          </a>
        </div>
      </NavContainer>
    </RootContainer>
  );
};

export default SideBar;
