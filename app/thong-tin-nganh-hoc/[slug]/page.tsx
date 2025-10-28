import Image from "next/image";
import Link from "next/link";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import { getMajorBySlug, getAllMajorSlugs, majors } from "@/app/data/majors";
import MajorDetailContent from "./major-detail-content";

export function generateStaticParams() {
  return getAllMajorSlugs().map((slug) => ({
    slug,
  }));
}

export default async function MajorDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const major = getMajorBySlug(slug);

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
        <MajorDetailContent
          major={major}
          relatedMajors={relatedMajors}
          nextMajor={nextMajor}
          prevMajor={prevMajor}
        />
      </main>
      <Footer />
    </div>
  );
}
