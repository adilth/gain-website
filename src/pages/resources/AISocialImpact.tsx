import "../Resources.css";
import SEO from "../../components/SEO";

export default function AISocialImpact() {
  return (
    <div className="page-container container resources-page">
      <SEO
        title="AI For Social Impact Reports | GAiN NGO"
        description="Discover insights and white papers on AI's application in governance, education, mental health, and urban development."
        keywords={["AI social impact", "White papers", "Governance AI", "GAiN resources"]}
        canonicalUrl="/resources/ai-social-impact"
      />
      <h1 className="page-title">AI For Social Impact Reports</h1>
      <div className="resource-detail-content">
        <p>
          Our AI For Social Impact Reports provide in-depth analysis and white papers on
          how artificial intelligence is transforming governance, education, mental
          health, and urban development. GAiN's research highlights best practices, case
          studies, and policy recommendations for leveraging AI to drive positive social
          change.
        </p>
      </div>
    </div>
  );
}
