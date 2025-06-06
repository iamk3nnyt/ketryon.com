import { Accordion } from "@/components/accordion";
import { AppImage } from "@/components/app-image";
import { Calendar } from "@/components/calendar";
import { Marquee } from "@/components/marquee";
import { TrustBadge } from "@/components/trust-badge";
import { cn } from "@/lib/utils";
import Arrow from "@/public/arrow.svg";
import { ArrowRight } from "lucide-react";
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
        href="/contact"
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
            <span>✔️</span> Custom Software Development
          </li>
          <li className="flex items-center gap-2">
            <span>✔️</span> Product Design & Prototyping
          </li>
          <li className="flex items-center gap-2">
            <span>✔️</span> Technical Consulting
          </li>
          <li className="flex items-center gap-2">
            <span>✔️</span> Open Source Solutions
          </li>
          <li className="flex items-center gap-2">
            <span>✔️</span> Ongoing Support & Maintenance
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
              Need something special? We build custom integrations and adapt our
              process to fit your business, not the other way around. Your
              workflow, your rules.
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
      {/* FAQ Section */}
      <section className="mt-8 flex flex-col gap-y-8">
        <span className="mb-2 w-fit rounded-md bg-purple-100 px-3 py-1 text-xs font-semibold text-purple-700">
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
            className="mt-4"
          />
        </div>
      </section>
      {/* Blog Section */}
      <section className="mt-8 flex flex-col gap-y-8">
        <span className="mb-2 w-fit rounded-md bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
          Blog
        </span>
        <h2 className="text-2xl font-bold sm:text-3xl md:text-4xl">
          Latest Insights
        </h2>
        <ul className="divide-y divide-gray-100">
          {[
            {
              id: 1,
              title: "Why Transparency Matters in Software Projects",
              excerpt:
                "Explore how open communication and visibility lead to better outcomes for clients and teams.",
              date: "2024-06-01",
              author: "Kim Tran",
              tag: "Transparency",
            },
            {
              id: 2,
              title: "Integrating with Your Existing Tools: A Guide",
              excerpt:
                "A practical look at how we connect with Slack, Notion, Jira, and more—no migration headaches.",
              date: "2024-05-20",
              author: "Alex P.",
              tag: "Integration",
            },
            {
              id: 3,
              title: "Open Source: The Agency Advantage",
              excerpt:
                "Why building in the open benefits both our clients and the wider tech community.",
              date: "2024-05-10",
              author: "Jamie L.",
              tag: "Open Source",
            },
          ].map((post) => (
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
          ))}
        </ul>
      </section>
    </main>
  );
}
