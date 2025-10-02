import { useState } from "react";
import ConfessionCard from "../components/ConfessionCard";
import Pagination from "../components/Pagination";
import { useEffect } from "react";

export default function Confessions() {

  const [confessions, setConfessions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchConfessions = async () => {
      try {
        const res = await fetch("https://anon-confession-board-production.up.railway.app/api/confessions");
        const data = await res.json();
        setConfessions(data);
      } catch (error) {
        console.error("Error fetching confessions:", error);

      } finally {
        setLoading(false);
      }
    };

    fetchConfessions();
  },[]);


  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(confessions.length / itemsPerPage);
  const currentConfessions = confessions.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  if (loading) return <p className="text-center mt-12">Loading...</p>;

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