import "./AboutUs.css";
import HeroImage from "/images/heroImage.webp";

export default function AboutUs() {
  return (
    <div className="about-us-page container">
      <h1 className="page-title">About Us</h1>
      <div className="about-grid">
        <div className="twoCol">
          <div className="about-section">
            <h4>Advisory Board</h4>
            <p>
              Our Advisory Board consists of experts in diplomacy, policy, education, and
              humanitarian aid, guiding the strategic direction of our initiatives.
              Transparency and governance are our priorities.
            </p>
          </div>

          <div className="about-section our-team">
            <h4>Our Leadership & Team</h4>
            <p>
              Our Team Consists Of Experienced Professionals And Passionate Leaders
              Committed To Promoting International Cooperation. Gain’s Team Brings
              Together A Rich History Of Expertise In Addressing Key Humanitarian
              Challenges. This Includes, But Is Not Limited To, Understanding The Cultural
              Dimensions Of Humanitarian Issues, Perceived Causes, Coping Mechanisms, And
              Help-Seeking Behaviours. Our Aim Is To Enhance Our Understanding Of
              Sociocultural Needs In Morocco And Beyond, Providing Impactful Global
              Solutions.
            </p>
            <p className="list">Our Areas Of Expertise Include:</p>
            <ul>
              <li>- Academic Interventions</li>
              <li>- Scientific Research And Vision</li>
              <li>- Assessment And Organizational Evaluation</li>
              <li>- Administrative And Management Consulting</li>
              <li>- Fiscal And Financial Management</li>
              <li>- Global NGO Strategies & Planning</li>
              <li>- Facilitating UN Emergency Responses</li>
            </ul>
          </div>
        </div>
        <div className="imageWrap">
          <img src={HeroImage} alt="" />
        </div>
        <div className="twoCol">
          <div className="about-section">
            <h4>Our Vision</h4>
            <p>
              A world where international humanitarian cooperation drives sustainable
              development, progress, and cultural exchange.
            </p>
          </div>
          <div className="about-section">
            <h4>Our Story</h4>
            <p>
              Founded in 2024, we aim to bridge the gap between humanitarian actions and
              the ethics of organizational systems. We empower communities through
              innovative programs and initiatives.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
