import "./Programs.css";
import ConferencesImage from "/images/international-conferences-programs.webp";
import CollaborationImage from "/images/collaboration.webp";
import CulturalExchangeImage from "/images/cultural-exchanges-programs.webp";
import HumanitarianImage from "/images/humanitarian-programs.webp";
import EducationalImage from "/images/educational-partnerships.webp";
import commitmentImage from "/images/commitment-programs.webp";
import SEO from "../components/SEO";

export default function Programs() {
  return (
    <>
      <SEO
        title="Programs & Initiatives | GAiN NGO"
        description="Explore our global initiatives including international conferences, cultural exchanges, humanitarian projects, and educational partnerships. Make a difference with GAiN NGO."
        keywords={[
          "international conferences",
          "cultural exchange programs",
          "humanitarian projects",
          "educational partnerships",
          "NGO programs",
          "Morocco initiatives",
          "global development",
        ]}
        canonicalUrl="/programs"
      />
      <div className="page-container programs-page container">
        <h1 className="page-title">Programs & Initiatives</h1>
        <div className="programs-grid">
          <div className="program-card">
            <img src={ConferencesImage} alt="International Conferences & Summits" />
            <h2>International Conferences & Summits</h2>
            <p>
              We organize global events that address key issues, such as climate change,
              special needs, human rights, and international trade, fostering dialogue
              between leaders, experts, and change-makers.
            </p>
          </div>

          <div className="program-card">
            <img src={CollaborationImage} alt="Policy Research & Advocacy" />
            <h2>Policy Research & Advocacy</h2>
            <p>
              We conduct in-depth research and advocate for policies that encourage
              sustainable development, global peace, and improved international relations.
            </p>
          </div>

          <div className="program-card">
            <img src={CulturalExchangeImage} alt="Cultural Exchange Programs" />
            <h2>Cultural Exchange Programs</h2>
            <p>
              Our programs promote mutual scientific understanding through immersive
              experiences for students, professionals, and cultural groups to exchange
              knowledge and practices.
            </p>
          </div>

          <div className="program-card">
            <img src={HumanitarianImage} alt="Humanitarian & Development Projects" />
            <h2>Humanitarian & Development Projects</h2>
            <p>
              We lead projects focused on providing disaster relief, healthcare,
              education, and poverty alleviation, improving the lives of marginalized
              communities worldwide.
            </p>
          </div>

          <div className="program-card">
            <img src={EducationalImage} alt="Educational Partnerships" />
            <h2>Educational Partnerships</h2>
            <p>
              We partner with universities and educational institutions to create
              opportunities for academic exchange, research collaboration, and
              skill-building.
            </p>
          </div>

          <div className="program-card">
            <img
              src={commitmentImage}
              alt="Commitment to Diversity, Equity, and Inclusion"
            />
            <h2>Commitment to Diversity, Equity, and Inclusion</h2>
            <p>
              At Gain, we are dedicated to creating meaningful social impact by tackling
              the many forms of bias that exist within societies. We uphold human rights
              at the heart of our actions.
            </p>
          </div>
        </div>
        {/* <Mission /> */}
      </div>
    </>
  );
}
