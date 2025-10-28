export interface Major {
  id: string;
  slug: string;
  title: string;
  description: string;
  shortDescription: string;
  image: string;
  content: string;
  conditions?: {
    title: string;
    items: string[];
  };
  benefits?: {
    title: string;
    items: string[];
  };
  jobs?: {
    title: string;
    items: string[];
  };
}

export const majors: Major[] = [
  {
    id: "1",
    slug: "dieu-duong",
    title: "Thực tập sinh Điều dưỡng tại Nhật Bản",
    shortDescription: "Chương trình đào tạo điều dưỡng chuyên nghiệp tại Nhật Bản với lương hấp dẫn",
    image: "/images/dieuduong.jpg",
    description: "Chương trình Thực tập sinh Điều Dưỡng Nhật Bản là chương trình chính thức có hiệu lực từ ngày 1/11/2017",
    content: `Chương trình Thực tập sinh Điều Dưỡng Nhật Bản hay còn gọi là Xuất khẩu lao động ngành Điều dưỡng tại Nhật Bản là chương trình chính thức có hiệu lực từ ngày 1/11/2017, cho phép người lao động Việt Nam có cơ hội sang làm việc tại các cơ sở y tế và viện dưỡng lão ở Nhật Bản.

Nhu cầu lao động điều dưỡng của Nhật Bản ngày càng tăng cao, dự kiến từ nay tới năm 2025 nước này sẽ thiếu hụt khoảng 380.000 lao động làm việc trong lĩnh vực điều dưỡng, hộ lý, chăm sóc người cao tuổi.

CEO Dịch Vụ tự hào là một trong những doanh nghiệp đầu tiên được Bộ lao động thương Binh và Xã hội cho phép tuyển chọn lao động Việt Nam sang Nhật Bản theo chương trình này. Với cơ sở vật chất và quy trình đào t��o đảm bảo theo tiêu chuẩn Nhật Bản, CEO Dịch Vụ cam kết giúp người lao động Việt Nam được trau dồi kiến thức cần thiết.`,
    conditions: {
      title: "Điều kiện tham gia chương trình",
      items: [
        "Nam, nữ tốt nghiệp THPT trở lên. Tuổi từ 18 – 35.",
        "Nam: cao từ 1,62m trở lên, nặng từ 55kg trở lên",
        "Nữ: cao từ 1,50m trở lên, nặng từ 42kg trở lên",
        "Có sức khỏe tốt, không có dị tật, không mắc các bệnh truyền nhiễm",
        "Chưa từng tham gia chương trình thực tập sinh kỹ năng tại Nhật Bản",
        "Lý lịch: Không tiền án, tiền sự"
      ]
    },
    benefits: {
      title: "Quyền lợi tham gia chương trình",
      items: [
        "Thu nhập từ 32.000.000 đến 36.000.000 VNĐ/tháng",
        "Tích lũy từ 600 – 900 triệu sau 3 năm làm việc",
        "Ký hợp đồng lao động từ 3 – 5 năm",
        "Được hưởng mọi chế độ theo quy định của Chính phủ Nhật Bản",
        "Cơ hội đạt chuẩn trình độ tiếng Nhật N2 trở lên"
      ]
    },
    jobs: {
      title: "Công việc",
      items: [
        "Chăm sóc thân thể bệnh nhân (hỗ trợ tắm, ăn uống, vệ sinh)",
        "Vận chuyển các mẫu, kết quả xét nghiệm, các loại đơn, phiếu",
        "Tiếp nhận thuốc",
        "Làm vệ sinh phòng bệnh, dụng cụ y tế",
        "Mang trà, mang cơm và dọn khay cơm"
      ]
    }
  },
  {
    id: "2",
    slug: "cong-nghe-thong-tin",
    title: "Công nghệ thông tin",
    shortDescription: "Du học Nhật Bản ngành công nghệ thông tin với cơ hội làm việc tại các công ty hàng đầu",
    image: "/images/cntt.jpg",
    description: "Đi du học Nhật Bản ngành công nghệ thông tin với những cơ hội phát triển sự nghiệp tuyệt vời",
    content: `Trong cuộc sống hiện đại, công nghệ thông tin đang ngày càng chứng tỏ sức lan truyền rộng rãi của mình. Hầu hết mọi thứ hàng ngày của chúng ta đều có liên quan tới công nghệ thông tin.

Nhật Bản là một cường quốc vững mạnh về công nghệ thông tin, với những sáng tạo nổi trội đi đầu thế giới. Những thương hiệu quen thuộc như Sony, Panasonic, Toshiba, Hitachi, Fujitsu đã nổi tiếng khắp thế giới.

Chính phủ Nhật Bản đã ra sức đầu tư vào đào tạo nhân lực cho công nghệ thông tin. Các trường chuyên về đào tạo công nghệ thông tin ở xứ sở hoa anh đào luôn được đánh giá là có chất lượng tốt.

Sau các giờ học lý thuyết trên lớp, các sinh viên IT sẽ được trải nghiệm thực tế tại các công ty hàng đầu Nhật Bản.`,
    conditions: {
      title: "Điều kiện du học",
      items: [
        "Tốt nghiệp trung học phổ thông",
        "Kết quả học tập đạt loại khá trở lên",
        "Chứng chỉ tiếng Nhật N2 trở lên hoặc IELTS 5.0+",
        "Vượt qua kỳ thi EJU",
        "Có khả năng tài chính"
      ]
    },
    benefits: {
      title: "Lợi ích của chương trình",
      items: [
        "Học tập tại các trường đại học hàng đầu Nhật Bản",
        "Cơ hội thực tập tại các công ty công nghệ lớn",
        "Nâng cao kỹ năng lập trình",
        "Làm việc tại Nhật Bản sau tốt nghiệp",
        "Mức lương cạnh tranh"
      ]
    }
  },
  {
    id: "3",
    slug: "nha-hang-khach-san",
    title: "Nhà hàng - Khách sạn",
    shortDescription: "Du học ngành du lịch nhà hàng khách sạn tại Nhật Bản, n��i các tiêu chuẩn phục vụ cao nhất",
    image: "/images/nhahang.jpg",
    description: "Tại sao nên du học Nhật Bản ngành du lịch nhà hàng khách sạn",
    content: `Nhật Bản là một trong những quốc gia có nền giáo dục tiên tiến hàng đầu trên thế giới. Chương trình đào tạo tại Nhật không chỉ chú trọng tới việc cung cấp kiến thức mà còn muốn đào tạo lực lượng lao động có trình độ chuyên môn.

Lựa chọn du học Nhật Bản ngành du lịch nhà hàng khách sạn cho các bạn cơ hội tiếp xúc và học tập trong nền giáo dục tiên tiến. Các bạn được rèn luyện bản thân, học hỏi tính chỉn chu và nguyên tắc làm việc chuyên nghiệp của người Nhật.

Xứ sở hoa anh đào còn là điểm đến thu hút khách du lịch đông nhất trên thế giới. Sinh viên ngành du lịch tại Nhật Bản sẽ nhanh chóng nắm bắt những kỹ năng công việc cần thiết.`,
    conditions: {
      title: "Điều kiện du học",
      items: [
        "Tốt nghiệp trung học phổ thông hoặc đại học",
        "Kết quả học tập đạt loại khá trở lên",
        "Chứng chỉ tiếng Nhật N2 trở lên",
        "Vượt qua kỳ thi EJU",
        "Đam mê với du lịch và dịch vụ khách hàng"
      ]
    },
    benefits: {
      title: "Lợi ích của chương trình",
      items: [
        "Cơ hội làm thêm trong khách sạn nổi tiếng",
        "Học tập văn hóa và phong tục địa phương",
        "Phát triển kỹ năng quản lý",
        "Làm việc tại các tập đoàn du lịch lớn",
        "Cơ hội sự nghiệp định hướng rõ ràng"
      ]
    }
  },
  {
    id: "4",
    slug: "xay-dung-kien-truc",
    title: "Xây dựng - Kiến trúc",
    shortDescription: "Học ngành xây dựng và kiến trúc tại Nhật Bản với cơ sở hạ tầng hiện đại",
    image: "/images/xaydung.jpg",
    description: "Du học Nhật Bản ngành xây dựng kiến trúc - Nước tiên phong trong công nghệ xây dựng",
    content: `Nhật Bản được biết đến là một đất nước có nền công nghiệp xây dựng vô cùng phát triển và tiên tiến. Đây là một trong những quốc gia có nhiều tòa nhà chọc trời, cầu treo hiện đại nhất trên thế giới.

Nếu bạn đam mê kiến trúc và xây dựng, du học Nhật Bản sẽ là lựa chọn tuyệt vời để phát triển sự nghiệp. Các trường đại học tại Nhật Bản cung cấp các chương trình đào tạo chất lượng cao về xây dựng, kiến trúc, và thiết kế nội thất.

Sinh viên sẽ được học tập từ các giáo sư nổi tiếng, sử dụng các thiết bị và công nghệ mới nhất. Với nền kinh tế mạnh mẽ, các cử nhân ngành xây dựng tốt nghiệp từ Nhật Bản được các công ty lớn đánh giá rất cao.`,
    conditions: {
      title: "Điều kiện du học",
      items: [
        "Tốt nghiệp trung học phổ thông",
        "Nền tảng toán học và vật lý tốt",
        "Chứng chỉ tiếng Nhật N2 trở lên",
        "Vượt qua kỳ thi EJU",
        "Đam mê kiến trúc và xây dựng"
      ]
    },
    benefits: {
      title: "Lợi ích của chương trình",
      items: [
        "Học công nghệ xây dựng tiên tiến",
        "Thực tập tại các công ty xây dựng lớn",
        "Cơ hội việc làm quốc tế",
        "Lương cao và điều kiện làm việc tốt",
        "Cấp cứu cao trên thị trường lao động"
      ]
    }
  },
  {
    id: "5",
    slug: "canh-nong",
    title: "Nông nghiệp công nghệ cao",
    shortDescription: "Học nông nghiệp hiện đại và công nghệ canh tác bền vững tại Nhật Bản",
    image: "https://images.pexels.com/photos/348689/pexels-photo-348689.jpeg",
    description: "Du học Nhật Bản ngành nông nghiệp công nghệ cao",
    content: `Nông nghiệp của Nhật Bản là một trong những ngành nông nghiệp phát triển nhất trên thế giới, được biết đến với các kỹ thuật canh tác hiện đại, sử dụng công nghệ cao và phương pháp bền vững.

Nhật Bản luôn đi đầu trong việc áp dụng những công nghệ mới như nông nghiệp chính xác, trồng trọt trong nhà kính thông minh, và quản lý nông trại bằng AI.

Du học ngành nông nghiệp công nghệ cao tại Nhật Bản cho phép bạn học tập những kỹ thuật canh tác tiên tiến, quản lý tài nguyên nước, bảo vệ môi trường, và phát triển sản phẩm nông sản chất lượng cao.`,
    conditions: {
      title: "Điều kiện du học",
      items: [
        "Tốt nghiệp trung học phổ thông",
        "Nền tảng sinh học và hóa học",
        "Chứng chỉ tiếng Nhật N2 trở lên",
        "Vượt qua kỳ thi EJU",
        "Đam mê nông nghiệp"
      ]
    },
    benefits: {
      title: "Lợi ích của chương trình",
      items: [
        "Công nghệ canh tác hiện đại",
        "Thực tập tại các trang trại lớn",
        "Khởi nghiệp với công nghệ nông nghiệp",
        "Lương tốt quốc tế",
        "Phát triển bền vững"
      ]
    }
  },
  {
    id: "6",
    slug: "phuong-tay-y",
    title: "Phương tây y - Y tế",
    shortDescription: "Du học ngành y tế và khoa học sức khỏe tại Nhật Bản",
    image: "https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg",
    description: "Du học Nhật Bản ngành y tế - Y khoa tại quốc gia có nền y tế hàng đầu",
    content: `Hệ thống y tế của Nhật Bản được xem là một trong những hệ thống y tế tốt nhất trên thế giới, với công nghệ tân tiến, các bác sĩ giàu kinh nghiệm, và mức độ chăm sóc bệnh nhân xuất sắc.

Du học ngành y tế tại Nhật Bản cung cấp cho bạn cơ hội học tập những kiến thức y học hiện đại và kỹ năng lâm sàng cao cấp.

Các trường đại học y khoa tại Nhật Bản cung cấp các chương trình đào tạo bao gồm y khoa, điều dưỡng, dược học, kỹ thuật y tế. Sinh viên sẽ được học tập từ các giáo sư hàng đầu.`,
    conditions: {
      title: "Điều kiện du học",
      items: [
        "Tốt nghiệp trung học phổ thông xuất sắc",
        "Nền tảng sinh học, hóa học, vật lý",
        "Chứng chỉ tiếng Nhật N2 trở lên",
        "Vượt qua kỳ thi EJU cao",
        "Sức khỏe tốt"
      ]
    },
    benefits: {
      title: "Lợi ích của chương trình",
      items: [
        "Y khoa tiên tiến",
        "Thực tập bệnh viện lớn",
        "Cơ hội làm việc y tế",
        "Lương cao",
        "Cấp cứu quốc tế"
      ]
    }
  }
];

export function getMajorBySlug(slug: string): Major | undefined {
  return majors.find((major) => major.slug === slug);
}

export function getAllMajorSlugs(): string[] {
  return majors.map((major) => major.slug);
}
