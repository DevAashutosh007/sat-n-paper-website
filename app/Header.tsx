"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, ChevronDown, X, Clock, MapPin } from "lucide-react";
import Image from "next/image";
import companyLogo from "@/assets/images/sat-n-paper-logo.webp";

const menuItems = [
  { label: "Home", href: "/" },
  { label: "Programs", href: "/about" },
  {
    label: "Results",
    submenu: [
      { label: "JEE Coaching", href: "/courses/jee" },
      { label: "NEET Coaching", href: "/courses/neet" },
      { label: "Foundation", href: "/courses/foundation" },
    ],
  },
  {
    label: "How It Works",
    submenu: [
      { label: "Online Programs", href: "/programs/online" },
      { label: "Offline Programs", href: "/programs/offline" },
    ],
  },
  { label: "About us", href: "/About us" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMobileMenu, setActiveMobileMenu] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border shadow-sm">
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
                  className="text-sm font-medium text-link hover:text-link-hover"
                >
                  {item.label}
                </Link>
              ) : (
                <>
                  <div key={item.label} className="relative group">
                    <button className="flex items-center text-sm font-medium text-gray-700 hover:text-black">
                      {item.label}
                      <ChevronDown className="ml-1 h-4 w-4 transform transition-transform duration-200 group-hover:rotate-180" />
                    </button>

                    {/* Submenu */}
                    <div
                      className="absolute left-1/2 -translate-x-1/2 top-full mt-3 z-50 
                opacity-0 invisible group-hover:visible group-hover:opacity-100
                transition-all duration-200
                bg-white rounded-lg shadow-xl min-w-[200px]
                before:content-[''] before:absolute before:top-[-8px] before:left-1/2 before:-translate-x-1/2
                before:border-8 before:border-transparent before:border-b-white before:z-[-1]"
                    >
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
            className="hidden md:inline-flex items-center px-4 py-2 bg-primary text-primary-foreground text-sm rounded-lg hover:opacity-90 transition"
          >
            Get Started
          </Link>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden inline-flex items-center justify-center p-2 text-secondary hover:text-primary"
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
                    className="block py-2 text-sm text-secondary"
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
                      className="flex items-center justify-between w-full py-2 text-sm text-secondary"
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
                              className="block py-1 text-sm"
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
                className="block mt-4 px-4 py-2 text-center bg-primary text-primary-foreground rounded-lg hover:opacity-90"
              >
                Get Started
              </Link>
            </li>
            <li className="mt-4 text-sm text-secondary flex items-center gap-2">
              <Clock className="w-4 h-4" /> Opening Hours: 10:00 am - 07:00 pm
            </li>
            <li className="text-sm text-secondary flex items-center gap-2">
              <MapPin className="w-4 h-4" /> Location: Noida
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
