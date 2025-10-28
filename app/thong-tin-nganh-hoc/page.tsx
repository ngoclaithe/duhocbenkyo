"use client";

import Link from "next/link";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

export default function MajorsPage() {
  const majorsList = [
    { id: "1", slug: "dieu-duong", title: "Điều dưỡng" },
    { id: "2", slug: "cong-nghe-thong-tin", title: "Công nghệ thông tin" },
    { id: "3", slug: "nha-hang-khach-san", title: "Nhà hàng - Khách sạn" },
    { id: "4", slug: "xay-dung-kien-truc", title: "Xây dựng - Kiến trúc" },
    { id: "5", slug: "canh-nong", title: "Nông nghiệp" },
    { id: "6", slug: "phuong-tay-y", title: "Y tế" },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <section className="mt-8">
          <h1 className="text-4xl font-bold text-sky-900 mb-4">Thông tin ngành học</h1>
          <p className="text-lg text-slate-700 mb-12">Khám phá 6 ngành học hàng đầu tại Nhật Bản</p>
        </section>

        <section className="mt-16 pb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {majorsList.map((major) => (
              <Link
                key={major.id}
                href={`/thong-tin-nganh-hoc/${major.slug}`}
                className="block bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 p-6 hover:-translate-y-2"
              >
                <h3 className="text-xl font-semibold text-sky-900 mb-2">
                  {major.title}
                </h3>
                <div className="inline-block px-4 py-2 bg-sky-100 text-sky-700 rounded-full text-sm font-medium">
                  Xem chi tiết
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
