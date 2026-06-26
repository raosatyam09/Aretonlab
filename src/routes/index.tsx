import { createFileRoute } from "@tanstack/react-router";
import { Starfield } from "@/components/Starfield";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Products } from "@/components/Products";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Butterfly } from "@/components/Butterfly";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Areton Labs — We fill the quantum gap" },
      { name: "description", content: "Areton Labs engineers AI-native products and deep-tech infrastructure built at the intersection of precision and scale." },
      { property: "og:title", content: "Areton Labs — We fill the quantum gap" },
      { property: "og:description", content: "A next-gen AI and deep-tech lab building intelligence at the edge of the possible." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen bg-[var(--void)] text-[var(--white-soft)] overflow-x-hidden">
      <Starfield />
      <Butterfly />
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Products />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}
