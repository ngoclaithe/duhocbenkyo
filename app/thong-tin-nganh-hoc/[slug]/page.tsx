"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import { getMajorBySlug, getAllMajorSlugs, majors } from "@/app/data/majors";
import { useEffect, useState } from "react";

export default function MajorDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const major = getMajorBySlug(slug);
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

  if (!major) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-sky-900 mb-4">Không tìm thấy ngành học</h1>
            <p className="text-slate-700 mb-8">Ngành học bạn tìm kiếm không tồn tại.</p>
            <Link href="/thong-tin-nganh-hoc" className="inline-block px-6 py-2 bg-sky-700 text-white rounded-lg hover:bg-sky-800 transition-colors">
              Quay lại danh sách ngành học
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const relatedMajors = majors.filter((m) => m.id !== major.id).slice(0, 3);
  const currentIndex = majors.findIndex((m) => m.slug === slug);
  const nextMajor = majors[(currentIndex + 1) % majors.length];
  const prevMajor = majors[(currentIndex - 1 + majors.length) % majors.length];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Banner Section */}
        <section data-section-id="banner" className="mt-8">
          <div
            className={`major-detail-banner relative h-64 sm:h-96 lg:h-[500px] rounded-lg overflow-hidden shadow-lg transition-all duration-700 ${
              visibleSections["banner"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <Image
              src={major.image}
              alt={major.title}
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">{major.title}</h1>
              <p className="text-base sm:text-lg opacity-90">{major.description}</p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section data-section-id="content" className="mt-16">
          <div
            className={`transition-all duration-700 ${
              visibleSections["content"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="prose prose-lg max-w-none text-slate-700 leading-relaxed space-y-4">
              {major.content.split("\n\n").map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>
          </div>
        </section>

        {/* Conditions Section */}
        {major.conditions && (
          <section data-section-id="conditions" className="mt-16">
            <div
              className={`transition-all duration-700 ${
                visibleSections["conditions"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <h2 className="text-3xl font-semibold text-sky-900 mb-6">{major.conditions.title}</h2>
              <div className="bg-gradient-to-br from-sky-50 to-blue-50 p-8 rounded-lg border border-sky-200">
                <ul className="space-y-3">
                  {major.conditions.items.map((item, idx) => (
                    <li key={idx} className="flex gap-3">
                      <span className="text-sky-700 font-semibold flex-shrink-0">✓</span>
                      <span className="text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        )}

        {/* Benefits Section */}
        {major.benefits && (
          <section data-section-id="benefits" className="mt-16">
            <div
              className={`transition-all duration-700 ${
                visibleSections["benefits"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <h2 className="text-3xl font-semibold text-sky-900 mb-6">{major.benefits.title}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {major.benefits.items.map((item, idx) => (
                  <div key={idx} className="bg-white border-2 border-sky-200 p-5 rounded-lg hover:border-sky-700 hover:shadow-lg transition-all duration-300">
                    <div className="flex gap-3">
                      <span className="text-2xl flex-shrink-0">💼</span>
                      <p className="text-slate-700">{item}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Jobs Section */}
        {major.jobs && (
          <section data-section-id="jobs" className="mt-16">
            <div
              className={`transition-all duration-700 ${
                visibleSections["jobs"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <h2 className="text-3xl font-semibold text-sky-900 mb-6">{major.jobs.title}</h2>
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-lg border border-green-200">
                <ul className="space-y-3">
                  {major.jobs.items.map((item, idx) => (
                    <li key={idx} className="flex gap-3">
                      <span className="text-green-700 font-semibold flex-shrink-0">→</span>
                      <span className="text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        )}

        {/* Related Majors Section */}
        <section data-section-id="related" className="mt-16 pb-16">
          <div
            className={`transition-all duration-700 ${
              visibleSections["related"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="text-3xl font-semibold text-sky-900 mb-8">Ngành học liên quan</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedMajors.map((relatedMajor) => (
                <Link
                  key={relatedMajor.id}
                  href={`/thong-tin-nganh-hoc/${relatedMajor.slug}`}
                  className="related-major-card group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="relative h-40 w-full overflow-hidden bg-gradient-to-br from-sky-100 to-blue-100">
                    <Image
                      src={relatedMajor.image}
                      alt={relatedMajor.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-sky-900 group-hover:text-sky-700 transition-colors line-clamp-2">
                      {relatedMajor.title}
                    </h3>
                    <p className="text-slate-600 text-sm mt-2 line-clamp-2">
                      {relatedMajor.shortDescription}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Navigation Section */}
        <section data-section-id="navigation" className="mt-16 pb-16">
          <div
            className={`transition-all duration-700 ${
              visibleSections["navigation"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="flex justify-between items-center gap-4">
              <Link
                href={`/thong-tin-nganh-hoc/${prevMajor.slug}`}
                className="flex-1 p-4 bg-sky-50 hover:bg-sky-100 rounded-lg border border-sky-200 hover:border-sky-700 transition-all duration-300 text-left"
              >
                <p className="text-sm text-sky-700 font-semibold mb-1">← Ngành trước</p>
                <p className="text-slate-700 font-medium line-clamp-1">{prevMajor.title}</p>
              </Link>

              <Link
                href="/thong-tin-nganh-hoc"
                className="px-6 py-3 bg-sky-700 text-white rounded-lg hover:bg-sky-800 transition-colors font-medium"
              >
                Xem tất cả ngành
              </Link>

              <Link
                href={`/thong-tin-nganh-hoc/${nextMajor.slug}`}
                className="flex-1 p-4 bg-sky-50 hover:bg-sky-100 rounded-lg border border-sky-200 hover:border-sky-700 transition-all duration-300 text-right"
              >
                <p className="text-sm text-sky-700 font-semibold mb-1">Ngành tiếp →</p>
                <p className="text-slate-700 font-medium line-clamp-1">{nextMajor.title}</p>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export function generateStaticParams() {
  return getAllMajorSlugs().map((slug) => ({
    slug,
  }));
}
