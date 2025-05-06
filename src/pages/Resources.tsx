import "./Resources.css";
import ResearchImage from "/images/research-resources.webp";
import PolicyBriefsImage from "/images/policy-briefs-resources.webp";
import ToolkitsImage from "/images/toolkits-guides-resources.webp";
import PartnerImage from "/images/parner-resources.webp";
import SEO from "../components/SEO";

export default function Resources() {
  return (
    <>
      <SEO
        title="Resources | GAiN NGO"
        description="Access our comprehensive collection of research papers, policy briefs, toolkits, and partner resources to drive sustainable global development and humanitarian aid."
        keywords={[
          "NGO resources",
          "research papers",
          "policy briefs",
          "humanitarian toolkits",
          "partner resources",
          "global development",
          "sustainable solutions",
        ]}
        canonicalUrl="/resources"
      />
      <div className="page-container container">
        <h1 className="page-title">Resources</h1>
        <div className="resources-grid">
          <div className="resource-card">
            <img src={ResearchImage} alt="Policy Briefs" />
            <h2>Research/Articles</h2>
            <p>
              Our comprehensive research and policy reports on key international issues,
              offering insights and recommendations for global change.
            </p>
          </div>

          <div className="resource-card">
            <img src={PolicyBriefsImage} alt="Toolkits & Guides" />
            <h2>Policy Briefs</h2>
            <p>
              Our policy briefs summarize critical findings and suggest actionable
              solutions to global challenges, aimed at policymakers and institutions.
            </p>
          </div>

          <div className="resource-card">
            <img src={ToolkitsImage} alt="Partner Resources" />
            <h2>Toolkits & Guides</h2>
            <p>
              Explore our collection of toolkits and guides, designed to help individuals
              and organizations implement effective solutions for international
              development.
            </p>
          </div>

          <div className="resource-card">
            <img src={PartnerImage} alt="Research/Articles" />
            <h2>Partner Resources</h2>
            <p>
              Our partners can access exclusive resources, reports, and collaborative
              tools to enhance their work and support shared goals.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
