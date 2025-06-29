import "../Resources.css";
import SEO from "../../components/SEO";

export default function TrainingMaterials() {
  return (
    <div className="page-container container resources-page">
      <SEO
        title="Training & Capacity Building Materials | GAiN NGO"
        description="Explore GAiN's certified modules on ABA therapy, cultural competency, and AI innovation for public services."
        keywords={[
          "Training materials",
          "Capacity building",
          "ABA therapy",
          "AI public services",
          "GAiN resources",
        ]}
        canonicalUrl="/resources/training-materials"
      />
      <h1 className="page-title">Training & Capacity Building Materials</h1>
      <div className="resource-detail-content">
        <p>
          Our Training & Capacity Building Materials include certified modules on Applied
          Behavior Analysis (ABA) therapy, cultural competency in healthcare, and
          AI-driven innovation for public services. GAiN equips professionals and
          community leaders with the knowledge and skills needed to deliver effective,
          inclusive, and innovative solutions in their fields.
        </p>
      </div>
    </div>
  );
}
