import { Accordion } from "@/components/accordion";
import { AppImage } from "@/components/app-image";
import { Calendar } from "@/components/calendar";
import { Marquee } from "@/components/marquee";
import { TrustBadge } from "@/components/trust-badge";
import { getArticles } from "@/lib/data/blog";
import { cn } from "@/lib/utils";
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

function Process() {
  return (
    <section className="mb-16 flex flex-col gap-y-6">
      <span className="mb-2 w-fit rounded-md bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
        Our Process
      </span>
      <h2 className="text-2xl font-bold sm:text-3xl md:text-4xl">
        Effortless Process, Continuous Delivery
      </h2>
      <p className="max-w-xl text-base text-gray-700">
        Our process is designed for clarity, speed, and quality. Here's how we
        take your project from idea to launch and beyond.
      </p>
      <div className="mb-2 overflow-x-auto">
        <div className="flex min-w-[700px] gap-6 sm:min-w-full">
          {[
            {
              title: "Discovery",
              desc: "We learn about your goals, challenges, and vision to set a strong foundation.",
            },
            {
              title: "Planning",
              desc: "We define the roadmap, deliverables, and timelines for a clear project path.",
            },
            {
              title: "Design",
              desc: "We craft beautiful, user-centric interfaces and experiences.",
            },
            {
              title: "Development",
              desc: "We build robust, scalable solutions using modern technologies.",
            },
            {
              title: "Launch",
              desc: "We deploy, test, and ensure a smooth go-live for your product.",
            },
            {
              title: "Support",
              desc: "We provide ongoing support, updates, and improvements.",
            },
          ].map((step, idx) => (
            <div
              key={step.title}
              className="flex h-64 w-64 flex-shrink-0 flex-col justify-between rounded-2xl bg-blue-50 px-6 py-8"
            >
              <div>
                <div className="mb-1 text-lg font-semibold text-blue-600">
                  {String(idx + 1).padStart(2, "0")}.
                </div>
                <div className="mb-3 text-xl font-bold text-gray-900">
                  {step.title}
                </div>
                <div className="text-sm leading-relaxed text-gray-700">
                  {step.desc}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Techstack() {
  return (
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
  );
}

function Transparency() {
  return (
    <section className="flex flex-col gap-y-6">
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
          in our process. Transparency isn&apos;t just a value—it&apos;s how we
          operate, every day.
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
            &quot;Open source means we can build on top of their work and trust
            that there are no hidden surprises.&quot;
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
          We keep you in the loop at every step. Here's what a typical
          conversation looks like between you and our team.
        </p>
      </div>
    </section>
  );
}

function Chat() {
  return (
    <section className="mb-16 w-full rounded-2xl bg-gray-50 px-4 py-10">
      <div className="flex flex-col gap-y-8">
        {/* You (client) message 1 */}
        <div className="flex w-full flex-row-reverse items-start gap-3">
          <div className="relative size-9">
            <AppImage
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="You"
              className="h-full w-full rounded-full border-2 border-white bg-blue-200"
            />
          </div>
          <div className="flex flex-col items-end">
            <div className="mb-1 flex items-center gap-2">
              <span className="text-xs text-gray-400">10:02 AM</span>
              <span className="text-sm font-semibold text-gray-900">You</span>
            </div>
            <div className="max-w-[90vw] rounded-xl bg-blue-600 px-5 py-3 text-white shadow sm:max-w-[60%]">
              Hi! The homepage draft looks great. Could we try a different
              accent color for the call-to-action button?
            </div>
          </div>
        </div>
        {/* We (agency) message 2 */}
        <div className="flex w-full items-start gap-3">
          <div className="relative size-9">
            <AppImage
              src="https://randomuser.me/api/portraits/men/65.jpg"
              alt="We"
              className="h-full w-full rounded-full border-2 border-white bg-blue-200"
            />
          </div>
          <div>
            <div className="mb-1 flex items-center gap-2">
              <span className="text-sm font-semibold text-gray-900">
                Ketryon
              </span>
              <span className="text-xs text-gray-400">10:03 AM</span>
            </div>
            <div className="max-w-[90vw] rounded-xl bg-white px-5 py-3 text-gray-900 shadow sm:max-w-[60%]">
              Absolutely! We'll send over a few color options by tomorrow.
            </div>
          </div>
        </div>
        {/* You (client) message 3 */}
        <div className="flex w-full flex-row-reverse items-start gap-3">
          <div className="relative size-9">
            <AppImage
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="You"
              className="h-full w-full rounded-full border-2 border-white bg-blue-200"
            />
          </div>
          <div className="flex flex-col items-end">
            <div className="mb-1 flex items-center gap-2">
              <span className="text-xs text-gray-400">10:04 AM</span>
              <span className="text-sm font-semibold text-gray-900">You</span>
            </div>
            <div className="max-w-[90vw] rounded-xl bg-blue-600 px-5 py-3 text-white shadow sm:max-w-[60%]">
              Thanks! Also, can you clarify the timeline for the blog
              integration?
            </div>
          </div>
        </div>
        {/* We (agency) message 4 */}
        <div className="flex w-full items-start gap-3">
          <div className="relative size-9">
            <AppImage
              src="https://randomuser.me/api/portraits/men/65.jpg"
              alt="We"
              className="h-full w-full rounded-full border-2 border-white bg-blue-200"
            />
          </div>
          <div>
            <div className="mb-1 flex items-center gap-2">
              <span className="text-sm font-semibold text-gray-900">
                Ketryon
              </span>
              <span className="text-xs text-gray-400">10:05 AM</span>
            </div>
            <div className="max-w-[90vw] rounded-xl bg-white px-5 py-3 text-gray-900 shadow sm:max-w-[60%]">
              Of course! We're on track to deliver the blog feature by next
              Friday.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section className="flex flex-col gap-y-6">
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
        &quot;Their products and services helped us launch faster and scale with
        confidence.&quot;
        <div className="mt-2 text-sm text-gray-500">
          Taylor R. • Startup Founder
        </div>
      </div>
    </section>
  );
}

function Flexibility() {
  return (
    <section className="flex flex-col gap-y-6">
      <span className="mb-2 w-fit rounded-md bg-orange-100 px-3 py-1 text-xs font-semibold text-orange-700">
        Platform Flexibility
      </span>
      <h2 className="text-2xl font-bold sm:text-3xl md:text-4xl">
        We adapt to your workflow, not the other way around
      </h2>
      <p className="max-w-2xl text-base font-light text-gray-700">
        Whether you use Slack, Notion, Jira, Google Workspace, or any other
        platform, we seamlessly integrate with your existing tools. Our team is
        flexible and ready to adapt to your unique processes—no need to change
        what already works for you.
      </p>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div>
          <h3 className="mb-2 text-lg font-semibold">Seamless Integration</h3>
          <p className="font-light text-gray-700">
            We work directly within your current stack—collaborating in your
            preferred tools, automating workflows, and ensuring everything stays
            connected. No disruption, just results.
          </p>
        </div>
        <div>
          <h3 className="mb-2 text-lg font-semibold">Custom Solutions</h3>
          <p className="font-light text-gray-700">
            Every business is unique. We tailor our solutions to fit your needs,
            building custom integrations and automations that help you work
            smarter, not harder.
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
          <span className="text-xs text-gray-500">Morgan, Product Manager</span>
        </div>
        <div className="flex flex-col items-start gap-2">
          <span className="text-yellow-400">★★★★★</span>
          <p className="text-sm text-gray-800">
            &quot;No need to migrate or retrain—everything just worked with our
            existing setup.&quot;
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
  );
}

function Faq() {
  return (
    <section className="flex flex-col gap-y-6">
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
        />
      </div>
    </section>
  );
}

async function Blog() {
  const posts = await getArticles();

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
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" />
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

  return (
    <section className="flex flex-col gap-y-6">
      <span className="mb-2 w-fit rounded-md bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
        Blog
      </span>
      <h2 className="text-2xl font-bold sm:text-3xl md:text-4xl">
        Latest Insights
      </h2>
      <ul className="divide-y divide-gray-100">
        {posts.map((post, index) => (
          <li
            key={post.id}
            className={cn(index ? "py-7" : "pb-7", "group flex flex-col gap-2")}
          >
            {post.tag && (
              <span className="mb-1 w-fit rounded-full bg-blue-50 px-2 py-0.5 text-[11px] font-medium text-blue-700">
                {post.tag}
              </span>
            )}
            <div className="mb-1 flex items-center gap-2">
              <Link
                href={`/${post.slug}`}
                className="text-xl font-bold text-gray-900 transition-colors hover:underline focus:underline"
              >
                {post.title}
              </Link>
            </div>
            <p className="mb-1 max-w-2xl text-base font-light text-gray-700">
              {post.excerpt}
            </p>
            <div className="font-mono text-xs tracking-tight text-gray-400">
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}{" "}
              &middot; {post.author.name}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default async function Home() {
  return (
    <main className="relative mx-auto flex w-full max-w-5xl flex-col gap-y-12 px-4 py-16">
      <Header />
      <Process />
      <Techstack />
      <Calendar />
      <Transparency />
      <Chat />
      <Services />
      <Flexibility />
      <Faq />
      <Blog />
    </main>
  );
}
