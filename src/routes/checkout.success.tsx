import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/checkout/success")({
  head: () => ({ meta: [{ title: "Booking Confirmed — aztravelhub.net" }] }),
  component: Success,
});

function Success() {
  const ref = "ATH-" + Math.random().toString(36).slice(2, 9).toUpperCase();
  return (
    <div className="mx-auto max-w-[1440px] px-6 py-20">
      <div className="max-w-xl mx-auto text-center rounded-2xl border border-border bg-white p-10 shadow-sm">
        <CheckCircle2 className="mx-auto h-16 w-16 text-brand" />
        <h1 className="mt-4 text-3xl">Booking Confirmed!</h1>
        <p className="mt-2 text-muted-foreground">
          Thank you for booking with aztravelhub.net. A confirmation email has been sent to you.
        </p>
        <div className="mt-6 inline-block rounded-md bg-secondary px-4 py-2 text-sm">
          Booking reference: <span className="font-bold text-brand">{ref}</span>
        </div>
        <div className="mt-8">
          <Link to="/" className="rounded-md bg-brand text-primary-foreground px-6 py-3 font-semibold hover:bg-brand-dark">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
