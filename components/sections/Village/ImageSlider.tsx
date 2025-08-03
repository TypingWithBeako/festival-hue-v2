"use client";
import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

import Anh1 from "../../../public/Anh_Lang_Nghe_1.jpg";
import Anh2 from "../../../public/Anh_Lang_Nghe_2.png";
import Anh3 from "../../../public/Anh_Lang_Nghe_3.jpg";
import Anh4 from "../../../public/Anh_Lang_Nghe_4.jpg";
import Anh5 from "../../../public/Anh_Lang_Nghe_5.jpg";

function ImageSlider() {
  const [activeSlide, setActiveSlide] = useState(0); // Track the active slide
  const [fade, setFade] = useState(false); // Track fade animation

  const titles = [
    "Làng nghề truyền thống hoa giấy Thanh Tiên",
    "Làng nghề làm nón lá",
    "Làng nghề tranh Sình",
    "Làng nghề làm hương Thuỷ Xuân",
    "Làng gốm Phước Tích",
  ];
  const descriptions = [
    "Làng nghề Thanh Tiên từ lâu đã trở thành một trong các làng nghề truyền thống ở Huế với việc làm hoa giấy để thờ cúng, đặc biệt là hoa sen giấy với niên đại hơn 300 năm. Làng nghề Thanh Tiên ở xã Phú Mậu huyện Phú Vang vốn có truyền thống làm nông, tuy nhiên thì cứ đến tháng Chạp hàng năm, cả lại lại nô nức rộn rã với nghề làm hoa giấy.",
    "Huế nổi tiếng với biểu tượng chiếc nón bài thơ bên cạnh tà áo dài tím. Chiếc nón lá nhìn bình dị mộc mạc đến vậy nhưng để làm ra được một chiếc nón lá phải trải qua 15 công đoạn hết sức tỉ mỉ, được những bàn tay khéo léo của các nghệ nhân trau chuốt đến từng chi tiết, phải nhìn kỹ lắm ta mới thấy được những bài thơ được ép vào giữa 2 lớp lá.",
    "Làng Sình một làng nhỏ nằm dọc theo bờ sông Hương, nơi làm ra các bức tranh dân gian xứ Huế nhưng có vai trò quan trọng trong đời sống tín ngưỡng của người dân Huế. Những bức tranh dân gian đơn sơ nhưng giàu ý nghĩa thường được sử dụng trong các dịp lễ cúng, sau đó được hoá như lời tiễn đưa trang trọng dành cho tổ tiên.",
    "Đây là một trong các làng nghề truyền thống ở Huế với việc sản xuất các loại hương với màu sắc rực rỡ. Ngôi làng nằm cách thành phố 7km về hướng tây nam, Những bó hương đầy sắc màu không chỉ phục vụ nhu cầu tâm linh, mà ngày nay còn là nét độc đáo thu hút du khách. Đến đây, du khách không chỉ được ngắm nhìn, mà còn có thể tận tay làm ra những nén hương truyền thống.",
    "Làng Phước Tích (xã Phong Hoà, huyện Phong Điền) nổi tiếng với nghề làm gốm lâu đời. Các sản phẩm được điêu khắc một cách độc đáo. Gốm Phước Tích thời xưa nổi tiếng là sản phẩm được cống nạp cho các triều đại Nguyễn, dùng vào việc nấu cơm cho vua. Ngày nay, các sản phẩm gốm Phước tích được sản xuất phục vụ cuộc sống người dân như lu, chum, thống, bùng binh, tu huýt…",
  ];
  const settings = {
    infinite: true,
    slidesToShow: 3,
    centerPadding: "10px",
    centerMode: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 15000,
    dots: true,
    arrows: false,
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

  return (
    <div className="slider-container container z-50">
      {/* Slider */}
      <Slider {...settings}>
        <div className="image-slider-image">
          <Image
            src={Anh1}
            alt="Làng nghề truyền thống hoa giấy Thanh Tiên"
          ></Image>
        </div>
        <div className="image-slider-image">
          <Image src={Anh2} alt="Làng nghề làm nón lá"></Image>
        </div>
        <div className="image-slider-image">
          <Image src={Anh3} alt="Làng nghề tranh Sình"></Image>
        </div>
        <div className="image-slider-image">
          <Image src={Anh4} alt="Làng nghề làm hương Thuỷ Xuân"></Image>
        </div>
        <div className="image-slider-image">
          <Image src={Anh5} alt="Làng gốm Phước Tích"></Image>
        </div>
      </Slider>

      {/* Dynamic Text with Fade Transition */}
      <div
        className={`text-center pt-8 transition-opacity duration-300 ${fade ? "opacity-0" : "opacity-100"}`}
      >
        <h3 className="text-3xl py-8 font-bold font-literata text-primary">
          {titles[activeSlide]}
        </h3>
        <p className="text-xl font-literata text-balance text-left md:text-center pl-4 md:pl-0">
          {descriptions[activeSlide]}
        </p>
      </div>
    </div>
  );
}

export default ImageSlider;
