var config = {
  // style: 'mapbox://styles/mapbox/streets-v12',
  // leave commented to use Mapbox Standard Style
  accessToken:
    "pk.eyJ1IjoidHlwaW5nd2l0aGJlYWtvIiwiYSI6ImNtZHd5eGhmeTI3djgybXEzbnN1bDF2MXYifQ.JgET5Nr3AaJt9P3rp1EAsA",
  showMarkers: true,
  markerColor: "#800080",
  //projection: 'equirectangular',
  //Read more about available projections here
  //https://docs.mapbox.com/mapbox-gl-js/example/projections/
  inset: true,
  insetOptions: {
    markerColor: "orange",
  },
  insetPosition: "bottom-right",
  theme: "dark",
  use3dTerrain: false, //set true for enabling 3D maps.
  auto: false,
  chapters: [
    {
      id: "Hue",
      alignment: "fully",
      hidden: false,
      title: "Khám phá Huế - Kinh đô Ẩm thực",
      description:
        "Hãy cùng tôi đi một vòng Huế, không phải để thăm các cung điện hay lăng tẩm, mà để khám phá hương vị đặc trưng, để mỗi món ăn không chỉ là một bữa tiệc vị giác, mà còn là một câu chuyện về văn hóa và con người nơi đây.",
      location: {
        center: [107.58146994038683, 16.475428439913014],
        zoom: 10.84,
        pitch: 8.01,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        // {
        //     layer: 'layer-name',
        //     opacity: 1,
        //     duration: 5000
        // }
      ],
      onChapterExit: [
        // {
        //     layer: 'layer-name',
        //     opacity: 0
        // }
      ],
    },
    {
      id: "slug-style-id",
      alignment: "left",
      hidden: false,
      title: "1. Bún Bò Huế - 19 Lý Thường Kiệt",
      image: "./assets/bun-bo.jpg",
      description:
        "Chúng ta hãy bắt đầu hành trình tại một trong những địa chỉ quen thuộc nhất, quán bún bò ở 19 Lý Thường Kiệt. Món bún bò ở đây không chỉ là tô bún thông thường. Nó là sự hòa quyện của vị cay nồng từ sa tế, vị ngọt thanh từ xương hầm, vị mặn mà của mắm ruốc, và vị đậm đà từ từng miếng thịt bò, giò heo. Tô bún bốc khói, với sợi bún to, tròn, hòa cùng màu đỏ cam đặc trưng của ớt, mang lại cảm giác ấm áp và thỏa mãn ngay từ miếng đầu tiên.",
      location: {
        center: [107.59146994038683, 16.461428439913014],
        zoom: 16.84,
        pitch: 8.01,
        bearing: 0,
        speed: 0.6,
        curve: 1.5,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        // {
        //     layer: 'layer-name',
        //     opacity: 1,
        //     duration: 5000
        // }
      ],
      onChapterExit: [
        // {
        //     layer: 'layer-name',
        //     opacity: 0
        // }
      ],
    },
    {
      id: "second-identifier",
      alignment: "right",
      hidden: false,
      title: "2. Cơm Hến Hoa Đông - Cồn Hến",
      image:
        "./assets/dung-chan-tai-com-hen-hoa-dong-quan-ngon-khong-the-bo-qua-khi-den-hue-01-1638287407.jpg",
      description:
        "Tiếp theo, hãy đến với một món ăn độc đáo khác: cơm hến. Địa điểm nổi tiếng nhất để thưởng thức món này chính là Cồn Hến, một cù lao nhỏ giữa dòng sông Hương. Món cơm hến là sự kết hợp tinh tế của cơm trắng nguội, hến xào thấm vị, tóp mỡ giòn tan, đậu phộng bùi bùi, rau sống tươi mát, tất cả hòa quyện với nước hến nóng hổi. Sự tương phản giữa cơm nguội và nước dùng nóng, giữa vị bùi, béo, cay và giòn đã tạo nên một trải nghiệm ẩm thực không thể nào quên.",
      location: {
        center: [107.59361484407489, 16.47927391782665],
        zoom: 16.84,
        pitch: 8.01,
        bearing: 0,
        speed: 0.5,
        curve: 1,
        // flyTo additional controls-
        // These options control the flight curve, making it move
        // slowly and zoom out almost completely before starting
        // to pan.
        //speed: 2, // make the flying slow
        //curve: 1, // change the speed at which it zooms out
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [],
      onChapterExit: [],
    },
    {
      id: "third-identifier",
      alignment: "left",
      hidden: false,
      title: "3. Bánh Bèo, Nậm, Lọc - Bà Đỏ, 8 Nguyễn Bỉnh Khiêm",
      image:
        "./assets/70975477_2061656603934583_8777702857009790976_n_20_5_2025_15_41_43_134_CH.jpg",
      description:
        "Sau đó, chúng ta sẽ ghé qua quán Bà Đỏ tại 8 Nguyễn Bỉnh Khiêm để thưởng thức bộ ba huyền thoại của ẩm thực Huế: bánh bèo, bánh nậm, bánh lọc. Mỗi loại bánh lại có một nét đặc trưng riêng. Bánh bèo nhỏ nhắn, mềm mịn, ăn cùng với mắm ớt và tôm cháy. Bánh nậm dẻo, được gói trong lá dong, mang vị ngọt nhẹ của tôm thịt. Bánh lọc trong veo, dai dai, ẩn bên trong là tôm và thịt ba chỉ. Khi ăn, ta cảm nhận được vị mặn ngọt, vị cay the, và cả hương thơm đặc trưng của lá dong.",
      location: {
        center: [107.58926851140365, 16.482258880286995],
        zoom: 16.52,
        pitch: 8.01,
        bearing: 0.0,
        speed: 0.5,
        curve: 1.5,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [],
      onChapterExit: [],
    },
    {
      id: "fourth-chapter",
      alignment: "right",
      hidden: false,
      title: "4. Chè Hẻm - 1 Kiệt 29 Hùng Vương",
      image: "./assets/Che_Hue_ThanhToan.jpg",
      description:
        "Cuối cùng, để kết thúc hành trình, hãy thưởng thức một chén chè Huế. Bạn có thể đến chè Hẻm nổi tiếng tại 1 Kiệt 29 Hùng Vương. Đây là nơi hội tụ của hàng chục loại chè khác nhau, từ chè bắp, chè bột lọc heo quay, chè khoai môn, đến chè hạt sen. Mỗi chén chè đều được nấu công phu, mang vị ngọt dịu dàng, thanh mát, là một cái kết hoàn hảo cho chuyến du hành ẩm thực đầy hương sắc.",
      location: {
        center: [107.59357065260401, 16.46507164576554],
        zoom: 15.88,
        pitch: 0,
        bearing: 0,
        speed: 0.5,
        curve: 2,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [],
      onChapterExit: [],
    },
    {
      id: "farewell-chapter",
      alignment: "fully",
      hidden: false,
      title: "Tạm biệt Huế - Chuyển sang Nghệ thuật",
      description:
        "Chuyến hành trình khám phá ẩm thực Huế đã kết thúc, nhưng câu chuyện về cố đô vẫn còn tiếp tục. Hãy cùng khám phá thêm về nghệ thuật truyền thống Huế - nơi âm nhạc, múa hát và sân khấu hòa quyện tạo nên bản sắc văn hóa độc đáo của vùng đất này.",
      location: {
        center: [107.58146994038683, 16.475428439913014],
        zoom: 11.5,
        pitch: 0,
        bearing: 0,
        speed: 0.8,
        curve: 2,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [],
      onChapterExit: [],
    },
  ],
};
