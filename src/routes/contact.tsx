import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone, MapPin } from "lucide-react";
import { useState, FormEvent } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — aztravelhub.net" },
      { name: "description", content: "Get in touch with AZ Travel Hub Limited for booking inquiries and customer support." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  const onSubmit = (e: FormEvent) => { e.preventDefault(); setSent(true); };

  return (
    <div className="mx-auto max-w-[1440px] px-6 py-12">
      <h1 className="text-3xl lg:text-4xl">Contact Us</h1>
      <p className="mt-2 text-muted-foreground">We're here to help plan your next journey.</p>
      <div className="mt-8 grid lg:grid-cols-2 gap-10">
        <div className="space-y-6">
          <InfoCard icon={MapPin} title="Office">
            AZ Travel Hub Limited<br />
            Agora Village, Thabo Mbeki Road<br />
            Lusaka — Reg No 120261043371
          </InfoCard>
          <InfoCard icon={Mail} title="Email">support@aztravelhub.net</InfoCard>
          <InfoCard icon={Phone} title="Phone">+260 (0) 000 000 000</InfoCard>
          <div className="aspect-[4/3] rounded-xl bg-secondary flex items-center justify-center text-muted-foreground">
            [Image placeholder — map / location]
          </div>
        </div>
        <form onSubmit={onSubmit} className="rounded-xl border border-border bg-white p-6 space-y-4">
          {sent ? (
            <div className="text-center py-10">
              <h2 className="text-xl font-semibold text-brand">Message sent!</h2>
              <p className="mt-2 text-muted-foreground">We'll be in touch within 24 hours.</p>
            </div>
          ) : (
            <>
              <h2 className="text-xl font-semibold">Send a message</h2>
              <Field label="Name" name="name" required />
              <Field label="Email" name="email" type="email" required />
              <Field label="Subject" name="subject" required />
              <label className="block">
                <span className="block text-sm font-medium mb-1">Message *</span>
                <textarea required rows={5}
                  className="w-full px-3 py-2 border border-border rounded-md outline-none focus:border-brand text-sm" />
              </label>
              <button type="submit" className="w-full rounded-md bg-brand text-primary-foreground py-3 font-semibold hover:bg-brand-dark">
                Send Message
              </button>
            </>
          )}
        </form>
      </div>
    </div>
  );
}

function InfoCard({ icon: Icon, title, children }: { icon: React.ElementType; title: string; children: React.ReactNode }) {
  return (
    <div className="flex gap-4 rounded-xl border border-border bg-white p-5">
      <Icon className="h-6 w-6 text-brand shrink-0 mt-1" />
      <div>
        <div className="font-semibold">{title}</div>
        <div className="text-sm text-muted-foreground mt-1 leading-relaxed">{children}</div>
      </div>
    </div>
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
