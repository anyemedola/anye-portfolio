import React from "react";
import "./about.css";
import AboutImg from "../../assets/any-medola.png";
import CV from "../../assets/CV-Any-Medola.pdf";

function About() {
  return (
    <section className="about section" id="about">
      <h2 className="section_title">About Me</h2>
      <span className="section_subtitle">A short summary introducing me</span>

      <div className="about_container container grid">
        <img src={AboutImg} alt="" className="about_img" />

        <div className="about_data">
          <p className="about_description">
            I chose a career in Information Technology (IT) due to the strong
            influence of my father and uncle, both of whom are professionals in
            this field. As I embarked on my journey to obtain an Associate's
            degree at the age of 16, I quickly fell in love with the world of
            IT.
          </p>

          <p className="about_description">
            My passion for continuous learning drives me to constantly expand my
            knowledge and skills, as my main goal is to grow and improve every
            day. I believe that staying up-to-date with the latest industry
            trends and technologies is crucial in delivering high-quality
            results.
          </p>

          <a download="" href={CV} className="button button-flex">
            Download CV&nbsp;<i class="uil uil-file"></i>
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
