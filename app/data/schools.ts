export interface School {
  id: string;
  name: string;
  image: string;
  introduction: string;
  sections: SchoolSection[];
}

export interface SchoolSection {
  title: string;
  content: string | string[];
}

export const schools: School[] = [
  {
    id: "atys",
    name: "HỌC VIỆN QUỐC TẾ ATYS",
    image: "/images/danhsachtruongnhatngu/hoc-vien-quoc-te-atys.png",
    introduction:
      "Học viện quốc tế ATYS được thành lập từ ngày 1/10/2007 tại Tỉnh Utsunomiya, Thủ đô Tokyo. Nổi tiếng với chất lượng các lớp học cao, giảng viên giàu kinh nghiệm và nhiệt huyết giảng dạy, học viện ngày càng được nhiều học sinh, sinh viên biết đến và đến tham gia du học Nhật Bản.",
    sections: [
      {
        title: "I. GIỚI THIỆU CHUNG",
        content:
          "Cách thủ đô Tokyo chỉ 50 phút đi tàu nhưng học viện lại có mức học phí thấp nhất trong các trường xung quanh Tokyo. Ngoài ra, Utsunomiya cũng là nơi mà có rất nhiều việc làm thêm cho sinh viên. Những điều kiện lý tưởng trên đã giúp trường ngày càng thu hút được đông đảo sinh viên.",
      },
      {
        title: "II. VỊ TRÍ",
        content:
          "Tochigi là tỉnh lớn thứ 20 của Nhật Bản nằm ở vùng Kanto trên đảo Honshu, với dân số khoảng hơn 2 triệu người, Thủ phủ là thành phố Utsunomiya. Tochigi có khí hậu ôn đới ẩm với biến thể nhiệt rộng (mùa hè ẩm và mùa đông khô). Từ Tokyo, bạn chỉ mất khoảng 90 phút đi tàu điện để tới Tochigi.\n\nTochigi cũng là điểm du lịch thú vị với nhiều cảnh quang nổi tiếng như: Nikko, nơi có ngôi đền cổ đạo Shinto và những ngôi chùa của đạo Phật đã được UNESCO công nhận là di sản thế giới. Nikko cách Tokyo 1 giờ đi tàu.\n\nNằm ở phía bắc của xứ sở hoa anh đào, Tochigi là trung tâm văn hóa lớn, vừa có nền giáo dục phát triển. Đây cũng là quê hương của nhiều trường Đại học, Cao đẳng bao gồm cả những trường về Khoa học và công nghệ, văn học, y học, giáo dục và nghệ thuật.",
      },
      {
        title: "III. KHÓA HỌC",
        content: [
          "Khóa học 2 năm - Tháng 4",
          "1 năm 9 tháng - Tháng 7",
          "1 năm 6 tháng - Tháng 10",
        ],
      },
      {
        title: "IV. BẢNG HỌC PHÍ (ĐV: JPY)",
        content: [
          "Khóa 2 năm: Tổng 1,230,000 JPY",
          "Khóa 1 năm 9 tháng: Tổng 1,085,000 JPY",
          "Khóa 1 năm 6 tháng: Tổng 940,000 JPY",
        ],
      },
      {
        title: "V. KÝ TÚC XÁ",
        content: [
          "Nhập ký túc: 30,000 JPY (1 lần)",
          "Tiền ký túc: 120,000 JPY (6 tháng x 20,000)",
          "Phí quản lý, vệ sinh: 10,000 JPY (1 lần)",
          "Phòng hỏa hoạn: 5,000 JPY (1 lần/năm)",
          "Tổng: 165,000 JPY",
        ],
      },
    ],
  },
  {
    id: "mito",
    name: "Trường Nhật Ngữ Quốc Tế Mito",
    image: "/images/danhsachtruongnhatngu/mitokokusai.jpg",
    introduction:
      "Trường Nhật ngữ quốc tế Mito được thành lập vào năm 1988 tại Tomobe, tỉnh Ibaraki. Sau đó đến năm 1994, trường chuyển về khu vực Chinami, thành phố Mito và hoạt động đến ngày hôm nay.",
    sections: [
      {
        title: "THÔNG TIN CHUNG",
        content: [
          "Thành lập: Năm 1988",
          "Website: www.mito-nihongo.jp",
          "Nhập học: Tháng 1, Tháng 4, Tháng 7, Tháng 10",
          "Địa chỉ: 1-5-41 Jonan Mito-shi, Ibaraki, Japan 310-0803",
          "Hướng dẫn đi lại: 5 phút đi bộ từ nhà ga Miti, cửa Nam, tuyến JR Jyouban",
        ],
      },
      {
        title: "MÔI TRƯỜNG HỌC TẬP",
        content:
          "Thành phố Mito, tỉnh Ibaraki là nơi có môi trường sống và học tập lý tưởng, nơi đây có hệ thống giao thông thuận lợi bậc nhất Nhật Bản, cùng với đó là chi phí học tập và sinh hoạt tương đối thấp hơn so với những thành phố tư��ng đương.",
      },
      {
        title: "CHƯƠNG TRÌNH ĐÀO TẠO",
        content:
          "Giáo trình của Nhật ngữ quốc tế Mito được thiết kế phù hợp để học viên có thể hoàn thiện tối đa kỹ năng đàm thoại, điều kiện tiên quyết cho những ai muốn sinh sống và làm việc lâu dài ở Nhật Bản. Bên cạnh đó là những nội dung quan trọng khác để giúp học viên có thể đáp ứng yêu cầu tiếng Nhật khi học lên Cao đẳng, Đại học...",
      },
      {
        title: "KHÓA TIẾNG NHẬT",
        content: [
          "Tháng 11: 3 tháng",
          "Tháng 4: 1 hoặc 2 năm",
          "Tháng 7: 1 năm 9 tháng",
          "Tháng 10: 1 năm 6 tháng",
        ],
      },
      {
        title: "ĐẶC SẮC",
        content: [
          "Lớp học giới hạn số lượng, tập trung vào năng lực và nhu cầu của mỗi học viên",
          "Nhà trường luôn tạo mọi điều kiện để học viên có môi trường sống và học tập thân thiện, thoải mái",
          "Số lượng học viên đậu vào các trường Cao đẳng, Đại học bao gồm cả các trường Đại học quốc gia luôn ở mức cao",
        ],
      },
      {
        title: "HỌC PHÍ",
        content: [
          "Phí xét tuyển: 21,000 yên",
          "Phí nhập học: 52,500 yên",
          "Học phí: 504,000 yên/năm",
          "Chi phí khác: 102,500 yên",
          "Tổng cộng: 680,000 yên",
        ],
      },
    ],
  },
  {
    id: "utsunomiya-nikken",
    name: "Trường Nhật ngữ Utsunomiya Nikken",
    image: "/images/danhsachtruongnhatngu/truong-nhat-ngu-akamonkai.jpg",
    introduction:
      "Trường Nhật ngữ Utsunomiya Nikken thuộc thủ phủ quận Tochigi, thành phố Utsunomiya, cách khoảng 100 km về phía Bắc của Tokyo. Utsunomiya là một thành phố cỡ trung bình với dân số 450.000 người.",
    sections: [
      {
        title: "THÔNG TIN LIÊN HỆ",
        content: [
          "Website: www2.ucatv.ne.jp/~ujls.sea",
          "Thành phố: Utsunomiya",
          "Người đảm trách: Mr Takano",
          "Địa chỉ: 3-8-5 Motoimaizumi, Utsunomiya-shi, Tochigi 321-0954, Nhật Bản",
          "TEL: 028-639-0510",
          "FAX: +81-28-610-5864",
        ],
      },
      {
        title: "VỊ TRÍ VÀ MÔI TRƯỜNG",
        content:
          "Quận Tochigi gần Tokyo, nơi đây có phong cảnh thiên nhiên phong phú và các kho tàng văn hóa lịch sử của Nhật Bản. Từ Tokyo đến Tohoku bằng tàu điện ngầm mất khoảng 55 phút.\n\nTrường Nhật ngữ Utsunomiya có đặc trưng như nằm trong Công viên quốc gia Tochigi của Nikko là Futaara và đền thờ Toshogu lịch sử, đền Rinnoji. Các khu đền thờ này được công nhận là di sản văn hóa thế giới vào năm 1999.\n\nHơn nữa về phía Bắc là cao nguyên và làng suối nước nóng Nasu Shiobara. Phía đông là Mashiko – quê hương của ngành gốm xứ từ khắp nơi trên thế giới. Tất cả các địa điểm này đi xe hơi từ thành phố Utsunomiya chỉ hết khoảng một giờ.",
      },
      {
        title: "ĐIỀU KIỆN HỌC TẬP",
        content:
          "Học sinh quốc tế đã kết thúc 12 năm giáo dục (Trung học phổ thông) trước khi đến Nhật Bản.",
      },
      {
        title: "CHƯƠNG TRÌNH ĐÀO TẠO",
        content: [
          "Cấp mới bắt đầu 1 (200 giờ): Hiragana, Katakana, các ký tự Kanji cơ bản",
          "Cấp mới bắt đầu 2 (200 giờ): Cuộc trò chuyện hàng ngày, vượt qua tiếng Nhật thành thạo thi Level 4 hoặc 3",
          "Trung cấp 1 (200 giờ): Phát triển từ vựng chuyên ngành, đọc khó khăn hơn",
          "Trung cấp 2 (200 giờ): Các hình thức đàm thoại đặc biệt, vượt qua Level 3 hoặc 2",
          "Nâng cao mức 1 (400 giờ): Chuẩn bị cho cao đẳng và đại học, vượt qua Level 2 hoặc 1",
          "Nâng cao mức 2 (400 giờ): Các hình thức đàm thoại chuyên ngành, vượt qua Level 2 và 1",
        ],
      },
      {
        title: "HỌC PHÍ (18 tháng)",
        content: [
          "Tiền nhập học 1 năm",
          "Tài liệu học",
          "Chăn màn, điện nước...",
          "Tổng cộng: 1,100,000 JPY",
          "(Sinh viên có thể đóng mức học phí 9 tháng)",
        ],
      },
    ],
  },
  {
    id: "ecc-nagoya",
    name: "Trường Nhật ngữ ECC Nagoya",
    image: "/images/danhsachtruongnhatngu/truong-nhat-ngu-ecc-nagoya-157036162359e71819e3926.jpg",
    introduction:
      "Trường Nhật ngữ ECC được thành lập vào tháng 4 năm 1992 tại tỉnh Aichi thành phố Nagoya Nhật Bản. Nagoya thành phố được xem là một trong những thành phố quan trọng nhất tại Nhật Bản, nằm giữa Osaka và Tokyo.",
    sections: [
      {
        title: "GIỚI THIỆU CHUNG",
        content:
          "Hiện tại trường đang đào tạo hơn 180 học viên đến từ các quốc gia khác nhau, theo học các khóa học được đào tạo tại trường. Hàng năm tỷ lệ học viên đạt tốt nghiệp và đậu vào các trường đại học Nhật số lượng nhiều, và có thành tích học tập cao.",
      },
      {
        title: "VỊ TRÍ VÀ MÔI TRƯỜNG",
        content:
          "Nagoya là thành phố được xem là một trong những thành phố quan trọng nhất tại Nhật Bản, thành phố nằm giữa Osaka và Tokyo. Có vị trí giao thông hiện đại và thuận tiện, thành phố tập trung nhiều doanh nghiệp lớn hàng đầu tại Nhật.\n\nTừ sân bay quốc tế Chubu đến nội thành mất khoảng 20~30 phút đi xe điện, Trường ECC Nagoya tọa lạc ở vị trí vô cùng tiện lợi thuộc trung tâm thành phố. Vì thế, cho dù các bạn lần đầu tiên đến Nhật cũng cảm thấy dễ đi lại.",
      },
      {
        title: "ĐẶC ĐIỂM",
        content: [
          "Nhà trường không chỉ đào tạo và hướng dẫn các bạn mà còn tư vấn và định hướng cho tương lai của các bạn khi học tiếng t���i trường",
          "Trường ECC Nagoya là ngôi trường đào tạo chuyên nghiệp và hàng đầu tại thành phố",
          "Ngoài những giờ học tiếng Nhật tại lớp, nhà trường còn tổ chức các buổi học ngoại khóa: trà đạo, cắm hoa, hoạt động dã ngoại hoặc những chuyến du lịch do trường tổ chức",
        ],
      },
      {
        title: "ĐIỀU KIỆN TUYỂN SINH",
        content: [
          "Tốt nghiệp THPT",
          "Trình độ tiếng Nhật N5 trở lên hoặc có thời gian học tiếng Nhật ít nhất 150 giờ",
        ],
      },
      {
        title: "HỌC PHÍ (MỘT NĂM)",
        content: [
          "Phí thi nhập học: 20,000 yên",
          "Phí nhập học: 50,000 yên",
          "Học phí: 660,000 yên",
          "Chi phí khác: 12,000 yên",
          "Tổng cộng (Một năm): 742,000 yên",
        ],
      },
    ],
  },
];
