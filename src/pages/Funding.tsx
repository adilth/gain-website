import "./Funding.css";

import SEO from "../components/SEO";
import { CollaborateIcon, HandShakeIcon, UsersIcon } from "../assets/Icons";
import { ContactPage } from "../components/contact/ContactPage";

export default function Funding() {
  return (
    <>
      <SEO
        title="Funding & Support | GAiN NGO"
        description="Support GAiN NGO's humanitarian initiatives through donations, grants, sponsorships, or crowdfunding campaigns. Your contribution helps create lasting positive change globally."
        keywords={[
          "NGO donations",
          "humanitarian funding",
          "grant opportunities",
          "sponsorship packages",
          "crowdfunding campaigns",
          "support NGO",
          "make an impact",
        ]}
        canonicalUrl="/funding"
      />
      <div className="funding-page">
        <div className="funding-header">
          <h1>Together, We Scale Impact</h1>
          <div className="header-content">
            <p>
              GAIN thrives through strategic partnerships that enable innovation,
              knowledge exchange, and long-term development across Africa.
            </p>
          </div>
        </div>
        <div className="container">
          <div className="funding-main">
            <div className="collaboration-section">
              <div className="header-flex">
                <CollaborateIcon />
                <h2>We actively collaborate with:</h2>
              </div>
              <div className="collaboration-grid">
                <div className="collab-item">
                  <h3>Government Bodies</h3>
                  <p>For Policy Alignment And Systems Integration</p>
                </div>
                <div className="collab-item">
                  <h3>Universities And Research Institutions</h3>
                  <p>For Cutting-Edge AI And Health Research</p>
                </div>
                <div className="collab-item">
                  <h3>International Ngos And Development Agencies</h3>
                  <p>To Scale Humanitarian Programs</p>
                </div>
                <div className="collab-item">
                  <h3>Private Sector Partners And Tech Innovators</h3>
                  <p>Who Believe In Ethical, Sustainable Solutions</p>
                </div>
              </div>
            </div>

            <div className="support-section">
              <div className="header-flex">
                <UsersIcon />
                <h2>We welcome support from:</h2>
              </div>
              <ul className="support-grid">
                <li className="support-item">
                  <h3>Foundations And Philanthropic Institutions</h3>
                </li>
                <li className="support-item">
                  <h3>Government And Multilateral Grants</h3>
                </li>
                <li className="support-item">
                  <h3>Corporate CSR Programs</h3>
                </li>
                <li className="support-item">
                  <h3>Angel Investors And Venture Philanthropy</h3>
                </li>
              </ul>
            </div>

            <div className="impact-section">
              <div className="header-flex">
                <HandShakeIcon />
                <h2>Your support allows us to:</h2>
              </div>
              <ul className="impact-grid">
                <li className="impact-item">
                  <h3>Enrich Awareness Around Our Mission Goals</h3>
                </li>
                <li className="impact-item">
                  <h3>Scale Autism And Mental Health Interventions</h3>
                </li>
                <li className="impact-item">
                  <h3>Apply The Latest Fiscal, Taxes, And Financial Strategies</h3>
                </li>
                <li className="impact-item">
                  <h3>Build Smart, Sustainable Cities Across Africa</h3>
                </li>
              </ul>
            </div>

            <div className="cta-section">
              <h2>Interested In Partnering Or Funding Our Initiatives?</h2>
              <p>Let's co-create a future of equity, innovation, and inclusion.</p>
            </div>
          </div>
        </div>
      </div>
      <h2 className="page-title">Contact Us</h2>
      <ContactPage />
    </>
  );
}
