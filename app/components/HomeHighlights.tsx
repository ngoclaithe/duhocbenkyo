import Image from "next/image";
import Link from "next/link";

export default function HomeHighlights() {
  const majors = [
    { src: "/tuvanduhoc/public/images/cntt.jpg", title: "Công nghệ thông tin" },
    { src: "/tuvanduhoc/public/images/cokhi.jpg", title: "Cơ khí" },
    { src: "/tuvanduhoc/public/images/dieuduong.jpg", title: "Điều dưỡng" },
    { src: "/tuvanduhoc/public/images/nhahang.jpg", title: "Nhà hàng - Khách sạn" },
    { src: "/tuvanduhoc/public/images/xaydung.jpg", title: "Xây dựng" },
  ];
  const schools = [
    { src: "/images/mitokokusai.jpg", title: "Mito Kokusai" },
    { src: "/images/truong-nhat-ngu-akamonkai.jpg", title: "Akamonkai" },
    { src: "/images/truong-nhat-ngu-yono-gakuin.jpg", title: "Yono Gakuin" },
  ];
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-4 -mt-10 relative z-[1]">
        <div className="rounded-md bg-rose-600 text-white p-6 shadow">
          <h3 className="text-lg font-semibold">Tư vấn hồ sơ</h3>
          <p className="text-sm opacity-90 mt-1">Hỗ trợ miễn phí chuẩn bị và xử lý hồ sơ du học.</p>
        </div>
        <div className="rounded-md bg-sky-700 text-white p-6 shadow">
          <h3 className="text-lg font-semibold">Học bổng & ưu đãi</h3>
          <p className="text-sm opacity-90 mt-1">Nhiều chương trình học bổng hấp dẫn, cập nhật thường xuyên.</p>
        </div>
        <div className="rounded-md bg-rose-700 text-white p-6 shadow">
          <h3 className="text-lg font-semibold">Việc làm tại Nhật</h3>
          <p className="text-sm opacity-90 mt-1">Kết nối doanh nghiệp, đảm bảo cơ hội việc làm sau tốt nghiệp.</p>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold text-sky-900">Ngành học nổi bật</h2>
        <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {majors.map((m) => (
            <figure key={m.title} className="group overflow-hidden rounded-md shadow border border-sky-50">
              <div className="relative h-28 sm:h-36">
                <Image src={m.src} alt={m.title} fill sizes="(max-width:768px) 50vw, 20vw" className="object-cover transition-transform duration-300 group-hover:scale-105" />
              </div>
              <figcaption className="p-3 text-sm font-medium text-slate-800">{m.title}</figcaption>
            </figure>
          ))}
        </div>
        <div className="mt-4">
          <Link href="/thong-tin-nganh-hoc" className="text-sm text-sky-700 hover:underline">Xem tất cả ngành học</Link>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold text-sky-900">Đối tác - Trường liên kết</h2>
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {schools.map((s) => (
            <figure key={s.title} className="rounded-md border p-4 flex items-center gap-3 bg-white">
              <div className="relative h-14 w-24">
                <Image src={s.src} alt={s.title} fill className="object-cover rounded" />
              </div>
              <figcaption className="font-medium">{s.title}</figcaption>
            </figure>
          ))}
        </div>
      </section>
    </div>
  );
}
