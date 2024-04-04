import React, { useEffect, useState } from "react";
import Typed from "typed.js";
import { Link } from "react-scroll";
import "./NavBar.css";
import contactImg from "../../assets/contact.png";
import menuImg from "../../assets/menu.png";
import cross from "../../assets/cross.png";

const NavBar = () => {
  const [menu_btn, setMenu_btn] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);

  const hide_menu = () => {
    setMenu_btn(!menu_btn);
  };
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["artik..."],
      typeSpeed: 150,
      startDelay: 2000,
      loop: true,
      backSpeed: 200,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      id="nav_bar"
      className={scrollPosition > 0 ? "lightblue" : "transparent"}
    >
      <a className="logo" href="">
        V.K<span ref={el}></span>
      </a>
      <div className="nav_menu">
        <Link
          to="intro"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="menu_item"
        >
          Home
        </Link>
        <Link
          to="about"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="menu_item"
        >
          About
        </Link>
        <Link
          to="skills"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="menu_item"
        >
          Skill
        </Link>
        <Link
          to="education"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="menu_item"
        >
          Education
        </Link>
        <Link
          to="experience"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="menu_item"
        >
          Experience
        </Link>
        <Link
          to="project"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="menu_item"
        >
          Projects
        </Link>
        <a
          className="menu_item"
          href="https://drive.google.com/file/d/1FrTInrixbM4c12CWd79bO3CuPy--kdw9/view?usp=drive_link"
          target="_blank"
        >
          Resume
        </a>
      </div>
      <button
        className="menu_btn"
        onClick={() => {
          document
            .getElementById("contact")
            .scrollIntoView({ behavior: "smooth" });
        }}
      >
        <img className="menu_img" src={contactImg} alt="" />
        Contact Me
      </button>
      <div className={menu_btn ? "burger" : "hide"} onClick={hide_menu}>
        <img src={menuImg} alt="" />
      </div>
      <div className={menu_btn ? "burger_menu" : "burger2_menu"}>
        <img onClick={hide_menu} className="cross" src={cross} alt="" />

        <div className="burger_items">
          <Link
            to="intro"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="burger_item"
          >
            Home
          </Link>
          <Link
            to="about"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="burger_item"
          >
            About
          </Link>
          <Link
            to="skills"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="burger_item"
          >
            Skill
          </Link>
          <Link
            to="education"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="burger_item"
          >
            Education
          </Link>
          <Link
            to="experience"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="burger_item"
          >
            Experience
          </Link>
          <Link
            to="project"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="burger_item"
          >
            Projects
          </Link>
          <Link
            to="contact"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="burger_item"
          >
            Contact
          </Link>
          <a
            className="burger_item"
            href="https://drive.google.com/file/d/1wJCdYV1zsRK4D6dyj10ts8PDFodzA0-1/view?usp=drive_link"
            target="_blank"
          >
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
