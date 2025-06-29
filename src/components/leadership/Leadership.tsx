import "./Leadership.css";
import LeadershipImage from "/images/leadershipImage.webp";

export default function Leadership() {
  return (
    <section className="leadership section" id="partnership">
      <div className="container leadership-container">
        <div className="leadership-content">
          <h2 className="leadership-title">Welcome to GAIN's NGO</h2>

          <p className="leadership-text">
            Global AI Network for Development (GAiN) is a Moroccan-based nonprofit leading
            the charge for a sustainable, inclusive, and tech-empowered Africa. We connect
            AI innovation, humanitarian action, and evidence-based practices to deliver
            impactful solutions across mental health, autism care, public governance, and
            sustainable development.
          </p>
        </div>
        <div className="leadership-image">
          <img src={LeadershipImage} alt="Leadership Team" />
        </div>
      </div>
    </section>
  );
}
