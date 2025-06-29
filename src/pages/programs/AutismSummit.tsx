import "../Programs.css";
import SEO from "../../components/SEO";

export default function AutismSummit() {
  return (
    <div className="page-container programs-page container">
      <SEO
        title="Africa-Morocco Autism Summit | GAiN NGO"
        description="Join the Africa-Morocco Autism Summit: a continental gathering for advocacy, training, and innovation in autism care."
        keywords={["Autism Summit Africa", "Neurodiversity advocacy", "GAiN programs"]}
        canonicalUrl="/programs/autism-summit"
      />
      <h1 className="page-title">Africa-Morocco Autism Summit</h1>
      <div className="program-detail-content">
        <p>
          The Africa-Morocco Autism Summit brings together advocates, practitioners,
          families, and innovators from across the continent to advance autism care and
          inclusion. Through workshops, training sessions, and collaborative projects, the
          summit fosters knowledge exchange, policy development, and the adoption of
          evidence-based practices. GAiN is committed to empowering neurodivergent
          individuals and building supportive communities for all.
        </p>
      </div>
    </div>
  );
}
