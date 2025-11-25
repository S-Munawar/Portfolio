"use client";

import { useTheme } from "./ThemeProvider";

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();

  return (
<button
      onClick={() => {
        if (theme === "light") setTheme("dark");
        else setTheme("light");
      }}

  className="
    relative w-4 h-4 rounded-full cursor-pointer
    flex items-center justify-center
  "
  aria-label="Toggle theme"
>
  {/* Pulsating Dot */}
  <div className="relative flex items-center justify-center w-full h-full">

    {/* Core Dot */}
    <div className="absolute w-2 h-2 bg-accent-red rounded-full z-10"></div>

    {/* Wave 1 */}
    <div className="absolute w-4 h-4 bg-accent-red rounded-full opacity-70 animate-ping"></div>

    {/* Wave 2 (delayed) */}
    <div
      className="absolute w-4 h-4 bg-accent-red rounded-full opacity-70 animate-ping"
      style={{ animationDelay: "0.4s" }}
    ></div>

  </div>
</button>

  );
}