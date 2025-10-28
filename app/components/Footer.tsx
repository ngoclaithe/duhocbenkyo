import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-sky-900 text-white mt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-1 sm:grid-cols-3 gap-8">
        <div>
          <h3 className="text-lg font-semibold mb-3">Du Học Nhật Bản</h3>
          <p className="text-sm opacity-90">Tư vấn du học, định hướng nghề nghiệp và hỗ trợ việc làm tại Nhật Bản.</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-3">Liên hệ</h3>
          <ul className="space-y-2 text-sm opacity-95">
            <li>Địa chỉ: 1073/23 CMTE, Q.7, Tân Bình, TP.HCM</li>
            <li>Hotline: <a className="underline" href="tel:+849769220162">076 922 0162</a></li>
            <li>Email: <a className="underline" href="mailto:info@auteam">info@autem.global</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-3">Liên kết nhanh</h3>
          <div className="flex flex-col gap-2 text-sm">
            <Link className="hover:underline" href="/du-hoc-nhat-ban">Du học Nhật Bản</Link>
            <Link className="hover:underline" href="/thong-tin-nganh-hoc">Ngành học</Link>
            <Link className="hover:underline" href="/tin-tuc">Tin tức</Link>
            <Link className="hover:underline" href="/lien-he">Liên hệ</Link>
          </div>
        </div>
      </div>
      <div className="border-t border-white/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 text-xs text-center opacity-80">
          © {new Date().getFullYear()} Du Học Nhật Bản. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
