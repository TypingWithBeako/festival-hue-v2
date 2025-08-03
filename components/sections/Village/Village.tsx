"use client";
import styles from "./Village.module.scss";
import ImageSlider from "./ImageSlider";

export default function Village() {
  return (
    <section className="w-full mb-24 md:mb-0" id="Village">
      <div className={`${styles.image}`}></div>
      <div className="flex justify-center">
        <h1
          className={`text-white font-bold font-literata text-5xl text-center pt-20  ${styles.title}`}
        >
          Làng nghề
        </h1>
      </div>

      <p className="text-white container font-literata text-lg md:text-2xl  text-left pl-4 md:ml-auto md:text-center pt-12 ">
        Khi nhắc đến Huế – mảnh đất Cố đô thơ mộng – ta không chỉ nhớ đến sông
        Hương, núi Ngự, hay những tà áo dài tím thướt tha, mà còn không thể
        không nhắc đến những làng nghề truyền thống – nơi lưu giữ tinh hoa văn
        hoá dân tộc qua bao đời.
      </p>
      <ImageSlider></ImageSlider>
    </section>
  );
}
