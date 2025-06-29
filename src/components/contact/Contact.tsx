import "./Contact.css";
import { ContactPage } from "./ContactPage";
// import emailImage from "/images/contactImage.webp";

export default function Contact() {
  return (
    <section className="contact-section section" id="contact">
      <div className="container">
        <h2 className="section-title">Contact Us</h2>
        <div className="contact-container">
          <ContactPage />
        </div>
      </div>
    </section>
  );
}
