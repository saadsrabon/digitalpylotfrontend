"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function LoginPreview() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <div className="relative w-full h-full rounded-3xl overflow-hidden">

      {/* Background Gradient */}
      <Image
        src="/login-bg.png"
        alt="Background"
        fill
        className="object-cover"
        priority
      />

      {/* Dashboard Preview */}
      <Image
        src="/dashboard-preview.png"
        alt="Dashboard preview"
        width={900}
        height={700}
        className={`absolute top-50 w-[120%] transition-transform duration-1200 ease-out
        ${animate ? "translate-x-[15%]" : "translate-x-[80%]"}`}
      />

    </div>
  );
}
