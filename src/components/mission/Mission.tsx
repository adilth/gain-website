import { LogoMoroccoGreen, LogoMoroccoRed } from "../../assets/svgLogos";
import "./Mission.css";
export default function Mission() {
  return (
    <section className="mission section" id="programs">
      <div className="container">
        <div className="mission-content">
          <h2 className="mission-title">Mission Statement</h2>
          <div className="mission-text">
            <p>
              The Global Academy Intelligence Gain NGO Formulation Was Developed As Part
              Of Our Strategic Approach To Address Sustainable Humanitarian And
              Psychosocial Challenges In Morocco, With A Broaderglobal Structure In Mind.
            </p>
            <p>
              Our Formulation Provides A Framework For Our Expert Team To Systematically
              Assess Cultural Factors, Organizational Systems, And Social Dynamics That
              Are Relevant To Human Concerns.
            </p>
            <p>
              By Addressing The Needs, Perspectives, And Experiences Of Individuals, We
              Employ Five Primary Approaches To Develop Solutions That Are Socially
              Impactful And Globally Structured:
            </p>
          </div>
          <div className="mission-strategies">
            <div className="strategy">•SOCIAL ADVOCACY STRATEGIES</div>
            <div className="strategy">•MENTAL HEALTH CLINICAL INTERVENTIONS</div>
            <div className="strategy">•ACADEMIC ENGAGEMENT AND RESEARCH</div>
            <div className="strategy">•INNOVATION AND DEVELOPMENT</div>
            <div className="strategy">•POSITIVE EMPOWERMENT INITIATIVES</div>
          </div>
        </div>
        <div className="mission-logo red-log">
          {/* <img src="/images/gain-emblem.svg" alt="Gain Emblem" /> */}
          <div className="log-red">
            <LogoMoroccoRed />
          </div>
        </div>
        <div className="mission-logo green-log">
          <div className="log-green">
            <LogoMoroccoGreen />
          </div>
        </div>
      </div>
    </section>
  );
}
