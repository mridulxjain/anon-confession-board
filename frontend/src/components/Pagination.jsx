export default function Pagination({ currentPage, totalPages, onPageChange }) {
  return (
    <div className="flex justify-center items-center gap-4 mt-6">
      <button
        className="px-4 py-2 rounded-lg border border-border hover:bg-accent hover:text-background transition"
        onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Prev
      </button>

      <button
        className="px-4 py-2 rounded-lg border border-border hover:bg-accent hover:text-background transition"
        onClick={() => currentPage < totalPages && onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
}