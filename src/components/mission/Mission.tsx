import { LogoMoroccoGreen, LogoMoroccoRed } from "../../assets/svgLogos";
import "./Mission.css";
export default function Mission() {
  return (
    <section className="mission section">
      <div className="container">
        <div className="mission-content">
          <h2 className="mission-title">Mission Statement</h2>
          <div className="mission-text">
            <p>
              THE GLOBAL ACADEMY INTELLIGENCE GAIN NGO FORMULATION WAS DEVELOPED AS PART
              OF OUR STRATEGIC APPROACH TO ADDRESS SUSTAINABLE HUMANITARIAN AND
              PSYCHOSOCIAL CHALLENGES IN MOROCCO, WITH A BROADER GLOBAL STRUCTURE IN MIND.
            </p>
            <p>
              OUR FORMULATION PROVIDES A FRAMEWORK FOR OUR EXPERT TEAM TO SYSTEMATICALLY
              ASSESS CULTURAL FACTORS, ORGANIZATIONAL SYSTEMS, AND SOCIAL DYNAMICS THAT
              ARE RELEVANT TO HUMAN CONCERNS.
            </p>
            <p>
              BY ADDRESSING THE NEEDS, PERSPECTIVES, AND EXPERIENCES OF INDIVIDUALS, WE
              EMPLOY FIVE PRIMARY APPROACHES TO DEVELOP SOLUTIONS THAT ARE SOCIALLY
              IMPACTFUL AND GLOBALLY STRUCTURED:
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
