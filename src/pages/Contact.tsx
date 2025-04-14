import "./Contact.css";

export default function Contact() {
  return (
    <div className="contact-page container">
      <h1 className="page-title">Contact Us</h1>
      <p className="contact-description">
        Have a question or want to get in touch? <br /> Fill out our inquiry form, and
        we’ll get back to you as soon as possible.
      </p>
      <form className="contact-form">
        <div className="wrap-col">
          <div className="form-group">
            <label htmlFor="fullName">Full Name</label>
            <input type="text" id="fullName" name="fullName" placeholder="Name" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" name="email" placeholder="Email" />
          </div>
          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input type="text" id="subject" name="subject" placeholder="Subject" />
          </div>
        </div>
        <div className="wrap-col">
          <div className="form-group message">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows={6}
              placeholder="Message"
            ></textarea>
          </div>
          <div className="form-group submit">
            <button type="submit" className="btn">
              Submit
            </button>
          </div>
        </div>
      </form>
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
  );
}
