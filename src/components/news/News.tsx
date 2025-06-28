import "./News.css";
import ConferenceHallImage from "/images/ai-innovation.webp";
import ClassroomImage from "/images/ai-smart-fiscal.webp";
import CollaborationImage from "/images/mental-health.webp";

export default function News() {
  return (
    <section className="programs section" id="events">
      <div className="container">
        <h3 className="mission-title">What We Do</h3>

        <div className="program-item">
          <p className="sub-title">
            GAiN works at the intersection of technology, governance, and human
            development. Our key areas of impact :
          </p>
        </div>
        <div className="programs-grid">
          {/* Featured Programs Column */}
          <div className="program-column">
            <img
              src={ConferenceHallImage}
              alt="International conference"
              className="program-image"
            />
            <h3 className="column-title">AI Innovation, Smart Cities& Sustainability</h3>

            <div className="program-item">
              <h4>• AI-powered waste, energy, and transport systems </h4>
            </div>

            <div className="program-item">
              <h4>• Data-driven carbon policy and green infrastructure design </h4>
            </div>

            <div className="program-item">
              <h4>• Urban planning solutions that put people and the planet first</h4>
            </div>
          </div>

          {/* Call-To-Action Column */}
          <div className="program-column">
            <img src={ClassroomImage} alt="Classroom setting" className="program-image" />
            <h3 className="column-title">AI, Smart Fiscal, Tax Reform& Education</h3>

            <div className="program-item">
              <h4>
                • AI-driven taxation systems to reduce fraud and increase public trust:
              </h4>
            </div>

            <div className="program-item">
              <h4>• Smart policy tools for legal and government reform</h4>
            </div>

            <div className="program-item">
              <h4>• Personalized education platforms powered by machine learning</h4>
            </div>
            <div className="program-item">
              <h4>
                • Academic research partnerships across Moroccan and African universities
              </h4>
            </div>
          </div>
          <div className="program-column">
            <img
              src={CollaborationImage}
              alt="Classroom setting"
              className="program-image"
            />
            <h3 className="column-title">Mental Health & AutismInnovation </h3>

            <div className="program-item">
              <h4>• ABA-based diagnostics and training</h4>
            </div>

            <div className="program-item">
              <h4>• AI tools for early autism detection and intervention</h4>
            </div>

            <div className="program-item">
              <h4>• Parent and caregiver support programs</h4>
            </div>
            <div className="program-item">
              <h4>• Youth mental health empowerment </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
