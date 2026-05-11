import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/LegalPage";

export const Route = createFileRoute("/legal/privacy")({
  head: () => ({ meta: [{ title: "Data Privacy — aztravelhub.net" }] }),
  component: () => (
    <LegalPage title="Data Privacy Policy" updated="January 2026">
      <p>AZ Travel Hub Limited ("we", "us") respects your privacy and is committed to protecting your personal data.</p>
      <h2 className="text-xl font-semibold mt-4">1. Data we collect</h2>
      <ul className="list-disc pl-5">
        <li>Contact information (name, email, phone)</li>
        <li>Billing and traveler details required to process bookings</li>
        <li>Payment information, processed securely by our PCI-compliant payment processor</li>
        <li>Browser, device, and usage data for site analytics</li>
      </ul>
      <h2 className="text-xl font-semibold mt-4">2. How we use your data</h2>
      <ul className="list-disc pl-5">
        <li>To process and fulfil your bookings</li>
        <li>To communicate trip details, changes, and customer support</li>
        <li>To meet legal, accounting, and regulatory obligations</li>
        <li>To improve our services and website</li>
      </ul>
      <h2 className="text-xl font-semibold mt-4">3. Data sharing</h2>
      <p>We share data only with airlines, hotels, ground operators and payment processors strictly required to deliver your booking. We do not sell personal data.</p>
      <h2 className="text-xl font-semibold mt-4">4. Your rights</h2>
      <p>You may request access, correction, or deletion of your personal data at any time by emailing privacy@aztravelhub.net.</p>
      <h2 className="text-xl font-semibold mt-4">5. Cookies</h2>
      <p>We use functional and analytics cookies to operate the site and understand how it is used. You may disable cookies in your browser settings.</p>
    </LegalPage>
  ),
});
