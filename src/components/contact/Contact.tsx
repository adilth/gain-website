import "./Contact.css";
import emailImage from "/images/contactImage.webp";

export default function Contact() {
  return (
    <section className="contact-section section" id="contact">
      <div className="container">
        <h2 className="section-title">Contact Us</h2>

        <div className="contact-container">
          <div className="contact-form">
            <div className="flex-group">
              <div className="">
                <div className="form-group">
                  <label htmlFor="fullName">Full Name</label>
                  <input type="text" id="fullName" name="fullName" placeholder="Name" />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input type="email" id="email" name="email" placeholder="Email" />
                </div>
              </div>
              <div>
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input type="text" id="subject" name="subject" placeholder="Subject" />
                </div>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows={6}
                placeholder="Message"
              ></textarea>
            </div>

            <button type="submit" className="btn">
              Send Message
            </button>
          </div>

          <div className="contact-image">
            <img src={emailImage} alt="Email contact" />
          </div>
        </div>
      </div>
    </section>
  );
}
