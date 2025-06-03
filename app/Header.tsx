"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, ChevronDown, X, Clock, MapPin } from "lucide-react";
import Image from "next/image";
import companyLogo from "@/assets/images/sat-n-paper-logo.webp";

const menuItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  {
    label: "Courses",
    submenu: [
      { label: "JEE Coaching", href: "/courses/jee" },
      { label: "NEET Coaching", href: "/courses/neet" },
      { label: "Foundation", href: "/courses/foundation" },
    ],
  },
  {
    label: "Programs",
    submenu: [
      { label: "Online Programs", href: "/programs/online" },
      { label: "Offline Programs", href: "/programs/offline" },
    ],
  },
  { label: "Results", href: "/results" },
  { label: "Fees", href: "/fees" },
  { label: "Blog", href: "/blog" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMobileMenu, setActiveMobileMenu] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 bg-white border-b shadow-sm">
      <div className="flex items-center justify-between px-4 py-3 md:px-8">
        {/* Logo - Left */}
        <div className="flex-shrink-0">
          <Link href="/" className="flex items-center space-x-2">
            <Image src={companyLogo} alt="Logo" width={100} height={40} />
          </Link>
        </div>

        {/* Menu - Center */}
        <div className="hidden md:flex items-center gap-6 flex-1 justify-center">
          {menuItems.map((item) => (
            <div key={item.label} className="relative group">
              {!item.submenu ? (
                <Link
                  href={item.href}
                  className="text-sm font-medium text-gray-700 hover:text-black"
                >
                  {item.label}
                </Link>
              ) : (
                <>
                  <button className="flex items-center text-sm font-medium text-gray-700 hover:text-black">
                    {item.label}
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                  <div className="absolute hidden group-hover:block bg-white border mt-2 rounded-lg shadow-lg min-w-[200px]">
                    {item.submenu.map((sub) => (
                      <Link
                        key={sub.label}
                        href={sub.href}
                        className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 hover:text-black"
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                </>
              )}
            </div>
          ))}
        </div>

        {/* CTA - Right */}
        <div className="flex items-center gap-4">
          <Link
            href="/contacts"
            className="hidden md:inline-flex items-center px-4 py-2 bg-zinc-800 text-white text-sm rounded-lg hover:bg-zinc-700 transition"
          >
            Get Started
          </Link>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden inline-flex items-center justify-center p-2 text-gray-600 hover:text-black"
          >
            {mobileOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="md:hidden px-4 pb-4">
          <ul className="space-y-2">
            {menuItems.map((item) => (
              <li key={item.label}>
                {!item.submenu ? (
                  <Link
                    href={item.href}
                    className="block py-2 text-sm text-gray-700"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <div>
                    <button
                      onClick={() =>
                        setActiveMobileMenu(
                          activeMobileMenu === item.label ? null : item.label
                        )
                      }
                      className="flex items-center justify-between w-full py-2 text-sm text-gray-700"
                    >
                      {item.label}
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${
                          activeMobileMenu === item.label ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {activeMobileMenu === item.label && (
                      <ul className="ml-4 mt-1 space-y-1">
                        {item.submenu.map((sub) => (
                          <li key={sub.label}>
                            <Link
                              href={sub.href}
                              className="block py-1 text-sm text-gray-600"
                            >
                              {sub.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                )}
              </li>
            ))}
            <li>
              <Link
                href="/contacts"
                className="block mt-4 px-4 py-2 text-center bg-zinc-800 text-white rounded-lg"
              >
                Get Started
              </Link>
            </li>
            <li className="mt-4 text-sm text-gray-600 flex items-center gap-2">
              <Clock className="w-4 h-4" /> Opening Hours: 10:00 am - 07:00 pm
            </li>
            <li className="text-sm text-gray-600 flex items-center gap-2">
              <MapPin className="w-4 h-4" /> Location: Noida
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
