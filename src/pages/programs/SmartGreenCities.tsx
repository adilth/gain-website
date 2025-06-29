import "../Programs.css";
import SEO from "../../components/SEO";

export default function SmartGreenCities() {
  return (
    <div className="page-container programs-page container">
      <SEO
        title="Smart Green Cities Project | GAiN NGO"
        description="Discover GAiN's Smart Green Cities Project: building climate-resilient, AI-powered cities for a sustainable future in Africa."
        keywords={[
          "Smart Green Cities",
          "Clean energy",
          "AI optimization",
          "Climate resilience",
          "GAiN programs",
        ]}
        canonicalUrl="/programs/smart-green-cities"
      />
      <h1 className="page-title">Smart Green Cities Project</h1>
      <div className="program-detail-content">
        <p>
          The Smart Green Cities Project is GAiN's flagship initiative to build
          climate-resilient urban environments powered by clean energy and artificial
          intelligence. We collaborate with local governments, innovators, and communities
          to design and implement smart infrastructure, optimize resource use, and promote
          green technologies. Our goal is to create sustainable, inclusive cities that
          serve as models for environmental stewardship and digital innovation across
          Africa.
        </p>
      </div>
    </div>
  );
}
