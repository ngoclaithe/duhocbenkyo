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
    description: "Chương trình Thực tập sinh Điều Dưỡng Nhật Bản hay còn g���i l�� Xuất khẩu lao động ngành Điều dưỡng tại Nhật Bản là chương trình chính thức có hiệu lực từ ngày 1/11/2017",
    content: `Chương trình Thực tập sinh Điều Dưỡng Nhật Bản hay còn gọi là Xuất khẩu lao động ngành Điều dưỡng tại Nhật Bản là chương trình chính thức có hiệu lực từ ngày 1/11/2017, cho phép người lao động Việt Nam có cơ hội sang làm việc tại trong lĩnh vực Điều dưỡng tại các cơ sở y tế và viện dưỡng lão ở Nhật Bản.

Nhu cầu lao động điều dưỡng của Nhật Bản ngày càng tăng cao, dự kiến từ nay tới năm 2025 nước này sẽ thiếu hụt khoảng 380.000 lao động làm việc trong lĩnh vực điều dưỡng, hộ lý, chăm sóc người cao tuổi. Do đó, Chính phủ Nhật Bản đã phê duyệt dự thảo đưa ngành Điều Dưỡng vào trong danh sách các nhóm ngành được phép tuyển chọn theo diện xuất khẩu lao động (thực tập sinh kỹ năng).

CEO Dịch Vụ tự hào là một trong những doanh nghiệp đầu tiên được Bộ lao động thương Binh và Xã hội cho phép tuyển chọn lao động Việt Nam sang Nhật Bản theo chương trình này. Với cơ sở vật chất và quy trình đào tạo đảm bảo theo tiêu chuẩn Nhật Bản, CEO Dịch Vụ cam kết giúp người lao động Việt Nam được trau dồi kiến thức cần thiết và khả năng ngôn ngữ tốt nhất để có thể đáp ứng được các yêu cầu tuyển dụng khắt khe từ phía các đối tác Nhật Bản.`,
    conditions: {
      title: "Điều kiện tham gia chương trình",
      items: [
        "Nam, nữ tốt nghiệp THPT trở lên (ưu tiên tốt nghiệp các trường Y – Dược – Điều Dưỡng). Tuổi từ 18 – 35.",
        "Nam: cao từ 1,62m trở lên, nặng từ 55kg trở lên",
        "Nữ: cao từ 1,50m trở lên, nặng từ 42kg trở lên",
        "Có sức khỏe tốt, không có dị tật, không mắc các bệnh truyền nhiễm, HIV…",
        "Chưa từng tham gia chương trình thực tập sinh kỹ năng tại Nhật Bản, chưa từng xin visa vào Nhật Bản.",
        "Ưu tiên ứng viên có kinh nghiệm theo ngành nghề điều dưỡng.",
        "Lý lịch: Không tiền án, tiền sự hoặc bị truy cứu trách nhiệm hình sự theo quy định của pháp luật Việt Nam"
      ]
    },
    benefits: {
      title: "Quyền lợi tham gia chương trình",
      items: [
        "Thu nhập từ 32,000,000 đến 36,000,000 VNĐ/tháng trở lên (chưa kể làm thêm giờ). Có khả năng tích lũy từ 600 – 900 triệu sau 3 năm làm việc.",
        "Ký hợp đồng lao động từ 3 – 5 năm. Được hưởng mọi chế độ theo quy định của Chính phủ Nhật Bản",
        "Được làm việc tại các Bệnh viện lớn, các Trung tâm dưỡng lão chất lượng cao tại Nhật Bản",
        "Được làm việc trong môi trường Chuyên nghiệp, hiện đại với các chuyên gia, giáo sư, bác sĩ hàng đầu ngành Điều dưỡng tại Nhật Bản",
        "Được nâng cao tay nghề, phát triển trình độ chuyên môn ngành Điều dưỡng",
        "Được học tập kỹ năng và phong cách làm việc chuyên nghiệp của người Nhật Bản",
        "Có cơ hội đạt chuẩn trình độ tiếng Nhật N2 trở lên",
        "Nhiều cơ hội việc làm với mức lương tốt sau khi về nước"
      ]
    },
    jobs: {
      title: "Công việc",
      items: [
        "Chăm sóc thân thể bệnh nhân (hỗ trợ tắm, ăn uống, vệ sinh, thay đồ, di chuyển,…)",
        "Vận chuyển các mẫu, kết quả xét nghiệm, các loại đ��n, phiếu",
        "Tiếp nhận thuốc",
        "Làm vệ sinh phòng bệnh, dụng cụ y tế, vệ sinh dụng cụ vệ sinh, tiêu độc, dọn dẹp",
        "Mang trà, mang cơm và dọn khay cơm",
        "Công việc khác được giao: Ghi chép, gửi báo cáo"
      ]
    }
  },
  {
    id: "2",
    slug: "cong-nghe-thong-tin",
    title: "Công nghệ thông tin",
    shortDescription: "Du học Nhật Bản ngành công nghệ thông tin với cơ hội làm việc tại các công ty hàng đầu",
    image: "/images/cntt.jpg",
    description: "Đi du học Nhật Bản ngành công nghệ thông tin năm 2018 – 2019 ở tại Hà Nội với những cơ hội phát triển sự nghiệp tuyệt vời",
    content: `Trong cuộc sống hiện đại, công nghệ thông tin đang ngày càng chứng tỏ sức lan truyền rộng rãi của mình. Hầu hết mọi thứ hàng ngày của chúng ta đều có liên quan tới công nghệ thông tin. Trong khi đó, nguồn nhân lực được đào tạo bài bản về ngành này thì lại đang trong tình trạng khan hiếm trầm trọng. Chính vì thế, du học ngành công nghệ thông tin tại Nhật Bản đang trở thành một xu thế mới, được nhiều học sinh lựa chọn để theo đuổi.

Vì sao nên học ngành công nghệ thông tin khi sang du học Nhật Bản?

Thứ nhất, khi nhắc tới đất nước Nhật Bản, chúng ta nhắc tới một cường quốc vững mạnh về công nghệ thông tin, với những sáng tạo nổi trội đi đầu thế giới. Không khó để có thể kể tên một số thương hiệu quen thuộc và được ưa dùng khắp mọi nơi như: Sony, Panasonic, Toshiba, Hitachi, Fujitsu… Hơn thế nữa, Nhật Bản còn được biết đến với vô số phần mềm điện tử, máy tính, công nghệ cao, vô cùng hữu ích và được nhiều người ưa dùng. Chính những điều đó đã tạo ra sức hút cực mạnh đối với ngành công nghệ thông tin khi các bạn học sinh đi du học Nhật Bản.

Không phải ngẫu nhiên mà Nhật Bản đạt được những thành công đáng chú ý như vậy. Những thành quả đó là do chính phủ Nhật Bản đã ra sức đầu tư vào đào tạo nhân lực cho công nghệ thông tin. Quốc gia này từng bỏ ra tới 300 triệu USD để phổ cập tin học cho tất cả các trường học, và luôn luôn nâng cấp trang thiết bị dạy học môn tin học trong các nhà trường nhằm tạo ra một môi trường chuyên nghiệp và hiện đại nhất cho học sinh phát triển kỹ năng của mình. Chính vì vậy mà các trường chuyên về đào tạo công nghệ thông tin ở xứ sở hoa anh đào luôn được đánh giá là có chất lượng tốt và là cái nôi đào tạo ra các thiên tài sáng chế cho cả thế giới.

Sau các giờ học lý thuyết trên lớp, các sinh viên IT sẽ được trải nghiệm thực tế, được áp dụng những gì vừa mới học được ở tại các công ty hàng đầu Nhật Bản. Đó là cơ hội để các bạn thỏa sức thể hiện sức sáng tạo, tò mò của bản thân, đồng thời cũng là cơ hội để học tập kinh nghiệm từ các "não làng" trong ngành. Kiểu học lý thuyết song song với thực hành này vô cùng hiệu quả và đã giúp vô số sinh viên trở lên ngày một "lành nghề" hơn.

Kinh nghiệm học tập ngành công nghệ thông tin ở Nhật Bản là gì?

Như chúng ta đã biết, công nghệ thông tin là ngành đòi hỏi nhiều sự sáng tạo nhất. Các bạn sinh viên phải luôn luôn tìm tòi, khám phá và thật năng động thì mới có thể gặt hái được nhiều thành công từ ngành này. Các sinh viên IT lúc nào cũng phải thật nỗ lực, có óc quan sát thật kỹ lưỡng và một bộ não hoạt động nhanh nhạy bởi vì công nghệ thông tin là ngành hết sức đa dạng, và được áp dụng cho tất cả mọi lĩnh vực của đời sống. Trong thời buổi công nghệ phát triển cuồn cuộn như một cơn lốc xoáy, nếu chúng ta không biết cách tự hòa mình vào thì ắt chúng ta sẽ bị đá ra khỏi vòng xoáy đó.

Sau khi tốt nghiệp ngành công nghệ thông tin thì có những cơ hội việc làm nào?

Như đã nói ở trên thì công nghệ thông tin hứa hẹn sẽ mang đến cho bạn những cơ hội việc làm triển vọng với mức lương hậu hĩnh. Có kiến thức về công nghệ thông tin trong tay thì các bạn sẽ đúng như câu nói "vứt ở đâu cũng sống", một bầu trời rộng mở đang chờ đón các bạn. Theo thống kê thì cứ mỗi năm, nhu cầu nhân lực trong ngành công nghệ thông tin tăng 13%. Hơn thế nữa, công nghệ thông tin lại là một ngành rất ổn định vì không chịu nhiều ảnh hưởng của suy thoái hay khủng hoảng kinh tế, nên việc làm cho lao động cũng hết sức ổn định.

Nếu các bạn quyết định sẽ ��� lại Nhật Bản làm việc thì đó là một sự lựa chọn cũng hết sức sáng suốt vì Nhật Bản là một thị trường béo bở, đang rất cần những kỹ sư tin học có tay nghề. Bạn sẽ rất được săn đón ở các công ty điện tử, phần mềm… nếu bạn nắm trong tay một tấm bằng ngành công nghệ thông tin chất lượng.

Điều kiện du học Nhật Bản ngành công nghệ thông tin là gì?

Nếu bạn muốn thử sức theo đuổi công nghệ thông tin ở quê hương núi Phú Sĩ thì bạn cần đáp ứng được các yêu cầu sau:
- Đã tốt nghiệp trung học phổ thông nếu muốn du học hệ đại học và đã tốt nghiệp hệ đại học hoặc cao đẳng nếu muốn du học Thạc sĩ
- Kết quả học tập trung học phổ thông hoặc cao đẳng, đại học phải đạt loại khá trở lên
- Ít nhất phải có chứng chỉ N2 tiếng Nhật hoặc có chứng chỉ 5.0 IELTS trở lên.
- Phải vượt qua kỳ thi du học Nhật Bản được tổ chức tại Việt Nam. Các bạn học sinh có thể đăng ký thi tại một số địa điểm tại Việt Nam như Trường Đại học Ngoại Thương (Hà Nội), Trung tâm hợp tác nguồn nhân lực Việt Nam- Nhật B���n (TP Hồ Chí Minh) và Trường đại học Khoa học Xã hội và Nhân văn (TP Hồ Chí Minh)

Không còn nghi ngờ gì nữa, công nghệ thông tin hứa hẹn sẽ là ngành thay đổi tương lai của chính bạn nếu bạn thực sự đam mê và theo đuổi. Hy vọng những chia sẻ trên đây thực sự hữu ích với các bạn.`,
    conditions: {
      title: "Điều kiện du học",
      items: [
        "Đã tốt nghiệp trung học phổ thông hoặc đại học",
        "Kết quả học tập đạt loại khá trở lên",
        "Chứng chỉ tiếng Nhật N2 trở lên hoặc IELTS 5.0+",
        "Vượt qua kỳ thi EJU (Exam for Japanese University)",
        "Có khả năng tài chính hỗ trợ chi phí du học"
      ]
    },
    benefits: {
      title: "Lợi ích của chương trình",
      items: [
        "Học tập tại các trường đại học hàng đầu Nhật Bản",
        "Cơ hội thực tập tại các công ty công nghệ lớn",
        "Nâng cao kỹ năng lập trình và thiết kế",
        "Có cơ hội làm việc tại Nhật Bản sau tốt nghiệp",
        "Mức lương cạnh tranh trên thị trường lao động"
      ]
    }
  },
  {
    id: "3",
    slug: "nha-hang-khach-san",
    title: "Nhà hàng - Khách sạn",
    shortDescription: "Du học ngành du lịch nhà hàng khách sạn tại Nhật Bản, nơi các tiêu chuẩn phục vụ cao nhất",
    image: "/images/nhahang.jpg",
    description: "Tại sao nên du học Nhật Bản ngành du lịch nhà hàng khách sạn - Cơ hội phát triển kỹ năng quản lý",
    content: `Chúng ta đều biết, Nhật Bản là một trong những quốc gia có nền giáo dục tiên tiến hàng đầu trên thế giới. Chương trình đào tạo tại Nhật không chỉ chú trọng tới việc cung cấp kiến thức cho sinh viên mà muốn đào tạo lực lượng lao động có trình độ chuyên môn và kỹ năng thực chất cho xã hội. Lựa chọn du học Nhật Bản ngành du lịch nhà hàng khách sạn không chỉ cho các bạn cơ hội tiếp xúc và học tập trong nền giáo dục tiên tiến mà còn là cơ hội giúp các bạn được rèn luyện bản thân, học hỏi tính chỉn chu và nguyên tắc làm việc chuyên nghiệp của người Nhật.

Không chỉ nổi tiếng về giáo dục, xứ sở hoa anh đào còn là điểm đến thu hút khách du lịch đông nhất trên thế giới. Du khách tới đây sẽ được chiêm ngưỡng những kiến trúc tuyệt đẹp, những nét văn hóa dân tộc vẫn được gìn giữ và phát huy một cách tích cực. Với môi trường du lịch phát tri���n như vậy, sinh viên ngành du lịch tại Nhật Bản sẽ nhanh chóng nắm bắt và xây dựng cho bản thân những kỹ năng công việc cần thiết. Quan trọng hơn các bạn sinh viên quốc tế du học ngành du lịch tại Nhật Bản sẽ học hỏi được những điều tuyệt vời trong việc gìn giữ giá trị truyền thống, cách phát huy và thúc đẩy văn hóa dân tộc tới với bạn bè thế giới, phương pháp kinh doanh du lịch thông minh của người Nhật,…

Đặc biệt, các bạn sinh viên khi du học Nhật Bản ngành du lịch nhà hàng khách sạn sẽ có cơ hội được làm thêm trong thời gian học tập. Đây chính là cơ hội tuyệt vời để các bạn thực hành và học hỏi những kinh nghiệm thực tế từ các anh chị đi trước. Những công việc làm thêm tuy không mang lại nguồn thu nhập quá lớn nhưng là cơ hội tuyệt vời mà không phải ai cũng có được, nhất là với sinh viên học ngành du lịch. Các bạn có thể làm hướng dẫn viên cho khách nước ngoài tới Nhật Bản (trong đó có những đoàn du lịch từ Việt Nam sang Nhật) hoặc cho chính khách Nhật Bản đi tham quan trong nước. Các bạn sẽ vừa đ��ợc khám phá n��ớc Nhật miễn phí, vừa được học hỏi kinh nghiệm, nâng cao khả năng ngoại ngữ và làm giàu kiến thức cho bản thân.

Du học Nhật Bản ngành du lịch nhà hàng khách sạn có những chuyên ngành gì

Khi lựa chọn du học Nhật Bản ngành du lịch nhà hàng khách sạn bạn không chỉ được đào tạo trong khuôn khổ của chuyên ngành này mà còn có cơ hội học tập và nghiên cứu nhiều lĩnh vực liên quan, hấp dẫn khác. Các lĩnh vực đào tạo là:
- Du lịch
- Tâm lý du lịch
- Du lịch sinh thái
- Quản trị du lịch khách sạn
- Tổ chức sự kiện
- Lễ tân
- Quản lý khách sạn
- Nhà hàng – khách sạn
- Nấu ăn
- Marketing
- Lữ hành

Điều kiện du học Nhật Bản ngành du lịch nhà hàng khách sạn

Để có thể đăng ký đi du học Nhật Bản ngành du lịch cũng như những ngành học khác, các bạn cần chuẩn bị những yêu cầu cơ bản sau đây:

– Đã tốt nghiệp trung học phổ thông hoặc đại học
– Có kết quả học tập đạt loại khá trở lên
– Có chứng chỉ tiếng Nhật N2 trở lên. Sở hữu chứng chỉ tiếng Nhật sẽ mang lại cho bạn rất nhiều l��i thế như cơ hội nhận học bổng du học Nhật Bản, cơ hội xin thực tập/ làm thêm một cách dễ dàng hơn,…
– Thi đỗ kì thi tuyển sinh đại học cho học sinh quốc tế của Nhật Bản (EJU).`,
    conditions: {
      title: "Điều kiện du học",
      items: [
        "Tốt nghiệp trung học phổ thông hoặc đại học",
        "Kết quả học tập đạt loại khá trở lên",
        "Chứng chỉ tiếng Nhật N2 trở lên",
        "Vượt qua kỳ thi EJU",
        "Có đam mê với du lịch và dịch vụ khách hàng"
      ]
    },
    benefits: {
      title: "Lợi ích của chương trình",
      items: [
        "Cơ hội làm thêm trong khách sạn và nhà hàng nổi tiếng",
        "Học tập văn hóa và phong tục địa phương",
        "Phát triển kỹ năng quản lý và lãnh đạo",
        "Cơ hội làm việc tại các tập đoàn du lịch lớn",
        "Mục tiêu sự nghiệp định hướng rõ ràng"
      ]
    }
  },
  {
    id: "4",
    slug: "xay-dung-kien-truc",
    title: "Xây dựng - Kiến trúc",
    shortDescription: "Học ngành xây dựng và kiến trúc tại Nhật Bản với cơ sở hạ tầng hiện đại",
    image: "/images/xaydung.jpg",
    description: "Du học Nhật Bản ngành xây dựng kiến trúc - Nước tiên phong trong công nghệ xây dựng thế giới",
    content: `Nhật Bản được biết đến là một đất nước có nền công nghiệp xây dựng vô cùng phát triển và tiên tiến. Đây là một trong những quốc gia có nhiều tòa nhà chọc trời, cầu treo hiện đại nhất trên thế giới. Nếu bạn đam mê kiến trúc và xây dựng, du học Nhật Bản sẽ là lựa chọn tuyệt vời để phát triển sự nghiệp của bạn.

Các trường đại học tại Nhật Bản cung cấp các chương trình đào tạo chất lượng cao về xây dựng, kiến trúc, và thiết kế nội thất. Sinh viên sẽ được học tập từ các giáo sư nổi tiếng, sử dụng các thiết bị và công nghệ mới nhất trong ngành.

Với nền kinh tế mạnh mẽ và nhu cầu lao động cao, các cử nhân ngành xây dựng tốt nghiệp từ Nhật Bản được các công ty lớn trên thế giới cấp rất cao. Lương khởi điểm cho vị trí kỹ sư xây dựng tại Nhật Bản và quốc tế rất cạnh tranh.

Du học Nhật Bản ngành xây dựng cũng mở ra cơ hội để bạn học hỏi về quy chuẩn xây dựng quốc tế, các tiêu chuẩn an toàn, và kỹ thuật quản lý dự án hiện đại.`,
    conditions: {
      title: "Điều kiện du học",
      items: [
        "Tốt nghiệp trung học phổ thông với kết quả tốt",
        "Có nền tảng toán học và vật lý tốt",
        "Chứng chỉ tiếng Nhật N2 trở lên",
        "Vượt qua kỳ thi EJU",
        "Có giấc mơ phát triển trong ngành xây dựng"
      ]
    },
    benefits: {
      title: "Lợi ích của chương trình",
      items: [
        "Học tập các công nghệ xây dựng tiên tiến nhất",
        "Thực tập tại các công ty xây dựng lớn",
        "Cơ hội việc làm tại Nhật Bản và quốc tế",
        "Lương cao và điều kiện làm việc tốt",
        "Cấp cứu cao trên thị trường lao động toàn cầu"
      ]
    }
  },
  {
    id: "5",
    slug: "canh-nong",
    title: "Nông nghiệp công nghệ cao",
    shortDescription: "Học nông nghiệp hiện đại và công nghệ canh tác bền vững tại Nhật Bản",
    image: "https://images.pexels.com/photos/348689/pexels-photo-348689.jpeg",
    description: "Du học Nhật Bản ngành nông nghiệp công nghệ cao - Học hỏi kỹ thuật canh tác hiện đại",
    content: `Nông nghiệp của Nhật Bản là một trong những ngành nông nghiệp phát triển nhất trên thế giới, được biết đến với các kỹ thuật canh tác hiện đại, sử dụng công nghệ cao và phương pháp bền vững. Nhật Bản luôn đi đầu trong việc áp dụng những công nghệ mới như nông nghiệp chính xác, trồng trọt trong nhà kính thông minh, và quản lý nông trại bằng AI.

Du học ngành nông nghiệp công nghệ cao tại Nhật Bản cho phép bạn học tập những kỹ thuật canh tác tiên tiến, quản lý tài nguyên nước, bảo vệ môi trường, và phát triển sản phẩm nông sản chất lượng cao.

Các trường đại học nông nghiệp tại Nhật Bản cung cấp các chương trình đào tạo bao gồm khoa học đất, khoa học cây trồng, công nghệ thực phẩm, và quản lý trang trại. Sau khi tốt nghiệp, bạn có cơ hội làm việc tại các công ty nông lâm thủy sản lớn, hoặc phát triển nông trại của riêng mình với công nghệ hiện đại.

Nông nghiệp công nghệ cao không chỉ là một lĩnh vực kinh tế quan trọng mà còn đóng vai trò thiết yếu trong bảo vệ môi trường và đảm bảo an ninh lương thực cho nhân loại.`,
    conditions: {
      title: "Điều kiện du học",
      items: [
        "Tốt nghiệp trung học phổ thông hoặc đại học",
        "Có nền tảng kiến thức về sinh học và hóa học",
        "Chứng chỉ tiếng Nhật N2 trở lên",
        "Vượt qua kỳ thi EJU",
        "Có đam mê với nông nghiệp và bảo vệ môi trường"
      ]
    },
    benefits: {
      title: "Lợi ích của chương trình",
      items: [
        "Học tập công nghệ canh tác hiện đại và bền vững",
        "Thực tập tại các trang trại và công ty nông nghiệp lớn",
        "Cơ hội khởi nghiệp với công nghệ nông nghiệp",
        "Lương tốt tại Nhật Bản và quốc tế",
        "Đóng góp vào phát triển bền vững và an ninh lương thực"
      ]
    }
  },
  {
    id: "6",
    slug: "phuong-tay-y",
    title: "Phương tây y - Y tế",
    shortDescription: "Du học ngành y tế và khoa học sức khỏe tại Nhật Bản",
    image: "/images/medicine.jpg",
    description: "Du học Nhật Bản ngành y tế - Học tập y khoa tại quốc gia có nền y t�� hàng đầu thế giới",
    content: `Hệ thống y tế của Nhật Bản được xem là một trong những hệ thống y tế tốt nhất trên thế giới, với công nghệ tân tiến, các bác sĩ giàu kinh nghiệm, và mức độ chăm sóc bệnh nhân xuất sắc. Du học ngành y tế tại Nhật Bản cung cấp cho bạn cơ hội học tập những kiến thức y học hiện đại và kỹ năng lâm sàng cao cấp.

Các trường đại học y khoa tại Nhật Bản cung cấp các chương trình đào tạo bao gồm y khoa, điều dưỡng, dược học, kỹ thuật y tế, và phục hồi chức năng. Sinh viên sẽ được học tập từ các giáo sư hàng đầu và thực tập tại các bệnh viện lớn nhất của Nhật Bản.

Sau khi tốt nghiệp, bạn có cơ hội làm việc tại các bệnh viện, phòng khám, trung tâm nghiên cứu y tế, hoặc công ty dược phẩm. Mức lương cho các chuyên gia y tế tại Nhật Bản rất cạnh tranh, đặc biệt là các vị trí chuyên khoa.

Du học ngành y tế tại Nhật Bản không chỉ phát triển sự nghiệp mà còn đem lại cơ hội giúp đỡ nhân loại và đóng góp vào sức khỏe cộng đồng.`,
    conditions: {
      title: "Điều kiện du học",
      items: [
        "Tốt nghiệp trung học phổ thông với kết quả xuất sắc",
        "Có nền tảng mạnh về sinh học, hóa học, vật lý",
        "Chứng chỉ tiếng Nhật N2 trở lên",
        "Vượt qua kỳ thi EJU với điểm cao",
        "Có sức khỏe tốt và tâm huyết với ngành y tế"
      ]
    },
    benefits: {
      title: "Lợi ích của chương trình",
      items: [
        "Học tập y khoa tại quốc gia có nền y tế tiên tiến",
        "Thực tập tại các bệnh viện lớn nhất Nhật Bản",
        "Cơ hội làm việc tại các cơ sở y tế uy tín",
        "Lương cao và điều kiện làm việc tốt",
        "Cấp cứu cao trong sự nghiệp y tế quốc tế"
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
