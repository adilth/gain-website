import { GainLogoFooter } from "../../assets/svgLogos";
import {
  FaceBookIcon,
  InstagramIcon,
  LinkedinIcon,
  ScrollToTopIcon,
  YoutubeIcon,
} from "../../assets/Icons";
import "./Footer.css";
export default function Footer() {
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  const handleKeyPress = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      scrollToTop();
    }
  };
  return (
    <footer className="footer">
      <div className="top-footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-logo">
              {/* <img src={logo} alt="Gain Logo" /> */}
              <GainLogoFooter />
              <div className="social-icons">
                <a href="https://facebook.com" aria-label="Facebook">
                  <FaceBookIcon />
                </a>
                <a href="https://instagram.com" aria-label="Instagram">
                  <InstagramIcon />
                </a>
                <a href="https://linkedin.com" aria-label="LinkedIn">
                  <LinkedinIcon />
                </a>
                <a href="https://youtube.com" aria-label="YouTube">
                  <YoutubeIcon />
                </a>
              </div>
            </div>

            <div className="footer-links">
              <div className="footer-column menu">
                <h3>Menu</h3>
                <ul>
                  <li>
                    <a href="#programs">Programs & Initiatives</a>
                  </li>
                  <li>
                    <a href="#resources">Resources</a>
                  </li>
                  <li>
                    <a href="#events">Events & News</a>
                  </li>
                  <li>
                    <a href="#partnership">Partnership</a>
                  </li>
                  <li>
                    <a href="#funding">Funding & Support</a>
                  </li>
                </ul>
              </div>

              <div className="footer-column contact">
                <h3>Contact</h3>
                <ul>
                  <li>
                    <a href="mailto:contact@gain.com">contact@gain.com</a>
                  </li>
                  <li>
                    <a href="tel:+12334667789">+1 233 466-7789</a>
                  </li>
                  <li>
                    <p>75 3rd Ave, New York, NY 10003, USA</p>
                  </li>
                </ul>
              </div>

              <div className="footer-column info">
                <h3>Infos</h3>
                <ul>
                  <li>
                    <a href="#about">About us</a>
                  </li>
                  <li>
                    <a href="#faq">FAQ</a>
                  </li>
                  <li>
                    <a href="#newsletter">Newsletter</a>
                  </li>
                </ul>
                <div
                  className="donate-btn"
                  onClick={scrollToTop}
                  onKeyDown={handleKeyPress}
                  tabIndex={0}
                  role="button"
                  aria-label="Scroll to top"
                >
                  <span>
                    <ScrollToTopIcon />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom-footer">
        <div className="container">
          <div className="footer-bottom">
            <p>Gain© Copyright 2025</p>
            <div className="footer-legal">
              <a href="#terms">Terms & Conditions</a>
              <a href="#privacy">Privacy Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
