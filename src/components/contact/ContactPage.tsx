import { useState } from "react";

type FormFields = {
  fullName: string;
  email: string;
  subject: string;
  message: string;
};
type FormErrors = Partial<Record<keyof FormFields, string>>;

export function ContactPage() {
  const [form, setForm] = useState<FormFields>({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<{
    type: "success" | "error" | "";
    message: string;
  }>({ type: "", message: "" });
  const [loading, setLoading] = useState(false);

  function validate() {
    const errs: FormErrors = {};
    if (!form.fullName.trim()) errs.fullName = "Full name is required.";
    if (!form.email.trim()) errs.email = "Email is required.";
    else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email))
      errs.email = "Invalid email.";
    if (!form.subject.trim()) errs.subject = "Subject is required.";
    if (!form.message.trim()) errs.message = "Message is required.";
    return errs;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus({ type: "", message: "" });
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;
    setLoading(true);
    try {
      const res = await fetch("/send-contact.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.success) {
        setStatus({ type: "success", message: "Your message has been sent!" });
        setForm({ fullName: "", email: "", subject: "", message: "" });
      } else {
        setStatus({ type: "error", message: data.message || "Failed to send message." });
      }
    } catch {
      setStatus({ type: "error", message: "Network error. Please try again later." });
    } finally {
      setLoading(false);
    }
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: undefined });
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      {status.message && (
        <div
          style={{
            color: status.type === "success" ? "green" : "#da2313",
            marginBottom: 16,
          }}
        >
          {status.message}
        </div>
      )}
      <div className="wrap-col">
        <div className="form-group">
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            placeholder="Name"
            value={form.fullName}
            onChange={handleChange}
          />
          {errors.fullName && (
            <div style={{ color: "#da2313", fontSize: 13 }}>{errors.fullName}</div>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
          />
          {errors.email && (
            <div style={{ color: "#da2313", fontSize: 13 }}>{errors.email}</div>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="subject">Subject</label>
          <input
            type="text"
            id="subject"
            name="subject"
            placeholder="Subject"
            value={form.subject}
            onChange={handleChange}
          />
          {errors.subject && (
            <div style={{ color: "#da2313", fontSize: 13 }}>{errors.subject}</div>
          )}
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
            value={form.message}
            onChange={handleChange}
          ></textarea>
          {errors.message && (
            <div style={{ color: "#da2313", fontSize: 13 }}>{errors.message}</div>
          )}
        </div>
        <div className="form-group submit">
          <button type="submit" className="btn" disabled={loading}>
            {loading ? "Sending..." : "Submit"}
          </button>
        </div>
      </div>
    </form>
  );
}
