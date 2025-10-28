"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function HomeHighlights() {
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

  const majors = [
    { src: "/images/cntt.jpg", title: "Công nghệ thông tin" },
    { src: "/images/cokhi.jpg", title: "Cơ khí" },
    { src: "/images/daubep.jpg", title: "Dâu bếp" },
    { src: "/images/dieuduong.jpg", title: "Điều dưỡng" },
    { src: "/images/nhahang.jpg", title: "Nhà hàng - Khách sạn" },
    { src: "/images/xaydung.jpg", title: "Xây dựng" },
  ];

  const schools = [
    { src: "/images/mitokokusai.jpg", title: "Mito Kokusai" },
    { src: "/images/truong-nhat-ngu-akamonkai.jpg", title: "Akamonkai" },
    { src: "/images/truong-nhat-ngu-yono-gakuin.jpg", title: "Yono Gakuin" },
  ];

  const recruitmentImages = [
    { src: "/images/tuyensinh1.jpg", title: "Tuyển sinh 1" },
    { src: "/images/tuyensinh2.png", title: "Tuyển sinh 2" },
    { src: "/images/tuyensinh3.jpg", title: "Tuyển sinh 3" },
  ];

  const reviews = [
    {
      name: "Nguyễn Văn A",
      avatar: "/images/avatar.jpg",
      text: "Du học tại Nhật qua công ty này là quyết định tốt nhất của tôi. Các cô chú đã hỗ trợ tôi rất nhiều từ khâu chuẩn bị hồ sơ đến khi đã làm việc tại Nhật.",
      rating: 5,
    },
    {
      name: "Trần Thị B",
      avatar: "/images/avatar.jpg",
      text: "Cảm ơn vì đã giúp tôi tìm được công việc phù hợp. Môi trường làm việc rất tốt và các senpai rất thân thiện.",
      rating: 5,
    },
    {
      name: "Lê Văn C",
      avatar: "/images/avatar.jpg",
      text: "Quá trình làm hồ sơ rất suôn sẻ, các bước được hướng dẫn chi tiết. Hiện tôi đang làm việc ở Tokyo và rất hài lòng.",
      rating: 5,
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      {/* Featured Services */}
      <section
        data-section-id="services"
        className={`grid grid-cols-1 sm:grid-cols-3 gap-4 -mt-10 relative z-[1] transition-all duration-700 ${
          visibleSections["services"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="featured-service-card bg-rose-600 text-white p-6 shadow">
          <h3 className="text-lg font-semibold">Tư vấn hồ sơ</h3>
          <p className="text-sm opacity-90 mt-1">Hỗ trợ miễn phí chuẩn bị và xử lý hồ sơ du học.</p>
        </div>
        <div className="featured-service-card bg-sky-700 text-white p-6 shadow">
          <h3 className="text-lg font-semibold">Học bổng & ưu đãi</h3>
          <p className="text-sm opacity-90 mt-1">Nhiều chương trình học bổng hấp dẫn, cập nhật thường xuyên.</p>
        </div>
        <div className="featured-service-card bg-rose-700 text-white p-6 shadow">
          <h3 className="text-lg font-semibold">Việc làm tại Nhật</h3>
          <p className="text-sm opacity-90 mt-1">Kết nối doanh nghiệp, đảm bảo cơ hội việc làm sau tốt nghiệp.</p>
        </div>
      </section>

      {/* Featured Majors */}
      <section data-section-id="majors" className="mt-12">
        <h2 className="text-2xl font-semibold text-sky-900">Ngành học nổi bật</h2>
        <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4">
          {majors.map((m, idx) => (
            <figure
              key={m.title}
              className={`major-card overflow-hidden rounded-md shadow border border-sky-50 transition-all duration-500 transform ${
                visibleSections["majors"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <div className="relative h-28 sm:h-36 group overflow-hidden">
                <Image
                  src={m.src}
                  alt={m.title}
                  fill
                  sizes="(max-width:768px) 50vw, 16.66vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <figcaption className="p-3 text-sm font-medium text-slate-800">{m.title}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* Japan Study Image Section */}
      <section data-section-id="japan-study" className="mt-16">
        <Link href="/du-hoc-nhat-ban/truong-nhat-ngu">
          <div
            className={`japan-study-container relative h-64 sm:h-96 rounded-lg overflow-hidden shadow-lg transition-all duration-700 cursor-pointer ${
              visibleSections["japan-study"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <Image
              src="/images/duhocnhatban.png"
              alt="Du học Nhật Bản"
              fill
              className="object-cover transition-transform duration-500 hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/30 hover:bg-black/20 transition-colors duration-300" />
          </div>
        </Link>
      </section>

      {/* Partners Section */}
      <section data-section-id="partners" className="mt-16">
        <h2 className="text-2xl font-semibold text-sky-900">Đối tác - Trường liên kết</h2>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {schools.map((s, idx) => (
            <div
              key={s.title}
              className={`partner-card bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-500 overflow-hidden transform hover:-translate-y-2 ${
                visibleSections["partners"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <div className="relative h-48">
                <Image src={s.src} alt={s.title} fill className="object-cover" />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-sky-900 text-center">{s.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Recruitment Section */}
      <section data-section-id="recruitment" className="mt-16">
        <h2 className="text-2xl font-semibold text-sky-900">Tuyển dụng</h2>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {recruitmentImages.map((img, idx) => (
            <div
              key={img.title}
              className={`recruitment-card overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer ${
                visibleSections["recruitment"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <div className="relative h-56 group overflow-hidden">
                <Image
                  src={img.src}
                  alt={img.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white font-semibold text-center px-4">{img.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Sharing Corner Section */}
      <section data-section-id="reviews" className="mt-16 pb-8">
        <h2 className="text-2xl font-semibold text-sky-900 mb-8">Góc chia sẻ</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review, idx) => (
            <div
              key={idx}
              className={`review-card bg-gradient-to-br from-sky-50 to-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-sky-100 ${
                visibleSections["reviews"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="relative h-12 w-12 flex-shrink-0">
                  <Image
                    src={review.avatar}
                    alt={review.name}
                    fill
                    className="object-cover rounded-full"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-sky-900">{review.name}</h3>
                  <div className="flex gap-1">
                    {Array(review.rating)
                      .fill(0)
                      .map((_, i) => (
                        <span key={i} className="text-yellow-400">★</span>
                      ))}
                  </div>
                </div>
              </div>
              <p className="text-sm text-slate-700 leading-relaxed italic">"{review.text}"</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
