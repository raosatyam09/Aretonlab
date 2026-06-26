import { motion } from "framer-motion";
import { Earth3D } from "./Earth3D";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } },
};

export function About() {
  return (
    <section id="about" className="relative py-32 md:py-40 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={{ show: { transition: { staggerChildren: 0.12 } } }}
        >
          <motion.div variants={fadeUp} className="font-mono-eyebrow text-[var(--violet-light)]">
            [ ABOUT ARETON LABS ]
          </motion.div>
          <motion.h2 variants={fadeUp}
            className="font-display mt-5 font-medium tracking-tight leading-[1.05] text-[var(--white-soft)]"
            style={{ fontSize: "clamp(34px, 5vw, 56px)" }}>
            Built to explore the edges of what's possible.
          </motion.h2>

          <motion.div variants={fadeUp} className="mt-10 space-y-8">
            <div>
              <div className="font-mono-eyebrow text-[var(--dust)] mb-2">Vision</div>
              <p className="text-[var(--white-soft)] text-lg leading-relaxed">
                A future where intelligence is engineered, not improvised.
              </p>
            </div>
            <div>
              <div className="font-mono-eyebrow text-[var(--dust)] mb-2">Mission</div>
              <p className="text-[var(--muted)] leading-relaxed">
                We build AI and deep-tech systems that translate breakthrough research into real-world products — bridging the gap between scientific possibility and human-scale impact.
              </p>
            </div>
            <div className="glass-panel rounded-2xl p-6 md:p-8">
              <div className="font-mono-eyebrow text-[var(--violet-light)] mb-3">What We Do</div>
              <p className="text-[var(--muted)] leading-relaxed">
                From foundation models to orbital-grade infrastructure, we design systems that think, reason, and adapt. Our work spans AI-native products, autonomous workflows, and the quiet engineering that lets intelligent software scale with precision.
              </p>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" as const }}
        >
          <Earth3D />
        </motion.div>
      </div>
    </section>
  );
}
