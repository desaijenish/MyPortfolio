import styled from "@emotion/styled";
import React from "react";
import MyImage from "../../assets/image.png";
import PhoneIcon from "../Icon/PhoneIcon";
import EmailIcon from "../Icon/EmailIcon";
import LocationIcon from "../Icon/LocationIcon";
import InstagrameICon from "../Icon/InstagramIcon";
import GithubIcon from "../Icon/GithubIcon";
import LinkedlnIcon from "../Icon/LinkedlnIcon";
import Button from "../Buttone";
import DownloadIcon from "../Icon/DownloadIcon";

const RootContainer = styled.div(() => ({
  padding: "0px 50px",
  display: "flex",
  width: 300,
}));

const MyPhoto = styled.div(() => ({
  width: "100%",
  display: "flex",
  justifyContent: "center",
}));
const MyDetails = styled.div({
  width: 300,
  background: "white",
  display: "flex",
  justifyContent: "center",
  marginTop: "-60px",
  borderRadius: 15,
  paddingTop: 70,
  flexDirection: "column",
  //   textAlign: "center",
});
const ContactDetail = styled.div({
  margin: 15,
  background: "#C7C7C7",
  borderRadius: 10,
  padding: 10,
  display: "flex",
  flexDirection: "column",
  gap: 15,
});
const Phone = styled.div({
  display: "flex",
  gap: 10,
});

const Icon = styled.div({
  width: 35,
  height: 35,
  borderRadius: 10,
  // background: "white",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});
const Value = styled.div({
  display: "flex",
  flexDirection: "column",
});

const SocialMediaIcon = styled.div({
  display: "flex",
  justifyContent: "center",
  gap: 30,
});
const MyInfo = () => {
  return (
    <RootContainer>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          width: 300,
        }}
      >
        <MyPhoto>
          <img
            src={MyImage}
            alt="my image"
            width={150}
            height={150}
            style={{ borderRadius: "50%", paddingLeft: 10, zIndex: 1 }}
          />
        </MyPhoto>
        <MyDetails>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: 20, fontWeight: 700 }}>Desai Jenish</div>
            <div
              style={{
                background: "#C7C7C7",
                fontWeight: 700,
                padding: 5,
                fontSize: 15,
              }}
            >
              Web Developer
            </div>
          </div>
          <ContactDetail>
            <Phone>
              <Icon>
                <PhoneIcon />
              </Icon>
              <Value>
                <div style={{ fontSize: 15, fontWeight: 800 }}>PHONE:</div>
                <div style={{ fontSize: 15, fontWeight: 600 }}>
                  +91 8141480109
                </div>
              </Value>
            </Phone>
            <Phone>
              <Icon>
                <EmailIcon />
              </Icon>
              <Value>
                <div style={{ fontSize: 15, fontWeight: 800 }}>EMAIL:</div>
                <div style={{ fontSize: 15, fontWeight: 600 }}>
                  desaijenish4050@gmail.com
                </div>
              </Value>
            </Phone>
            <Phone>
              <Icon>
                <LocationIcon />
              </Icon>
              <Value>
                <div style={{ fontSize: 15, fontWeight: 800 }}>LOCATION:</div>
                <div style={{ fontSize: 15, fontWeight: 600 }}>
                  gujarat,India
                </div>
              </Value>
            </Phone>
          </ContactDetail>
          <SocialMediaIcon>
            <InstagrameICon size={40} />
            <GithubIcon size={40} />
            <LinkedlnIcon size={40} />
          </SocialMediaIcon>
          <div style={{ justifyContent: "center", display: "flex" }}>
            <Button
              name="Download CV"
              onClick={() => console.log("")}
              icon={<DownloadIcon size={25}/>}
            />
          </div>
        </MyDetails>
      </div>
    </RootContainer>
  );
};

export default MyInfo;
