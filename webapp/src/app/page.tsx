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
      
      {/* Footer */}
      <footer className="py-12 text-center border-t border-white/10 bg-[#121212] flex flex-col items-center gap-2">
        <p className="text-neutral-500 text-sm tracking-widest font-mono uppercase">
          © {new Date().getFullYear()} Masood. All rights reserved.
        </p>
        <p className="text-neutral-600 text-xs font-mono">
          Developed by{" "}
          <span className="text-neutral-400 font-semibold">Shahwaiz</span>
          {" · "}
          <a
            href="mailto:shahwaiznew001@gmail.com"
            className="text-neutral-400 hover:text-white transition-colors duration-200 underline underline-offset-2"
          >
            shahwaiznew001@gmail.com
          </a>
        </p>
      </footer>
    </main>
  );
}

