export default function ConfessionCard({ text, date }) {
  return (
    <div className="bg-surface p-6 rounded-2xl shadow-md border border-border hover:shadow-lg transition flex flex-col">
      <p className="text-text text-lg md:text-xl leading-relaxed break-words">
        {text}
      </p>
      <p className="text-sm text-muted mt-4 text-right">{date}</p>
    </div>
  );
}