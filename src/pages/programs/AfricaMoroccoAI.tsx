import "../Programs.css";
import SEO from "../../components/SEO";
import HumanitarianImage from "/images/collaboration-programs.webp";

export default function AfricaMoroccoAI() {
  return (
    <div className="page-container programs-page container">
      <SEO
        title="Africa-Morocco AI, Fiscal and Taxes | GAiN NGO"
        description="Learn about GAiN's Africa-Morocco AI, Fiscal and Taxes initiative: advancing digital strategies, AI integration, and fiscal innovation for Africa's future."
        keywords={[
          "AI Africa Morocco",
          "Fiscal innovation",
          "Digital strategies",
          "GAiN programs",
        ]}
        canonicalUrl="/programs/africa-morocco-ai"
      />
      <h1 className="page-title">Africa-Morocco AI, Fiscal and Taxes</h1>
      <div className="img-wrapper">
        <img src={HumanitarianImage} alt="Africa-Morocco AI, Fiscal and taxes " />
      </div>
      <div className="program-detail-content">
        <p>
          The Africa-Morocco AI, Fiscal and Taxes initiative is dedicated to advancing
          Morocco's leadership in Africa through strategic AI integration and innovative
          fiscal solutions. Our program focuses on digital transformation in public
          finance, leveraging artificial intelligence to enhance transparency, efficiency,
          and revenue systems. By fostering collaboration between policymakers,
          technologists, and civil society, we aim to build robust digital tax systems,
          combat fraud, and empower sustainable development across the continent.
        </p>
      </div>
    </div>
  );
}
