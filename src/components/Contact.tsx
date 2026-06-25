import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowRight, Mail, MapPin } from "lucide-react";
import { IconLinkedIn, IconX, IconGitHub } from "@/components/SocialIcons";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } },
};

const inputCls =
  "w-full bg-[rgba(13,13,20,0.6)] border border-[rgba(123,94,248,0.18)] rounded-xl px-4 py-3 text-[var(--white-soft)] placeholder:text-[var(--dust)] outline-none focus:border-[var(--violet)] focus:ring-2 focus:ring-[rgba(123,94,248,0.25)] transition-all";

export function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="relative py-32 md:py-40 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }}
          variants={{ show: { transition: { staggerChildren: 0.12 } } }}
          className="max-w-3xl mb-16"
        >
          <motion.div variants={fadeUp} className="font-mono-eyebrow text-[var(--violet-light)]">
            [ LET'S CONNECT ]
          </motion.div>
          <motion.h2 variants={fadeUp}
            className="font-display mt-5 font-medium tracking-tight leading-[1.05]"
            style={{ fontSize: "clamp(34px, 5vw, 56px)" }}>
            Start the conversation.
          </motion.h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-panel rounded-2xl p-8"
          >
            {sent ? (
              <div className="min-h-[420px] flex flex-col items-center justify-center text-center">
                <div className="w-14 h-14 rounded-full violet-gradient flex items-center justify-center mb-6">
                  <ArrowRight className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-display text-2xl text-[var(--white-soft)]">Message received.</h3>
                <p className="text-[var(--muted)] mt-2">We'll be in touch.</p>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="space-y-5">
                <div>
                  <label className="font-mono-eyebrow text-[var(--dust)] mb-2 block">Your Name</label>
                  <input required type="text" className={inputCls} placeholder="Jane Doe" />
                </div>
                <div>
                  <label className="font-mono-eyebrow text-[var(--dust)] mb-2 block">Email Address</label>
                  <input required type="email" className={inputCls} placeholder="jane@company.com" />
                </div>
                <div>
                  <label className="font-mono-eyebrow text-[var(--dust)] mb-2 block">Subject</label>
                  <select required defaultValue="" className={inputCls}>
                    <option value="" disabled>Select a topic…</option>
                    <option>General Inquiry</option>
                    <option>Partnership</option>
                    <option>Press</option>
                    <option>Product Demo</option>
                  </select>
                </div>
                <div>
                  <label className="font-mono-eyebrow text-[var(--dust)] mb-2 block">Message</label>
                  <textarea required rows={5} className={inputCls} placeholder="Tell us what you're building…" />
                </div>
                <button type="submit" className="btn-violet w-full justify-center">
                  Send Message <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="relative"
          >
            <motion.svg viewBox="0 0 400 400"
              className="absolute -top-10 -right-10 w-[420px] h-[420px] opacity-30 pointer-events-none"
              animate={{ rotate: 360 }}
              transition={{ duration: 90, repeat: Infinity, ease: "linear" }}>
              <polygon points="200,40 360,140 360,260 200,360 40,260 40,140" fill="none" stroke="#7B5EF8" strokeOpacity="0.5" />
              <polygon points="200,90 320,160 320,240 200,310 80,240 80,160" fill="none" stroke="#9F6EFF" strokeOpacity="0.4" />
              <line x1="200" y1="40" x2="200" y2="360" stroke="#7B5EF8" strokeOpacity="0.25" />
              <line x1="40" y1="140" x2="360" y2="260" stroke="#7B5EF8" strokeOpacity="0.25" />
              <line x1="360" y1="140" x2="40" y2="260" stroke="#7B5EF8" strokeOpacity="0.25" />
            </motion.svg>

            <div className="relative space-y-8 pt-4">
              <div>
                <div className="font-mono-eyebrow text-[var(--dust)] mb-3">Reach Us</div>
                <a href="mailto:hello@aretonlabs.com"
                   className="font-display text-2xl md:text-3xl text-[var(--white-soft)] hover:text-[var(--violet-light)] transition-colors inline-flex items-center gap-3">
                  <Mail className="w-6 h-6 text-[var(--violet-light)]" />
                  hello@aretonlabs.com
                </a>
              </div>
              <div>
                <div className="font-mono-eyebrow text-[var(--dust)] mb-3">Location</div>
                <p className="text-[var(--muted)] inline-flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-[var(--violet-light)]" />
                  Operating across continents · Headquartered in the cloud
                </p>
              </div>
              <div>
                <div className="font-mono-eyebrow text-[var(--dust)] mb-3">Follow</div>
                <div className="flex gap-3">
                  {[
                    { Icon: IconLinkedIn, href: "#" },
                    { Icon: IconX, href: "#" },
                    { Icon: IconGitHub, href: "#" },
                  ].map(({ Icon, href }, i) => (
                    <a key={i} href={href}
                       className="w-11 h-11 rounded-full border border-[rgba(123,94,248,0.2)] bg-[rgba(17,17,32,0.6)] flex items-center justify-center text-[var(--muted)] hover:text-[var(--white-soft)] hover:border-[var(--violet)] transition-all">
                      <Icon className="w-4.5 h-4.5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
