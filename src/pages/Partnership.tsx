import "./partnership.css";
import LeadershipImage from "/images/leadershipImage.png";
import SEO from "../components/SEO";

export default function Partnership() {
  return (
    <>
      <SEO
        title="Partnership | GAiN NGO"
        description="Partner with GAiN NGO to create meaningful impact. We collaborate with governments, organizations, academic institutions, and corporations to drive sustainable humanitarian solutions."
        keywords={[
          "NGO partnerships",
          "humanitarian collaboration",
          "corporate partnerships",
          "academic collaboration",
          "international cooperation",
          "sustainable development",
          "Morocco partnerships",
        ]}
        canonicalUrl="/partnership"
      />
      <div className="page-container partnership-page">
        <h1 className="page-title">Partnership</h1>
        <div className="leadership" id="partnership">
          <div className="container leadership-container">
            <div className="leadership-content">
              <p className="leadership-text">
                <p>
                  We Collaborate With Governments, International Organizations (UN, EU,
                  AU), And Intergovernmental Bodies To Advance Our Mission Of Global
                  Cooperation.
                </p>
                <p>
                  We Partner With Corporations That Share Our Commitment To Social
                  Responsibility, Fostering Sustainable Initiatives And Impactful
                  Partnerships.
                </p>
                <p>
                  We Work With Academic Institutions And Think Thanks To Advance Research,
                  Share Expertise, And Drive Innovation In International Relations And
                  Development.
                </p>
                <p>
                  {" "}
                  Interested In Partnering With Us? Find Out How You Can Contribute By
                  Reviewing Our Partnership Opportunities And Reaching Out To Our Team.
                </p>
              </p>
            </div>
            <div className="leadership-image">
              <img src={LeadershipImage} alt="Leadership Team" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
