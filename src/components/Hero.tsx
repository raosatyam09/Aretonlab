import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, Play, ChevronDown } from "lucide-react";
import frangipani from "@/assets/frangipani.png";

const WORDS = ["Innovation", "Technology", "Ideas", "Solutions", "Possibilities", "Opportunities"];

function Typewriter() {
  const [wi, setWi] = useState(0);
  const [text, setText] = useState("");
  const [phase, setPhase] = useState<"typing" | "hold" | "erasing">("typing");

  useEffect(() => {
    const word = WORDS[wi];
    let t: ReturnType<typeof setTimeout>;
    if (phase === "typing") {
      if (text.length < word.length) {
        t = setTimeout(() => setText(word.slice(0, text.length + 1)), 90);
      } else {
        t = setTimeout(() => setPhase("hold"), 1400);
      }
    } else if (phase === "hold") {
      t = setTimeout(() => setPhase("erasing"), 800);
    } else {
      if (text.length > 0) {
        t = setTimeout(() => setText(word.slice(0, text.length - 1)), 40);
      } else {
        setWi((wi + 1) % WORDS.length);
        setPhase("typing");
      }
    }
    return () => clearTimeout(t);
  }, [text, phase, wi]);

  return (
    <span className="relative inline-block text-[var(--violet-light)]" style={{
      textShadow: "0 0 40px rgba(123,94,248,0.55), 0 0 80px rgba(123,94,248,0.25)",
    }}>
      {text}
      <span className="absolute left-0 -bottom-1 h-px w-full bg-gradient-to-r from-transparent via-[var(--violet)] to-transparent opacity-60" />
    </span>
  );
}

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const flowerRotate = useTransform(scrollYProgress, [0, 1], [0, 220]);
  const flowerY = useTransform(scrollYProgress, [0, 1], [0, 160]);
  const flowerOpacity = useTransform(scrollYProgress, [0, 0.6, 1], [1, 0.4, 0]);

  const ease = [0.22, 1, 0.36, 1] as const;

  return (
    <section ref={ref} id="top" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Nebula glows */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(123,94,248,0.35), transparent 60%)", filter: "blur(60px)" }} />
        <div className="absolute top-1/3 left-1/2 w-[700px] h-[700px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(159,110,255,0.18), transparent 60%)", filter: "blur(80px)" }} />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(123,94,248,0.22), transparent 60%)", filter: "blur(70px)" }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 w-full pt-32 pb-24">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7, ease }}
            className="font-mono-eyebrow text-[var(--violet-light)] flex items-center gap-2"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inset-0 rounded-full bg-[var(--violet)] animate-ping opacity-70" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--violet)]" />
            </span>
            ARETON LABS
          </motion.div>

          <h1 className="font-display mt-6 font-medium tracking-tight leading-[1.02] text-[var(--white-soft)]"
              style={{ fontSize: "clamp(42px, 8vw, 92px)" }}>
            <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.8, ease }} className="block">
              We fill the quantum gap
            </motion.span>
            <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8, ease }} className="block text-[var(--muted)]">
              between
            </motion.span>
            <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8, ease }} className="block">
              <Typewriter />
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.15, duration: 0.8, ease }}
            className="mt-8 text-[var(--muted)] text-base md:text-lg leading-relaxed max-w-[520px]"
          >
            We engineer what others imagine. From AI-native products to deep-tech infrastructure — built at the intersection of precision and scale.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.35, duration: 0.8, ease }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a href="#products" className="btn-violet">
              Explore Our Products <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#products" className="btn-ghost">
              <Play className="w-4 h-4" /> Watch the Demo
            </a>
          </motion.div>
        </div>
      </div>

      {/* Frangipani */}
      <motion.div
        style={{ rotate: flowerRotate, y: flowerY, opacity: flowerOpacity }}
        className="pointer-events-none absolute bottom-10 right-6 md:bottom-16 md:right-16 z-10"
      >
        <div className="relative">
          <div className="absolute inset-0 rounded-full"
               style={{ background: "radial-gradient(circle, rgba(255,210,140,0.35), transparent 60%)", filter: "blur(30px)" }} />
          <img
            src={frangipani}
            alt=""
            width={220}
            height={220}
            className="relative w-[110px] h-[110px] md:w-[200px] md:h-[200px] object-contain drop-shadow-[0_0_25px_rgba(255,220,160,0.25)]"
          />
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="text-[var(--dust)]"
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  );
}
