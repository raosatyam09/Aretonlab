import { Mail, MessageCircle } from "lucide-react";
import { IconLinkedIn } from "@/components/SocialIcons";
// import aretonLogo from "@/assets/areton-logo.png.asset.json";
import aretonLogo from "@/assets/areton-logo.png";

const contactItems = [
  { icon: Mail, label: "founder@aretonlabs.com", href: "mailto:founder@aretonlabs.com" },
  { icon: MessageCircle, label: "+91 7523966684", href: "https://wa.me/7523966684" },
  { icon: IconLinkedIn, label: "linkedin.com/company/areton-labs", href: "https://www.linkedin.com/company/areton-labs" },
];

const linkColumns = [
  {
    heading: "Quick Links",
    links: [
      { label: "Home", href: "#" },
      { label: "About", href: "#about" },
      { label: "Products", href: "#products" },
      { label: "Blog", href: "#blog" },
      { label: "Careers", href: "#careers" },
      { label: "Contact", href: "#contact" },
    ],
  },
  {
    heading: "Products",
    links: [
      { label: "Arete AI", href: "#products" },
      { label: "Resume & ATS", href: "#products" },
      { label: "Interview Prep", href: "#products" },
      { label: "Job Recommendations", href: "#products" },
      { label: "Learning & Growth", href: "#products" },
    ],
  },
  {
    heading: "Support",
    links: [
      { label: "Help Center", href: "#help" },
      { label: "Privacy Policy", href: "#privacy" },
      { label: "Terms of Service", href: "#terms" },
      { label: "Cookie Policy", href: "#cookies" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative border-t border-[rgba(123,94,248,0.1)] px-6 lg:px-10 pt-16 pb-10">
      <div className="max-w-7xl mx-auto">

        {/* Brand + Tagline */}
        <div className="flex flex-col items-center text-center">
          <img
            src={aretonLogo}
            alt="Areton Labs"
            className="h-12 lg:h-14 w-auto object-contain"
          />
          <p className="mt-4 text-[var(--muted)] max-w-md leading-relaxed">
            Where Human Potential Meets Artificial Intelligence
          </p>

          {/* Contact Row */}
          <div className="mt-8 flex flex-col sm:flex-row items-center gap-6 sm:gap-10">
            {contactItems.map((item) => (
              
               <a key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group flex items-center gap-2 text-[var(--muted)] hover:text-[var(--white-soft)] transition-colors"
              >
                <span className="w-9 h-9 rounded-full border border-[rgba(123,94,248,0.15)] flex items-center justify-center text-[var(--violet-light)] group-hover:border-[var(--violet)] transition-all shrink-0">
                  <item.icon className="w-4 h-4" />
                </span>
                <span className="text-sm">{item.label}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Link Columns */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-8">
          {linkColumns.map((col) => (
            <div key={col.heading}>
              <div className="font-mono-eyebrow text-[var(--dust)] mb-4 text-xs tracking-wider uppercase">
                {col.heading}
              </div>
              <ul className="space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    
                    <a  href={l.href}
                      className="text-[var(--muted)] hover:text-[var(--white-soft)] transition-colors text-sm"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-[rgba(123,94,248,0.08)] flex flex-col items-center gap-2 text-center">
          <div className="font-mono text-xs text-[var(--dust)]">
            © {new Date().getFullYear()} Areton Labs · Built at the edge of the possible.
          </div>
        </div>

      </div>
    </footer>
  );
}