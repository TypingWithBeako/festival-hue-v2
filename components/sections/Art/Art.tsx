import React, { useRef } from "react";
import styles from "./Art.module.scss";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faMasksTheater,
  faMicrophone,
  faMusic,
  faSchool,
  faStar,
} from "@fortawesome/free-solid-svg-icons";

import NhaNhacCungDinh from "@/public/Art/cac_nghe_si_dien_vien_nhac_cong_say_me_voi_nha_nhac_cung_dinh.webp";
import CaHue from "@/public/Art/cahue2.jpg";
import MuaCungDinh from "@/public/Art/gin giu.jpg";
import TuongHue from "@/public/Art/tuong-hue.jpg";
import Image from "next/image";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { title } from "process";
gsap.registerPlugin(useGSAP);

const musicIcon = {
  icon: <FontAwesomeIcon icon={faMusic} />,
  iconStyle: { background: "rgb(33, 150, 243)", color: "#fff" },
};
const danceIcon = {
  icon: <FontAwesomeIcon icon={faMicrophone} />,
  iconStyle: { background: "rgb(233, 30, 99)", color: "#fff" },
};
const stageIcon = {
  icon: <FontAwesomeIcon icon={faMasksTheater} />,
  iconStyle: { background: "rgb(16, 204, 82)", color: "#fff" },
};
const starIcon = {
  icon: <FontAwesomeIcon icon={faStar} />,
  iconStyle: { background: "#800080", color: "#fff" },
};

function Art() {
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
      icon: musicIcon,
      date: "Dân ca Cố đô",
      title: "Ca Huế",
      subtitle: "Lời ca sâu lắng trên sông Hương",
      desc: "Thể loại âm nhạc dân gian, thường được biểu diễn trên thuyền rồng. Thể hiện tâm hồn lãng mạn, thơ mộng của người Huế.",
      image: CaHue,
    },
    {
      icon: danceIcon,
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
      icon: starIcon,
    },
  ];

  const titleRef = useRef(null);
  useGSAP(() => {
    gsap.from(titleRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power4.out",
      scrollTrigger: {
        trigger: titleRef.current,
        start: "top 80%",
        end: "bottom 80%",
      },
    });
  });

  return (
    <section id="ArtSection" className="container ">
      <div ref={titleRef} id="Art" className="flex justify-center mb-20 pt-20">
        <h1
          className={`text-primary font-bold font-literata text-5xl text-center ${styles.title}`}
        >
          Nghệ thuật
        </h1>
      </div>
      <VerticalTimeline>
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
            <VerticalTimelineElement
              key={i}
              className="vertical-timeline-element--work overflow-y-hidden"
              date={t.date}
              {...t.icon}
            >
              {t.title ? (
                <>
                  <h3 className="vertical-timeline-element-title text-primary font-bold text-xl">
                    {t.title}
                  </h3>

                  {t.subtitle && (
                    <h4 className="vertical-timeline-element-subtitle italic">
                      {t.subtitle}
                    </h4>
                  )}
                  {t.desc && <p>{t.desc}</p>}

                  {t.image && (
                    <div className="mt-4">
                      <Image
                        src={t.image}
                        alt={t.title}
                        className="rounded-lg shadow-lg w-full h-auto transition-transform duration-300 hover:scale-102"
                      />
                    </div>
                  )}
                </>
              ) : undefined}
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </section>
  );
}

export default Art;
