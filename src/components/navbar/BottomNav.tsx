import { useState } from "react";
import MenuOpen from "../../assets/Icons";
import { GainLogo } from "../../assets/svgLogos";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
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
            <NavLink
              className={(navData) => (navData.isActive ? "active" : "")}
              to="/programs"
            >
              Programs & Initiatives
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(navData) => (navData.isActive ? "active" : "")}
              to="/resources"
            >
              Resources
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(navData) => (navData.isActive ? "active" : "")}
              to="/events"
            >
              Events & News
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(navData) => (navData.isActive ? "active" : "")}
              to="/partnership"
            >
              Partnership
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(navData) => (navData.isActive ? "active" : "")}
              to="/funding"
            >
              Funding & Support
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(navData) => (navData.isActive ? "active" : "")}
              to="/about"
            >
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(navData) => (navData.isActive ? "active" : "")}
              to="/contact"
            >
              Contact Us
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
