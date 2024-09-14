"use client";

import Link from "next/link";
import Image from "next/image";
import siteData from "@/data/sitedata.json";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { MenuIcon, XIcon } from "lucide-react";

export function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image src={siteData.logo} alt="Logo" width={40} height={40} />
            <span className="ml-4 text-lg font-semibold">
              {siteData.navBarTitle}
            </span>
          </Link>
          {/* Desktop Navigation */}
          <ul className="hidden lg:flex space-x-4">
            {siteData.navigation.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.path}
                  className={`px-3 py-2 rounded-md transition-colors text-sm font-medium ${
                    pathname === item.path
                      ? "bg-red-100 text-red-900"
                      : "hover:bg-red-100"
                  }`}
                >
                  {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Navigation Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-md border hover:bg-zinc-100 transition-colors focus:outline-none"
          >
            {isMobileMenuOpen ? (
              <XIcon className="w-6 h-6" />
            ) : (
              <MenuIcon className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div
            className={`lg:hidden ${
              isMobileMenuOpen ? "opacity-100" : "opacity-0"
            }`}
          >
            <ul className="lg:hidden mt-4 space-y-2">
              {siteData.navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.path}
                    className={`block px-3 py-2 rounded-md transition-colors text-sm font-medium ${
                      pathname === item.path
                        ? "bg-red-100 text-red-900"
                        : "hover:bg-red-100"
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
