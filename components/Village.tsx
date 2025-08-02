"use client";
import styles from "./Village.module.scss";
import ImageSlider from "./ImageSlider";

export default function Village() {
  return (
    <section className={`${styles.image} w-full`} id="Village">
      <h1 className="text-white font-bold font-literata text-5xl text-center pt-8">
        Làng nghề
      </h1>

      <p className="text-white container font-literata text-2xl text-center pt-8 pb-16">
        Khi nhắc đến Huế – mảnh đất Cố đô thơ mộng – ta không chỉ nhớ đến sông
        Hương, núi Ngự, hay những tà áo dài tím thướt tha, mà còn không thể
        không nhắc đến những làng nghề truyền thống – nơi lưu giữ tinh hoa văn
        hoá dân tộc qua bao đời.
      </p>
      <ImageSlider></ImageSlider>
    </section>
  );
}
