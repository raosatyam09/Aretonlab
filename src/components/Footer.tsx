import { IconLinkedIn, IconX, IconGitHub } from "@/components/SocialIcons";

export function Footer() {
  return (
    <footer className="relative border-t border-[rgba(123,94,248,0.1)] px-6 lg:px-10 pt-20 pb-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <div className="font-display text-xl font-semibold">
              <span className="text-[var(--white-soft)]">ARETON</span>{" "}
              <span className="text-[var(--violet)]">LABS</span>
            </div>
            <p className="mt-4 text-[var(--muted)] max-w-sm leading-relaxed">
              We fill the quantum gap. Engineering AI-native products and deep-tech infrastructure at the edge of the possible.
            </p>
            <a href="mailto:hello@aretonlabs.com"
               className="inline-block mt-6 text-[var(--white-soft)] hover:text-[var(--violet-light)] transition-colors">
              hello@aretonlabs.com
            </a>
          </div>

          <div>
            <div className="font-mono-eyebrow text-[var(--dust)] mb-4">Explore</div>
            <ul className="space-y-3">
              {[
                { label: "About", href: "#about" },
                { label: "Products", href: "#products" },
                { label: "Contact", href: "#contact" },
              ].map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-[var(--muted)] hover:text-[var(--white-soft)] transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="font-mono-eyebrow text-[var(--dust)] mb-4">Products</div>
            <ul className="space-y-3">
              <li><a href="#products" className="text-[var(--muted)] hover:text-[var(--white-soft)] transition-colors">Arete AI</a></li>
              <li><a href="#products" className="text-[var(--muted)] hover:text-[var(--white-soft)] transition-colors">Englingen</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-[rgba(123,94,248,0.08)] flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
          <div className="font-mono text-xs text-[var(--dust)]">
            © {new Date().getFullYear()} Areton Labs · Built at the edge of the possible.
          </div>
          <div className="flex gap-3">
            {[IconLinkedIn, IconX, IconGitHub].map((Icon, i) => (
              <a key={i} href="#"
                 className="w-9 h-9 rounded-full border border-[rgba(123,94,248,0.15)] flex items-center justify-center text-[var(--muted)] hover:text-[var(--white-soft)] hover:border-[var(--violet)] transition-all">
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
