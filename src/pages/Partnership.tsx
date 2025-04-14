import "./partnership.css";
export default function Partnership() {
  return (
    <div className="page-container">
      <h1 className="page-title">Partnership</h1>
      <div className="leadership" id="partnership">
        <div className="container leadership-container">
          <div className="leadership-content">
            <p className="leadership-text">
              <p>
                We Collaborate With Governments, International Organizations (UN, EU, AU),
                And Intergovernmental Bodies To Advance Our Mission Of Global Cooperation.
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
            <img src="/images/leadershipImage.png" alt="Leadership Team" />
          </div>
        </div>
      </div>
    </div>
  );
}
