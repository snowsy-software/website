import { BsArrowRight, BsLightningCharge, BsShieldCheck, BsCommand, BsGlobe, BsCode, BsPeople } from "react-icons/bs";

import { createFileRoute, Link } from "@tanstack/react-router";

import { Logo } from "~/components/Logo";

export const Route = createFileRoute("/features")({
  head: () => ({
    meta: [
      { title: "Features — Snowsy" },
      {
        name: "description",
        content: "Every feature is a whisper, not a shout. Discover the quiet power that lies beneath the surface.",
      },
    ],
  }),
  component: Features,
});

function Features() {
  return (
    <div>
      <Hero />
      <MainFeatures />
      <Bento />
      <Integrations />
      <CTA />
    </div>
  );
}

function Hero() {
  return (
    <section className="pt-40 pb-24 relative overflow-hidden">
      <div className="absolute top-20 right-0 w-[600px] h-[600px] pointer-events-none">
        <Logo size={600} className="text-teal/[0.04]" />
      </div>

      <div className="container-wide relative">
        <span className="text-teal font-medium text-sm uppercase tracking-wider mb-6 block animate-fade-up">
          Capabilities
        </span>
        <h1 className="text-hero font-semibold mb-8 max-w-4xl animate-fade-up delay-100">
          Built where the
          <br />
          <span className="text-stone">land teaches patience.</span>
        </h1>
        <p className="text-xl text-stone leading-relaxed max-w-2xl animate-fade-up delay-200">
          In Australia, the oldest continent, we learned that true strength is quiet.
          Like the ancient rivers that carved this land over millennia,
          SNOWSY works steadily, invisibly, powerfully.
        </p>
      </div>
    </section>
  );
}

function MainFeatures() {
  return (
    <section className="py-24">
      <div className="container-wide">
        <div className="space-y-32">
          <FeatureRow
            align="left"
            icon={<BsLightningCharge className="text-3xl" />}
            badge="Presence"
            title="Fast as bushfire light."
            description="In the outback, you see lightning strike before you hear it. SNOWSY operates the same way — our edge servers across the globe anticipate your needs before you know you have them. No waiting. No loading. Just there."
            highlights={["Edge-native architecture", "Predictive loading", "Zero cold starts"]}
          />

          <FeatureRow
            align="right"
            icon={<BsCommand className="text-3xl" />}
            badge="Flow"
            title="Like water finding its path."
            description="Australian rivers don't fight the landscape — they flow through it. We've designed SNOWSY to work the same way. Keyboard-first navigation, instant feedback, every shortcut intuitive. Your focus stays unbroken."
            highlights={["Command palette", "Keyboard shortcuts", "Instant preview"]}
          />

          <FeatureRow
            align="left"
            icon={<BsShieldCheck className="text-3xl" />}
            badge="Trust"
            title="Solid as red earth."
            description="The Australian Shield has stood for three billion years. We built SNOWSY with that same unwavering foundation. Security that doesn't announce itself. Privacy that simply exists, absolute and uncompromising."
            highlights={["End-to-end encryption", "Zero-knowledge architecture", "Continuous protection"]}
          />
        </div>
      </div>
    </section>
  );
}

