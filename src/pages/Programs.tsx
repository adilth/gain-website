import "./Programs.css";

export default function Programs() {
  return (
    <div className="page-container programs-page container">
      <h1 className="page-title">Programs & Initiatives</h1>
      <div className="programs-grid">
        <div className="program-card">
          <img
            src="/images/international-conferences-programs.webp"
            alt="International Conferences & Summits"
          />
          <h2>International Conferences & Summits</h2>
          <p>
            We organize global events that address key issues, such as climate change,
            special needs, human rights, and international trade, fostering dialogue
            between leaders, experts, and change-makers.
          </p>
        </div>

        <div className="program-card">
          <img src="/images/collaboration.webp" alt="Policy Research & Advocacy" />
          <h2>Policy Research & Advocacy</h2>
          <p>
            We conduct in-depth research and advocate for policies that encourage
            sustainable development, global peace, and improved international relations.
          </p>
        </div>

        <div className="program-card">
          <img
            src="/images/cultural-exchanges-programs.webp"
            alt="Cultural Exchange Programs"
          />
          <h2>Cultural Exchange Programs</h2>
          <p>
            Our programs promote mutual scientific understanding through immersive
            experiences for students, professionals, and cultural groups to exchange
            knowledge and practices.
          </p>
        </div>

        <div className="program-card">
          <img
            src="/images/humanitarian-programs.webp"
            alt="Humanitarian & Development Projects"
          />
          <h2>Humanitarian & Development Projects</h2>
          <p>
            We lead projects focused on providing disaster relief, healthcare, education,
            and poverty alleviation, improving the lives of marginalized communities
            worldwide.
          </p>
        </div>

        <div className="program-card">
          <img
            src="/images/educational-partnerships.webp"
            alt="Educational Partnerships"
          />
          <h2>Educational Partnerships</h2>
          <p>
            We partner with universities and educational institutions to create
            opportunities for academic exchange, research collaboration, and
            skill-building.
          </p>
        </div>

        <div className="program-card">
          <img
            src="/images/commitment-programs.webp"
            alt="Commitment to Diversity, Equity, and Inclusion"
          />
          <h2>Commitment to Diversity, Equity, and Inclusion</h2>
          <p>
            At Gain, we are dedicated to creating meaningful social impact by tackling the
            many forms of bias that exist within societies. We uphold human rights at the
            heart of our actions.
          </p>
        </div>
      </div>
      {/* <Mission /> */}
    </div>
  );
}
