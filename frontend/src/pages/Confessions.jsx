import { useState } from "react";
import ConfessionCard from "../components/ConfessionCard";
import Pagination from "../components/Pagination";

export default function Confessions() {
  // Sample data → replace with Supabase fetch
  const allConfessions = Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    text: `This is confession #${i + 1}. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. `.repeat(1),
    date: "2025-09-29",
  }));

  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(allConfessions.length / itemsPerPage);

  const currentConfessions = allConfessions.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="overflow-scroll bg-background text-text px-6 py-8 min-h-screen">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">Confessions</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
        {currentConfessions.map((c) => (
          <ConfessionCard key={c.id} text={c.text} date={c.date} />
        ))}
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}