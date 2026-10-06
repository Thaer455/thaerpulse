import { FormEvent, useState } from "react";

function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">(
    "idle"
  );

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setStatus("sending");

    const form = event.currentTarget;
    const formData = new FormData(form);

    formData.append("access_key", "72196f99-3294-4f35-843b-81f3813fc85f");
    formData.append("subject", "New message from thaerpulse.com");
    formData.append("from_name", "Thaer Issa Portfolio");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className="section contact-section" id="contact">
      <div className="contact-wrapper">
        <div className="contact-heading">
          <p className="section-label">Contact</p>

          <h2>
            Let's talk.
            <span>I'd love to hear from you.</span>
          </h2>

          <p>
            Have a question, an opportunity, or a project in mind?
            Feel free to send me a message.
          </p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="contact-form-row">
            <div className="contact-field">
              <label htmlFor="name">Name</label>

              <input
                id="name"
                name="name"
                type="text"
                placeholder="Your name"
                required
              />
            </div>

            <div className="contact-field">
              <label htmlFor="email">Email</label>

              <input
                id="email"
                name="email"
                type="email"
                placeholder="your@email.com"
                required
              />
            </div>
          </div>

          <div className="contact-field">
            <label htmlFor="message">Message</label>

            <textarea
              id="message"
              name="message"
              placeholder="Write your message..."
              rows={7}
              required
            />
          </div>

          <button
            type="submit"
            className="contact-submit"
            disabled={status === "sending"}
          >
            {status === "sending"
              ? "Sending..."
              : status === "success"
                ? "Message sent ✓"
                : "Send message"}

            {status !== "success" && <span>↗</span>}
          </button>

          {status === "success" && (
            <p className="contact-status contact-status-success">
              Thanks! Your message has been sent successfully.
            </p>
          )}

          {status === "error" && (
            <p className="contact-status contact-status-error">
              Something went wrong. Please try again.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

export default Contact;
