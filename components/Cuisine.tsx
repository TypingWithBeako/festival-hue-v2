export default function Cuisine() {
  return (
    <section id="Cuisine" className="bg-white">
      <div className="container flex flex-col justify-center pt-20">
        <h1 className="self-center text-3xl">Khám phá Ẩm thực của Huế!</h1>
        <p className="text-xl py-8 self-center">
          Hãy cùng tôi đi một vòng Huế, không phải để thăm các cung điện hay
          lăng tẩm, mà để khám phá hương vị đặc trưng, để mỗi món ăn không chỉ
          là một bữa tiệc vị giác, mà còn là một câu chuyện về văn hóa và con
          người nơi đây.,
        </p>
      </div>
      <div className="container h-[90vh] ">
        <iframe
          src="/story/index.html"
          style={{
            width: "100%",
            height: "100%",
            border: "none",
          }}
          title="Hue Food Story"
        />
      </div>
    </section>
  );
}