function FeatureRow({
  align,
  icon,
  badge,
  title,
  description,
  highlights,
}: {
  align: "left" | "right";
  icon: React.ReactNode;
  badge: string;
  title: string;
  description: string;
  highlights: string[];
}) {
  return (
    <div className={`grid lg:grid-cols-2 gap-16 items-center ${align === "right" ? "lg:text-right" : ""}`}>
      <div className={align === "right" ? "lg:order-2" : ""}>
        <div className={`inline-flex items-center gap-3 px-4 py-2 rounded-full bg-teal/10 text-teal mb-6 ${align === "right" ? "lg:flex-row-reverse" : ""}`}>
          {icon}
          <span className="text-sm font-medium">{badge}</span>
        </div>
        <h2 className="text-section font-semibold mb-6">{title}</h2>
        <p className="text-lg text-stone leading-relaxed mb-8">{description}</p>
        <ul className={`space-y-3 ${align === "right" ? "lg:ml-auto lg:w-fit" : ""}`}>
          {highlights.map((h) => (
            <li key={h} className={`flex items-center gap-3 ${align === "right" ? "lg:flex-row-reverse" : ""}`}>
              <span className="w-1.5 h-1.5 rounded-full bg-teal" />
              <span className="text-ink font-medium">{h}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className={align === "right" ? "lg:order-1" : ""}>
        <div className="aspect-[4/3] rounded-3xl bg-mist border border-ink/5 flex items-center justify-center relative overflow-hidden group">
          <Logo size={150} className="text-teal/20 group-hover:text-teal/30 transition-colors duration-500" />
          <div className="absolute inset-0 bg-gradient-to-br from-transparent to-teal/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
      </div>
    </div>
  );
}

function Bento() {
  return (
    <section className="py-24 bg-ink text-white">
      <div className="container-wide">
        <div className="text-center mb-16">
          <h2 className="text-section font-semibold mb-4">
            Details that <span className="text-teal">make the difference.</span>
          </h2>
          <p className="text-white/60 text-lg max-w-xl mx-auto">
            We sweat the small stuff so you don't have to. No worries, mate.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <BentoCard
            icon={<BsGlobe />}
            title="From Perth to London"
            description="Your work follows you across every time zone. 300 edge locations, one seamless experience."
          />
          <BentoCard
            icon={<BsCode />}
            title="Speak to it"
            description="A complete API for those who prefer to forge their own paths. Build what you imagine."
          />
          <BentoCard
            icon={<BsPeople />}
            title="True collaboration"
            description="Work together the Australian way — direct, honest, without getting in each other's space."
          />
          <BentoCard
            title="Memory like an elephant"
            description="Every version saved. Every change remembered. Time travel without the jet lag."
          />
          <BentoCard
            title="Your name on the door"
            description="Custom domains. Your brand, your presence, your identity. Make it yours."
          />
          <BentoCard
            title="Gentle nudges"
            description="Webhooks that notify without disturbing. Like a mate tapping your shoulder."
          />
        </div>
      </div>
    </section>
  );
}

function BentoCard({
  icon,
  title,
  description,
}: {
  icon?: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-teal/30 hover:bg-white/10 transition-all duration-300">
      {icon && (
        <div className="w-12 h-12 rounded-xl bg-teal/20 text-teal flex items-center justify-center text-xl mb-6 group-hover:scale-110 transition-transform">
          {icon}
        </div>
      )}
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-white/60 leading-relaxed">{description}</p>
    </div>
  );
}

function Integrations() {
  return (
    <section className="py-32">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <span className="text-teal font-medium text-sm uppercase tracking-wider mb-6 block">
              Connections
            </span>
            <h2 className="text-section font-semibold mb-6">
              Plays well
              <br />
              <span className="text-gradient">with others.</span>
            </h2>
            <p className="text-lg text-stone leading-relaxed mb-8">
              Australians are famously easy-going, and so is SNOWSY.
              We integrate with your favourite tools seamlessly —
              like tributaries joining a river, each keeping its character
              while flowing together.
            </p>
            <Link to="/pricing" className="btn-primary">
              <span>See all connections</span>
              <BsArrowRight />
            </Link>
          </div>

          <div className="grid grid-cols-3 gap-4">
            {["GitHub", "Slack", "Figma", "Linear", "Notion", "Vercel", "AWS", "Stripe", "Discord"].map((name, i) => (
              <div
                key={name}
                className="aspect-square rounded-2xl bg-white border border-ink/5 flex items-center justify-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                style={{ animationDelay: `${i * 50}ms` }}
              >
                <span className="font-semibold text-ink/40">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="py-32">
      <div className="container-narrow text-center">
        <h2 className="text-section font-semibold mb-6">
          Come see for yourself.
        </h2>
        <p className="text-xl text-stone mb-10 max-w-xl mx-auto">
          Down under, we believe in showing, not telling.
          Take two minutes and discover what space to think really feels like.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/pricing" className="btn-primary">
            <span>Give it a go</span>
            <BsArrowRight />
          </Link>
          <a href="mailto:hello@snowsy.dev" className="btn-secondary">
            <span>Have a yarn</span>
          </a>
        </div>
      </div>
    </section>
  );
}
