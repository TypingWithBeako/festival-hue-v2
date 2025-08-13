# ✨ Festival Huế 2025 – Trải nghiệm số về Làng nghề, Ẩm thực & Nghệ thuật

Chào mừng đến với dự án Website **"Festival Huế 2025 – Trải nghiệm số về Làng nghề, Ẩm thực & Nghệ thuật"**. Đây là một nền tảng số được xây dựng nhằm giới thiệu và quảng bá nét đẹp văn hóa Huế đến cộng đồng thông qua các nội dung tương tác, hiện đại và dễ tiếp cận.

## 📋 Tổng quan dự án

Website tập trung vào ba lĩnh vực văn hóa tiêu biểu của Huế:

- 🧵 **Làng nghề truyền thống**: Giới thiệu các sản phẩm thủ công tinh xảo và câu chuyện đằng sau.
- 🌶️ **Ẩm thực Huế**: Khám phá các món ăn đặc trưng, nguyên liệu và giá trị văn hóa.
- 🎭 **Nghệ thuật Huế**: Trình bày các hình thức biểu diễn truyền thống và hiện đại.

Mục tiêu của dự án là tạo ra một cầu nối giữa truyền thống và công nghệ, giúp người dân và du khách tìm hiểu sâu hơn về Festival Huế, từ đó góp phần gìn giữ và lan tỏa bản sắc văn hóa cố đô một cách mới mẻ và gần gũi hơn.

⏱️ Thời gian phát triển

- 15/07/2025 - 11/08/2025 (≈ 1 tháng)

## 🛠️ Công nghệ sử dụng

> **Lưu ý của tác giả**:
> Code được viết lúc mình vừa học vừa làm nên có nhiều phần chưa được module hoá 100%. Mình cũng đang học cách tổ chức code nên oh well, chúc bạn may mắn sống sót khi đọc qua code. 🙏 🙏 🙏

Dự án này được xây dựng trên nền tảng công nghệ hiện đại, đảm bảo hiệu suất và trải nghiệm người dùng tối ưu.

### Frontend

- **Next.js & React**: Framework chính để xây dựng giao diện người dùng.
- **Tailwind CSS**: Hỗ trợ xây dựng giao diện nhanh chóng và linh hoạt.
- **GSAP**: Dùng để animate các hiệu ứng phần **Trang chủ**, **Giới thiệu** và **Footer** (với **ScrollTrigger** và **SplitText**).
- **Lenis**: Thư viện tối ưu hóa trải nghiệm cuộn trang, mang lại cảm giác mượt mà hơn.
- **AOS (Animate On Scroll)**: Các hiệu ứng còn lại khi cuộn trang.
- **Sass**: Tiền xử lý CSS để viết code gọn gàng hơn _(actually là dùng cho biết)_.

### Dependencies khác

Các thư viện hữu ích khác trong dự án:

- `@fortawesome/react-fontawesome`: Icon chất lượng cao từ Font Awesome.
- `slick-carousel`: Hỗ trợ tạo carousel (ở phần **Làng nghề**).
- `react-vertical-timeline-component`: Hiển thị timeline theo chiều dọc (ở phần **Nghệ thuật**).
- Hệ thống component của **Hero UI** (`@heroui`): Một bộ sưu tập các component giao diện người dùng có sẵn.<br><br>

## 🔗 Link preview dự án

- https://festival-hue-v2.pages.dev/

## 🚀 Hướng dẫn cài đặt và chạy dự án

Để chạy dự án này trên máy, bạn có thể làm theo các bước sau:

**1. Clone repository:**

```
git clone https://github.com/TypingWithBeako/festival-hue-v2
cd festival-hue-v2
```

**2. Cài đặt dependencies:**
Sử dụng trình quản lý package ưa thích của bạn (npm, yarn hoặc pnpm).

```
npm install

# hoặc
yarn install

# hoặc
pnpm install
```

**3. Chạy chế độ phát triển (development):**

```
npm run dev

# hoặc
yarn dev

# hoặc
pnpm dev
```

Website sẽ được chạy tại http://localhost:3000.

## 🤝 Đóng góp và phản hồi

Mọi đóng góp và phản hồi để cải thiện dự án đều được chào đón. Bạn có thể mở một Issue hoặc tạo Pull Request trên repository này.
