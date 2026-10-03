export type NavItem = {
  label: string;
  href: string;
};

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "My Projects", href: "/projects" },
  { label: "Coding Test", href: "/coding-test" },
];

export const CONTACT_ITEM: NavItem = { label: "Get in touch", href: "/contact" };
