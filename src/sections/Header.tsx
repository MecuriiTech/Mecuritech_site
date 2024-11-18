"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export const Header = () => {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center items-center bg-white/10 backdrop-blur p-2">
      <nav className="flex gap-0 md:gap-4 border border-white/15 rounded-full bg-white/10 p-1">
        <Link
          href="/"
          className={`nav-item ${pathname === "/" ? "active" : ""}`}
        >
          Home
        </Link>
        <Link
          href="/#aboutus"
          className={`nav-item ${pathname === "/#aboutus" ? "active" : ""}`}
        >
          About us
        </Link>
        <Link
          href="/contactus"
          className={`nav-item ${pathname === "/contactus" ? "active" : ""}`}
        >
          Contact
        </Link>
        <Link href="/#service" className="nav-item" rel="noopener noreferrer">
          Services
        </Link>
      </nav>
    </header>
  );
};
