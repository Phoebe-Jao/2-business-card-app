import React from "react";
import About from "./About.js";
import Footer from "./Footer.js";
import Header from "./Header.js";
import "./styles/Card.css";

function Card() {
  return (
    <div className="card">
      <Header />
      <About />
      <Footer />
    </div>
  );
}

export default Card;
