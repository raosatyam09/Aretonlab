import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 20);
    on();
    window.addEventListener("scroll", on);
    return () => window.removeEventListener("scroll", on);
  }, []);

  const links = [
    { label: "About", href: "#about" },
    { label: "Products", href: "#products" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled
            ? "backdrop-blur-xl bg-[rgba(5,5,8,0.7)] border-b border-[rgba(123,94,248,0.12)]"
            : "bg-transparent"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 lg:px-10 h-16 md:h-20 flex items-center justify-between">
          <a href="#top" className="font-display text-lg md:text-xl font-semibold tracking-tight">
            <span className="text-[var(--white-soft)]">ARETON</span>{" "}
            <span className="text-[var(--violet)]">LABS</span>
          </a>

          <div className="hidden md:flex items-center gap-10">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-[var(--muted)] hover:text-[var(--white-soft)] transition-colors"
              >
                {l.label}
              </a>
            ))}
          </div>

          <div className="hidden md:block">
            <a href="#products" className="btn-violet text-sm">
              Try Arete <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <button
            className="md:hidden text-[var(--white-soft)]"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-[rgba(5,5,8,0.97)] backdrop-blur-xl md:hidden"
          >
            <div className="flex items-center justify-between h-16 px-6">
              <span className="font-display text-lg font-semibold">
                <span className="text-[var(--white-soft)]">ARETON</span>{" "}
                <span className="text-[var(--violet)]">LABS</span>
              </span>
              <button onClick={() => setOpen(false)} aria-label="Close menu">
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="flex flex-col items-center justify-center gap-8 mt-20">
              {links.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.08 }}
                  className="font-display text-3xl text-[var(--white-soft)]"
                >
                  {l.label}
                </motion.a>
              ))}
              <motion.a
                href="#products"
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="btn-violet mt-4"
              >
                Try Arete <ArrowRight className="w-4 h-4" />
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
