import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarAlt,
  faEnvelopeOpenText,
  faMapMarkedAlt,
  faImages,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";

gsap.registerPlugin(useGSAP);

export default function Footer() {
  const contentRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (window.innerWidth >= 768) {
      gsap.from(contentRef.current, {
        opacity: 0,
        y: 0,
        width: "50%",
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 100%",
          end: "bottom 100%",
          scrub: true,
        },
      });
    }
  });
  // // Background expansion animation
  // gsap.to(imageRef.current, {
  //   ease: "power3.out",
  //   width: "100vw",
  //   height: "100%",
  //   scrollTrigger: {
  //     trigger: imageRef.current,
  //     start: "top 80%", // Start earlier for smoother transition
  //     end: "bottom 40%", // End when still visible
  //     scrub: 1, // Smooth scrubbing
  //   },
  // });

  // Content fade-in animation

  return (
    <section
      id="Footer"
      className="relative mt-20 flex justify-center items-end"
    >
      {/* Footer Content */}
      <div
        ref={contentRef}
        className="relative z-10 w-full bg-primary/90 backdrop-blur-sm text-white py-16"
      >
        <div className="container mx-auto px-4">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {/* About Section */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold font-literata text-secondary">
                Festival Huế 2025
              </h3>
              <p className="text-sm leading-relaxed w-[80%]">
                Khám phá những câu chuyện ngàn năm, trải nghiệm không gian văn
                hóa độc đáo và hòa mình vào sắc màu lễ hội bất tận tại cố đô
                Huế.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://www.facebook.com/huefestival.official/?locale=vi_VN"
                  target="_blank"
                  className="text-white hover:text-secondary transition-colors duration-300"
                >
                  <FontAwesomeIcon icon={faFacebook} size="lg" />
                </a>
                <a
                  href="https://www.instagram.com/huefestival.official/"
                  target="_blank"
                  className="text-white hover:text-secondary transition-colors duration-300"
                >
                  <FontAwesomeIcon icon={faInstagram} size="lg" />
                </a>
                <a
                  href="https://www.youtube.com/channel/UCo0R35J2y66-tpr7hAZ7miQ"
                  target="_blank"
                  className="text-white hover:text-secondary transition-colors duration-300"
                >
                  <FontAwesomeIcon icon={faYoutube} size="lg" />
                </a>
              </div>
            </div>

            {/* Events Section */}
            <div className="space-y-4">
              <h4 className="text-lg font-bold font-literata">Liên kết</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://huefestival.com/Festival-Hue-2024/Festival-Hue"
                    target="_blank"
                    className="hover:text-secondary transition-colors duration-300 flex items-center gap-3"
                  >
                    <FontAwesomeIcon
                      icon={faCalendarAlt}
                      className="text-secondary"
                    />
                    Lịch trình sự kiện
                  </a>
                </li>
                <li>
                  <a
                    href="https://huefestival.com/Tai-tro/Thu-ngo/cid/60/pid/1841/tid/Thu-ngo"
                    target="_blank"
                    className="hover:text-secondary transition-colors duration-300 flex items-center gap-3"
                  >
                    <FontAwesomeIcon
                      icon={faEnvelopeOpenText}
                      className="text-secondary"
                    />
                    Thư ngỏ
                  </a>
                </li>
                <li>
                  <a
                    href="https://huefestival.com/Festival-Hue/Ban-do-dia-diem-chuong-trinh"
                    target="_blank"
                    className="hover:text-secondary transition-colors duration-300 flex items-center gap-3"
                  >
                    <FontAwesomeIcon
                      icon={faMapMarkedAlt}
                      className="text-secondary"
                    />
                    Địa điểm tổ chức
                  </a>
                </li>
                <li>
                  <a
                    href="https://huefestival.com/Thu-vien/Hinh-anh"
                    target="_blank"
                    className="hover:text-secondary transition-colors duration-300 flex items-center gap-3"
                  >
                    <FontAwesomeIcon
                      icon={faImages}
                      className="text-secondary"
                    />
                    Thư viện ảnh
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info Section */}
            <div className="space-y-4">
              <h4 className="text-lg font-bold font-literata">Liên hệ</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <FontAwesomeIcon
                    icon={faMapMarkerAlt}
                    className="text-secondary"
                  />
                  <span className="text-sm">
                    Tam Tòa, 33 Tống Duy Tân, phường Phú Xuân, thành phố Huế,
                    Việt Nam
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <FontAwesomeIcon icon={faPhone} className="text-secondary" />
                  <span className="text-sm">
                    <a
                      className="underline hover:text-secondary transition-colors duration-300 "
                      href="tel:+842343523237"
                    >
                      +84 234.3523237
                    </a>
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="text-secondary "
                  />
                  <span className="text-sm">
                    <a
                      className="underline hover:text-secondary transition-colors duration-300 "
                      href="mailto:huefestival.official@gmail.com"
                    >
                      huefestival.official@gmail.com
                    </a>{" "}
                    -{" "}
                    <a
                      className="underline hover:text-secondary transition-colors duration-300 "
                      href="mailto:info@huefestival.com"
                    >
                      info@huefestival.com
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-white/20 pt-8">
            <div className="flex flex-col justify-start items-start space-y-6 md:space-y-0">
              <p className="text-md text-center md:text-left">
                © 2025 Festival Huế. Tất cả các quyền được bảo lưu. <br />
              </p>

              <div className="flex flex-col pt-2">
                <p className="text-sm text-left">Nhóm tác giả:</p>
                <ul className="text-sm text-left list-disc ml-4 marker:text-secondary">
                  <li>Nguyễn Thái Tuấn</li>
                  <li>Nguyễn Nhất Vũ</li>
                  <li>Mai Thị Thắm</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
