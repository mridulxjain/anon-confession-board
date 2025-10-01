import { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import { RxCross2 } from "react-icons/rx";
import { HiMenuAlt4 } from "react-icons/hi";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 py-3 border-b-2 border-border bg-background text-text">
      <a href="/" className="font-megrim text-2xl">
        Whizper
      </a>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-6 font-inter">
        <a href="/confessions" className="hover:underline hover:text-accent">
          Confessions
        </a>
        <a href="/new" className="hover:underline hover:text-accent">
          New
        </a>
        <a href="/admin" className="hover:underline hover:text-accent">
          Admin
        </a>
        <ThemeToggle />
      </div>

      {/* Mobile Hamburger */}
      <div className="md:hidden flex items-center gap-4">
        <ThemeToggle />
        <button
          className="text-2xl focus:outline-none"
          onClick={() => setOpen(!open)}
        >
          {open ? <RxCross2 /> : <HiMenuAlt4 />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`absolute top-full mt-1 right-4 w-40 md:hidden bg-surface border border-border rounded-lg shadow-lg flex flex-col p-4 gap-3 transition-all duration-300 ease-in-out
        ${open ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"}`}
      >
        <a href="/confessions" className="hover:text-accent" onClick={() => setOpen(false)}>
          Confessions
        </a>
        <a href="/new" className="hover:text-accent" onClick={() => setOpen(false)}>
          New
        </a>
        <a href="/admin" className="hover:text-accent" onClick={() => setOpen(false)}>
          Admin
        </a>
      </div>
    </nav>
  );
}