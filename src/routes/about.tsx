import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — aztravelhub.net" },
      { name: "description", content: "Learn about AZ Travel Hub Limited, the team behind aztravelhub.net's curated multi-city travel packages." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <div className="mx-auto max-w-[1440px] px-6 py-12">
      <h1 className="text-3xl lg:text-4xl">About AZ Travel Hub</h1>
      <div className="mt-6 grid lg:grid-cols-2 gap-10 items-start">
        <div className="aspect-[4/3] rounded-xl bg-secondary flex items-center justify-center text-muted-foreground">
          [Image placeholder — team / office]
        </div>
        <div className="prose max-w-none text-foreground/85">
          <p className="text-lg leading-relaxed">
            aztravelhub.net is operated by <strong>AZ Travel Hub Limited</strong>, a registered travel
            services company headquartered in Lusaka, Zambia. We specialize in curated multi-city vacations
            that combine comfort, culture, and adventure.
          </p>
          <p className="mt-4 leading-relaxed">
            From our origins serving regional travelers, we now design itineraries to over 30 countries —
            partnering with trusted hoteliers, rail operators, and local guides to make every journey effortless.
          </p>
          <h2 className="mt-8 text-2xl font-semibold">Our Promise</h2>
          <ul className="mt-3 space-y-2 list-disc pl-5">
            <li>Hand-picked hotels and rated experiences</li>
            <li>Transparent pricing — no hidden fees</li>
            <li>24/7 support before, during, and after your trip</li>
            <li>Secure, encrypted booking in US Dollars</li>
          </ul>
          <div className="mt-8 rounded-xl bg-secondary p-5">
            <h3 className="font-semibold">Registered Office</h3>
            <address className="not-italic text-sm mt-2 text-muted-foreground">
              AZ Travel Hub Limited<br />
              Agora Village<br />
              Thabo Mbeki Road<br />
              Lusaka<br />
              Reg No 120261043371
            </address>
          </div>
          <Link to="/packages" className="mt-6 inline-block rounded-md bg-brand text-primary-foreground px-5 py-2.5 font-semibold hover:bg-brand-dark">
            See our packages
          </Link>
        </div>
      </div>
    </div>
  );
}
