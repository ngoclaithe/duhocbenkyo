"use client";

import Link from "next/link";
import Image from "next/image";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import { majors } from "@/app/data/majors";
import { useEffect, useState } from "react";

export default function MajorsPage() {
  const [visibleSections, setVisibleSections] = useState<{ [key: string]: boolean }>({});

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("[data-section-id]");
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const id = section.getAttribute("data-section-id");
        if (rect.top < window.innerHeight * 0.75) {
          setVisibleSections((prev) => ({ ...prev, [id!]: true }));
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Banner Section */}
        <section data-section-id="banner" className="mt-8">
          <div
            className={`majors-banner-container relative h-64 sm:h-96 lg:h-[500px] rounded-lg overflow-hidden shadow-lg transition-all duration-700 ${
              visibleSections["banner"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <Image
              src="/images/majors-banner.jpg"
              alt="Thông tin ngành học"
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Thông tin ngành học</h1>
              <p className="text-base sm:text-lg opacity-90">Khám phá 6 ngành học hàng đầu tại Nhật Bản</p>
            </div>
          </div>
        </section>

        {/* Introduction Section */}
        <section data-section-id="introduction" className="mt-16">
          <div
            className={`transition-all duration-700 ${
              visibleSections["introduction"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="text-3xl font-semibold text-sky-900 mb-6">Ngành học nổi bật</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              Du học Nhật Bản mở ra cơ hội tiếp xúc với các ngành học chất lượng cao và được đào tạo bởi các giáo sư hàng đầu. 
              Chúng tôi cung cấp thông tin chi tiết về 6 ngành học phổ biến nhất, giúp bạn lựa chọn con đường phù hợp với đam mê và khả năng của mình.
            </p>
          </div>
        </section>

        {/* Majors Grid */}
        <section data-section-id="majors" className="mt-16 pb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {majors.map((major, idx) => (
              <Link
                key={major.id}
                href={`/thong-tin-nganh-hoc/${major.slug}`}
                className={`major-card group relative bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${
                  visibleSections["majors"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <div className="relative h-64 w-full overflow-hidden bg-gradient-to-br from-sky-100 to-blue-100">
                  <Image
                    src={major.image}
                    alt={major.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-300" />
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-semibold text-sky-900 mb-2 group-hover:text-sky-700 transition-colors">
                    {major.title}
                  </h3>
                  <p className="text-slate-600 text-sm line-clamp-3">
                    {major.shortDescription}
                  </p>
                  <div className="mt-4 inline-block px-4 py-2 bg-sky-100 text-sky-700 rounded-full text-sm font-medium group-hover:bg-sky-700 group-hover:text-white transition-colors">
                    Xem chi tiết
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Why Study Majors Section */}
        <section data-section-id="why-study" className="mt-16 pb-16">
          <h2 className="text-3xl font-semibold text-sky-900 mb-8">Tại sao chọn du học Nhật Bản?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: "🎓",
                title: "Giáo dục chất lượng cao",
                description: "Nhật Bản nổi tiếng với nền giáo dục tiên tiến, với các trường đại học xếp hạng cao trên thế giới."
              },
              {
                icon: "💼",
                title: "Cơ hội việc làm",
                description: "Sinh viên tốt nghiệp có cơ hội làm việc tại các công ty lớn tại Nhật Bản và quốc tế."
              },
              {
                icon: "🌏",
                title: "Trải nghiệm văn hóa",
                description: "Du học cho bạn cơ hội khám phá văn hóa Nhật Bản phong phú và học tập từ con người Nhật Bản."
              },
              {
                icon: "💰",
                title: "Cơ hội học bổng",
                description: "Có nhiều chương trình học bổng dành cho sinh viên quốc tế tại Nhật Bản."
              },
              {
                icon: "🚀",
                title: "Phát triển kỹ năng",
                description: "Nâng cao kỹ năng tiếng Nhật, kỹ năng chuyên môn, và kỹ năng mềm cần thiết cho sự nghiệp."
              },
              {
                icon: "🏆",
                title: "Công nhận quốc tế",
                description: "Bằng cấp từ Nhật Bản được công nhận và cấp cao trên toàn cầu."
              }
            ].map((item, idx) => (
              <div
                key={idx}
                className={`why-study-card bg-gradient-to-br from-sky-50 to-blue-50 p-6 rounded-lg border border-sky-100 hover:border-sky-300 hover:shadow-lg transition-all duration-300 ${
                  visibleSections["why-study"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="text-lg font-semibold text-sky-900 mb-2">{item.title}</h3>
                <p className="text-slate-700">{item.description}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
