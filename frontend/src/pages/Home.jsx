import TrueFocus from "../components/TrueFocus";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-text flex flex-col justify-center px-6 py-16">
      <div className="text-center max-w-2xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          <TrueFocus
            sentence="Whisper. Stay Anonymous"
            manualMode={false}
            blurAmount={5}
            borderColor="{dark: ? white : black}"
            animationDuration={1}
            pauseBetweenAnimations={0.5}
          />
        </h1>

        <p className="font-inter text-muted text-lg mb-8">
          Share your thoughts, secrets, or confessions — without revealing who you are.
          A safe space for honesty, powered by anonymity.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="/confessions"
            className="px-6 py-3 rounded-lg bg-accent border border-accent text-text font-medium hover:bg-background transition"
          >
            Explore Confessions
          </a>
          <a
            href="/new"
            className="px-6 py-3 rounded-lg border border-accent text-text font-medium hover:border-accent hover:text-accent transition"
          >
            Write Yours
          </a>
        </div>

        <p className="text-sm text-muted mt-6">
          No sign-ups. No tracking. Just pure anonymity.
        </p>
      </div>
    </div>
  );
}