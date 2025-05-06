import "./Funding.css";
import WaysToDonateImage from "/images/ways--to-donate-funding.webp";
import GrantsImage from "/images/grants-funding.webp";
import SponsorshipImage from "/images/sponsorship-packages-funding.webp";
import CrowdfundingImage from "/images/crowdfunding.webp";
import ImpactImage from "/images/impact.png";
import SEO from "../components/SEO";

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
          <h1>Funding & Support</h1>
        </div>
        <div className="container">
          <div className="funding-grid">
            <div className="funding-card">
              <img src={WaysToDonateImage} alt="Ways to Donate" />
              <h2>Ways to Donate</h2>
              <p>
                Your generosity can help fund life-changing projects. You can donate
                one-time or set up a recurring donation through our secure platform.
              </p>
            </div>
            <div className="funding-card">
              <img src={GrantsImage} alt="Grants" />
              <h2>Grants</h2>
              <p>
                We actively seek funding opportunities from foundations, governments, and
                institutions to support our initiatives. For grant proposals and
                applications, contact us.
              </p>
            </div>
            <div className="funding-card">
              <img src={SponsorshipImage} alt="Sponsorship Packages" />
              <h2>Sponsorship Packages</h2>
              <p>
                Partner with us as a sponsor for our events and programs. We offer various
                packages that provide significant exposure and recognition.
              </p>
            </div>
            <div className="funding-card">
              <img src={CrowdfundingImage} alt="Crowdfunding Campaigns" />
              <h2>Crowdfunding Campaigns</h2>
              <p>
                Support our latest campaigns on platforms like GoFundMe and Kickstarter.
                Your contributions help us directly impact communities in need.
              </p>
            </div>
            <div className="funding-card">
              <img src={ImpactImage} alt="Impact" />
              <h2>Impact</h2>
              <p>
                Our annual reports outline our achievements, challenges, and financial
                transparency. Download the latest impact report to see how your support is
                making a difference.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
