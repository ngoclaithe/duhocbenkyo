"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  return (
    <header className="w-full shadow-sm bg-white">
      {/* Top info bar */}
      <div className="w-full bg-sky-700 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between h-10 text-xs sm:text-sm">
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2">
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.1 2 5 5.1 5 9c0 5.2 7 13 7 13s7-7.8 7-13c0-3.9-3.1-7-7-7zm0 9.5c-1.4 0-2.5-1.1-2.5-2.5S10.6 6.5 12 6.5s2.5 1.1 2.5 2.5S13.4 11.5 12 11.5z"/></svg>
              <span>1073/23 CMTE, Q.7, Tân Bình, TP.HCM</span>
            </div>
            <a href="tel:+849769220162" className="flex items-center gap-2 hover:underline">
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor"><path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V21a1 1 0 01-1 1C10.07 22 2 13.93 2 3a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.24 1.01l-2.2 2.2z"/></svg>
              <span>(+84) 976 922 0162</span>
            </a>
            <a href="mailto:info@autem.global" className="flex items-center gap-2 hover:underline">
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 13L2 6.76V18a2 2 0 002 2h16a2 2 0 002-2V6.76L12 13zM12 11L22 5H2l10 6z"/></svg>
              <span>info@autem.global</span>
            </a>
          </div>
          <div className="hidden sm:flex items-center gap-3">
            <a aria-label="facebook" href="#" className="hover:opacity-80"><svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor"><path d="M22 12a10 10 0 10-11.5 9.9v-7h-2v-3h2v-2.3c0-2 1.2-3.1 3-3.1.9 0 1.8.1 1.8.1v2h-1c-1 0-1.3.6-1.3 1.2V12h2.2l-.3 3h-1.9v7A10 10 0 0022 12"/></svg></a>
            <a aria-label="twitter" href="#" className="hover:opacity-80"><svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor"><path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.26 4.26 0 001.87-2.36 8.49 8.49 0 01-2.67 1.02 4.23 4.23 0 00-7.2 3.86A12 12 0 013 4.79a4.22 4.22 0 001.31 5.64 4.2 4.2 0 01-1.92-.53v.05a4.23 4.23 0 003.39 4.14c-.47.13-.97.2-1.49.2-.36 0-.71-.03-1.05-.1a4.24 4.24 0 003.95 2.94A8.49 8.49 0 012 19.54 12 12 0 008.29 21c7.55 0 11.68-6.26 11.68-11.69 0-.18 0-.35-.01-.53A8.36 8.36 0 0022.46 6z"/></svg></a>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/images/logo-japan.png" alt="Logo" width={44} height={44} />
              <span className="text-base sm:text-lg font-semibold text-sky-800">Du Học Nhật Bản</span>
            </Link>
          </div>

          <button aria-label="Toggle menu" className="sm:hidden p-2 rounded-md border border-sky-200 text-sky-700" onClick={() => setMobileOpen(!mobileOpen)}>
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
          </button>

          <nav className="hidden sm:flex items-center gap-6 text-sm font-medium">
            <Link className="hover:text-sky-700" href="/">Trang chủ</Link>
            <Link className="hover:text-sky-700" href="/gioi-thieu">Giới thiệu</Link>
            <Link className="hover:text-sky-700" href="/du-hoc-nhat-ban">Du học Nhật Bản</Link>
            <Link className="hover:text-sky-700" href="/thong-tin-nganh-hoc">Thông tin ngành học</Link>
            <Link className="hover:text-sky-700" href="/tin-tuc">Tin tức</Link>
            <Link className="hover:text-sky-700" href="/lien-he">Liên hệ</Link>
            <div className="ml-2 flex items-center">
              <form action="/search" className="flex items-center">
                <input name="q" placeholder="Tìm kiếm..." className="h-9 w-36 rounded-l-full border border-sky-200 px-3 text-sm focus:outline-none" />
                <button className="h-9 rounded-r-full bg-sky-700 px-3 text-white" type="submit">
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm11-1.6l-4.3-4.3a9.5 9.5 0 10-1.4 1.4l4.3 4.3a1 1 0 001.4-1.4z"/></svg>
                </button>
              </form>
            </div>
          </nav>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <nav className="sm:hidden pb-4">
            <div className="flex flex-col gap-3 text-sm font-medium">
              <Link className="py-2 border-t" href="/" onClick={() => setMobileOpen(false)}>Trang chủ</Link>
              <Link className="py-2 border-t" href="/gioi-thieu" onClick={() => setMobileOpen(false)}>Giới thiệu</Link>
              <Link className="py-2 border-t" href="/du-hoc-nhat-ban" onClick={() => setMobileOpen(false)}>Du học Nhật Bản</Link>
              <Link className="py-2 border-t" href="/thong-tin-nganh-hoc" onClick={() => setMobileOpen(false)}>Thông tin ngành học</Link>
              <Link className="py-2 border-t" href="/tin-tuc" onClick={() => setMobileOpen(false)}>Tin tức</Link>
              <Link className="py-2 border-t" href="/lien-he" onClick={() => setMobileOpen(false)}>Liên hệ</Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
