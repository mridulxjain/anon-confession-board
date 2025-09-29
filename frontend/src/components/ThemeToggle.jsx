import { useState, useEffect } from "react";
import { PiMoonDuotone } from "react-icons/pi";
import { IoSunny } from "react-icons/io5";

export default function ThemeToggle() {
  const [dark, setDark] = useState(localStorage.getItem("theme") === "dark");

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      className="border-border border-2 px-1 py-1 rounded-md"
    >
      {dark ? <PiMoonDuotone className="text-accent" /> : <IoSunny className="text-accent" />}
    </button>
  );
}