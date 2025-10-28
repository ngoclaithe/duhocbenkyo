"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { majors } from "@/app/data/majors";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [majorsOpen, setMajorsOpen] = useState(false);
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
            <Link className="hover:text-sky-700" href="/du-hoc-nhat-ban/truong-nhat-ngu">Du học Nhật Bản</Link>

            {/* Majors Dropdown */}
            <div className="relative group">
              <button
                className="hover:text-sky-700 flex items-center gap-1 px-3 py-2 rounded-md hover:bg-sky-50 transition-all duration-200"
                onClick={() => setMajorsOpen(!majorsOpen)}
              >
                <span>Thông tin ngành học</span>
                <svg className={`h-4 w-4 transition-transform duration-300 ${majorsOpen ? 'rotate-180' : ''}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
                </svg>
              </button>

              {majorsOpen && (
                <div className="absolute top-full left-0 mt-1 bg-white border border-sky-200 rounded-lg shadow-xl z-50 min-w-72 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="py-2 space-y-0">
                    {majors.map((major, idx) => (
                      <Link
                        key={major.id}
                        href={`/thong-tin-nganh-hoc/${major.slug}`}
                        className="flex items-start gap-3 px-4 py-3 hover:bg-sky-50 transition-colors duration-150 border-b border-sky-100 last:border-b-0 group/item"
                        onClick={() => setMajorsOpen(false)}
                      >
                        <div className="mt-0.5 text-sky-600 group-hover/item:text-sky-700 flex-shrink-0">
                          <span className="text-lg">
                            {idx === 0 ? '🏥' : idx === 1 ? '💻' : idx === 2 ? '🍽️' : idx === 3 ? '🏗️' : idx === 4 ? '🌾' : '⚕️'}
                          </span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-sky-900 group-hover/item:text-sky-700 truncate">
                            {major.title}
                          </p>
                          <p className="text-xs text-slate-500 group-hover/item:text-slate-600 line-clamp-1 mt-0.5">
                            {major.shortDescription}
                          </p>
                        </div>
                        <svg className="h-4 w-4 text-sky-400 group-hover/item:text-sky-600 flex-shrink-0 opacity-0 group-hover/item:opacity-100 transition-all duration-150" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

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
              <Link className="py-2 border-t" href="/du-hoc-nhat-ban/truong-nhat-ngu" onClick={() => setMobileOpen(false)}>Du học Nhật Bản</Link>
              <div className="py-2 border-t">
                <button
                  className="w-full text-left flex items-center justify-between hover:text-sky-700"
                  onClick={() => setMajorsOpen(!majorsOpen)}
                >
                  Thông tin ngành học
                  <svg className={`h-4 w-4 transition-transform ${majorsOpen ? 'rotate-180' : ''}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
                  </svg>
                </button>
                {majorsOpen && (
                  <div className="mt-2 pl-4 space-y-2">
                    {majors.map((major) => (
                      <Link
                        key={major.id}
                        href={`/thong-tin-nganh-hoc/${major.slug}`}
                        className="block py-1 hover:text-sky-700"
                        onClick={() => {
                          setMobileOpen(false);
                          setMajorsOpen(false);
                        }}
                      >
                        {major.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              <Link className="py-2 border-t" href="/tin-tuc" onClick={() => setMobileOpen(false)}>Tin tức</Link>
              <Link className="py-2 border-t" href="/lien-he" onClick={() => setMobileOpen(false)}>Liên hệ</Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
