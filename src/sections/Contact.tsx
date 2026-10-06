import { useState } from "react";
import type { FormEvent } from "react";
import { useLanguage } from "../i18n";

function Contact() {
  const { language } = useLanguage();
  const isGerman = language === "de";

  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setStatus("sending");

    const form = event.currentTarget;
    const formData = new FormData(form);

    formData.append("access_key", "DEIN_WEB3FORMS_ACCESS_KEY_HIER");

    formData.append(
      "subject",
      isGerman
        ? "Neue Nachricht über thaerpulse.com"
        : "New message from thaerpulse.com"
    );

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
          <p className="section-label">
            {isGerman ? "Kontakt" : "Contact"}
          </p>

          <h2>
            {isGerman ? "Lass uns sprechen." : "Let's talk."}
            <span>
              {isGerman
                ? "Ich freue mich auf deine Nachricht."
                : "I'd love to hear from you."}
            </span>
          </h2>

          <p>
            {isGerman
              ? "Du hast eine Frage, eine interessante Möglichkeit oder eine Projektidee? Schreib mir gerne eine Nachricht."
              : "Have a question, an opportunity, or a project in mind? Feel free to send me a message."}
          </p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="contact-form-row">
            <div className="contact-field">
              <label htmlFor="name">
                {isGerman ? "Name" : "Name"}
              </label>

              <input
                id="name"
                name="name"
                type="text"
                placeholder={isGerman ? "Dein Name" : "Your name"}
                required
              />
            </div>

            <div className="contact-field">
              <label htmlFor="email">Email</label>

              <input
                id="email"
                name="email"
                type="email"
                placeholder={
                  isGerman ? "deine@email.de" : "your@email.com"
                }
                required
              />
            </div>
          </div>

          <div className="contact-field">
            <label htmlFor="message">
              {isGerman ? "Nachricht" : "Message"}
            </label>

            <textarea
              id="message"
              name="message"
              placeholder={
                isGerman
                  ? "Schreib deine Nachricht..."
                  : "Write your message..."
              }
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
              ? isGerman
                ? "Wird gesendet..."
                : "Sending..."
              : status === "success"
                ? isGerman
                  ? "Nachricht gesendet ✓"
                  : "Message sent ✓"
                : isGerman
                  ? "Nachricht senden"
                  : "Send message"}

            {status !== "success" && <span>↗</span>}
          </button>

          {status === "success" && (
            <p className="contact-status contact-status-success">
              {isGerman
                ? "Vielen Dank! Deine Nachricht wurde erfolgreich gesendet."
                : "Thanks! Your message has been sent successfully."}
            </p>
          )}

          {status === "error" && (
            <p className="contact-status contact-status-error">
              {isGerman
                ? "Leider ist ein Fehler aufgetreten. Bitte versuche es erneut."
                : "Something went wrong. Please try again."}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

export default Contact;
