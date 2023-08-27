import React from 'react';
import './oldsite.css'
import Home from "../../assets/home.png";
import About from "../../assets/about-me.png";
import Work from "../../assets/work.png";
import Contact from "../../assets/contact.png";

function Oldsite() {
  return (
    <section className="oldsite section" id="old-site">
      <h2 className="section_title">My old portfolio</h2>
      <span className="section_subtitle">
        Here's a view of how this used to look like
      </span>

        <div className="oldsite_content">
            <img src={Home} alt="" />
            <img src={About} alt="" />
            <img src={Work} alt="" />
            <img src={Contact} alt="" />
        </div>
    </section>
  )
}

export default Oldsite