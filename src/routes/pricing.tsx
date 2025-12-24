import { BsCheck2, BsArrowRight } from "react-icons/bs";

import { createFileRoute, Link } from "@tanstack/react-router";

import { Logo } from "~/components/Logo";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — Snowsy" },
      {
        name: "description",
        content: "No hidden costs. No surprise invoices. Just clear paths forward, priced fairly.",
      },
    ],
  }),
  component: Pricing,
});

function Pricing() {
  return (
    <div>
      <Hero />
      <PricingCards />
      <FAQ />
      <CTA />
    </div>
  );
}

function Hero() {
  return (
    <section className="pt-40 pb-20 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <Logo size={600} className="text-teal/[0.03]" />
      </div>

      <div className="container-wide relative text-center">
        <span className="text-teal font-medium text-sm uppercase tracking-wider mb-6 block animate-fade-up">
          Pricing
        </span>
        <h1 className="text-hero font-semibold mb-6 animate-fade-up delay-100">
          Fair dinkum
          <br />
          <span className="text-gradient">pricing.</span>
        </h1>
        <p className="text-xl text-stone max-w-xl mx-auto animate-fade-up delay-200">
          No hidden fees. No surprise invoices. No tall tales.
          Just honest value, priced fairly — the Australian way.
        </p>
      </div>
    </section>
  );
}

function PricingCards() {
  return (
    <section className="py-16">
      <div className="container-wide">
        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <PricingCard
            name="Swagman"
            price="Free"
            period="always"
            description="For those just beginning their journey. No commitment, no cost, no worries."
            features={[
              "3 personal spaces",
              "5GB of storage",
              "Community support",
              "Core features",
              "Week-long history",
            ]}
            cta="Start exploring"
            ctaVariant="secondary"
          />

          <PricingCard
            name="Bushie"
            price="£19"
            period="/month"
            description="For those who know the lay of the land and want to move faster."
            features={[
              "Unlimited spaces",
              "100GB of storage",
              "Priority support",
              "Advanced tools",
              "90-day history",
              "Your own domain",
              "Team collaboration",
              "Full API access",
            ]}
            cta="Get cracking"
            ctaVariant="primary"
            popular
          />

          <PricingCard
            name="Station"
            price="Custom"
            period=""
            description="For organisations that think in generations, not quarters."
            features={[
              "Everything in Bushie",
              "Boundless storage",
              "Dedicated account manager",
              "Round-the-clock support",
              "Single sign-on",
              "99.99% uptime SLA",
              "Custom terms",
              "On-premise deployment",
            ]}
            cta="Let's have a yarn"
            ctaVariant="secondary"
          />
        </div>
      </div>
    </section>
  );
}

function PricingCard({
  name,
  price,
  period,
  description,
  features,
  cta,
  ctaVariant,
  popular = false,
}: {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  cta: string;
  ctaVariant: "primary" | "secondary";
  popular?: boolean;
}) {
  return (
    <div
      className={`relative rounded-3xl p-8 md:p-10 flex flex-col ${
        popular
          ? "bg-ink text-white ring-4 ring-teal/20 scale-105 z-10"
          : "bg-white border border-ink/10"
      }`}
    >
      {popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <span className="bg-teal text-white text-sm font-medium px-4 py-1.5 rounded-full">
            Most chosen
          </span>
        </div>
      )}

      <div className="mb-8">
        <h3 className={`text-lg font-medium mb-4 ${popular ? "text-teal" : "text-teal"}`}>
          {name}
        </h3>
        <div className="flex items-baseline gap-1 mb-3">
          <span className="text-5xl font-bold">{price}</span>
          {period && <span className={`${popular ? "text-white/60" : "text-stone"}`}>{period}</span>}
        </div>
        <p className={`text-sm ${popular ? "text-white/60" : "text-stone"}`}>{description}</p>
      </div>

      <ul className="space-y-4 mb-10 flex-1">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-3">
            <BsCheck2 className={`text-lg shrink-0 mt-0.5 ${popular ? "text-teal" : "text-teal"}`} />
            <span className={`text-sm ${popular ? "text-white/80" : "text-ink/80"}`}>{f}</span>
          </li>
        ))}
      </ul>

      <Link
        to="/"
        className={
          ctaVariant === "primary"
            ? "btn-primary bg-white text-ink hover:bg-teal hover:text-white w-full"
            : popular
            ? "btn-secondary border-white/20 text-white hover:bg-white hover:text-ink w-full"
            : "btn-secondary w-full"
        }
      >
        <span>{cta}</span>
      </Link>
    </div>
  );
}

function FAQ() {
  return (
    <section className="py-32 bg-mist">
      <div className="container-narrow">
        <div className="text-center mb-16">
          <h2 className="text-section font-semibold mb-4">
            Questions <span className="text-gradient">answered.</span>
          </h2>
        </div>

        <div className="space-y-6">
          <FAQItem
            question="Can I change my mind?"
            answer="No dramas. Move between plans whenever you like. We'll adjust your billing fairly, to the day. No penalties, no hard feelings."
          />
          <FAQItem
            question="What happens after my trial?"
            answer="If you decide not to continue, you simply drop back to the free tier. Your work stays put. Nothing vanishes. No card was ever charged."
          />
          <FAQItem
            question="What if it's not for me?"
            answer="Within thirty days, just give us a shout. We'll return every cent, no questions asked. We'd rather part as mates than hold onto what wasn't earned."
          />
          <FAQItem
            question="How do I pay?"
            answer="Cards, PayPal, or wire transfer for larger setups. Everything's handled through Stripe — secure as a bank vault, but friendlier."
          />
          <FAQItem
            question="Any discount for paying upfront?"
            answer="Pay for the year and we'll knock two months off. A little thank you for backing us. Good on ya."
          />
        </div>
      </div>
    </section>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  return (
    <div className="bg-white rounded-2xl p-8 border border-ink/5">
      <h3 className="text-lg font-semibold mb-3">{question}</h3>
      <p className="text-stone leading-relaxed">{answer}</p>
    </div>
  );
}

function CTA() {
  return (
    <section className="py-32">
      <div className="container-narrow text-center">
        <Logo size={60} className="text-teal mx-auto mb-8" />
        <h2 className="text-section font-semibold mb-6">
          The door's always open.
        </h2>
        <p className="text-xl text-stone mb-10 max-w-xl mx-auto">
          No forms to fill. No demos to sit through.
          Just rock up and see if it feels right.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/" className="btn-primary">
            <span>Jump in</span>
            <BsArrowRight />
          </Link>
          <a href="mailto:hello@snowsy.dev" className="btn-secondary">
            <span>Or have a chat first</span>
          </a>
        </div>
      </div>
    </section>
  );
}
