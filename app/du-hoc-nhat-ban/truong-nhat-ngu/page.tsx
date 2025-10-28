"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { schools } from "@/app/data/schools";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

export default function JapaneseLangSchoolsList() {
  const [visibleSchools, setVisibleSchools] = useState<{ [key: string]: boolean }>({});

  useEffect(() => {
    const handleScroll = () => {
      const schoolCards = document.querySelectorAll("[data-school-id]");
      schoolCards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        const id = card.getAttribute("data-school-id");
        if (rect.top < window.innerHeight * 0.75) {
          setVisibleSchools((prev) => ({ ...prev, [id!]: true }));
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-sky-600 to-sky-800 text-white py-12 sm:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl sm:text-4xl font-bold mb-4">Du Học Nhật Bản</h1>
            <p className="text-lg opacity-90">Danh sách các trường Nhật ngữ hàng đầu tại Nhật Bản</p>
          </div>
        </section>

        {/* Schools Grid */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {schools.map((school, idx) => (
              <Link key={school.id} href={`/du-hoc-nhat-ban/truong-nhat-ngu/${school.id}`}>
                <div
                  data-school-id={school.id}
                  className={`school-card-container bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer h-full ${
                    visibleSchools[school.id] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${idx * 100}ms` }}
                >
                  <div className="relative h-64 overflow-hidden group">
                    <Image
                      src={school.image}
                      alt={school.name}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />
                  </div>
                  <div className="p-6">
                    <h2 className="text-xl font-bold text-sky-900 mb-3 line-clamp-2">{school.name}</h2>
                    <p className="text-sm text-slate-700 leading-relaxed line-clamp-3">{school.introduction}</p>
                    <div className="mt-4 inline-block text-sky-600 font-semibold text-sm hover:text-sky-800">
                      Xem chi tiết →
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
