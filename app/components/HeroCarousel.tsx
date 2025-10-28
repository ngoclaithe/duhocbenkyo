"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type Slide = {
  image: string;
  alt: string;
};

export default function HeroCarousel() {
  const slides: Slide[] = [
    { image: "/images/banner1.webp", alt: "Banner 1" },
    { image: "/images/banner2.png", alt: "Banner 2" },
    { image: "/images/banner3.jpg", alt: "Banner 3" },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % slides.length), 6000);
    return () => clearInterval(id);
  }, [slides.length]);

  const go = (i: number) => setIndex((i + slides.length) % slides.length);

  return (
    <section className="relative w-full bg-black">
      <div className="relative h-[320px] sm:h-[420px] lg:h-[520px] overflow-hidden">
        {slides.map((s, i) => (
          <div key={i} className={`absolute inset-0 transition-opacity duration-700 ${i === index ? "opacity-100" : "opacity-0"}`}>
            <Image src={s.image} alt={s.alt} fill priority sizes="100vw" className="object-cover" />
          </div>
        ))}

        {/* Overlay red circle */}
        <div className="absolute left-0 top-0 h-full flex items-center">
          <div className="relative ml-4 sm:ml-8">
            <div className="h-64 w-64 sm:h-80 sm:w-80 rounded-full bg-red-600/90 shadow-lg" />
            <div className="absolute inset-0 p-8 sm:p-10 flex flex-col justify-center text-white">
              <h2 className="text-xl sm:text-3xl font-bold leading-snug">DU HỌC NHẬT BẢN</h2>
              <p className="text-sm sm:text-base mb-4 opacity-90">Chắp cánh ước mơ!</p>
              <ul className="space-y-2 text-xs sm:text-sm">
                <li className="flex items-start gap-2"><span className="mt-1 inline-block h-2 w-2 rounded-full bg-white" />Miễn phí làm hồ sơ du học</li>
                <li className="flex items-start gap-2"><span className="mt-1 inline-block h-2 w-2 rounded-full bg-white" />Đảm bảo công việc tại Nhật</li>
              </ul>
              <div className="mt-4 text-xs sm:text-sm">
                <div>Hotline: <a className="font-semibold underline" href="tel:+84769220162">076 922 0162</a></div>
                <div className="opacity-90">Gọi ngay để được tư vấn tốt nhất</div>
              </div>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="absolute inset-x-0 bottom-4 flex justify-center gap-2">
          {slides.map((_, i) => (
            <button key={i} aria-label={`Chuyển đến slide ${i+1}`} className={`h-2 w-2 rounded-full ${i === index ? "bg-white" : "bg-white/60"}`} onClick={() => go(i)} />
          ))}
        </div>
        <button aria-label="Slide trước" onClick={() => go(index - 1)} className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/40 p-2 text-white hover:bg-black/60">
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg>
        </button>
        <button aria-label="Slide tiếp" onClick={() => go(index + 1)} className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/40 p-2 text-white hover:bg-black/60">
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z"/></svg>
        </button>
      </div>
    </section>
  );
}
