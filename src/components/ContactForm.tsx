"use client";

import { useState } from "react";
import { lookingFor, site } from "@/lib/site";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle");
  const [waLink, setWaLink] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    const name = String(data.name || "").trim();
    const email = String(data.email || "").trim();
    const service = String(data.lookingFor || "").trim();
    const timeline = String(data.company || "Flexible").trim();
    const message = String(data.message || "").trim();

    // Compose formatted WhatsApp inquiry text
    const textLines = [
      "Hi Triora Labs! 👋",
      "",
      "I just submitted an inquiry on your website:",
      `• Name: ${name}`,
      `• Email: ${email}`,
      `• Service: ${service}`,
      `• Timeline: ${timeline}`,
      `• Details: ${message}`,
      "",
      "Looking forward to connecting!",
    ].join("\n");

    const waUrl = `https://wa.me/917036592351?text=${encodeURIComponent(textLines)}`;
    setWaLink(waUrl);

    try {
      const accessKey =
        process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "f432e76c-7763-41a8-85fa-6a520f5e74cc";

      if (accessKey) {
        const payload = {
          access_key: accessKey,
          subject: `New Inquiry: ${name} (${service})`,
          from_name: "Triora Labs Consultation",
          name,
          email,
          service,
          timeline,
          message,
        };

        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(payload),
        });

        const result = await res.json();
        if (!result.success) {
          throw new Error(result.message || "Failed to submit form.");
        }
      }

      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      }).catch(() => {});

      setStatus("ok");
      form.reset();

      // Seamless WhatsApp navigation after filling the form
      setTimeout(() => {
        try {
          const opened = window.open(waUrl, "_blank");
          if (!opened) {
            window.location.href = waUrl;
          }
        } catch {
          window.location.href = waUrl;
        }
      }, 500);
    } catch {
      setStatus("error");
    }
  }

  const field =
    "w-full rounded-xl border border-[rgba(90,42,48,0.12)] bg-white/70 px-3.5 py-2.5 text-xs sm:text-sm text-ink placeholder:text-muted/50 outline-none backdrop-blur-sm transition focus:border-burgundy/50 focus:bg-white focus:ring-2 focus:ring-burgundy/10";

  return (
    <div className="w-full rounded-[2rem] border border-[rgba(90,42,48,0.1)] bg-white/85 p-6 sm:p-8 shadow-[0_20px_50px_rgba(90,42,48,0.06)] backdrop-blur-xl">
      <div className="mb-5 text-center">
        <h2 className="display text-2xl font-bold tracking-tight text-ink sm:text-3xl">
          Book a Consultation
        </h2>
        <p className="mt-1 text-xs text-muted">
          Tell us about your project. Connects directly to our team via WhatsApp.
        </p>
      </div>

      <form onSubmit={onSubmit} className="space-y-3.5">
        {/* Anti-spam honeypot */}
        <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} />

        {/* Row 1: Name & Email */}
        <div className="grid gap-3.5 sm:grid-cols-2">
          <label className="block">
            <span className="mb-1 block text-[11px] font-bold uppercase tracking-wider text-ink/75">
              Your Name <span className="text-burgundy">*</span>
            </span>
            <input
              name="name"
              required
              autoComplete="name"
              placeholder="John Doe"
              className={field}
            />
          </label>

          <label className="block">
            <span className="mb-1 block text-[11px] font-bold uppercase tracking-wider text-ink/75">
              Email Address <span className="text-burgundy">*</span>
            </span>
            <input
              name="email"
              type="email"
              required
              autoComplete="email"
              placeholder="john@company.com"
              className={field}
            />
          </label>
        </div>

        {/* Row 2: Service & Timeline */}
        <div className="grid gap-3.5 sm:grid-cols-2">
          <label className="block">
            <span className="mb-1 block text-[11px] font-bold uppercase tracking-wider text-ink/75">
              Service Required <span className="text-burgundy">*</span>
            </span>
            <select name="lookingFor" required defaultValue="" className={field}>
              <option value="" disabled>
                Select a service
              </option>
              {lookingFor.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </label>

          <label className="block">
            <span className="mb-1 block text-[11px] font-bold uppercase tracking-wider text-ink/75">
              Project Timeline
            </span>
            <select name="company" defaultValue="2-4 weeks" className={field}>
              <option value="Immediate (1-2 weeks)">Immediate (1-2 weeks)</option>
              <option value="2-4 weeks">Standard (2-4 weeks)</option>
              <option value="1-2 months">Comprehensive (1-2 months)</option>
              <option value="Exploring Scope">Exploring / Flexible</option>
            </select>
          </label>
        </div>

        {/* Row 3: Message */}
        <label className="block">
          <span className="mb-1 block text-[11px] font-bold uppercase tracking-wider text-ink/75">
            Your Message <span className="text-burgundy">*</span>
          </span>
          <textarea
            name="message"
            required
            rows={3}
            placeholder="Tell us about your project, location, and goals..."
            className={`${field} resize-none`}
          />
        </label>

        {/* Submit Button with WhatsApp Indicator */}
        <button
          type="submit"
          disabled={status === "sending"}
          className="w-full rounded-xl bg-gradient-to-r from-[#7a3340] to-[#5a2430] py-3.5 text-center text-xs font-bold uppercase tracking-wider text-white shadow-md transition hover:brightness-110 active:scale-[0.99] disabled:opacity-70 cursor-pointer flex items-center justify-center gap-2"
        >
          <span>{status === "sending" ? "Submitting Inquiry…" : "SUBMIT & CONNECT ON WHATSAPP"}</span>
          <span>↗</span>
        </button>

        {status === "ok" ? (
          <div className="rounded-xl border border-burgundy/25 bg-burgundy/5 p-4 text-center text-xs font-medium text-burgundy space-y-2">
            <p className="font-bold text-sm">✓ Inquiry Received!</p>
            <p className="text-muted">
              Redirecting you to WhatsApp now with your pre-filled inquiry...
            </p>
            {waLink && (
              <a
                href={waLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-[#7a3340] to-[#5a2430] px-4 py-2 text-xs font-bold text-white shadow-xs hover:brightness-110"
              >
                <span>Continue to WhatsApp</span>
                <span>↗</span>
              </a>
            )}
          </div>
        ) : null}

        {status === "error" ? (
          <div className="rounded-xl border border-red-500/20 bg-red-50/70 p-3 text-center text-xs font-medium text-red-700">
            Something went wrong. Please connect with us directly at{" "}
            <a href={`mailto:${site.email}`} className="underline font-semibold">
              {site.email}
            </a>
            .
          </div>
        ) : null}

        <p className="text-center text-[10px] text-muted/80">
          By submitting this form, you agree to our Terms of Service and Privacy Policy.
        </p>
      </form>
    </div>
  );
}
