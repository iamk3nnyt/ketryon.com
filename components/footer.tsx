import Link from "next/link";

const navigation = {
  main: [
    { name: "Home", href: "/" },
    { name: "Process", href: "/#process" },
    { name: "Tech Stack", href: "/#tech-stack" },
    { name: "Transparency", href: "/#transparency" },
    { name: "Services", href: "/#services" },
    { name: "FAQ", href: "/#faq" },
    { name: "Legal", href: "/legal" },
    { name: "Contact", href: "/#book-a-call" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white">
      <div className="mx-auto max-w-5xl px-4 py-12">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="flex flex-col gap-y-4">
            <Link href="/" className="flex items-center gap-x-2">
              <span className="text-xl font-bold text-gray-900">Ketryon</span>
            </Link>
            <p className="max-w-xs text-sm text-gray-600">
              Building software with transparency and efficiency. We deliver
              exceptional solutions through clear processes and streamlined
              workflows.
            </p>
          </div>

          <div className="flex flex-col gap-y-4">
            <h3 className="text-sm font-semibold text-gray-900">Navigation</h3>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-600 transition hover:text-gray-900"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-100 pt-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
            <p className="text-sm text-gray-600">
              © {new Date().getFullYear()} Ketryon. All rights reserved.
            </p>
            <div className="flex gap-4">
              <Link
                href="/legal/privacy-policy"
                className="text-sm text-gray-600 transition hover:text-gray-900"
              >
                Privacy
              </Link>
              <Link
                href="/legal/terms"
                className="text-sm text-gray-600 transition hover:text-gray-900"
              >
                Terms
              </Link>
              <Link
                href="/legal/cookies"
                className="text-sm text-gray-600 transition hover:text-gray-900"
              >
                Cookies
              </Link>
              <Link
                href="/legal/refund"
                className="text-sm text-gray-600 transition hover:text-gray-900"
              >
                Refund
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
