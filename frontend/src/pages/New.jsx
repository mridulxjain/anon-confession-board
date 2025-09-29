import { useState } from "react";
import {useNavigate } from "react-router-dom";

export default function New() {
  const [text, setText] = useState("");
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;

    // Placeholder → replace with backend API call later
    console.log("Posting:", text);
    setSuccess(true);
    setText("");

    navigate("/confessions");
  };

  return (
    <div className="min-h-screen bg-background text-text flex flex-col items-center justify-start px-6 pt-24">
      <div className="text-center max-w-2xl w-full">
        {/* Heading with subtle blur animation */}
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
         Post Your Confession
        </h1>
        <p className="text-muted font-inter text-lg mb-8">
          Speak your mind freely. Your identity stays anonymous, always.
        </p>

        {/* Confession form */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 w-full bg-surface p-6 rounded-2xl shadow-lg border border-border"
        >
          <textarea
            className="w-full p-4 rounded-lg border border-border bg-background text-text resize-none focus:outline-none focus:ring-2 focus:ring-accent transition"
            placeholder="Type your confession here (max 100 words)..."
            value={text}
            onChange={(e) => setText(e.target.value)}
            rows={6}
            maxLength={700}
          />

          <div className="flex flex-col sm:flex-row gap-4 justify-end">
            <button
              type="submit"
              className="px-6 py-3 rounded-lg bg-accent text-background font-medium hover:bg-background hover:text-accent border border-accent transition"
            >
              Post Confession
            </button>
            <button
              type="button"
              onClick={() => setText("")}
              className="px-6 py-3 rounded-lg border border-border bg-background text-text font-medium hover:bg-surface hover:text-accent transition"
            >
              Clear
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}