import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/LegalPage";

export const Route = createFileRoute("/legal/notice")({
  head: () => ({ meta: [{ title: "Legal Notice — aztravelhub.net" }] }),
  component: () => (
    <LegalPage title="Legal Notice" updated="January 2026">
      <h2 className="text-xl font-semibold">Operator Information</h2>
      <p>This website (aztravelhub.net) is owned and operated by <strong>AZ Travel Hub Limited</strong>, a company registered in Zambia.</p>
      <ul className="list-disc pl-5">
        <li>Registered name: AZ Travel Hub Limited</li>
        <li>Registered office: Agora Village, Thabo Mbeki Road, Lusaka</li>
        <li>Registration number: 120261043371</li>
        <li>Email: legal@aztravelhub.net</li>
      </ul>
      <h2 className="text-xl font-semibold mt-6">Content</h2>
      <p>All content on this website, including text, images, logos and itineraries, is the property of AZ Travel Hub Limited or used under license. Reproduction without prior written consent is prohibited.</p>
      <h2 className="text-xl font-semibold mt-6">Liability</h2>
      <p>While we make every effort to ensure information is accurate, AZ Travel Hub Limited accepts no responsibility for errors, omissions, or third-party content linked from this website.</p>
      <h2 className="text-xl font-semibold mt-6">Currency</h2>
      <p>All prices and transactions on this website are denominated in <strong>United States Dollars ($)</strong>.</p>
    </LegalPage>
  ),
});
