import { AppImage } from "@/components/app-image";
import Link from "next/link";

const team = [
  {
    name: "Kenny Tran",
    role: "Founder & CEO",
    image: "/avatar.png",
    bio: "Passionate about building transparent software solutions that make a difference.",
    href: "/kenny",
  },
];

export function Team() {
  return (
    <section className="mb-16 flex flex-col gap-y-6">
      <span className="mb-2 w-fit rounded-md bg-purple-100 px-3 py-1 text-xs font-semibold text-purple-700">
        Meet the Team
      </span>
      <h2 className="text-2xl font-bold sm:text-3xl md:text-4xl">
        The People Behind Ketryon
      </h2>
      <p className="max-w-xl text-base text-gray-700">
        We're a team of passionate developers, designers, and product
        enthusiasts dedicated to building exceptional software with transparency
        and efficiency.
      </p>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {team.map((member) => (
          <Link
            className="group flex flex-col gap-y-4 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition hover:border-gray-200"
            href={member.href}
            key={member.name}
          >
            <div className="relative aspect-square overflow-hidden rounded-xl">
              <AppImage
                alt={`${member.name}'s photo`}
                src={member.image}
                className="object-cover transition group-hover:scale-105"
              />
            </div>
            <div className="flex flex-col gap-y-1">
              <h3 className="font-semibold text-gray-900 group-hover:text-blue-600">
                {member.name}
              </h3>
              <p className="text-sm text-gray-600">{member.role}</p>
              <p className="mt-2 text-sm text-gray-600">{member.bio}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
