import { useState } from "react";
import MenuOpen from "../../assets/Icons";
import { GainLogo } from "../../assets/svgLogos";
import "./Navbar.css";
export default function BottomNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
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
        <ul className={`nav-links ${isMenuOpen ? "nav-active" : ""}`}>
          <li>
            <a href="#programs">Programs & Initiatives</a>
          </li>
          <li>
            <a href="#">Resources</a>
          </li>
          <li>
            <a href="#events">Events & News</a>
          </li>
          <li>
            <a href="#partnership">Partnership</a>
          </li>
          <li>
            <a href="#">Funding & Support</a>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#contact">Contact Us</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
