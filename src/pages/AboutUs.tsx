import { Helmet } from "react-helmet-async";
import SEO from "../components/SEO";
import "./AboutUs.css";
import HeroImage from "/images/about-us.webp";
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "NGO",
  name: "GAiN NGO - Global Academy Intelligence",
  alternateName: "Global Academy Intelligence NGO",
  url: "https://gainorg.com",
  logo: "https://gainorg.com/logo.png",
  foundingDate: "2024",
  founder: {
    "@type": "Person",
    name: "Mr. Chilal",
  },
  description:
    "GAiN NGO transforms lives by empowering communities, strengthening tax, fiscal, and financing systems, and providing clinical support to autistic and special needs populations in Morocco and globally.",
  sameAs: [
    "https://facebook.com/gainorg",
    "https://twitter.com/gainorg",
    "https://linkedin.com/company/gainorg",
    "https://instagram.com/gainorg",
  ],
  address: {
    "@type": "PostalAddress",
    addressCountry: "Morocco",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+212-XXX-XXXX",
    contactType: "customer service",
    email: "contact@gainorg.com",
  },
};
export default function AboutUs() {
  const orgSchemaJSON = JSON.stringify(organizationSchema);
  return (
    <>
      <SEO
        title="About Us"
        description="Learn about GAiN NGO's mission to transform lives by empowering communities and providing sustainable solutions in Morocco and globally."
        keywords={[
          "NGO",
          "Morocco",
          "humanitarian aid",
          "sustainable development",
          "autism support",
        ]}
        canonicalUrl="/about"
      />
      <Helmet>
        <script type="application/ld+json">{orgSchemaJSON}</script>
      </Helmet>
      <div className="about-us-page container">
        <h1 className="page-title">About Us</h1>
        <div className="about-grid">
          <div className="twoCol">
            <div className="about-section">
              <h4>Our Vision</h4>
              <p>
                We envision Morocco as a global hub for humanitarian innovation, bridging
                Africa and the world through sustainable development, AI-driven
                transformation, smart fiscal systems, and inclusive social humanitarian
                services.
              </p>
            </div>
            <div className="about-section">
              <h4>Our Story</h4>
              <p>
                Founded in 2024, we aim to bridge the gap between humanitarian actions and
                the ethics of organizational and systems in Morocco’s culture, enhance
                global collaboration, and empower communities through innovative programs
                and initiatives.
              </p>
            </div>
            <div className="about-section">
              <h4>Why Morocco ?</h4>
              <p>
                Morocco is uniquely positioned to lead the African continent in digital
                transformation, green energy, and international cooperation. <br />
                GAiN operates from Morocco to scale programs across Africa and partner
                with global institutions invested in equitable development.
              </p>
            </div>
            <div className="about-section">
              <h4>Advisory Board</h4>
              <p>
                Our advisory board consists of experts in diplomacy, policy, education,
                and humanitarian aid, guiding the strategic direction of our initiatives.{" "}
                <br />
                Transparency & Governance: <br />
                We prioritize transparency and accountability in all our operations. We
                adhere to global ethical standards and share detailed financial reports to
                ensure donor confidence.
              </p>
            </div>

            <div className="about-section our-team">
              <h4>Our Mission</h4>
              <p className="list"> At GAiN, we are committed to:</p>
              <ul>
                <li>Empowering communities with AI-powered education and healthcare.</li>
                <li>
                  Modernizing fiscal and tax systems for transparency and economic
                  resilience.
                </li>
                <li>Revolutionizing autism and mental health services.</li>
                <li>
                  Positioning Morocco as a pioneer in smart cities, green energy, and
                  climate solutions.
                </li>
                <li>
                  Advocating for the rights of vulnerable and neurodivergent populations.
                </li>
                <li>
                  Creating meaningful partnerships across Africa and globally to scale
                  impact.
                </li>
              </ul>
            </div>
            <div className="about-section">
              <h4>Our Strategic Focus</h4>
              <ul>
                <p>We align all our initiatives with:</p>
                <li>The United Nations Sustainable Development Goals (SDGs)</li>
                <li>Morocco’s National Development Strategy</li>
                <li>The African Union Agenda 2063</li>
              </ul>
              <ul>
                <p>Our Values:</p>
                <li>Scientific Integrity</li>
                <li>Equity and Inclusion</li>
                <li>Sustainable Impact</li>
                <li>Ethical Governance</li>
              </ul>
            </div>
          </div>

          <div className="imageWrap">
            <img src={HeroImage} alt="" />
          </div>
        </div>
        <div className="about-more">
          <div className="info-section">
            <h3>• GAiN's Community Inclusion Program:</h3>
            <p>
              Our Community Inclusion program has been developed to ensure all people with
              Autism are able to participate in recreational, leisure, and community
              events. We work with families, individuals with Autism, as well as community
              organizations and businesses to increase opportunities and inclusion in the
              community for all
            </p>
          </div>
          <div className="info-section">
            <h3>
              • Our Community Inclusion program supports families and individuals with
              Autism by:{" "}
            </h3>
            <p>
              <li>
                • Providing information about accessible programs in the community.{" "}
              </li>
              <li>• Facilitating special sensory events.</li>
              <li>
                {" "}
                • Providing resources and information to prepare for visiting community
                events and organizations.
              </li>
            </p>
          </div>
          <div className="info-section">
            <h3>
              • We also work with various community organizations and businesses too:
            </h3>
            <p></p>
            <ul>
              <li>• Upskill staff through Autism-specific training and coaching </li>
              <li>
                • Support in making appropriate accommodation and adaptions to facilitate
                inclusion and participation in their programs and facilities
              </li>
              <li>
                •Provide ongoing consultation, support, resources and information to
                increase access and inclusion fo AI
              </li>
            </ul>
          </div>
          <div className="last-info">
            This project is part of the Morocco's Disability Strategy 2025-2030,
            <br /> and it will be possible with the support of the different Ministers and
            Organizations.
          </div>
        </div>
      </div>
    </>
  );
}
