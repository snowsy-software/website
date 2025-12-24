import { BsArrowRight } from "react-icons/bs";

import { createFileRoute, Link } from "@tanstack/react-router";

import { Logo } from "~/components/Logo";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SNOWSY — Build faster. Scale smarter." },
      {
        name: "description",
        content:
          "Enterprise software and digital platforms, engineered with precision. From concept to deployment, we build systems that last.",
      },
      { name: "keywords", content: "software development, enterprise software, digital platforms, web development, Australia" },
      { property: "og:title", content: "SNOWSY — Build faster. Scale smarter." },
      { property: "og:description", content: "Enterprise software and digital platforms, engineered with precision. From concept to deployment, we build systems that last." },
      { property: "og:image", content: "https://snowsy.dev/logo.svg" },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://snowsy.dev" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "SNOWSY — Build faster. Scale smarter." },
      { name: "twitter:description", content: "Enterprise software and digital platforms, engineered with precision." },
      { name: "twitter:image", content: "https://snowsy.dev/logo.svg" },
    ],
    links: [
      { rel: "canonical", href: "https://snowsy.dev" },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <Brands />
      <Features />
      <Showcase />
      <Stats />
      <CTA />
    </div>
  );
}

function Hero() {
  return (
    <section className="min-h-screen relative overflow-hidden grid-pattern">
      <div className="absolute inset-0 gradient-mesh" />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <Logo size={800} className="text-teal/[0.03] animate-pulse-glow" />
      </div>

      <div className="container-wide relative pt-40 pb-32 md:pt-52 md:pb-40">
        <div className="max-w-5xl">
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal/10 text-teal text-sm font-medium mb-8">
              <span className="w-2 h-2 rounded-full bg-teal animate-pulse" />
              Now in public beta
            </span>
          </div>

          <h1 className="text-massive font-semibold mb-8 animate-fade-up delay-100">
            Build faster.
            <br />
            <span className="text-gradient">Scale smarter.</span>
          </h1>

          <p className="text-xl md:text-2xl text-stone leading-relaxed max-w-2xl mb-12 animate-fade-up delay-200">
            Enterprise software and digital platforms, engineered with precision.
            <span className="text-ink font-medium"> From concept to deployment, we build systems that last.</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up delay-300">
            <Link to="/pricing" className="btn-primary">
              <span>Get started</span>
              <BsArrowRight />
            </Link>
            <Link to="/features" className="btn-secondary">
              <span>View capabilities</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-snow to-transparent" />
    </section>
  );
}

