import firstGoal from "/images/first-goal.webp";
import secondGoal from "/images/second-goal.png";
import ThridGoal from "/images/thrid-goal.webp";
import forthGoal from "/images/forth-goal.webp";
import fifthGoal from "/images/fifth-goal.webp";
import sixthGoal from "/images/sixth-goal.webp";

import "./goals.css";
export default function Goals() {
  return (
    <section className="goals section" id="goals">
      <div className="container">
        <h3 className="goals-title">Long-Term Strategic Goals</h3>
        <p className="sub-title">
          Driving Inclusive Development Through Innovation, Evidence & Ethics
        </p>
      </div>
      <div className="goals-grid">
        <div className="goal-card">
          <img
            src={firstGoal}
            alt="Morocco As Africa's AI Innovation Hub"
            className="goal-image"
          />
          <div className="goal-overlay">
            <h4>1. Morocco As Africa's AI Innovation Hub</h4>
            <p>
              Position Morocco as a regional leader in applied AI for public health,
              education, and governance, serving as a model for scalable African
              development.
            </p>
          </div>
        </div>
        <div className="goal-card">
          <img
            src={secondGoal}
            alt="Scalable Autism & Mental Health Systems"
            className="goal-image"
          />
          <div className="goal-overlay">
            <h4>2. Scalable Autism & Mental Health Systems</h4>
            <p>
              Develop culturally adapted, AI-supported autism care and youth mental health
              services using Applied Behavior Analysis (ABA), clinical research, and
              digital tools.
            </p>
          </div>
        </div>
        <div className="goal-card">
          <img
            src={ThridGoal}
            alt="Green Smart Cities & Climate Tech"
            className="goal-image"
          />
          <div className="goal-overlay">
            <h4>3. Green Smart Cities & Climate Tech</h4>
            <p>
              Design AI-powered smart cities prioritizing sustainability, mobility, and
              public well-being. Implement carbon monitoring, clean energy integration,
              and smart waste systems.
            </p>
          </div>
        </div>
        <div className="goal-card">
          <img
            src={forthGoal}
            alt="Pan-African Innovation & Humanitarian Network"
            className="goal-image"
          />
          <div className="goal-overlay">
            <h4>4. Pan-African Innovation & Humanitarian Network</h4>
            <p>
              Build a collaborative ecosystem across African institutions, universities,
              NGOs, and innovators to co-develop scalable, ethical tech for social
              transformation.
            </p>
          </div>
        </div>
        <div className="goal-card">
          <img
            src={fifthGoal}
            alt="Ethical & Transparent Fiscal Governance"
            className="goal-image"
          />
          <div className="goal-overlay">
            <h4>5. Ethical & Transparent Fiscal Governance</h4>
            <p>
              Revolutionizing Public Finance through AI Innovation - AI-driven tax
              collection platforms for fraud detection and revenue growth.
            </p>
          </div>
        </div>
        <div className="goal-card">
          <img
            src={sixthGoal}
            alt="Global Policy & Science Diplomacy"
            className="goal-image"
          />
          <div className="goal-overlay">
            <h4>6. Global Policy & Science Diplomacy</h4>
            <p>
              Shape global conversations on digital governance, mental health,
              neurodiversity, and ethical AI through evidence-based advocacy and
              international collaboration.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
