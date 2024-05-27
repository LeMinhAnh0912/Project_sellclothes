import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import "./Footer.css"; // Assuming you have a CSS file for styling
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-p">
        <h2>Make money with us</h2>
        <p>Sell product on Sansa</p>
        <p>Sell on Sansa Business</p>
        <p>Self-Publish with Us</p>
      </div>
      <div className="footer-p">
        <h2>Connects</h2>
        <p>
          <Link className="icon-social-network">
            <FacebookIcon /> Facebook
          </Link>
        </p>
        <p>
          <Link className="icon-social-network">
            <InstagramIcon /> Instagram
          </Link>
        </p>
        <p>
          <Link className="icon-social-network">
            <LinkedInIcon /> LinkedIn
          </Link>
        </p>
        <p>
          <Link className="icon-social-network">
            <TwitterIcon /> Twitter
          </Link>
        </p>
      </div>

      <div className="footer-p">
        <h2>Terms and Conditions</h2>
      </div>
    </footer>
  );
};

export default Footer;
