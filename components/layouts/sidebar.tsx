"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const menuItems = [
  { name: "Dashboard", href: "/dashboard" },
  { name: "Users", href: "/dashboard/users" },
  { name: "Roles", href: "/dashboard/roles" },
  { name: "Permissions", href: "/dashboard/permissions" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 h-screen bg-gray-900 text-white p-6">
      <h1 className="text-xl font-bold mb-10">RBAC Admin</h1>

      <nav className="flex flex-col gap-4">
        {menuItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={`p-2 rounded transition ${
              pathname === item.href
                ? "bg-gray-700"
                : "hover:bg-gray-800"
            }`}
          >
            {item.name}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
