"use client";
import Button from "@/src/shared/ui/Button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { FiMenu } from "react-icons/fi";
import { MobileMenu } from "./MobileMenu";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "My Projects", href: "/projects" },
  { label: "Coding Test", href: "/coding-test" },
];

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header className="sticky top-0 z-100 flex items-center justify-between py-6 bg-white">
      <div className="flex items-center justify-between w-full lg:hidden">
        <Link href="/" className="font-extrabold text-foreground text-xl">
          <h1>
            Dev<span className="text-primary">.Portfolio</span>
          </h1>
        </Link>

        <button
          type="button"
          aria-label="메뉴 열기"
          onClick={() => setIsOpen(true)}
          className="text-foreground"
        >
          <FiMenu className="w-6 h-6 cursor-pointer" />
        </button>
      </div>

      <Link
        href="/"
        className="hidden lg:block font-extrabold text-foreground text-xl"
      >
        Dev<span className="text-primary">.Portfolio</span>
      </Link>

      <nav className="hidden lg:block">
        <ul className="flex gap-6">
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.href;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`relative text-[14px] transition-transform duration-200 hover:-translate-y-0.5 ${
                    isActive
                      ? "text-primary font-bold"
                      : "text-secondary hover:text-foreground"
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute -bottom-2 left-1/2 h-[2px] rounded-full transition-all duration-300 ease-out -translate-x-1/2 ${
                      isActive
                        ? "w-full bg-primary"
                        : "w-0 bg-transparent group-hover:w-full"
                    }`}
                  />
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="hidden lg:block">
        <Button text="Get in touch" path="/contact" />
      </div>

      <MobileMenu
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        pathname={pathname}
        navItems={NAV_ITEMS}
      />
    </header>
  );
}
