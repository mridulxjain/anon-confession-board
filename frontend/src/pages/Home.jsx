import TrueFocus from "../components/TrueFocus";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-text flex flex-col justify-center px-6 py-16">
      <div className="text-center max-w-3xl mx-auto space-y-8">

        <h1 className="text-4xl md:text-6xl font-extrabold">
          <TrueFocus
            sentence="Whizper. Stay-Anonymous"
            manualMode={false}
            blurAmount={5}
            borderColor="{dark: ? white : black}"
            animationDuration={1}
            pauseBetweenAnimations={0.5}
          />
        </h1>

        <p className="font-inter text-muted text-lg md:text-xl leading-relaxed">
          Share your thoughts, secrets, or confessions — without revealing your identity. 
          A safe space for honesty, powered by complete anonymity.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-4">
          <a
            href="/confessions"
            className="px-8 py-4 rounded-xl bg-accent border border-accent text-background font-semibold shadow-md hover:bg-background hover:text-accent transition duration-300"
          >
            Explore Confessions
          </a>
          <a
            href="/new"
            className="px-8 py-4 rounded-xl border border-accent text-text font-semibold shadow-md hover:border-accent hover:text-accent transition duration-300"
          >
            Write Yours
          </a>
        </div>

        <p className="text-sm text-muted mt-6">
          Pure Anonymity • Safe & Secure
        </p>
      </div>
    </div>
  );
}