import React from "react";
import "./skills.css";
import Languages from "./Languages";
import Frameworks from "./Frameworks";

function Skills() {
  return (
    <section className="skills section" id="skills">
      <h2 className="section_title">Skills</h2>
      <span className="section_subtitle">
        Here's some of my most used languages and frameworks daily
      </span>

      <div className="skills_container container grid">
        <Languages />
        <Frameworks />
      </div>
    </section>
  );
}

export default Skills;
