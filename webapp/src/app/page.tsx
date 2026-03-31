import ScrollyCanvas from "@/components/ScrollyCanvas";
import Overlay from "@/components/Overlay";
import Projects from "@/components/Projects";
import BentoGrid from "@/components/BentoGrid";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="bg-[#121212] min-h-screen text-white selection:bg-blue-500/30">
      <ScrollyCanvas>
        <Overlay />
      </ScrollyCanvas>
      <BentoGrid />
      <Projects />
      <Experience />
      <Contact />
      
      {/* Simple Footer */}
      <footer className="py-12 text-center border-t border-white/10 bg-[#121212]">
        <p className="text-neutral-500 text-sm tracking-widest font-mono uppercase">
          © {new Date().getFullYear()} Shahwaiz Amer. All rights reserved.
        </p>
      </footer>
    </main>
  );
}

