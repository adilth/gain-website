import Hero from "../components/hero/Hero";
import Mission from "../components/mission/Mission";
import News from "../components/news/News";
import Leadership from "../components/leadership/Leadership";
import Contact from "../components/contact/Contact";
import SEO from "../components/SEO";

export default function Home() {
  return (
    <>
      <SEO
        title="GAiN NGO - Global Academy Intelligence Network"
        description="Transform lives through sustainable humanitarian solutions, cultural exchange, and community empowerment in Morocco and beyond. Join us in making a global impact."
        keywords={[
          "NGO",
          "humanitarian aid",
          "cultural exchange",
          "community empowerment",
          "Morocco",
          "global impact",
          "sustainable solutions",
        ]}
        canonicalUrl="/"
      />
      <Hero />
      <Mission />
      <News />
      <Leadership />
      <Contact />
    </>
  );
}
