export default function ErrorPage() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-background text-text px-6">
      <div className="text-center max-w-md">
        <h1 className="text-6xl font-extrabold text-accent mb-4">Oops!</h1>
        <p className="text-2xl mb-4">Something went wrong.</p>

        <div className="mb-6">
          <span className="text-5xl font-bold text-red-500">404</span>
          <p className="text-muted mt-2">PAGE NOT FOUND</p>
        </div>

        <a
          href="/"
          className="inline-block mt-4 px-8 py-3 rounded-xl bg-accent text-background font-semibold text-lg hover:bg-background hover:text-accent border border-accent transition transform hover:-translate-y-1"
        >
          Go Home
        </a>
      </div>
    </div>
  );
}