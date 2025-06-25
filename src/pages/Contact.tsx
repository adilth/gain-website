import "./Contact.css";
import SEO from "../components/SEO";
import { ContactPage } from "../components/contact/ContactPage";

export default function Contact() {
  return (
    <>
      <SEO
        title="Contact Us | GAiN NGO"
        description="Get in touch with GAiN NGO. We're here to answer your questions about our humanitarian initiatives, partnership opportunities, and how you can get involved in making a global impact."
        keywords={[
          "contact NGO",
          "get involved",
          "partnership inquiries",
          "NGO support",
          "volunteer contact",
          "humanitarian aid contact",
          "Morocco NGO contact",
        ]}
        canonicalUrl="/contact"
      />
      <div className="contact-page container">
        <h1 className="page-title">Contact Us</h1>
        <p className="contact-description">
          Have a question or want to get in touch? <br /> Fill out our inquiry form, and
          we’ll get back to you as soon as possible.
        </p>
        <ContactPage />
        <div className="map-container">
          <iframe
            title="Location Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.835434509374!2d-122.41941548468132!3d37.77492977975992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064f0f0f0f%3A0x0!2zMzfCsDQ2JzI5LjgiTiAxMjLCsDI1JzA3LjkiVw!5e0!3m2!1sen!2sus!4v1616161616161"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </>
  );
}
