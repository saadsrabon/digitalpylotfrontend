"use client";

export default function Navbar() {
  return (
    <header className="h-16 border-b flex items-center justify-between px-6 bg-white">
      <div className="text-lg font-semibold">
        Dashboard
      </div>

      <div className="flex items-center gap-4">
        <button className="text-sm bg-gray-900 text-white px-3 py-1 rounded">
          Logout
        </button>
      </div>
    </header>
  );
}
