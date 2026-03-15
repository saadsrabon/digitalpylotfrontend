"use client";

import { useLogout } from "@/hooks/useLogout";
import { useAuthStore } from "@/store/authStore";

export default function Navbar() {
  const logout = useLogout();
  const user = useAuthStore((s) => s.user);

  const handleLogout = () => {
    logout.mutate();
  };

  return (
    <header className="h-16 border-b bg-white flex items-center justify-between px-6">

      {/* Left */}
      <div className="font-semibold text-lg">
        Dashboard
      </div>

      {/* Right */}
      <div className="flex items-center gap-4">

        {/* User */}
        <span className="text-sm text-gray-600">
          {user?.email}
        </span>

        {/* Logout Button */}
        <button
          onClick={handleLogout}
          disabled={logout.isPending}
          className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition disabled:opacity-70"
        >
          {logout.isPending ? "Logging out..." : "Logout"}
        </button>

      </div>

    </header>
  );
}