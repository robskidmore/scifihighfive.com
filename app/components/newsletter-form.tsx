"use client";

import { FormEvent, useState } from "react";

type Props = {
  confirmLabel?: string;
  confirmAnnouncement?: string;
  submitLabel?: string;
  inputId?: string;
};

export function NewsletterForm({
  confirmLabel,
  confirmAnnouncement,
  submitLabel,
  inputId = "email",
}: Props = {}) {
  const [status, setStatus] = useState<"idle" | "submitting" | "sent">("idle");
  const [email, setEmail] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (status !== "idle" || !email.trim()) return;
    setStatus("submitting");
    await new Promise((resolve) => setTimeout(resolve, 350));
    setStatus("sent");
  }

  const sentText = confirmLabel ?? "SIGNAL RECEIVED — WE'LL BE IN TOUCH ON SUNDAY.";
  const sentAnnouncement =
    confirmAnnouncement ?? "Signal received. We will be in touch on Sunday.";

  const announcement =
    status === "sent"
      ? sentAnnouncement
      : status === "submitting"
        ? "Sending."
        : "";

  return (
    <div className="flex flex-col gap-3">
      <span role="status" aria-live="polite" className="sr-only">
        {announcement}
      </span>

      {status === "sent" ? (
        <p className="t-meta text-ink">
          <span className="text-accent" aria-hidden="true">●</span> {sentText}
        </p>
      ) : (
        <form
          className="flex flex-col gap-3"
          onSubmit={handleSubmit}
          aria-label="Subscribe to the newsletter"
        >
          <label
            htmlFor={inputId}
            className="t-label-italic text-ink-soft"
            style={{ marginBottom: "2px" }}
          >
            Your email
          </label>
          <div className="flex items-end gap-4 flex-wrap">
            <input
              id={inputId}
              type="email"
              required
              maxLength={254}
              placeholder="you@somewhere.net"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="email-input flex-1"
              style={{ minWidth: "200px" }}
              autoComplete="email"
              disabled={status === "submitting"}
            />
            <button
              type="submit"
              className="transmit-button"
              disabled={status === "submitting" || !email.trim()}
            >
              {status === "submitting"
                ? "SENDING…"
                : (submitLabel ?? "TRANSMIT →")}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
