import { Accordion } from "@/components/accordion";
import { AppImage } from "@/components/app-image";
import { Calendar } from "@/components/calendar";
import { Marquee } from "@/components/marquee";
import { TrustBadge } from "@/components/trust-badge";
import { cn } from "@/lib/utils";
import ArrowReverse from "@/public/arrow-reverse.svg";
import Arrow from "@/public/arrow.svg";
import { ArrowRight, Check } from "lucide-react";
import { Handlee } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const handlee = Handlee({ weight: ["400"], subsets: ["latin"] });

function Header() {
  return (
    <header className="flex flex-col gap-y-6">
      <h1 className="text-3xl font-bold tracking-tight sm:text-5xl md:text-5xl">
        Building Software with
        <br />
        <span className="text-blue-600">Transparency & Efficiency</span>
      </h1>
      <p className="max-w-lg text-gray-600 sm:text-lg">
        <span className="font-light">We deliver exceptional</span>{" "}
        <b>software solutions</b>{" "}
        <span className="font-light">through clear</span> <b>processes</b>{" "}
        <span className="font-light">and streamlined</span> <b>workflows</b>,{" "}
        <span className="font-light">
          ensuring your success every step of the way.
        </span>
      </p>
      <TrustBadge />
      <Link
        href="/#book-a-call"
        className="group inline-flex w-fit items-center gap-x-2 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 px-7 py-3 text-base font-semibold text-white shadow transition hover:from-blue-700 hover:to-blue-600 focus:ring-2 focus:ring-blue-200 focus:outline-none"
      >
        <span>Start Your Project</span>
        <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
      </Link>
    </header>
  );
}

