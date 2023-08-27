import React from "react";
import "./qualification.css";

function Qualification() {
  return (
    <section className="qualification section" id="qualification">
      <h2 className="section_title">My employment history</h2>
      <span className="section_subtitle">
        Here's little bit of my qualification in the IT Industry
      </span>

      <div className="qualification_container container">
        <div className="qualification_sections">
          <div className="qualification_content">
            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">
                  Senior Frontend Developer
                </h3>
                <span className="qualification_subtitle">Capgemini</span>
                <div className="qualification_calendar">
                  <i className="util-calendar-alt"></i> 2023 - Present
                </div>
              </div>

              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
            </div>

            <div className="qualification_data">
              <div></div>

              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>

              <div>
                <h3 className="qualification_title">Frontend Developer</h3>
                <span className="qualification_subtitle">Ambisig</span>
                <div className="qualification_calendar">
                  <i className="util-calendar-alt"></i> 2022 - 2023
                </div>
              </div>
            </div>

            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">Frontend Developer</h3>
                <span className="qualification_subtitle">S2 Pets</span>
                <div className="qualification_calendar">
                  <i className="util-calendar-alt"></i> 2022 - 2022
                </div>
              </div>

              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
            </div>

            <div className="qualification_data">
              <div></div>

              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
              <div>
                <h3 className="qualification_title">PHP Web Developer</h3>
                <span className="qualification_subtitle">Agência Zum</span>
                <div className="qualification_calendar">
                  <i className="util-calendar-alt"></i> 2021 - 2022
                </div>
              </div>
            </div>

            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">PHP Web Developer</h3>
                <span className="qualification_subtitle">
                  Atitude Comunicação
                </span>
                <div className="qualification_calendar">
                  <i className="util-calendar-alt"></i> 2020 - 2021
                </div>
              </div>

              <div>
                <span className="qualification_rounder"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Qualification;
