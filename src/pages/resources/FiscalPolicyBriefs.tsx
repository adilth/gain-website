import "../Resources.css";
import SEO from "../../components/SEO";

export default function FiscalPolicyBriefs() {
  return (
    <div className="page-container container resources-page">
      <SEO
        title="Fiscal And Taxes Policy Briefs & Development Frameworks | GAiN NGO"
        description="Read GAiN's research-backed briefs and models for AI-driven tax reform, smart cities, and public health systems."
        keywords={[
          "Fiscal policy",
          "Tax reform",
          "AI frameworks",
          "Smart cities",
          "GAiN resources",
        ]}
        canonicalUrl="/resources/fiscal-policy-briefs"
      />
      <h1 className="page-title">
        Fiscal And Taxes Policy Briefs & Development Frameworks
      </h1>
      <div className="resource-detail-content">
        <p>
          GAiN's Fiscal And Taxes Policy Briefs & Development Frameworks offer
          research-backed insights and models for AI-driven tax reform, smart city
          development, and public health systems. Our work focuses on increasing
          transparency, combating fraud, and strengthening revenue systems to fund
          essential public services across Africa.
        </p>
      </div>
    </div>
  );
}
