import "../Resources.css";
import SEO from "../../components/SEO";

export default function AutismToolkit() {
  return (
    <div className="page-container container resources-page">
      <SEO
        title="Autism & Mental Health Toolkit | GAiN NGO"
        description="Access GAiN's Autism & Mental Health Toolkit: guides, training materials, and evidence-based practices for supporting neurodivergent youth and families."
        keywords={[
          "Autism toolkit",
          "Mental health resources",
          "Neurodiversity support",
          "GAiN resources",
        ]}
        canonicalUrl="/resources/autism-toolkit"
      />
      <h1 className="page-title">Autism & Mental Health Toolkit</h1>
      <div className="resource-detail-content">
        <p>
          GAiN's Autism & Mental Health Toolkit provides a comprehensive collection of
          guides, training materials, videos, journals, and publications. Designed for
          educators, caregivers, and practitioners, this toolkit offers evidence-based
          practices to support neurodivergent youth and their families. Our resources
          empower communities to foster inclusion, understanding, and effective care for
          individuals on the autism spectrum.
        </p>
      </div>
    </div>
  );
}
