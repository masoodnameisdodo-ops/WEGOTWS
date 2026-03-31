export default function IntroCard() {
  return (
    <>
      <div>
        <h3 className="text-sm font-mono text-neutral-400 mb-2 uppercase tracking-widest">
          Who I am
        </h3>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
          Hi, I&apos;m Shahwaiz.
        </h1>
        <p className="text-neutral-300 text-lg md:text-xl font-light max-w-lg mb-6 leading-relaxed">
          I’m an AI Engineering student with a strong focus on Machine Learning and Data Science. I have hands-on experience in developing intelligent, data-driven applications through real-world projects. Passionate about solving problems and writing efficient code, I aim to apply AI to create impactful solutions.
        </p>
      </div>

      <div className="mt-auto pt-6 border-t border-white/10">
        <h4 className="text-sm font-mono text-neutral-400 mb-2 uppercase tracking-widest">
          Education
        </h4>
        <div className="flex flex-col gap-1">
          <p className="text-white font-medium text-lg">Bachelor’s in Artificial Intelligence</p>
          <p className="text-neutral-400 text-md">HITEC University Taxila (2023 - 2027)</p>
        </div>
      </div>
    </>
  );
}
