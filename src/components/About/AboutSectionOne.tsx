import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";
import { Blocks, CircleCheckBig, CircleGauge, ClipboardClock, Sparkles, UserLock } from "lucide-react";

const AboutSectionOne = () => {
  const List = ({ text, icon }) => (
    <p className="text-body-color mb-5 flex items-center text-lg font-medium">
      <span className="bg-primary/10 text-primary mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md">
        {icon || <CircleCheckBig className="h-5 w-5" />}
      </span>
      {text}
    </p>
  );

  return (
    <section id="about" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">

          {/*
          <p className="text-center mb-8 text-lg font-semibold text-primary md:mb-12">
            Current Project
          </p>
          */}
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <Image
                src="/images/logo/eventies.svg"
                alt="Eventies EMS Logo"
                width={250}
                height={75}
                className="mb-6"
              />
              <SectionTitle
                title="Eventies EMS"
                paragraph="Eventies EMS is a member-first event management system designed for educational organizations. It streamlines internal, member-only events with robust RBAC, approval workflows, seamless integrations (Canva, Google), and AI assistance. Eventies enhances, not replaces, existing tools—offering privacy, compliance, and data sovereignty through flexible SaaS or self-hosted deployment options."
                mb="44px"
              />

              <div
                className="mb-12 max-w-[570px] lg:mb-0"
                data-wow-delay=".15s"
              >
                <div className="mx-[-12px] flex flex-wrap">
                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <List text="Member-first access" icon={<UserLock className="h-5 w-5" />} />
                    <List text="Approval workflows" icon={<CircleCheckBig className="h-5 w-5" />} />
                    <List text="Smart integrations" icon={<Blocks className="h-5 w-5" />} />
                  </div>

                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <List text="Unified dashboard" icon={<CircleGauge className="h-5 w-5" />} />
                    <List text="Attendance tracking" icon={<ClipboardClock className="h-5 w-5" />} />
                    <List text="AI assistance" icon={<Sparkles className="h-5 w-5" />} />
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full px-4 lg:w-1/2">
              <div className="relative mx-auto aspect-25/24 max-w-[500px] lg:mr-0">
                <Image
                  src="/images/about/about-image.svg"
                  alt="about-image"
                  fill
                  className="mx-auto max-w-full drop-shadow-three dark:hidden dark:drop-shadow-none lg:mr-0"
                />
                <Image
                  src="/images/about/about-image-dark.svg"
                  alt="about-image"
                  fill
                  className="mx-auto hidden max-w-full drop-shadow-three dark:block dark:drop-shadow-none lg:mr-0"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionOne;
