import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiOutlineGlobal } from "react-icons/ai";
import "./styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <AiOutlineGlobal className="footer--icon"></AiOutlineGlobal>
      <AiFillGithub className="footer--icon"></AiFillGithub>
      <AiFillLinkedin className="footer--icon"></AiFillLinkedin>
    </div>
  );
}

export default Footer;
