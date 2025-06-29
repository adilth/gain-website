import "./partnership.css";
import LeadershipImage from "/images/leadershipImage-right.webp";
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
        <h1 className="page-title">Partnership && Collaboration</h1>
        <div className="leadership" id="partnership">
          <div className="container leadership-container">
            <div className="leadership-content">
              <p className="leadership-text">GAIN Thrives Through Partnerships With:</p>
              <ul>
                <li>Universities and research centers</li>
                <li>Government ministries and policy leaders</li>
                <li>NGOs and humanitarian agencies</li>
                <li>Private sector partners and tech innovators</li>
              </ul>
              <p className="last-text">
                Together, We Co-Create Scalable, Evidence-Based Solutions That Deliver
                Measurable Impact.
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
