import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import butterflyAsset from "@/assets/butterfly.png.asset.json";
import { Earth3D } from "@/components/Earth3D";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } },
};

function AreteVisual() {
  return (
    <div
      className="relative w-full aspect-video rounded-2xl overflow-hidden"
      style={{
        border: "1px solid rgba(123,94,248,0.25)",
        boxShadow: "0 30px 80px -30px rgba(123,94,248,0.4)",
      }}
    >
      <iframe
        className="w-full h-full"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        title="Arete AI — Product Demo"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}

/** Slow-flapping butterfly used in the Englingen card — uses the brand PNG */
function FlappingButterfly() {
  return (
    <div className="relative w-full aspect-[4/3] flex items-center justify-center">
      <div
        className="absolute inset-0"
        style={{ background: "radial-gradient(circle at 50% 50%, rgba(80,130,255,0.18), transparent 70%)" }}
      />
      <motion.img
        src={butterflyAsset.url}
        alt="Englingen"
        draggable={false}
        className="relative w-2/3 max-w-[260px] select-none"
        style={{
          transformOrigin: "50% 50%",
          filter: "drop-shadow(0 20px 50px rgba(80,130,255,0.4))",
        }}
        animate={{ scaleX: [1, 0.55, 1], y: [0, -6, 0] }}
        transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}

function WaitlistForm() {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState("");

  if (submitted) {
    return (
      <div className="mt-8 rounded-2xl border border-[rgba(123,94,248,0.25)] bg-[rgba(123,94,248,0.06)] px-5 py-4 max-w-md">
        <p className="text-[var(--white-soft)]">We'll notify you when we launch.</p>
      </div>
    );
  }

  if (!open) {
    return (
      <button
        onClick={() => setOpen(true)}
        className="btn-violet mt-8"
      >
        Join the Waitlist <ArrowRight className="w-4 h-4" />
      </button>
    );
  }

  return (
    <form
      onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
      className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md"
    >
      <input
        autoFocus
        required
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@domain.com"
        className="flex-1 bg-[rgba(13,13,20,0.6)] border border-[rgba(123,94,248,0.25)] rounded-full px-5 py-3 text-[var(--white-soft)] placeholder:text-[var(--dust)] outline-none focus:border-[var(--violet)] focus:ring-2 focus:ring-[rgba(123,94,248,0.25)] transition-all"
      />
      <button type="submit" className="btn-violet justify-center">
        Submit <ArrowRight className="w-4 h-4" />
      </button>
    </form>
  );
}

export function Products() {
  

  return (
    <section id="products" className="relative py-32 md:py-40 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }}
          variants={{ show: { transition: { staggerChildren: 0.12 } } }}
          className="max-w-3xl mb-20"
        >
          <motion.div variants={fadeUp} className="font-mono-eyebrow text-[var(--violet-light)]">
            [ PRODUCTS ]
          </motion.div>
          <motion.h2 variants={fadeUp}
            className="font-display mt-5 font-medium tracking-tight leading-[1.05]"
            style={{ fontSize: "clamp(34px, 5vw, 56px)" }}>
            What we've launched into orbit.
          </motion.h2>
        </motion.div>

        {/* Arete AI */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: "easeOut" as const }}
          whileHover={{ y: -4 }}
          className="glass-panel rounded-3xl p-8 md:p-14 relative overflow-hidden group"
          style={{ boxShadow: "0 40px 120px -40px rgba(123,94,248,0.45)" }}
        >
          <div className="absolute top-6 right-6 flex items-center gap-2 rounded-full border border-[rgba(34,217,126,0.3)] bg-[rgba(34,217,126,0.08)] px-3 py-1">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inset-0 rounded-full bg-[var(--success)] animate-ping opacity-70" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[var(--success)]" />
            </span>
            <span className="font-mono text-[10px] tracking-wider text-[var(--success)]">LIVE</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="font-mono-eyebrow text-[var(--violet-light)]">[ ARETE AI ]</div>
              <h3 className="font-display mt-4 font-medium tracking-tight leading-[1.05] text-[var(--white-soft)]"
                style={{ fontSize: "clamp(28px, 4vw, 44px)" }}>
                AI that understands where you can thrive.
              </h3>
              <p className="mt-6 text-[var(--muted)] leading-relaxed max-w-lg">
                Arete AI is an intelligent engine built to help students navigate the future with clarity and confidence. Using AI-driven insights, personalized assessments, and data-backed recommendations, Arete AI helps undergraduate and postgraduate students explore the right career paths, academic opportunities, and growth directions aligned with who they are and where they can thrive.
              </p>
              <div className="mt-7 flex flex-wrap gap-2">
                {["Personalized Assessments", "Career Pathways", "Data-Backed Insights"].map((c) => (
                  <span key={c}
                    className="px-3 py-1.5 rounded-full border border-[rgba(123,94,248,0.25)] bg-[rgba(123,94,248,0.06)] font-mono text-[11px] text-[var(--muted)]">
                    {c}
                  </span>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#contact" className="btn-violet">
                  Try Arete <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
            <AreteVisual />
          </div>
        </motion.div>

        {/* Englingen */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: "easeOut" as const }}
          className="glass-panel rounded-3xl p-8 md:p-14 mt-10 relative overflow-hidden"
          style={{ borderColor: "rgba(123,94,248,0.1)" }}
        >
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="font-mono-eyebrow text-[var(--dust)]">[ ENGLINGEN ]</div>
              <h3 className="font-display mt-4 font-medium tracking-tight leading-[1.05] text-[var(--white-soft)]"
                style={{ fontSize: "clamp(28px, 4vw, 44px)" }}>
                Something is brewing.
              </h3>
              <div className="font-mono-eyebrow mt-4 text-[var(--violet-light)]">COMING SOON</div>
              <p className="mt-5 text-[var(--muted)] italic leading-relaxed max-w-lg">
                The next frontier in engineering intelligence — arriving soon.
              </p>
              <WaitlistForm />
            </div>
            <FlappingButterfly />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
