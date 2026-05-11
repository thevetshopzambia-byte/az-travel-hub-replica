import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/LegalPage";

export const Route = createFileRoute("/legal/refund")({
  head: () => ({ meta: [{ title: "Refund Policy — aztravelhub.net" }] }),
  component: () => (
    <LegalPage title="Refund Policy" updated="January 2026">
      <p>We want you to travel with confidence. The following refund schedule applies to all bookings made via aztravelhub.net.</p>
      <h2 className="text-xl font-semibold mt-4">Cancellation Schedule</h2>
      <table className="w-full text-sm border border-border mt-3">
        <thead className="bg-secondary">
          <tr><th className="text-left p-3">Days before departure</th><th className="text-left p-3">Refund amount</th></tr>
        </thead>
        <tbody>
          <tr className="border-t border-border"><td className="p-3">60+ days</td><td className="p-3">Full refund less $75 admin fee</td></tr>
          <tr className="border-t border-border"><td className="p-3">59 – 31 days</td><td className="p-3">75% refund</td></tr>
          <tr className="border-t border-border"><td className="p-3">30 – 15 days</td><td className="p-3">50% refund</td></tr>
          <tr className="border-t border-border"><td className="p-3">14 – 7 days</td><td className="p-3">25% refund</td></tr>
          <tr className="border-t border-border"><td className="p-3">Less than 7 days</td><td className="p-3">No refund</td></tr>
        </tbody>
      </table>
      <h2 className="text-xl font-semibold mt-6">How to request a refund</h2>
      <p>Email refunds@aztravelhub.net with your booking reference. Refunds are processed within 14 business days to the original payment method, in <strong>US Dollars ($)</strong>.</p>
      <h2 className="text-xl font-semibold mt-4">Non-refundable items</h2>
      <p>Some airline tickets, special-rate hotels, and event tickets are non-refundable. These items are clearly indicated at checkout.</p>
      <h2 className="text-xl font-semibold mt-4">Force Majeure</h2>
      <p>If a trip is cancelled due to events outside our control (natural disasters, government action, pandemic), we will offer a credit valid for 24 months or work with suppliers on a refund where possible.</p>
    </LegalPage>
  ),
});
