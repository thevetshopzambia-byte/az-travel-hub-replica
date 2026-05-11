import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/LegalPage";

export const Route = createFileRoute("/legal/system-policies")({
  head: () => ({ meta: [{ title: "System Policies — aztravelhub.net" }] }),
  component: () => (
    <LegalPage title="System Policies" updated="January 2026">
      <p>These policies govern the use of the aztravelhub.net booking system and supporting infrastructure.</p>
      <h2 className="text-xl font-semibold mt-4">Account & Access</h2>
      <p>You are responsible for safeguarding any credentials used to access your account. Notify us immediately of any unauthorised use.</p>
      <h2 className="text-xl font-semibold mt-4">Acceptable Use</h2>
      <ul className="list-disc pl-5">
        <li>Do not attempt to circumvent security or rate-limiting controls.</li>
        <li>Do not use automated tools (bots, scrapers) without prior written consent.</li>
        <li>Do not upload or transmit unlawful, harmful, or fraudulent content.</li>
      </ul>
      <h2 className="text-xl font-semibold mt-4">Availability</h2>
      <p>We aim for 99.9% system uptime but do not guarantee uninterrupted service. Planned maintenance windows are communicated in advance where possible.</p>
      <h2 className="text-xl font-semibold mt-4">Data Retention</h2>
      <p>Booking records are retained for the period required by Zambian tax and aviation regulations, typically 7 years.</p>
      <h2 className="text-xl font-semibold mt-4">Security</h2>
      <p>All communications with the site are encrypted with TLS. Card details are tokenised by our PCI-DSS compliant payment processor and never stored on our servers.</p>
    </LegalPage>
  ),
});
