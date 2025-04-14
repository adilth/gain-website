import { useState } from "react";
import MenuOpen from "../../assets/Icons";
import { GainLogo } from "../../assets/svgLogos";
import "./Navbar.css";
import { Link } from "react-router-dom";
export default function BottomNav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <div className="logo">
          <a href="/">
            {/* <img src="../../assets/gain-logo.svg" alt="Gain Logo" /> */}
            <GainLogo />
          </a>
        </div>
        <button className="mobile-menu-btn" onClick={toggleMenu}>
          <MenuOpen />
        </button>
        <ul className={`nav-links ${isOpen ? "active" : ""}`}>
          <li>
            <Link to="/programs">Programs & Initiatives</Link>
          </li>
          <li>
            <Link to="/resources">Resources</Link>
          </li>
          <li>
            <Link to="/events">Events & News</Link>
          </li>
          <li>
            <Link to="/partnership">Partnership</Link>
          </li>
          <li>
            <a href="/funding">Funding & Support</a>
          </li>
          <li>
            <a href="/about">About Us</a>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
