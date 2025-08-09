"use client";
import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

import Anh1 from "@/public/Anh_Lang_Nghe_1.jpg";
import Anh2 from "@/public/Anh_Lang_Nghe_2.jpg";
import Anh3 from "@/public/Anh_Lang_Nghe_3.jpg";
import Anh4 from "@/public/Anh_Lang_Nghe_4.jpg";
import Anh5 from "@/public/Anh_Lang_Nghe_5.jpg";
import Anh6 from "@/public/Anh_Lang_Nghe_6.jpg";

function ImageSlider() {
  const [activeSlide, setActiveSlide] = useState(0); // Track the active slide
  const [fade, setFade] = useState(false); // Track fade animation

  const titles = [
    "Làng nghề hoa giấy Thanh Tiên",
    "Làng nghề Dệt Dèng A Rưm",
    "Làng nghề tranh Sình",
    "Làng nghề làm hương Thuỷ Xuân",
    "Làng nghề gốm Phước Tích",
    "Làng nghề bánh tráng, bánh ướt Lựu Bảo",
  ];
  const descriptions = [
    "Làng nghề Thanh Tiên từ lâu đã trở thành một trong các làng nghề truyền thống ở Huế với việc làm hoa giấy để thờ cúng, đặc biệt là hoa sen giấy với niên đại hơn 300 năm. Làng nghề Thanh Tiên ở xã Phú Mậu huyện Phú Vang vốn có truyền thống làm nông, tuy nhiên thì cứ đến tháng Chạp hàng năm, cả lại lại nô nức rộn rã với nghề làm hoa giấy.",
    "Làng nghề dệt Dèng A Rưm, thuộc thị trấn A Lưới, tỉnh Thừa Thiên Huế, là làng nghề truyền thống lâu đời của người Tà Ôi. Điểm độc đáo của nghề dệt Dèng là người thợ đã đưa các hạt cườm vào sản phẩm để tạo hoa văn, thay vì chỉ dùng chỉ màu. Nghề dệt này không chỉ phục vụ đời sống hàng ngày mà còn là nguồn thu nhập quan trọng, và đã được công nhận là Di sản văn hóa phi vật thể quốc gia năm 2019.",
    "Làng Sình là một làng nhỏ nằm dọc theo bờ sông Hương, nơi làm ra các bức tranh dân gian xứ Huế nhưng có vai trò quan trọng trong đời sống tín ngưỡng của người dân Huế. Những bức tranh dân gian đơn sơ nhưng giàu ý nghĩa thường được sử dụng trong các dịp lễ cúng, sau đó được hoá như lời tiễn đưa trang trọng dành cho tổ tiên.",
    "Đây là một trong các làng nghề truyền thống ở Huế với việc sản xuất các loại hương với màu sắc rực rỡ. Ngôi làng nằm cách thành phố 7km về hướng tây nam, Những bó hương đầy sắc màu không chỉ phục vụ nhu cầu tâm linh, mà ngày nay còn là nét độc đáo thu hút du khách. Đến đây, du khách không chỉ được ngắm nhìn, mà còn có thể tận tay làm ra những nén hương truyền thống.",
    "Làng Phước Tích (xã Phong Hoà, huyện Phong Điền) nổi tiếng với nghề làm gốm lâu đời. Các sản phẩm được điêu khắc một cách độc đáo. Gốm Phước Tích thời xưa nổi tiếng là sản phẩm được cống nạp cho các triều đại Nguyễn, dùng vào việc nấu cơm cho vua. Ngày nay, các sản phẩm gốm Phước tích được sản xuất phục vụ cuộc sống người dân như lu, chum, thống, bùng binh, tu huýt…",
    "Cách trung tâm thành phố Huế 8 km, làng Lựu Bảo (Hương Hồ, Hương Trà, Thừa Thiên Huế), nay là phường Hương Hồ, thành phố Huế từ lâu đã nổi tiếng xa gần với nghề làm bánh tráng, bánh ướt phục vụ nhu cầu của người tiêu dùng trong và ngoài địa phương; sản phẩm có chất lượng cao đã tạo nên thương hiệu làng nghề từ xưa đến nay.",
  ];
  const settings = {
    infinite: true,
    slidesToShow: 3,
    centerPadding: "10px",
    centerMode: true,
    speed: 500,
    autoplay: false,
    dots: true,
    arrows: false,
    focusOnSelect: true,
    afterChange: (current: any) => {
      setFade(true); // Trigger fade-out
      setTimeout(() => {
        setActiveSlide(current); // Update active slide index
        setFade(false); // Trigger fade-in
      }, 300); // Duration of fade-out
    },
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: "0px",
        },
      },
    ],
  };

  const images = [
    { src: Anh1, alt: "Làng nghề truyền thống hoa giấy Thanh Tiên" },
    { src: Anh2, alt: "Làng nghề Dệt Dèng A Rưm" },
    { src: Anh3, alt: "Làng nghề tranh Sình" },
    { src: Anh4, alt: "Làng nghề làm hương Thuỷ Xuân" },
    { src: Anh5, alt: "Làng nghề gốm Phước Tích" },
    { src: Anh6, alt: "Làng nghề bánh tráng, bánh ướt Lựu Bảo" },
  ];

  return (
    <div className="slider-container container z-50">
      {/* Slider */}

      <Slider {...settings}>
        {images.map((img, idx) => (
          <div className="image-slider-image " key={idx}>
            <Image src={img.src} alt={img.alt} />
          </div>
        ))}
      </Slider>

      {/* Dynamic Text with Fade Transition */}
      <div
        className={`text-center pt-8 transition-opacity duration-300 min-h-[36rem] md:min-h-[24rem] ${fade ? "opacity-0" : "opacity-100"}`}
      >
        <h3 className="text-3xl py-8 font-bold text-pretty font-literata text-primary px-4 md:px-0">
          {titles[activeSlide]}
        </h3>
        <p className="text-xl font-literata text-pretty text-left md:text-center px-4 md:px-0">
          {descriptions[activeSlide]}
        </p>
      </div>
    </div>
  );
}

export default ImageSlider;
