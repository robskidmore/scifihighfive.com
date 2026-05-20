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
        <p className="font-mono text-base uppercase tracking-[0.06em] leading-[1.4] text-ink">
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
            className="font-body italic font-normal text-[17px] leading-[1.4] text-ink-soft mb-0.5"
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
              className="flex-1 min-w-[200px] bg-transparent border-0 border-b border-accent text-ink font-body text-[19px] py-1.5 px-0 outline-none placeholder:text-ink-faint placeholder:italic focus:border-b-2 focus:border-accent-bright focus:pb-[5px]"
              autoComplete="email"
              disabled={status === "submitting"}
            />
            <button
              type="submit"
              className="bg-transparent border-0 text-accent font-mono text-base tracking-[0.14em] uppercase cursor-pointer px-2 py-3.5 -m-2 min-h-[44px] inline-flex items-center transition-colors duration-200 ease-[var(--ease-out-quart)] hover:text-accent-bright disabled:text-ink-faint disabled:cursor-not-allowed"
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
