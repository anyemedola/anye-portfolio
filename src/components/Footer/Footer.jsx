import React from "react";
import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer_container container">
        <h1 className="footer_title">Anye.</h1>

        <ul className="footer_list">
          <li>
            <a href="#about" className="footer_link">
              About
            </a>
          </li>

          <li>
            <a href="#skills" className="footer_link">
              Skills
            </a>
          </li>

          <li>
            <a href="#old-site" className="footer_link">
              Old portfolio
            </a>
          </li>
        </ul>

        <div className="footer_social">
          <a
            href="https://www.instagram.com/devanyelis/"
            className="footer_social-link"
            target="_blank"
            rel="noreferrer"
          >
            <i class="bx bxl-instagram"></i>
          </a>

          <a
            href="https://www.linkedin.com/in/dev-anyemedola/"
            className="footer_social-link"
            target="_blank"
            rel="noreferrer"
          >
            <i class="bx bxl-linkedin"></i>
          </a>

          <a
            href="https://www.facebook.com/anYemedola/"
            className="footer_social-link"
            target="_blank"
            rel="noreferrer"
          >
            <i class="bx bxl-facebook"></i>
          </a>
        </div>

        <span className="footer_copy">
          &#169; 2023 Anye. Template from{" "}
          <a
            href="https://www.youtube.com/watch?v=3aCoZudPEKE&list=PLrKudo5h_b8DNVrsMdvR0G-ckA9o2m_13&index=7"
            target="_blank"
            rel="noopener noreferrer"
          >
            Cryptical Coder
          </a>
          , all rights reserved.
        </span>
      </div>
    </footer>
  );
}

export default Footer;
