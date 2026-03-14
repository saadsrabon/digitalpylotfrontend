"use client";

import LoginForm from "@/components/forms/login-form";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex bg-[#f5f5f5]">

      {/* LEFT SIDE */}
      <div className="flex flex-col justify-center items-center w-full lg:w-1/2 p-10">

        <div className="absolute top-10 left-10 flex items-center gap-2">
          <div className="w-8 h-8 bg-orange-500 rounded-md" />
          <span className="font-semibold text-lg">Obliq</span>
        </div>

        <LoginForm />

      </div>

      {/* RIGHT SIDE */}
      <div className="hidden lg:flex w-1/2 items-center justify-center p-10">
        <div className="rounded-3xl overflow-hidden shadow-xl">
          <img
            src="/login-preview.png"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

    </div>
  );
}
