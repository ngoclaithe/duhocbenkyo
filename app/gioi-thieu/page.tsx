"use client";

import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";

export default function GioiThieu() {
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
            className={`about-banner-container relative h-64 sm:h-96 lg:h-[500px] rounded-lg overflow-hidden shadow-lg transition-all duration-700 ${
              visibleSections["banner"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <Image
              src="/images/gioithieu.jpeg"
              alt="Giới thiệu"
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Du Học Benkyo</h1>
              <p className="text-base sm:text-lg opacity-90">Chương trình du học Nhật Bản uy tín hàng đầu tại Việt Nam</p>
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
            <h2 className="text-3xl font-semibold text-sky-900 mb-6">Về Du Học Benkyo</h2>
            <div className="space-y-4 text-slate-700 leading-relaxed">
              <p>
                Du Học Benkyo là một trong những công ty tư vấn du học Nhật Bản hàng đầu tại Việt Nam. 
                Với hơn 15 năm kinh nghiệm, chúng tôi đã giúp hàng ngàn sinh viên thực hiện giấc mơ du học và 
                phát triển sự nghiệp tại đất nước Nhật Bản.
              </p>
              <p>
                Chúng tôi cung cấp các dịch vụ tư vấn toàn diện từ khâu chuẩn bị hồ sơ, thi đỗ ngôn ngữ, 
                chọn lựa ngành học và trường học phù hợp, cho đến hỗ trợ việc làm và định cư tại Nhật Bản.
              </p>
              <p>
                Đội ngũ tư vấn viên của chúng tôi đều có kinh nghiệm sống, học tập và làm việc tại Nhật Bản, 
                vì vậy chúng tôi hiểu rõ nhu cầu và thách thức mà các bạn du học sinh sẽ gặp phải.
              </p>
            </div>
          </div>
        </section>

        {/* Core Statistics */}
        <section data-section-id="stats" className="mt-16">
          <h2 className="text-3xl font-semibold text-sky-900 mb-8">Thành tích và Số liệu</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { number: "5,000+", label: "Học sinh đã hỗ trợ" },
              { number: "98%", label: "Tỉ lệ đạt visa" },
              { number: "500+", label: "Nhà tuyển dụng hợp tác" },
              { number: "15+", label: "Năm kinh nghiệm" },
            ].map((stat, idx) => (
              <div
                key={idx}
                className={`stat-card bg-gradient-to-br from-sky-50 to-white p-6 rounded-lg shadow-md text-center transition-all duration-500 transform hover:scale-105 ${
                  visibleSections["stats"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <div className="text-3xl sm:text-4xl font-bold text-sky-700 mb-2">{stat.number}</div>
                <p className="text-slate-700 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Services Section */}
        <section data-section-id="services" className="mt-16">
          <h2 className="text-3xl font-semibold text-sky-900 mb-8">Dịch vụ chính</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Tư vấn hồ sơ",
                description: "Hỗ trợ chuẩn bị hồ sơ du học hoàn chỉnh, bao gồm giấy tờ cần thiết và thư xin học.",
                icon: "📋",
              },
              {
                title: "Du học sinh",
                description: "Hỗ trợ trực tiếp cho các bạn du học sinh sau khi nhập học, từ ký túc xá đến học tập.",
                icon: "🎓",
              },
              {
                title: "Chứng nhận bằng cấp",
                description: "Giúp bạn chuẩn bị cho các kỳ thi chứng chỉ tiếng Nhật (JLPT, NAT-TEST) uy tín.",
                icon: "🏅",
              },
              {
                title: "Đội ngũ nhân sự",
                description: "Tập hợp các chuyên gia giàu kinh nghiệm sẵn sàng hỗ trợ bạn 24/7 bằng tiếng Việt.",
                icon: "👥",
              },
            ].map((service, idx) => (
              <div
                key={idx}
                className={`service-card bg-white border-2 border-sky-100 p-6 rounded-lg hover:border-sky-700 hover:shadow-lg transition-all duration-300 ${
                  visibleSections["services"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <div className="text-4xl mb-3">{service.icon}</div>
                <h3 className="text-xl font-semibold text-sky-900 mb-2">{service.title}</h3>
                <p className="text-slate-700">{service.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Cost Information */}
        <section data-section-id="costs" className="mt-16">
          <h2 className="text-3xl font-semibold text-sky-900 mb-8">Chi phí du học</h2>
          <div className="bg-gradient-to-r from-sky-50 to-blue-50 p-8 rounded-lg shadow-md">
            <div className="space-y-4 text-slate-700">
              <div className="flex justify-between items-center border-b pb-3">
                <span className="font-medium">Học phí trường dạy tiếng</span>
                <span className="text-lg font-semibold text-sky-700">15 - 25 triệu/năm</span>
              </div>
              <div className="flex justify-between items-center border-b pb-3">
                <span className="font-medium">Ký túc xá</span>
                <span className="text-lg font-semibold text-sky-700">2 - 5 triệu/tháng</span>
              </div>
              <div className="flex justify-between items-center border-b pb-3">
                <span className="font-medium">Chi phí sinh hoạt</span>
                <span className="text-lg font-semibold text-sky-700">5 - 8 triệu/tháng</span>
              </div>
              <div className="flex justify-between items-center border-b pb-3">
                <span className="font-medium">Phí hỗ trợ hồ sơ (miễn phí tư vấn)</span>
                <span className="text-lg font-semibold text-sky-700">Miễn phí</span>
              </div>
              <div className="mt-4 p-4 bg-sky-100 rounded text-sky-900">
                <p className="text-sm">
                  <strong>Lưu ý:</strong> Sinh viên có cơ hội xin học bổng từ 20% - 100% học phí từ các trường liên kết.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Visa Rate */}
        <section data-section-id="visa" className="mt-16 pb-16">
          <h2 className="text-3xl font-semibold text-sky-900 mb-8">Tỉ lệ visa</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { year: "2022", rate: "96.5%", applicants: "150 đơn" },
              { year: "2023", rate: "97.2%", applicants: "180 đơn" },
              { year: "2024", rate: "98%", applicants: "200 đơn" },
            ].map((item, idx) => (
              <div
                key={idx}
                className={`visa-card bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-lg border-2 border-green-200 text-center transition-all duration-500 transform hover:-translate-y-2 ${
                  visibleSections["visa"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <h3 className="text-xl font-semibold text-slate-800 mb-2">{item.year}</h3>
                <p className="text-4xl font-bold text-green-600 mb-2">{item.rate}</p>
                <p className="text-sm text-slate-600">{item.applicants}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
