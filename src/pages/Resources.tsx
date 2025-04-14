import "./Resources.css";

export default function Resources() {
  return (
    <div className="page-container container">
      <h1 className="page-title">Resources</h1>
      <div className="resources-grid">
        <div className="resource-card">
          <img src="/images/research-resources.webp" alt="Policy Briefs" />
          <h2>Research/Articles</h2>
          <p>
            Our comprehensive research and policy reports on key international issues,
            offering insights and recommendations for global change.
          </p>
        </div>

        <div className="resource-card">
          <img src="/images/policy-briefs-resources.webp" alt="Toolkits & Guides" />
          <h2>Policy Briefs</h2>
          <p>
            Our policy briefs summarize critical findings and suggest actionable solutions
            to global challenges, aimed at policymakers and institutions.
          </p>
        </div>

        <div className="resource-card">
          <img src="/images/toolkits-guides-resources.webp" alt="Partner Resources" />
          <h2>Toolkits & Guides</h2>
          <p>
            Explore our collection of toolkits and guides, designed to help individuals
            and organizations implement effective solutions for international development.
          </p>
        </div>

        <div className="resource-card">
          <img src="/images/parner-resources.webp" alt="Research/Articles" />
          <h2>Partner Resources</h2>
          <p>
            Our partners can access exclusive resources, reports, and collaborative tools
            to enhance their work and support shared goals.
          </p>
        </div>
      </div>
    </div>
  );
}
