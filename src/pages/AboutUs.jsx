import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import "./AboutUs.css";

export default function AboutUs() {
  return (
    <>
      <h1 className="about-title">AboutUs</h1>
      <div className="about">
        <p className="about-info">
          <LocationOnIcon />
          <span className="info-text">20 Cửu Long, P15, Q.10, HCM</span>
        </p>
        <p className="about-info">
          <SupportAgentIcon />
          <span className="info-text">Hotline hỗ trợ : 0794715940</span>
        </p>
        <p className="about-info">
          <EmailIcon />
          <span className="info-text">Email: Sansa20.05.2024@gmail.com</span>
        </p>
        <p className="about-info">
          <FacebookIcon /> Facebook:
          <a
            href="https://www.facebook.com/EASportsFCOnlineVN"
            target="_blank"
            rel="noopener noreferrer"
            className="facebook-link"
          >
            Sansa.facebook
          </a>
        </p>
      </div>
      <img
        className="img-meo"
        src="https://i.pinimg.com/originals/7b/ee/5b/7bee5bde49a24272f0f65e2dfcfd043d.jpg"
        alt=""
      />
    </>
  );
}
