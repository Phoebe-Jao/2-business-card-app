import React from "react";
import { GrMail } from 'react-icons/gr';
import './styles/Header.css';

function Header() {
  return (
    <div className="header">
      <img src={require("../images/pic.jpg")} className="header--image" alt="Graduation photo of Phoebe Jao" />
      <h1 className="header--name">Phoebe Jao</h1>
      <h3 className="header--job">Web Developer</h3>
      <p className="header--contact">jaophoebe@gmail.com | 0917 811 4808</p>
      <button className="header--button" type="button"><GrMail></GrMail> Email</button>
    </div>
  );
}

export default Header;
