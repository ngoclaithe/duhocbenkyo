import Link from "next/link";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import { getMajorBySlug } from "@/app/data/majors";

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
            <p className="text-slate-700 mb-8">Ngành học &ldquo;{slug}&rdquo; không tồn tại.</p>
            <Link href="/thong-tin-nganh-hoc" className="inline-block px-6 py-2 bg-sky-700 text-white rounded-lg hover:bg-sky-800">
              Quay lại danh sách
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-sky-900 mb-4">{major.title}</h1>
        <p className="text-lg text-slate-700 mb-8">{major.description}</p>
        
        <div className="prose prose-lg max-w-none text-slate-700 leading-relaxed space-y-4 mb-8">
          {major.content.split("\n\n").map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>

        {major.conditions && (
          <div className="mt-12 mb-8">
            <h2 className="text-2xl font-bold text-sky-900 mb-4">{major.conditions.title}</h2>
            <ul className="space-y-2">
              {major.conditions.items.map((item, idx) => (
                <li key={idx} className="flex gap-3">
                  <span className="text-sky-700 font-bold">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {major.benefits && (
          <div className="mt-12 mb-8">
            <h2 className="text-2xl font-bold text-sky-900 mb-4">{major.benefits.title}</h2>
            <ul className="space-y-2">
              {major.benefits.items.map((item, idx) => (
                <li key={idx} className="flex gap-3">
                  <span className="text-sky-700 font-bold">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="mt-12">
          <Link href="/thong-tin-nganh-hoc" className="px-6 py-2 bg-sky-700 text-white rounded-lg hover:bg-sky-800">
            Quay lại danh sách
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}