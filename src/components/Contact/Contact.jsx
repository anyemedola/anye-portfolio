import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_0don7gs",
        "template_loqj5hf",
        form.current,
        "2nt6IJYm0gTD7sppM"
      )
      e.target.reset()
  };
  return (
    <section className="contact section" id="contact">
      <h2 className="section_title">Get in touch</h2>
      <span className="section_subtitle">Contact Me</span>

      <div className="contact_container container grid">
        <div className="contact_content">
          <h3 className="contact_title">Write me a message</h3>

          <div className="contact_info">
            <div className="contact_card">
              <i className="bx bx-mail-send contact__card-icon"></i>

              <h3 className="contact_card-title">Email</h3>
              <span className="contact_card-data">anynhamedola@gmail.com</span>

              <a
                href="malito:anynhamedola@gmail.com"
                target="_blank"
                className="contact_button"
                rel="noreferrer"
              >
                Write me.{" "}
                <i className="bx bx-right-arrow-alt contact_button-icon"></i>
              </a>
            </div>

            <div className="contact_card">
              <i className="bx bxl-whatsapp contact__card-icon"></i>

              <h3 className="contact_card-title">Whatsapp</h3>
              <span className="contact_card-data">+39 351 586 9527</span>

              <a
                href="https://api.whatsapp.com/send?phone=+393515869527&text=Hi! I saw your portfolio."
                target="_blank"
                className="contact_button"
                rel="noreferrer"
              >
                Send a message.{" "}
                <i className="bx bx-right-arrow-alt contact_button-icon"></i>
              </a>
            </div>

            <div className="contact_card">
              <i className="bx bxl-instagram contact__card-icon"></i>

              <h3 className="contact_card-title">Instagram</h3>
              <span className="contact_card-data">devanyelis</span>

              <a
                href="https://www.instagram.com/devanyelis/"
                className="contact_button"
                target="_blank"
                rel="noreferrer"
              >
                Dm me.{" "}
                <i className="bx bx-right-arrow-alt contact_button-icon"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="contact_content">
          <h3 className="contact_title">Do you want to work with me?</h3>

          <form ref={form} onSubmit={sendEmail} className="contact_form">
            <div className="contact_form-div">
              <label className="contact_form-tag">Name</label>
              <input
                type="text"
                name="name"
                className="contact_form-input"
                placeholder="Your name"
              />
            </div>

            <div className="contact_form-div">
              <label className="contact_form-tag">Email</label>
              <input
                type="email"
                name="email"
                className="contact_form-input"
                placeholder="Your email"
              />
            </div>

            <div className="contact_form-div contact_form-area">
              <label className="contact_form-tag">Message</label>
              <textarea
                name="message"
                cols="30"
                rows="10"
                className="contact_form-input"
                placeholder="Write your message"
              ></textarea>
            </div>

            <button href="#contact" className="button button-flex">
              <i class="uil uil-message contact_button-icon"></i>&nbsp;Work with
              me!
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
