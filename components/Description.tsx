import Image from "next/image";
import Anh1 from "../public/Anh-1.jpeg";
import Anh2 from "../public/imageFestival.webp";

export default function Description() {
  return (
    <section id="Description" className="bg-white py-24">
      <div className="container mx-auto flex flex-col gap-y-12 px-4 justify-between">
        {/* Section 1: Về Festival Huế 2025 */}
        <div className="flex w-full flex-col items-center gap-y-8 md:flex-row md:gap-x-12">
          {/* Text Section */}
          <div className="order-1 flex w-full flex-col">
            <h2 className="text-center text-3xl md:text-5xl font-bold md:text-left font-literata text-primary">
              Về Festival Huế
            </h2>
            <p className="mt-8 text-center text-lg leading-relaxed md:text-left text-balance">
              Festival Huế là một lễ hội văn hóa nghệ thuật và du lịch quốc tế
              đặc sắc của Việt Nam, ra đời từ năm 2000 sau thành công của
              Festival Việt - Pháp 1992. Lễ hội không chỉ tôn vinh giá trị di
              sản cố đô mà còn là cầu nối giao lưu văn hóa giữa Việt Nam và thế
              giới. Từ năm 2004, với việc Nhã nhạc Cung đình Huế được UNESCO
              công nhận, Festival Huế càng khẳng định vị thế, thúc đẩy du lịch
              và phát triển văn hóa.
            </p>
          </div>
          {/* Image Section */}

          <div className="order-2">
            <Image
              src={Anh1}
              alt="Festival Huế 2025"
              className="h-auto w-full rounded-lg object-cover shadow-lg transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>
        <hr className="mx-auto my-8 h-1 w-1/2 border-none bg-gradient-to-r from-orange-400 via-yellow-400 to-orange-400" />{" "}
        {/* Section 2: Festival Huế 2025 – Lễ hội bốn mùa */}
        <div className="flex w-full flex-col items-center gap-y-8 md:flex-row justify-between gap-x-12">
          {/* Text Section */}
          <div className="flex w-full flex-col order-1 md:order-2 ">
            <h2 className="text-balance text-center text-3xl md:text-4xl font-bold md:text-left font-literata text-primary">
              Festival Huế 2025 – Lễ hội bốn mùa –
            </h2>
            <p className="mt-8 text-center text-lg leading-relaxed md:text-left">
              Festival Huế 2025 sẽ diễn ra xuyên suốt năm với định hướng
              Festival bốn mùa, bao gồm:
            </p>
            <ul className="mt-4 list-disc pl-8 text-left text-lg leading-relaxed">
              <li>Lễ hội mùa Xuân – “Xuân Cố đô”</li>
              <li>Lễ hội mùa Hạ – “Kinh thành tỏa sáng”</li>
              <li>Lễ hội mùa Thu – “Huế vào Thu”</li>
              <li>Lễ hội mùa Đông – “Mùa đông xứ Huế”</li>
            </ul>
          </div>

          {/* Image Section */}
          <div className="order-2 md:order-1">
            <Image
              src={Anh2}
              alt="Festival Huế 2025"
              className="h-auto w-400 rounded-lg object-cover shadow-lg transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
