import {
  FaceBookIconRed,
  InstagramIconRed,
  LinkedinIconRed,
  YoutubeIconRed,
} from "../../assets/Icons";
import "./Hero.css";
import HeroImage from "/images/heroImage.webp";
export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Make An Impact,
            <br />
            Volunteer Today.
          </h1>
          <p className="hero-subtitle">
            Join Our Passionate Community
            <br />
            Of Volunteers And Contribute Your Time
          </p>
          <button className="btn get-involved-btn">Get Involved</button>
        </div>
        <div className="hero-images">
          <div className="image-grid">
            <img src={HeroImage} alt="hero image for gain group" />
          </div>
        </div>
        <div className="social-links">
          <a href="#" className="social-icon facebook">
            <FaceBookIconRed />
          </a>
          <a href="#" className="social-icon instagram">
            <InstagramIconRed />
          </a>
          <a href="#" className="social-icon linkedin">
            <LinkedinIconRed />
          </a>
          <a href="#" className="social-icon youtube">
            <YoutubeIconRed />
          </a>
        </div>
      </div>
    </section>
  );
}
