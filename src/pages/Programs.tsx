import "./Programs.css";
import ConferencesImage from "/images/international-conferences-programs.webp";
import CollaborationImage from "/images/featured-smart-green.webp";
import CulturalExchangeImage from "/images/cultural-exchanges-programs.webp";
import HumanitarianImage from "/images/collaboration-programs.webp";
// import EducationalImage from "/images/educational-partnerships.webp";
// import commitmentImage from "/images/commitment-programs.webp";
import SEO from "../components/SEO";
import { Link } from "react-router-dom";

export default function Programs() {
  return (
    <>
      <SEO
        title="Programs & Initiatives | GAiN NGO"
        description="Explore our global initiatives including international conferences, cultural exchanges, humanitarian projects, and educational partnerships. Make a difference with GAiN NGO."
        keywords={[
          "international conferences",
          "smart Green Cities Project",
          "humanitarian projects",
          "educational partnerships",
          "NGO programs",
          "Morocco initiatives",
          "global development",
        ]}
        canonicalUrl="/programs"
      />
      <div className="page-container programs-page container">
        <h1 className="page-title">Featured Initiatives</h1>
        <div className="programs-grid">
          <Link to="/programs/africa-morocco-ai" className="program-card">
            <img src={HumanitarianImage} alt="Africa-Morocco AI, Fiscal and taxes " />
            <h2>Africa-Morocco AI, Fiscal and taxes </h2>
            <p>
              AI Strategic, Integration, Advancing Morocco Lead in Africa, Fiscal and
              Taxes digital strategies, and solutions.
            </p>
          </Link>

          <Link to="/programs/smart-green-cities" className="program-card">
            <img src={CollaborationImage} alt="Policy Research & Advocacy" />
            <h2>Smart Green Cities Project</h2>
            <p>
              Building climate-resilient cities powered by clean Energyand AI
              optimization.
            </p>
          </Link>

          <Link to="/programs/ai4education" className="program-card">
            <img src={CulturalExchangeImage} alt="Smart Green Cities Project" />
            <h2>Ai4education Platform</h2>
            <p>AI-powered, inclusive learning tools for students and educators.</p>
          </Link>

          <Link to="/programs/autism-summit" className="program-card">
            <img src={ConferencesImage} alt="Ai4education Platform" />
            <h2>Africa-Morocco Autism Summit</h2>
            <p>
              A continental gathering for advocacy, training, and innovation in autism
              care.
            </p>
          </Link>
        </div>
      </div>
    </>
  );
}
