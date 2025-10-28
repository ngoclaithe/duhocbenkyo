import Image from "next/image";
import Link from "next/link";
import { schools } from "@/app/data/schools";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import { notFound } from "next/navigation";

interface SchoolDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

export function generateStaticParams() {
  return schools.map((school) => ({
    id: school.id,
  }));
}

export default async function SchoolDetailPage({ params }: SchoolDetailPageProps) {
  const { id } = await params;
  const school = schools.find((s) => s.id === id);

  if (!school) {
    notFound();
  }

  const currentIndex = schools.findIndex((s) => s.id === id);
  const previousSchool = currentIndex > 0 ? schools[currentIndex - 1] : null;
  const nextSchool = currentIndex < schools.length - 1 ? schools[currentIndex + 1] : null;

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {/* Hero Image */}
        <section className="relative h-96 sm:h-[28rem] overflow-hidden">
          <Image
            src={school.image}
            alt={school.name}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 flex flex-col justify-end">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-8">
              <h1 className="text-3xl sm:text-4xl font-bold text-white">{school.name}</h1>
            </div>
          </div>
        </section>

        {/* Breadcrumb */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-2 text-sm text-slate-600">
            <Link href="/" className="hover:text-sky-600">
              Trang chủ
            </Link>
            <span>/</span>
            <Link href="/du-hoc-nhat-ban/truong-nhat-ngu" className="hover:text-sky-600">
              Danh sách trường
            </Link>
            <span>/</span>
            <span className="text-sky-900 font-medium truncate">{school.name}</span>
          </div>
        </section>

        {/* Content */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          {/* Introduction */}
          <div className="mb-12 prose prose-sm max-w-none">
            <p className="text-lg leading-relaxed text-slate-700 border-l-4 border-sky-600 pl-6 italic">
              {school.introduction}
            </p>
          </div>

          {/* Sections */}
          <div className="space-y-10">
            {school.sections.map((section, idx) => (
              <div key={idx} className="section-container">
                <h2 className="text-2xl font-bold text-sky-900 mb-4 pb-3 border-b-2 border-sky-200">
                  {section.title}
                </h2>
                <div className="prose prose-sm max-w-none">
                  {typeof section.content === "string" ? (
                    <div className="text-slate-700 leading-relaxed whitespace-pre-wrap">
                      {section.content}
                    </div>
                  ) : (
                    <ul className="list-none space-y-3">
                      {section.content.map((item, itemIdx) => (
                        <li key={itemIdx} className="flex gap-3 text-slate-700">
                          <span className="inline-flex items-center justify-center min-w-6 h-6 rounded-full bg-sky-100 text-sky-600 font-semibold text-sm flex-shrink-0">
                            {itemIdx + 1}
                          </span>
                          <span className="pt-0.5">{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Navigation */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {previousSchool ? (
              <Link href={`/du-hoc-nhat-ban/truong-nhat-ngu/${previousSchool.id}`}>
                <div className="school-nav-card bg-sky-50 hover:bg-sky-100 border border-sky-200 rounded-lg p-6 transition-all duration-300 cursor-pointer h-full">
                  <div className="text-sm text-sky-600 font-semibold mb-2">← Trường trước</div>
                  <h3 className="text-lg font-bold text-sky-900 line-clamp-2">{previousSchool.name}</h3>
                </div>
              </Link>
            ) : (
              <div />
            )}
            {nextSchool ? (
              <Link href={`/du-hoc-nhat-ban/truong-nhat-ngu/${nextSchool.id}`}>
                <div className="school-nav-card bg-sky-50 hover:bg-sky-100 border border-sky-200 rounded-lg p-6 transition-all duration-300 cursor-pointer h-full text-right">
                  <div className="text-sm text-sky-600 font-semibold mb-2">Trường tiếp →</div>
                  <h3 className="text-lg font-bold text-sky-900 line-clamp-2">{nextSchool.name}</h3>
                </div>
              </Link>
            ) : (
              <div />
            )}
          </div>
        </section>

        {/* Back to List */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-12">
          <Link href="/du-hoc-nhat-ban/truong-nhat-ngu">
            <button className="w-full sm:w-auto bg-sky-600 hover:bg-sky-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300">
              ← Quay lại danh sách trường
            </button>
          </Link>
        </section>
      </main>
      <Footer />
    </div>
  );
}
