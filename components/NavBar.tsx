"use client";

import { ThemeToggle } from "./Toggle";

export default function NavBar() {
  return (
<nav
  className="
    fixed top-2 sm:top-6 left-1/2 -translate-x-1/2 w-[95%] sm:w-[90%] max-w-5xl px-3 sm:px-6 py-2 sm:py-3 bg-[rgba(229,229,229,0.45)] dark:bg-[rgba(32,32,32,0.35)] backdrop-blur-xl border border-white/20 dark:border-white/10 shadow-lg rounded-lg z-50"
>      <div className="flex justify-between items-center">
        
        {/* LEFT - NAME WITH LIVE INDICATOR */}
        <div className="flex items-center gap-2 sm:gap-3 text-foreground-3 font-extrabold font-doto text-lg sm:text-2xl">
          
          <ThemeToggle />

          <a href="./" className="hidden sm:block">Shaik Munawar</a>
          <a href="./" className="block sm:hidden">S. Munawar</a>
          
        </div>

        {/* RIGHT LINKS */}
        <div className="flex gap-2 sm:gap-6 font-medium">
          <a href="/about" className="bg-accent-yellow text-foreground-2 font-extrabold px-2 py-1 sm:p-2 border-0 rounded-sm font-doto hover:opacity-95 transition-colors text-sm sm:text-base">
            About
          </a>
          <a href="/contact" className="bg-accent-red text-foreground-2 font-extrabold px-2 py-1 sm:p-2 border-0 rounded-sm font-doto hover:opacity-95 transition-colors text-sm sm:text-base">
            Contact
          </a>
        </div>

      </div>
    </nav>
  );
}