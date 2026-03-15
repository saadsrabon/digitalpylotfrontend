"use client";

import Link from "next/link";
import { useNavigation } from "@/hooks/useNavigation";

export default function Sidebar() {
  const navItems = useNavigation();
console.log("Allowed Navigation Items:", navItems);
  return (
    <aside className="w-64 bg-gray-900 text-white min-h-screen p-6">
      <h1 className="text-xl font-semibold mb-8">
        RBAC System
      </h1>

      <nav className="flex flex-col gap-3">
        {navItems.map((item) => (
          <Link
            key={item.path}
            href={item.path}
            className="hover:bg-gray-800 p-2 rounded"
          >
            {item.name}
          </Link>
        ))}
      </nav>
    </aside>
  );
}