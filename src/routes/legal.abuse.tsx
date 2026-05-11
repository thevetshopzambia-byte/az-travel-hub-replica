import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/LegalPage";
import { useState, FormEvent } from "react";

export const Route = createFileRoute("/legal/abuse")({
  head: () => ({ meta: [{ title: "Abuse Form — aztravelhub.net" }] }),
  component: AbusePage,
});

function AbusePage() {
  const [sent, setSent] = useState(false);
  const onSubmit = (e: FormEvent) => { e.preventDefault(); setSent(true); };

  return (
    <LegalPage title="Abuse Report Form" updated="January 2026">
      <p>Use this form to report content, accounts, or transactions on aztravelhub.net that you believe are fraudulent, abusive, or violate our policies.</p>
      <p>Reports may also be sent directly to <strong>abuse@aztravelhub.net</strong>.</p>

      {sent ? (
        <div className="mt-6 rounded-xl bg-secondary p-6 text-center">
          <h2 className="font-semibold text-brand">Report received</h2>
          <p className="text-sm text-muted-foreground mt-2">Our trust & safety team will review and respond within 5 business days.</p>
        </div>
      ) : (
        <form onSubmit={onSubmit} className="mt-6 space-y-4 not-prose">
          <Field label="Your name" name="name" required />
          <Field label="Your email" name="email" type="email" required />
          <Field label="URL or booking reference involved" name="ref" required />
          <label className="block">
            <span className="block text-sm font-medium mb-1">Type of report *</span>
            <select required className="w-full px-3 py-2 border border-border rounded-md outline-none focus:border-brand text-sm bg-white">
              <option>Fraud / unauthorized charge</option>
              <option>Phishing / impersonation</option>
              <option>Inappropriate content</option>
              <option>Copyright / trademark</option>
              <option>Other</option>
            </select>
          </label>
          <label className="block">
            <span className="block text-sm font-medium mb-1">Describe the issue *</span>
            <textarea required rows={6}
              className="w-full px-3 py-2 border border-border rounded-md outline-none focus:border-brand text-sm" />
          </label>
          <button type="submit" className="rounded-md bg-brand text-primary-foreground px-6 py-3 font-semibold hover:bg-brand-dark">
            Submit Report
          </button>
        </form>
      )}
    </LegalPage>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <label className="block">
      <span className="block text-sm font-medium mb-1">{label}{required && " *"}</span>
      <input name={name} type={type} required={required}
        className="w-full px-3 py-2 border border-border rounded-md outline-none focus:border-brand text-sm" />
    </label>
  );
}
