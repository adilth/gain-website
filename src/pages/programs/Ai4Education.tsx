import "../Programs.css";
import SEO from "../../components/SEO";

export default function Ai4Education() {
  return (
    <div className="page-container programs-page container">
      <SEO
        title="Ai4education Platform | GAiN NGO"
        description="Explore GAiN's Ai4education Platform: AI-powered, inclusive learning tools for students and educators across Africa."
        keywords={[
          "AI education",
          "Inclusive learning",
          "EdTech Africa",
          "GAiN programs",
        ]}
        canonicalUrl="/programs/ai4education"
      />
      <h1 className="page-title">Ai4education Platform</h1>
      <div className="program-detail-content">
        <p>
          The Ai4education Platform is designed to democratize access to quality education
          through artificial intelligence. GAiN develops and deploys AI-powered tools that
          support personalized learning, inclusive classrooms, and teacher training. Our
          platform bridges educational gaps, empowers students with diverse needs, and
          equips educators with innovative resources to foster lifelong learning and
          digital literacy.
        </p>
      </div>
    </div>
  );
}
