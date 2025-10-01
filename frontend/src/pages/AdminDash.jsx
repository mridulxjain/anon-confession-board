import { useEffect, useState } from "react";
import { RxCross2 } from "react-icons/rx";

export default function AdminDashboard() {
  const [allConfessions, setAllConfessions] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  useEffect(() => {
    const fetchConfessions = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/confessions");
        const data = await res.json();
        setAllConfessions(data);
      } catch (error) {
        console.error("Error fetching confessions:", error);
      }
    };
    fetchConfessions();
  }, []);

  const totalPages = Math.ceil(allConfessions.length / itemsPerPage);
  const currentConfessions = allConfessions.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleDelete = async (id) => {
    try {
      const res = await fetch(`http://localhost:3000/api/confessions/${id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        setAllConfessions((prev) => prev.filter((c) => c.id !== id));
      }
    } catch (err) {
      console.error("Error deleting confession:", err);
    }
  };

  return (
    <div className="min-h-screen bg-background text-text p-6 md:p-12">
      <h1 className="text-4xl font-bold mb-2 text-center md:text-left">
        Admin Dashboard
      </h1>
      <p className="text-muted text-center md:text-left mb-8">
        Manage all confessions below.
      </p>

      {currentConfessions.length === 0 ? (
        <p className="text-center text-muted mt-12">No confessions available.</p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {currentConfessions.map((confession) => (
            <div
              key={confession.id}
              className="bg-surface border border-border rounded-2xl p-6 shadow-md flex flex-col justify-between hover:shadow-lg transition"
            >
              <p className="text-base md:text-lg text-text mb-4 break-words">
                {confession.text}
              </p>
              <div className="flex justify-between items-center mt-2">
                <button
                  onClick={() => handleDelete(confession.id)}
                  className="flex items-center gap-2 px-3 py-1 rounded-lg bg-red-500 text-white hover:bg-red-600 transition"
                >
                  <RxCross2 size={16} /> Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-4 mt-12">
          <button
            onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
            disabled={currentPage === 1}
            className="px-5 py-2 rounded-lg border border-border hover:bg-surface disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Previous
          </button>
          <span className="text-sm text-muted">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="px-5 py-2 rounded-lg border border-border hover:bg-surface disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}