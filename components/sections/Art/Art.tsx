"use client";

import React, { useRef } from "react";
import styles from "./Art.module.scss";
import { useEffect } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import AOS from "aos";
import "aos/dist/aos.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMasksTheater,
  faMicrophone,
  faMusic,
  faPaintBrush,
  faScrewdriverWrench,
  faStar,
} from "@fortawesome/free-solid-svg-icons";

import NhaNhacCungDinh from "@/public/Art/cac_nghe_si_dien_vien_nhac_cong_say_me_voi_nha_nhac_cung_dinh.webp";
import CaHue from "@/public/Art/cahue2.jpg";
import MuaCungDinh from "@/public/Art/gin giu.jpg";
import TuongHue from "@/public/Art/tuong-hue.jpg";
import DieuKhac from "@/public/Art/Suc song cua lang nghe 2_result.webp";
import PhapLam from "@/public/Art/co-vat-phap-lam-hue.jpg";
import Image from "next/image";

const musicIcon = {
  icon: <FontAwesomeIcon icon={faMusic} />,
  iconStyle: { background: "rgb(33, 150, 243)", color: "#fff" },
};
const microphoneIcon = {
  icon: <FontAwesomeIcon icon={faMicrophone} />,
  iconStyle: { background: "rgb(233, 30, 99)", color: "#fff" },
};
const stageIcon = {
  icon: <FontAwesomeIcon icon={faMasksTheater} />,
  iconStyle: { background: "rgb(16, 204, 82)", color: "#fff" },
};
const woodIcon = {
  icon: <FontAwesomeIcon icon={faScrewdriverWrench} />,
  iconStyle: { background: "#8B5C2A", color: "#fff" },
};
const enamelIcon = {
  icon: <FontAwesomeIcon icon={faPaintBrush} />,
  iconStyle: { background: "#FFD700", color: "#fff" },
};
const starIcon = {
  icon: <FontAwesomeIcon icon={faStar} />,
  iconStyle: { background: "#800080", color: "#fff" },
};

function Art() {
  useEffect(() => {
    AOS.init({
      once: false,
    });
  }, []);

  const timeline = [
    {
      icon: musicIcon,
      date: "Di sản Thế giới UNESCO",
      title: "Nhã nhạc Cung đình Huế",
      subtitle: "Âm nhạc bác học, trang trọng",
      desc: "Được sử dụng trong các nghi lễ cung đình triều Nguyễn. Là biểu tượng của văn hóa Huế, thường là tiết mục trung tâm trong Festival.",
      image: NhaNhacCungDinh,
    },
    {
      icon: microphoneIcon,
      date: "Dân ca Cố đô",
      title: "Ca Huế",
      subtitle: "Lời ca sâu lắng trên sông Hương",
      desc: "Thể loại âm nhạc dân gian, thường được biểu diễn trên thuyền rồng. Thể hiện tâm hồn lãng mạn, thơ mộng của người Huế.",
      image: CaHue,
    },
    {
      icon: stageIcon,
      date: "Nghệ thuật sân khấu",
      title: "Múa Cung đình",
      subtitle: "Vũ điệu của vương triều",
      desc: "Các điệu múa tinh tế, cầu kỳ, đi kèm với Nhã nhạc. Tái hiện lại sự lộng lẫy và phong cách thẩm mỹ của triều đại phong kiến.",
      image: MuaCungDinh,
    },
    {
      icon: stageIcon,
      date: "Nghệ thuật diễn xướng",
      title: "Tuồng Huế",
      subtitle: "Sân khấu truyền thống",
      desc: "Loại hình sân khấu cổ truyền, mang tính ước lệ cao. Giàu giá trị giáo dục, là một phần quan trọng để bảo tồn văn hóa qua các kỳ Festival.",
      image: TuongHue,
    },

    {
      icon: woodIcon,
      date: "Nghệ thuật thủ công",
      title: "Điêu khắc Gỗ",
      subtitle: "Sự tinh xảo của nghệ nhân",
      desc: "Những tác phẩm chạm khắc tinh xảo trên gỗ, xuất hiện trong các công trình kiến trúc cung đình và dân gian. Thể hiện sự tài hoa và kiên nhẫn của người nghệ nhân Huế.",
      image: DieuKhac,
    },
    {
      icon: enamelIcon,
      date: "Nghệ thuật hoàng gia",
      title: "Nghệ thuật Pháp Lam",
      subtitle: "Trang trí trên kim loại",
      desc: "Một loại hình nghệ thuật độc đáo của triều Nguyễn, với kỹ thuật tráng men trên đồng. Màu sắc ráng rỡ, bền đẹp, thường được dùng để trang trí trong cung điện.",
      image: PhapLam,
    },
  ];

  return (
    <section id="ArtSection" className="container">
      <div id="Art" className="flex justify-center mb-12 pt-20">
        <h1
          data-aos="zoom-in"
          data-aos-duration="500"
          className={`text-primary font-bold font-literata text-5xl md:text-6xl text-center ${styles.title}`}
        >
          Nghệ thuật
        </h1>
      </div>
      <div>
        <p
          data-aos="fade-up"
          data-aos-duration="500"
          className="self-center md:text-center font-literata text-lg md:text-2xl text-pretty md:text-balance text-left px-4 md:px-auto md:ml-auto mb-20"
        >
          Kết thúc chuyến hành trình, ta trở về với nghệ thuật Huế - nơi ký ức
          ngân vang trong từng điệu múa, khúc nhạc và ánh nhìn người nghệ sĩ.
        </p>
      </div>

      <VerticalTimeline animate={false} className="overflow-y-hidden">
        {timeline.map((t, i) => {
          // const contentStyle =
          //   i === 0
          //     ? { background: "rgb(33, 150, 243)", color: "#fff" }
          //     : undefined;
          // const arrowStyle =
          //   i === 0
          //     ? { borderRight: "7px solid  rgb(33, 150, 243)" }
          //     : undefined;

          return (
            <div
              key={i}
              className="mb-16"
              data-aos="fade-up"
              data-aos-duration="800"
            >
              <VerticalTimelineElement
                key={i}
                position={i % 2 === 0 ? "left" : "right"} // <-- alternate sides
                className="vertical-timeline-element--work"
                date={t.date}
                {...t.icon}
              >
                {t.title ? (
                  <>
                    <h3 className="vertical-timeline-element-title text-primary font-bold text-xl font-literata text-pretty">
                      {t.title}
                    </h3>
                    {t.subtitle && (
                      <h4 className="vertical-timeline-element-subtitle text-pretty italic font-literata">
                        {t.subtitle}
                      </h4>
                    )}
                    {t.desc && <p className="text-pretty">{t.desc}</p>}
                    {t.image && (
                      <div className="mt-4">
                        <Image
                          src={t.image}
                          alt={t.title}
                          className="rounded-lg shadow-lg text-pretty w-full h-auto transition-transform duration-300 hover:scale-102"
                        />
                      </div>
                    )}
                  </>
                ) : undefined}
              </VerticalTimelineElement>
            </div>
          );
        })}
        <VerticalTimelineElement {...starIcon}></VerticalTimelineElement>
      </VerticalTimeline>
    </section>
  );
}

export default Art;
