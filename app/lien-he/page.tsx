"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState } from "react";

export default function LienHe() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi sớm nhất có thể.");
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  const contactInfo = [
    {
      icon: "📍",
      title: "Địa chỉ",
      content: "Tầng 5, 1073/23 CMTE, Phường 25, Quận 7, Thành phố Hồ Chí Minh, Việt Nam",
    },
    {
      icon: "📞",
      title: "Hotline",
      content: "(+84) 976 922 0162",
      href: "tel:+84976922162",
    },
    {
      icon: "✉️",
      title: "Email",
      content: "info@autglowteam",
      href: "mailto:info@autglowteam",
    },
    {
      icon: "🕐",
      title: "Giờ làm việc",
      content: "Thứ 2 - Thứ 6: 8:00 - 17:30\nThứ 7: 9:00 - 12:00",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section className="mt-8 mb-16">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-sky-900 mb-4">Liên hệ với chúng tôi</h1>
            <p className="text-lg text-slate-700 opacity-90">
              Chúng tôi sẵn sàng giải đáp mọi thắc mắc của bạn về du học Nhật Bản
            </p>
          </div>
        </section>

        {/* Contact Information Cards */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, idx) => (
              <div
                key={idx}
                className="contact-info-card bg-gradient-to-br from-sky-50 to-blue-50 p-6 rounded-lg shadow-md border-2 border-sky-100 hover:border-sky-700 hover:shadow-lg transition-all duration-300"
              >
                <div className="text-4xl mb-3">{info.icon}</div>
                <h3 className="text-lg font-semibold text-sky-900 mb-2">{info.title}</h3>
                {info.href ? (
                  <a href={info.href} className="text-sky-700 hover:text-sky-900 font-medium break-all">
                    {info.content}
                  </a>
                ) : (
                  <p className="text-slate-700 whitespace-pre-line">{info.content}</p>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Map Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-sky-900 mb-8">Vị trí của chúng tôi</h2>
          <div className="map-container rounded-lg overflow-hidden shadow-lg h-96 sm:h-[500px]">
            <iframe
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.8265850898506!2d106.70319!3d10.741865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317526f5f9999999%3A0x1234567890abcdef!2s1073%20CMTE%2C%20Phuong%2025%2C%20Quan%207%2C%20Ho%20Chi%20Minh%20City!5e0!3m2!1svi!2svn!4v1234567890"
            />
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-sky-900 mb-8">Gửi tin nhắn cho chúng tôi</h2>
          <div className="max-w-2xl mx-auto bg-gradient-to-br from-sky-50 to-blue-50 p-8 rounded-lg shadow-md border-2 border-sky-100">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-sky-900 mb-2">
                    Họ và tên
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="contact-input w-full px-4 py-2 border-2 border-sky-200 rounded-lg focus:outline-none focus:border-sky-700"
                    placeholder="Nhập tên của bạn"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-sky-900 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="contact-input w-full px-4 py-2 border-2 border-sky-200 rounded-lg focus:outline-none focus:border-sky-700"
                    placeholder="Nhập email của bạn"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-sky-900 mb-2">
                    Số điện thoại
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="contact-input w-full px-4 py-2 border-2 border-sky-200 rounded-lg focus:outline-none focus:border-sky-700"
                    placeholder="Nhập số điện thoại"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-sky-900 mb-2">
                    Chủ đề
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="contact-input w-full px-4 py-2 border-2 border-sky-200 rounded-lg focus:outline-none focus:border-sky-700"
                    placeholder="Chủ đề liên hệ"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-sky-900 mb-2">
                  Nội dung
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="contact-textarea w-full px-4 py-2 border-2 border-sky-200 rounded-lg focus:outline-none focus:border-sky-700 resize-none"
                  placeholder="Nhập nội dung tin nhắn của bạn"
                />
              </div>

              <button
                type="submit"
                className="contact-submit-button w-full bg-sky-700 text-white font-semibold py-3 rounded-lg hover:bg-sky-800 transition-colors duration-300"
              >
                Gửi tin nhắn
              </button>
            </form>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-sky-900 mb-8">Câu hỏi thường gặp</h2>
          <div className="space-y-4">
            {[
              {
                q: "Có phí tư vấn hồ sơ không?",
                a: "Không, chúng tôi cung cấp dịch vụ tư vấn hồ sơ du học hoàn toàn miễn phí cho tất cả các bạn.",
              },
              {
                q: "Bao lâu sẽ có kết quả xin visa?",
                a: "Thông thường mất khoảng 2-4 tuần từ khi gửi hồ sơ đến khi nhận kết quả xin visa từ Đại sứ quán Nhật Bản.",
              },
              {
                q: "Có cơ hội xin học bổng không?",
                a: "Có, chúng tôi hỗ trợ xin học bổng từ các trường liên kết. Tỉ lệ học bổng là 20% - 100% học phí tùy theo trường và thành tích học tập.",
              },
              {
                q: "Sau khi học xong có hỗ trợ việc làm không?",
                a: "Có, chúng tôi có mạng lưới liên kết với hơn 500 doanh nghiệp tại Nhật Bản và sẽ hỗ trợ bạn tìm việc làm phù hợp.",
              },
            ].map((faq, idx) => (
              <div
                key={idx}
                className="faq-item bg-white border-2 border-sky-100 p-6 rounded-lg hover:border-sky-700 hover:shadow-md transition-all duration-300"
              >
                <h3 className="text-lg font-semibold text-sky-900 mb-2">❓ {faq.q}</h3>
                <p className="text-slate-700 ml-6">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
