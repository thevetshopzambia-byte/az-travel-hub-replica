import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/LegalPage";

export const Route = createFileRoute("/legal/terms")({
  head: () => ({ meta: [{ title: "Terms and Conditions — aztravelhub.net" }] }),
  component: () => (
    <LegalPage title="Terms and Conditions" updated="January 2026">
      <p>By using aztravelhub.net or making a booking, you agree to the following terms.</p>
      <h2 className="text-xl font-semibold mt-4">1. Bookings & Pricing</h2>
      <p>All prices are quoted and payable in <strong>United States Dollars ($)</strong>. Prices are per person based on the number of travelers indicated and are subject to availability until payment is confirmed.</p>
      <h2 className="text-xl font-semibold mt-4">2. Payment</h2>
      <p>Payment is required in full at the time of booking unless otherwise stated. We accept major credit and debit cards.</p>
      <h2 className="text-xl font-semibold mt-4">3. Travel Documents</h2>
      <p>You are responsible for ensuring you hold valid passports, visas, and any required health certificates for the destinations on your itinerary.</p>
      <h2 className="text-xl font-semibold mt-4">4. Changes by You</h2>
      <p>Change requests may be subject to airline and hotel fees in addition to a $50 administration fee per change.</p>
      <h2 className="text-xl font-semibold mt-4">5. Changes by Us</h2>
      <p>If a supplier requires us to change a hotel or itinerary element, we will notify you and offer a comparable alternative.</p>
      <h2 className="text-xl font-semibold mt-4">6. Cancellation</h2>
      <p>See our <a href="/legal/refund" className="text-brand hover:underline">Refund Policy</a> for cancellation terms.</p>
      <h2 className="text-xl font-semibold mt-4">7. Liability</h2>
      <p>AZ Travel Hub Limited acts as an agent for airlines, hotels, and ground operators. Our liability is limited to the value of services booked.</p>
      <h2 className="text-xl font-semibold mt-4">8. Governing Law</h2>
      <p>These terms are governed by the laws of the Republic of Zambia. Disputes shall be resolved in the courts of Lusaka.</p>
    </LegalPage>
  ),
});