export default function Home() {
  return (
    <main className="relative mx-auto flex w-full max-w-5xl flex-col gap-y-12 px-4 py-16">
      <Header />
      <div className="relative">
        <div className="absolute right-0 bottom-16 z-20">
          <span
            className={cn(
              "-ml-12 block -rotate-12 tracking-tighter",
              handlee.className,
            )}
          >
            Our tech stack
          </span>
          <Image alt="arrow" src={Arrow} className="w-16" />
        </div>
        <Marquee />
      </div>
      <Calendar />
      {/* How We Stay Up-to-Date Section (was: webarc.day Product Spotlight) */}
      <section className="mt-12 flex flex-col gap-y-6">
        <span className="mb-2 w-fit rounded-md bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
          How We Stay Current
        </span>
        <h2 className="text-2xl font-bold sm:text-3xl md:text-4xl">
          We keep up with modern web technologies—by curating them ourselves
        </h2>
        <p className="max-w-2xl text-base text-gray-700">
          <span className="font-light">
            Our team tracks the latest frameworks, tools, and best practices
            using our own open-source curation platform,
          </span>{" "}
          <b>webarc.day</b>
          <span className="font-light">
            . Every day, we review and share the most important news, tutorials,
            and trends in web development—so our clients always benefit from the
            cutting edge.
          </span>
        </p>
        <div className="mb-2">
          <a
            href="https://webarc.day"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 rounded text-sm font-medium text-blue-700 underline underline-offset-2 transition hover:text-blue-900 focus:ring-2 focus:ring-blue-200 focus:outline-none"
            aria-label="Visit webarc.day (opens in a new tab)"
          >
            Visit webarc.day
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
        <div className="relative overflow-hidden">
          <div className="absolute left-0 z-20 hidden sm:top-[20%] sm:block lg:top-[30%]">
            <span
              className={cn(
                "block rotate-12 tracking-tighter",
                handlee.className,
              )}
            >
              Real-time analytics
            </span>
            <Image
              alt="arrow-reverse"
              src={ArrowReverse}
              className="w-16 rotate-360"
            />
          </div>
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-white via-transparent via-40% to-transparent" />
          <div className="relative -ml-[25%] aspect-video w-[150%] rounded-xl">
            <AppImage
              src="/webarc-day-og.png"
              alt="Screenshot of webarc.day news aggregation platform"
              className="h-full w-full rounded-xl object-cover"
            />
          </div>
        </div>
      </section>
      {/* Open Source & Transparency Section */}
      <section className="flex flex-col gap-y-4">
        <span className="mb-2 w-fit rounded-md bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
          Open Source & Transparency
        </span>
        <h2 className="text-2xl font-bold sm:text-3xl md:text-4xl">
          Open by Default, Transparent by Design
        </h2>
        <div className="mb-4 max-w-2xl text-gray-700">
          <b>Why Open Source?</b>
          <p className="mt-2 text-base font-light">
            We believe that great software should be accessible, auditable, and
            collaborative. By making our work open source, we invite our clients
            and the community to see how things are built, contribute, and trust
            in our process. Transparency isn&apos;t just a value—it&apos;s how
            we operate, every day.
          </p>
        </div>
        <div className="flex flex-col gap-6 md:flex-row md:gap-8">
          <div className="flex-1 rounded-xl border border-gray-100 p-5">
            <div className="mb-2 flex items-center gap-2">
              <span className="text-yellow-400">★★★★★</span>
            </div>
            <p className="text-gray-800">
              &quot;Seeing the code and process in real time gave us total
              confidence. We always know what&apos;s happening and why.&quot;
            </p>
            <div className="mt-3 flex items-center gap-2 text-sm text-gray-500">
              <span className="font-semibold">Alex P.</span>
              <span>Product Owner</span>
            </div>
          </div>
          <div className="flex-1 rounded-xl border border-gray-100 p-5">
            <div className="mb-2 flex items-center gap-2">
              <span className="text-yellow-400">★★★★★</span>
            </div>
            <p className="text-gray-800">
              &quot;Open source means we can build on top of their work and
              trust that there are no hidden surprises.&quot;
            </p>
            <div className="mt-3 flex items-center gap-2 text-sm text-gray-500">
              <span className="font-semibold">Jamie L.</span>
              <span>CTO</span>
            </div>
          </div>
        </div>
        <div className="mt-6">
          <h3 className="mb-1 text-lg font-semibold">
            Transparency Benefits Everyone
          </h3>
          <p className="max-w-2xl text-gray-600">
            When you can see how your project is built, you gain peace of mind
            and the freedom to innovate. Our open approach ensures you&apos;re
            always in the loop, and the community benefits from shared knowledge
            and continuous improvement.
          </p>
        </div>
      </section>
      {/* Services & Products Section */}
      <section className="flex flex-col gap-y-8">
        <h2 className="text-2xl font-bold sm:text-3xl md:text-4xl">
          Services & Products That Drive Results
        </h2>
        <p className="max-w-2xl text-base font-light text-gray-700">
          We build and launch products that solve real problems, and offer
          services that help you succeed at every stage of your journey.
        </p>
        <ul className="mb-4 flex flex-col gap-2 text-base font-light text-gray-700">
          <li className="flex items-center gap-2">
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-green-100 text-green-700">
              <Check className="size-3" />
            </span>
            Custom Software Development
          </li>
          <li className="flex items-center gap-2">
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-green-100 text-green-700">
              <Check className="size-3" />
            </span>
            Product Design & Prototyping
          </li>
          <li className="flex items-center gap-2">
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-green-100 text-green-700">
              <Check className="size-3" />
            </span>
            Technical Consulting
          </li>
          <li className="flex items-center gap-2">
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-green-100 text-green-700">
              <Check className="size-3" />
            </span>
            Open Source Solutions
          </li>
          <li className="flex items-center gap-2">
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-green-100 text-green-700">
              <Check className="size-3" />
            </span>
            Ongoing Support & Maintenance
          </li>
        </ul>
        <div className="py-4">
          <div className="relative h-96">
            <AppImage
              src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Our work"
              className="h-full w-full rounded-xl object-cover"
            />
          </div>
          <div className="mt-2 text-center text-xs text-gray-400">
            Photo by{" "}
            <a
              href="https://unsplash.com/photos/person-working-on-blue-and-white-paper-on-board-qWwpHwip31M"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              @alvarordesign
            </a>{" "}
            on Unsplash
          </div>
        </div>
        <div className="border-l-4 border-green-500 pl-4 text-gray-800 italic">
          &quot;Their products and services helped us launch faster and scale
          with confidence.&quot;
          <div className="mt-2 text-sm text-gray-500">
            Taylor R. • Startup Founder
          </div>
        </div>
      </section>
      {/* Platform Flexibility Section */}
      <section className="mt-8 flex flex-col gap-y-8">
        <span className="mb-2 w-fit rounded-md bg-orange-100 px-3 py-1 text-xs font-semibold text-orange-700">
          Platform Flexibility
        </span>
        <h2 className="text-2xl font-bold sm:text-3xl md:text-4xl">
          We adapt to your workflow, not the other way around
        </h2>
        <p className="max-w-2xl text-base font-light text-gray-700">
          Whether you use Slack, Notion, Jira, Google Workspace, or any other
          platform, we seamlessly integrate with your existing tools. Our team
          is flexible and ready to adapt to your unique processes—no need to
          change what already works for you.
        </p>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div>
            <h3 className="mb-2 text-lg font-semibold">Seamless Integration</h3>
            <p className="font-light text-gray-700">
              We work directly within your current stack—collaborating in your
              preferred tools, automating workflows, and ensuring everything
              stays connected. No disruption, just results.
            </p>
          </div>
          <div>
            <h3 className="mb-2 text-lg font-semibold">Custom Solutions</h3>
            <p className="font-light text-gray-700">
              Every business is unique. We tailor our solutions to fit your
              needs, building custom integrations and automations that help you
              work smarter, not harder.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-4 py-4 opacity-70">
          <div className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-gray-200 bg-white">
            <div className="relative h-7 w-7">
              <AppImage src="/notion.svg" alt="Notion" className="h-7 w-7" />
            </div>
          </div>
          <div className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-gray-200 bg-white">
            <div className="relative h-7 w-7">
              <AppImage src="/jira.svg" alt="Jira" className="h-7 w-7" />
            </div>
          </div>
          <div className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-gray-200 bg-white">
            <div className="relative h-7 w-7">
              <AppImage src="/slack-icon.svg" alt="Slack" className="h-7 w-7" />
            </div>
          </div>
          <div className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-gray-200 bg-white">
            <div className="relative h-7 w-7">
              <AppImage src="/google.svg" alt="Google" className="h-7 w-7" />
            </div>
          </div>
          <div className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-gray-200 bg-white">
            <div className="relative h-7 w-7">
              <AppImage
                src="/microsoft-teams-color.svg"
                alt="Microsoft Teams"
                className="h-7 w-7"
              />
            </div>
          </div>
        </div>
        <div className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="flex flex-col items-start gap-2">
            <span className="text-yellow-400">★★★★★</span>
            <p className="text-sm text-gray-800">
              &quot;They integrated with our tools so quickly, it felt like
              they&apos;d always been part of our team.&quot;
            </p>
            <span className="text-xs text-gray-500">
              Morgan, Product Manager
            </span>
          </div>
          <div className="flex flex-col items-start gap-2">
            <span className="text-yellow-400">★★★★★</span>
            <p className="text-sm text-gray-800">
              &quot;No need to migrate or retrain—everything just worked with
              our existing setup.&quot;
            </p>
            <span className="text-xs text-gray-500">Samir, CTO</span>
          </div>
          <div className="flex flex-col items-start gap-2">
            <span className="text-yellow-400">★★★★★</span>
            <p className="text-sm text-gray-800">
              &quot;Their flexibility saved us weeks of onboarding and change
              management.&quot;
            </p>
            <span className="text-xs text-gray-500">Ava, Operations Lead</span>
          </div>
        </div>
      </section>
      {/* Founder Section */}
      <section className="mt-12 flex flex-col gap-y-8 md:flex-row md:items-center md:gap-x-12">
        <div className="flex flex-1 flex-col gap-y-4">
          <span className="mb-2 w-fit rounded-md bg-pink-100 px-3 py-1 text-xs font-semibold text-pink-700">
            Meet the Founder
          </span>
          <h2 className="text-2xl font-bold sm:text-3xl md:text-4xl">
            Get to know the person behind Ketryon
          </h2>
          <p className="max-w-md text-base font-light text-gray-700">
            Our founder is passionate about building transparent, efficient, and
            impactful software. With a vision for open collaboration and a love
            for modern web technologies, they lead Ketryon with a focus on
            innovation and client success.
          </p>
          <iframe
            src="https://biohub.fyi/embed/kenny"
            style={{
              minHeight: "384px",
              maxWidth: "320px",
              width: "100%",
            }}
            title="Kenny's Profile Card"
            className="md:hidden"
          />
          {/* CTA for biohub.fyi */}
          <div className="mb-2">
            <span className="mb-1 block text-sm text-gray-600">
              Want to build your own digital identity? <b>biohub.fyi</b> is our
              open-source platform for creating beautiful, customizable profile
              pages—just like the one you see here. Join a growing community of
              makers, founders, and creators.
            </span>
            <a
              href="https://biohub.fyi"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 rounded text-sm font-medium text-pink-700 underline underline-offset-2 transition hover:text-pink-900 focus:ring-2 focus:ring-pink-200 focus:outline-none"
              aria-label="Create your own digital identity with biohub.fyi (opens in a new tab)"
            >
              Create your free profile on biohub.fyi
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
        <iframe
          src="https://biohub.fyi/embed/kenny"
          style={{
            minHeight: "384px",
            maxWidth: "320px",
            width: "100%",
          }}
          title="Kenny's Profile Card"
          className="hidden md:block"
        />
      </section>
      {/* FAQ Section */}
      <section className="mt-8 flex flex-col gap-y-8">
        <span className="w-fit rounded-md bg-purple-100 px-3 py-1 text-xs font-semibold text-purple-700">
          FAQ
        </span>
        <h2 className="text-2xl font-bold sm:text-3xl md:text-4xl">
          Frequently Asked Questions
        </h2>
        <div>
          <Accordion
            items={[
              {
                id: "platforms",
                title: "What platforms do you support?",
                content:
                  "We can integrate with any platform you already use, including Slack, Notion, Jira, Google Workspace, Microsoft Teams, and more.",
              },
              {
                id: "open-source",
                title: "Are your solutions open source?",
                content:
                  "Yes! All our work is open source by default, so you can audit, extend, or reuse anything we build.",
              },
              {
                id: "transparency",
                title: "How do you ensure transparency?",
                content:
                  "We provide real-time project updates, clear communication, and full access to our process and codebase.",
              },
              {
                id: "team-collab",
                title: "Can you work with our existing team?",
                content:
                  "Absolutely. We collaborate directly with your team in your preferred tools and workflows.",
              },
              {
                id: "custom-solutions",
                title: "What if we need something custom?",
                content:
                  "We specialize in custom solutions and integrations tailored to your unique needs.",
              },
            ]}
          />
        </div>
      </section>
      {/* Blog Section */}
      <section className="mt-8 flex flex-col gap-y-8">
        <span className="w-fit rounded-md bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
          Blog
        </span>
        <h2 className="text-2xl font-bold sm:text-3xl md:text-4xl">
          Latest Insights
        </h2>
        <ul className="divide-y divide-gray-100">
          {(() => {
            type Post = {
              id: number;
              title: string;
              excerpt: string;
              date: string;
              author: string;
              tag?: string;
            };
            const posts: Post[] = [];
            // Uncomment and populate posts array to show articles
            // posts.push({ id: 1, title: '...', excerpt: '...', date: '...', author: '...', tag: '...' });
            if (posts.length === 0) {
              return (
                <li className="flex flex-col items-center justify-center py-16 text-center text-gray-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mx-auto mb-2 h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6v6l4 2"
                    />
                    <circle cx="12" cy="12" r="9" />
                  </svg>
                  <span className="text-base">
                    No articles yet.
                    <br />
                    Check back soon for updates!
                  </span>
                </li>
              );
            }
            return posts.map((post) => (
              <li key={post.id} className="group flex flex-col gap-2 py-7">
                {post.tag && (
                  <span className="mb-1 w-fit rounded-full bg-blue-50 px-2 py-0.5 text-[11px] font-medium text-blue-700">
                    {post.tag}
                  </span>
                )}
                <div className="mb-1 flex items-center gap-2">
                  <a
                    href="#"
                    className="text-xl font-bold text-gray-900 transition-colors hover:underline focus:underline"
                  >
                    {post.title}
                  </a>
                </div>
                <p className="mb-1 max-w-2xl text-base font-light text-gray-700">
                  {post.excerpt}
                </p>
                <div className="font-mono text-xs tracking-tight text-gray-400">
                  {post.date} &middot; {post.author}
                </div>
              </li>
            ));
          })()}
        </ul>
      </section>
    </main>
  );
}
