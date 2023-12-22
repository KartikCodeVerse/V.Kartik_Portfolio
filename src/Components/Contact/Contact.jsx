import React, { useRef } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import Contact_Card from "./Card/Contact_Card";
import linkedin from "../../assets/linkedin.png";
import email from "../../assets/email.png";
import github from "../../assets/github.png";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_daqs3a9",
        "template_uecjgr3",
        form.current,
        "zfvCRttX2GkhTQpPR"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset;
          alert("Email Sent!");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const Social_Media = [
    {
      img: linkedin,
      name: "Linkedin",
      url: "https://www.linkedin.com/in/v-kartik-65256623a",
    },
    {
      img: email,
      name: "Email",
      url: "mailto:kartikraja708@gmail.com",
    },
    {
      img: github,
      name: "Git hub",
      url: "https://github.com/KartikCodeVerse",
    },
  ];

  return (
    <section id="contact">
      <div className="contact_title">
        <h1 className="contact_title_text">Contact Me</h1>
      </div>
      <div className="contact_form">
        <div className="contact_row">
          {Social_Media.map((social, i) => {
            return (
              <Contact_Card
              key={i}
                name={social.name}
                img={social.img}
                url={social.url}
              />
            );
          })}
        </div>
        <div className="form_box">
          <form className="form" ref={form} onSubmit={sendEmail}>
            <h3>Send Message</h3>
            <div className="input_box">
              <input type="text" placeholder="Name" name="user_name" />
            </div>
            <div className="input_box">
              <input type="email" placeholder="Email" name="user_email" />
            </div>
            <div className="input_box">
              <textarea
                name="message"
                placeholder="Message"
                id=""
                cols="80"
                rows="8"
              ></textarea>
            </div>
            <button className="contact_btn" type="submit" value="Send">
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