function Brands() {
  return (
    <section className="py-16 border-y border-ink/5 bg-white">
      <div className="container-wide">
        <p className="text-center text-sm text-stone mb-8">
          Trusted from Sydney to San Francisco
        </p>
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6">
          {["Atlassian", "Canva", "Stripe", "Linear", "Notion", "Figma"].map((brand) => (
            <span key={brand} className="text-xl font-semibold text-ink/20 hover:text-ink/40 transition-colors cursor-default">
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function Features() {
  return (
    <section className="py-32">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
          <div>
            <span className="text-teal font-medium text-sm uppercase tracking-wider mb-4 block">
              Philosophy
            </span>
            <h2 className="text-section font-semibold mb-6">
              Space to think.
              <br />
              <span className="text-outline">Room to grow.</span>
            </h2>
            <p className="text-lg text-stone leading-relaxed">
              Like the Australian outback, the best tools give you room.
              No clutter on the horizon. No noise in the wind.
              Just you and the work stretching out before you.
            </p>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-3xl bg-ink overflow-hidden relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <Logo size={200} className="text-teal/30" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-tr from-teal/20 to-transparent" />
            </div>
            <div className="absolute -bottom-8 -right-8 w-32 h-32 rounded-2xl bg-teal glow-teal flex items-center justify-center">
              <span className="text-white text-4xl font-bold">10x</span>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard
            number="01"
            title="Clear skies"
            description="No loading screens. No waiting. Like the famous Australian light, everything here is crisp, immediate, and unmistakable."
          />
          <FeatureCard
            number="02"
            title="Built to last"
            description="Reliable as the Southern Cross. Security that doesn't waver, privacy that doesn't compromise, infrastructure that simply endures."
          />
          <FeatureCard
            number="03"
            title="Mate-ship"
            description="Collaboration the Australian way — direct, honest, and without pretence. Your team moves as one, no friction in between."
          />
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ number, title, description }: { number: string; title: string; description: string }) {
  return (
    <div className="group p-8 rounded-2xl border border-ink/5 bg-white hover:border-teal/30 hover:shadow-xl hover:shadow-teal/5 transition-all duration-500">
      <span className="text-teal font-mono text-sm mb-6 block">{number}</span>
      <h3 className="text-2xl font-semibold mb-3 group-hover:text-teal transition-colors">{title}</h3>
      <p className="text-stone leading-relaxed">{description}</p>
    </div>
  );
}

function Showcase() {
  return (
    <section className="py-32 bg-ink text-white overflow-hidden">
      <div className="container-wide">
        <div className="text-center mb-20">
          <h2 className="text-section font-semibold mb-6">
            For those who see <span className="text-teal">further.</span>
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Down here, we look up at different stars.
            We see things from a different angle.
            SNOWSY is built for people who appreciate that perspective.
          </p>
        </div>

        <div className="relative">
          <div className="aspect-[16/9] rounded-3xl bg-slate overflow-hidden border border-white/10">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <Logo size={120} className="text-teal/50 mx-auto mb-6" />
                <p className="text-white/40 text-sm">A canvas as vast as the outback sky</p>
              </div>
            </div>
          </div>

          <div className="absolute -top-6 -left-6 w-24 h-24 rounded-xl bg-teal/20 backdrop-blur-sm border border-teal/30 flex items-center justify-center animate-float">
            <span className="text-teal text-2xl font-bold">✦</span>
          </div>

          <div className="absolute -bottom-6 -right-6 w-32 h-24 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 p-4" style={{ animationDelay: '2s' }}>
            <div className="h-2 w-16 bg-white/20 rounded mb-2" />
            <div className="h-2 w-12 bg-teal/40 rounded" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Stats() {
  return (
    <section className="py-32">
      <div className="container-wide">
        <div className="grid md:grid-cols-4 gap-8 text-center">
          <StatItem value="50K+" label="Global users" />
          <StatItem value="99.9%" label="Always there" />
          <StatItem value="<50ms" label="Anywhere on Earth" />
          <StatItem value="AU" label="Proudly made" />
        </div>
      </div>
    </section>
  );
}

function StatItem({ value, label }: { value: string; label: string }) {
  return (
    <div className="p-8">
      <div className="text-5xl md:text-6xl font-bold text-gradient mb-2">{value}</div>
      <div className="text-stone">{label}</div>
    </div>
  );
}

function CTA() {
  return (
    <section className="py-32">
      <div className="container-wide">
        <div className="relative rounded-[2.5rem] bg-ink text-white p-12 md:p-20 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-teal/20 blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-teal/10 blur-[80px] pointer-events-none" />

          <div className="relative max-w-2xl">
            <h2 className="text-hero font-semibold mb-6">
              G'day.
              <br />
              <span className="text-teal">Let's build something.</span>
            </h2>
            <p className="text-xl text-white/60 mb-10">
              No fuss. No complicated onboarding.
              Just good tools, ready when you are.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/pricing" className="btn-primary bg-white text-ink hover:bg-teal hover:text-white">
                <span>Get started free</span>
                <BsArrowRight />
              </Link>
              <Link to="/features" className="btn-secondary border-white/20 text-white hover:bg-white hover:text-ink">
                <span>Explore more</span>
              </Link>
            </div>
          </div>

          <div className="absolute bottom-8 right-8 md:bottom-16 md:right-16 hidden lg:block">
            <Logo size={200} className="text-white/5" />
          </div>
        </div>
      </div>
    </section>
  );
}
