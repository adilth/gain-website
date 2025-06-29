import "./Resources.css";
import ResearchImage from "/images/research-resources.webp";
import PolicyBriefsImage from "/images/policy-briefs-resources.webp";
import ToolkitsImage from "/images/toolkits-guides-resources.webp";
import PartnerImage from "/images/parner-resources.webp";
import SEO from "../components/SEO";
import { Link } from "react-router-dom";

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
          "Explore Our Knowledge Hub ",
        ]}
        canonicalUrl="/resources"
      />
      <main className="resources">
        <div className="page-container container">
          <h1 className="page-title">Explore Our Knowledge Hub </h1>
          <div className="header-content">
            <p>
              GAiN is committed to sharing accessible, science-backed resources that
              support innovation, inclusion, and sustainable development across Africa.
              Our resources are designed for educators, researchers, caregivers,
              policymakers, and community leaders.
            </p>
          </div>
          <div className="resources-grid">
            <Link to="/resources/autism-toolkit" className="resource-card">
              <img src={ToolkitsImage} alt="Policy Briefs" />
              <h2>Autism & Mental Health Toolkit</h2>
              <p>
                Guides, training materials, videos, journals, publications, and
                evidence-based practices for supporting neurodivergent youth and families.
              </p>
            </Link>

            <Link to="/resources/training-materials" className="resource-card">
              <img src={PartnerImage} alt="Toolkits & Guides" />
              <h2>Training & Capacity Building Materials</h2>
              <p>
                Certified modules on ABA therapy, cultural competency in healthcare, and
                AI innovation for public services.
              </p>
            </Link>

            <Link to="/resources/fiscal-policy-briefs" className="resource-card">
              <img src={ResearchImage} alt="Partner Resources" />
              <h2> Fiscal And Taxes Policy Briefs & Development Frameworks</h2>
              <p>
                Research-backed briefs and models for AI-driven tax reform, smart cities,
                and public health systems. GAiN is developing smart tax and fiscal systems
                using AI to increase transparency, combat fraud, and strengthen revenue
                systems to fund public services.
              </p>
            </Link>

            <Link to="/resources/ai-social-impact" className="resource-card">
              <img src={PolicyBriefsImage} alt="Research/Articles" />
              <h2> AI For Social Impact Reports</h2>
              <p>
                Insights and white papers on how AI is being applied in governance,
                education, mental health, and urban development.
              </p>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
