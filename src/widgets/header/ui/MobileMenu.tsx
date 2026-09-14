import Link from "next/link";
import { FiX } from "react-icons/fi";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  pathname: string;
  navItems: { label: string; href: string }[];
}

export function MobileMenu({
  isOpen,
  onClose,
  pathname,
  navItems,
}: MobileMenuProps) {
  const allItems = [...navItems, { label: "Get in touch", href: "/contact" }];

  return (
    <>
      <div
        onClick={onClose}
        className={`fixed inset-0 bg-black/40 z-40 transition-opacity duration-300 lg:hidden ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      />

      <aside
        className={`fixed top-0 right-0 h-full w-64 bg-background z-50 shadow-lg transform transition-transform duration-300 lg:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <button
            type="button"
            aria-label="메뉴 닫기"
            onClick={onClose}
            className="text-foreground"
          >
            <FiX className="w-6 h-6" />
          </button>
        </div>

        <ul className="flex flex-col gap-6 px-6 mt-4">
          {allItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={onClose}
                  className={`text-base ${
                    isActive ? "text-primary font-semibold" : "text-secondary"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </aside>
    </>
  );
}
