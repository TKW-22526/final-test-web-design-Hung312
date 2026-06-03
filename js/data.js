// data.js
const products = [
    // ==========================================
    // PHÂN HỆ: PHỤ KIỆN MÁY TÍNH (PC COMPONENTS)
    // ==========================================
    
    // 1. Danh mục: CPU (Bộ vi xử lý)
    { 
        id: 1, 
        name: "Intel Core i9-14900K", 
        img: "../assets/images/1.jpg",
        item: "CPU",

        category: "cpu", 
        manufacturer: "Intel",
        type: "component", 

        price: "14,500,000 đ", 
        desc: "Tháng 10/2023 | 24 Nhân 32 Luồng | Xung nhịp tối đa 6.0GHz | Socket LGA1700 |<b>Nhận xét:</b> Vi xử lý thế hệ thứ 14 đỉnh cao của Intel. Phù hợp tuyệt đối cho game thủ hardcore, streamer và người làm đồ họa nặng."
    },
    { 
        id: 2, 
        name: "AMD Ryzen 7 7800X3D", 
        img: "../assets/images/2.jpg",
        item: "CPU",

        category: "cpu", 
        manufacturer: "AMD",
        type: "component", 
        price: "10,200,000 đ", 

        desc: "Tháng 04/2023 | 8 Nhân 16 Luồng | Xung nhịp tối đa 5.0GHz | Socket AM5 |<b>Nhận xét:</b> Vua chơi game ở thời điểm hiện tại nhờ công nghệ 3D V-Cache độc quyền từ AMD. Mang lại hiệu năng fps cực kỳ ổn định trong các tựa game eSports và AAA thế giới mở."
    },

    // 2. Danh mục: GPU (Card đồ họa)
    { 
        id: 3, 
        name: "NVIDIA GeForce RTX 4080 Super", 
        img: "../assets/images/3.jpg",
        item: "GPU",

        category: "gpu", 
        manufacturer: "Gigabyte",
        type: "component", 

        price: "29,500,000 đ", 
        desc: "Tháng 01/2024 | Dung lượng 16GB GDDR6X | Kiến trúc Ada Lovelace | Hỗ trợ DLSS 3 & Ray Tracing |<b>Nhận xét:</b> Card màn hình kiến trúc tiên tiến, hỗ trợ tạo khung hình bằng AI. Trải nghiệm mượt mà mọi tựa game ở độ phân giải 4K."
    },
    { 
        id: 4, 
        name: "AMD Radeon RX 7900 XTX", 
        img: "../assets/images/4.jpg",
        item: "GPU",

        category: "gpu", 
        manufacturer: "Sapphire",
        type: "component", 

        price: "26,000,000 đ", 
        desc: "Tháng 12/2022 | Dung lượng 24GB GDDR6 | Kiến trúc RDNA 3 | Băng thông bộ nhớ 384-bit |<b>Nhận xét:</b> Dòng card đồ họa cao cấp nhất của AMD sở hữu bộ nhớ VRAM khổng lồ, đáp ứng hoàn hảo cho việc xử lý render video 8K và AI học máy."
    },

    // 3. Danh mục: RAM (Bộ nhớ trong)
    { 
        id: 5, 
        name: "Corsair Vengeance RGB 32GB DDR5", 
        img: "../assets/images/5.jpg",
        item: "RAM",

        category: "ram", 
        manufacturer: "Corsair",
        type: "component", 

        price: "3,200,000 đ", 
        desc: "Năm 2023 | Chuẩn RAM DDR5 | Tốc độ Bus 6000MHz | Dung lượng 32GB (2x16GB) |<b>Nhận xét:</b> Cặp RAM Dual Channel tốc độ cao, trang bị tản nhiệt nhôm cao cấp và dải đèn LED RGB tương thích hoàn hảo với phần mềm iCUE điều khiển ánh sáng."
    },
    { 
        id: 6, 
        name: "G.Skill Trident Z5 RGB 32GB DDR5", 
        img: "../assets/images/6.jpg",
        item: "RAM",

        category: "ram", 
        manufacturer: "G.Skill",
        type: "component", 

        price: "3,600,000 đ", 
        desc: "Năm 2023 | Chuẩn RAM DDR5 | Tốc độ Bus 6400MHz | Dung lượng 32GB (2x16GB) |<b>Nhận xét:</b> Biểu tượng thiết kế cho hệ thống PC cao cấp. Đạt tốc độ bus cực khủng, độ trễ thấp giúp tối ưu hóa băng thông truyền tải dữ liệu của hệ thống."
    },

    // 4. Danh mục: PSU (Nguồn máy tính)
    { 
        id: 7, 
        name: "Corsair RM850x Shift 850W", 
        img: "../assets/images/7.jpg",
        item: "PSU",

        category: "psu", 
        manufacturer: "Corsair",
        type: "component", 

        price: "3,500,000 đ", 
        desc: "Năm 2023 | Công suất 850W | Hiệu suất 80 Plus Gold | Kiểu cáp Full Modular (Mặt bên) |<b>Nhận xét:</b> Bộ nguồn đạt chứng nhận danh giá. Điểm đặc biệt là cổng cắm được dời sang mặt bên giúp việc đi dây trong thùng máy trở nên dễ dàng hơn bao giờ hết."
    },
    { 
        id: 8, 
        name: "ASUS ROG Thor 1000W Platinum II", 
        img: "../assets/images/8.jpg",
        item: "PSU",

        category: "psu", 
        manufacturer: "ASUS",
        type: "component", 

        price: "7,800,000 đ", 
        desc: "Năm 2022 | Công suất 1000W | Hiệu suất 80 Plus Platinum | Tích hợp màn hình OLED hiển thị |<b>Nhận xét:</b> Trái tim mạnh mẽ cho các cấu hình PC Ultra-High-End. Siêu tiết kiệm điện, tích hợp màn hình hiển thị công suất tiêu thụ theo thời gian thực."
    },

    // 5. Danh mục: Motherboard (Bo mạch chủ)
    { 
        id: 9, 
        name: "ASUS ROG Strix Z790-E Gaming WiFi", 
        img: "../assets/images/9.jpg",
        item: "Motherboard",

        category: "motherboard", 
        manufacturer: "ASUS",
        type: "component", 

        price: "12,500,000 đ", 
        desc: "Năm 2023 | Chipset Intel Z790 | Socket LGA1700 | Kích thước bo mạch ATX |<b>Nhận xét:</b> Sản phẩm bo mạch chủ cao cấp dành cho CPU Intel thế hệ 13 và 14. Hệ thống cấp điện VRM mạnh mẽ, hỗ trợ PCIe 5.0 mới nhất và tích hợp sẵn Wi-Fi 6E."
    },
    { 
        id: 10, 
        name: "MSI MAG B650 Tomahawk WiFi", 
        img: "../assets/images/10.jpg",
        item: "Motherboard",

        category: "motherboard", 
        manufacturer: "MSI",
        type: "component", 

        price: "5,800,000 đ", 
        desc: "Năm 2022 | Chipset AMD B650 | Socket AM5 | Kích thước bo mạch ATX |<b>Nhận xét:</b> Lựa chọn quốc dân tối ưu chi phí cho nền tảng AMD socket AM5. Thiết kế tản nhiệt hầm hố, độ bền chuẩn quân đội, hoạt động vô cùng mát mẻ ổn định."
    },

    // 6. Danh mục: SSD (Ổ cứng lưu trữ)
    { 
        id: 11, 
        name: "Samsung 990 PRO 2TB NVMe M.2", 
        img: "../assets/images/11.jpg",
        item: "SSD",

        category: "ssd", 
        manufacturer: "Samsung",
        type: "component", 

        price: "4,800,000 đ", 
        desc: "Năm 2022 | Chuẩn giao tiếp PCIe Gen 4x4 | Tốc độ đọc 7450 MB/s | Dung lượng 2TB |<b>Nhận xét:</b> Ổ cứng SSD PCIe Gen 4 có tốc độ nhanh nhất thế giới hiện tại. Giúp load game nặng và khởi động hệ điều hành chỉ trong vài tích tắc."
    },
    { 
        id: 12, 
        name: "WD Black SN850X 1TB NVMe M.2", 
        img: "../assets/images/12.jpg",
        item: "SSD",

        category: "ssd", 
        manufacturer: "Western Digital",
        type: "component", 

        price: "2,600,000 đ", 
        desc: "Năm 2022 | Chuẩn giao tiếp PCIe Gen 4x4 | Tốc độ đọc 7300 MB/s | Dung lượng 1TB |<b>Nhận xét:</b> Dòng ổ cứng chuyên dụng được tối ưu hóa cho phân khúc Gaming của Western Digital. Tích hợp tính năng Game Mode 2.0 giúp đẩy hiệu năng lưu trữ lên mức tối đa."
    },
    // 7. Danh mục: CPU Cooler (Tản nhiệt CPU)
    { 
        id: 13, 
        name: "Noctua NH-D15 chromax.black", 
        img: "../assets/images/13.jpg",
        item: "CPU Cooler",

        category: "cpu-cooler", 
        manufacturer: "Noctua",
        type: "component", 

        price: "3,150,000 đ", 
        desc: "Năm 2020 | Tản nhiệt khí Dual-Tower | 2x Quạt NF-A15 140mm | Đồng bộ đen nhám huyền bí<br><b>Nhận xét:</b> Huyền thoại tản nhiệt khí với hiệu năng làm mát ngang ngửa các dòng tản nước AIO tầm trung, vận hành siêu êm ái và bền bỉ vô đối theo thời gian." 
    },
    { 
        id: 14, 
        name: "Corsair iCUE H150i Elite LCD XT", 
        img: "../assets/images/14.jpg",
        item: "CPU Cooler",

        category: "cpu-cooler", 
        manufacturer: "Corsair",
        type: "component", 

        price: "7,490,000 đ", 
        desc: "Năm 2023 | Tản nhiệt nước AIO 360mm | Màn hình LCD IPS 2.1 inch | 3x Quạt AF120 RGB Elite<br><b>Nhận xét:</b> Đỉnh cao tản nhiệt nước cá nhân hóa. Màn hình sắc nét giúp hiển thị thông số hệ thống hoặc ảnh GIF tùy biến, làm mát cực tốt cho các CPU tỏa nhiều nhiệt." 
    },

    // 8. Danh mục mới: Case (Vỏ máy tính) (đã bao gồm fan có trong case)
    { 
        id: 15, 
        name: "Lian Li O11 Dynamic EVO", 
        img: "../assets/images/15.jpg",
        item: "Case",

        category: "case", 
        manufacturer: "Lian Li",
        type: "component", 

        price: "4,350,000 đ", 
        desc: "Năm 2022 | Thùng máy Mid-Tower | 2 Mặt kính cường lực | Thiết kế mô-đun đảo ngược linh hoạt<br><b>Nhận xét:</b> Thiết kế dạng \"bể cá\" sang trọng, không gian đi dây cực rộng rãi, hỗ trợ tối ưu cho các hệ thống tản nhiệt nước custom hoành tráng." 
    },
    { 
        id: 16, 
        name: "Corsair 4000D Airflow Black", 
        img: "../assets/images/16.jpg",
        item: "Case",

        category: "case", 
        manufacturer: "Corsair",
        type: "component", 

        price: "2,150,000 đ", 
        desc: "Năm 2021 | Thùng máy Mid-Tower | Mặt trước lưới High-Airflow | Hệ thống đi dây cáp RapidRoute<br><b>Nhận xét:</b> Thùng máy quốc dân tối ưu lưu thông gió. Mặt lưới phía trước giúp lấy gió mát liên tục vào bên trong, bảo vệ và kéo dài tuổi thọ cho linh kiện." 
    },

    // ==========================================
    // PHÂN HỆ: GEAR MÁY TÍNH (GAMING GEAR)
    // ==========================================
    
    // 7. Danh mục: Gaming Mice (Chuột Gaming)
    { 
        id: 17, 
        name: "Logitech G Pro X Superlight 2", 
        img: "../assets/images/17.jpg",
        item: "Gaming Mouse",

        category: "gaming-mice", 
        manufacturer: "Logitech",
        type: "gear", 

        price: "3,500,000 đ", 
        desc: "Tháng 09/2023 | Trọng lượng siêu nhẹ 60g | Mắt đọc HERO 2 độc quyền | Kết nối Không dây LIGHTSPEED |<b>Nhận xét:</b> Huyền thoại chuột gaming không dây được hơn 60% tuyển thủ chuyên nghiệp eSports tin dùng cho độ chính xác tuyệt đối."
    },
    { 
        id: 18, 
        name: "Razer DeathAdder V3 Pro", 
        img: "../assets/images/18.jpg",
        item: "Gaming Mouse",

        category: "gaming-mice", 
        manufacturer: "Razer",
        type: "gear", 

        price: "3,200,000 đ", 
        desc: "Năm 2022 | Trọng lượng 63g | Mắt đọc Focus Pro 30K | Thiết kế Công thái học tay phải |<b>Nhận xét:</b> Chuột gaming mang thiết kế công thái học tốt nhất hiện nay. Trọng lượng siêu nhẹ, hỗ trợ tần số phản hồi không dây lên tới 8000Hz siêu tốc."
    },

    // 8. Danh mục: Machanical Keyboards (Bàn phím cơ)
    { 
        id: 19, 
        name: "Wooting 60HE", 
        img: "../assets/images/19.jpg",
        item: "Mechanical Keyboard",

        category: "mechanical-keyboards", 
        manufacturer: "Wooting",
        type: "gear", 

        price: "4,500,000 đ", 
        desc: "Năm 2022 | Kích thước rút gọn 60% | Switch Lekker Magnet (Từ tính) | Tính năng Rapid Trigger phản hồi |<b>Nhận xét:</b> Chiếc bàn phím cơ thay đổi định nghĩa gaming nhờ switch từ tính - phản hồi phím ngay lập tức khi vừa nhấc tay, cực kỳ bá đạo trong CS2 và Valorant."
    },
    { 
        id: 20, 
        name: "ASUS ROG Azoth Wireless", 
        img: "../assets/images/20.jpg",
        item: "Mechanical Keyboard",

        category: "mechanical-keyboards", 
        manufacturer: "ASUS",
        type: "gear", 

        price: "6,200,000 đ", 
        desc: "Năm 2023 | Kích thước layout 75% | Cấu trúc Gasket-mount tiêu âm | Kết nối 3 chế độ (Dây/2.4G/Bluetooth) |<b>Nhận xét:</b> Bàn phím cơ Custom cao cấp tích hợp màn hình OLED nhỏ. Cảm giác gõ phím cực êm nhờ lớp đệm tiêu âm silicone tích hợp sẵn từ nhà máy."
    },

    // 9. Danh mục: Gaming Headsets (Tai nghe Gaming)
    { 
        id: 21, 
        name: "HyperX Cloud III Wireless", 
        img: "../assets/images/21.jpg",
        item: "Headset",

        category: "gaming-headsets", 
        manufacturer: "HyperX",
        type: "gear", 

        price: "3,800,000 đ", 
        desc: "Năm 2023 | Kết nối Không dây 2.4GHz | Thời lượng pin 120 giờ | Màng loa Driver 53mm |<b>Nhận xét:</b> Kế thừa vị vua phân khúc tai nghe gaming với độ thoải mái trứ danh nhờ đệm tai da cao cấp, thời lượng pin sử dụng liên tục siêu khủng."
    },
    { 
        id: 22, 
        name: "SteelSeries Arctis Nova Pro Wireless", 
        img: "../assets/images/22.jpg",
        item: "Headset",

        category: "gaming-headsets", 
        manufacturer: "SteelSeries",
        type: "gear", 

        price: "8,900,000 đ", 
        desc: "Năm 2022 | Kết nối Không dây Đa nền tảng | Công nghệ chống ồn chủ động (ANC) | Hệ thống 2 pin đổi nóng |<b>Nhận xét:</b> Đỉnh cao âm thanh gaming cao cấp. Hệ thống pin thay đổi liên tục giúp tai nghe hoạt động không giới hạn mà không lo hết pin giữa trận."
    },

    // 10. Danh mục: Monitors (Màn hình)
    { 
        id: 23, 
        name: "ASUS ROG Swift OLED PG27AQDM", 
        img: "../assets/images/23.jpg",
        item: "Monitor",

        category: "monitors", 
        manufacturer: "ASUS",
        type: "gear", 

        price: "24,500,000 đ", 
        desc: "Năm 2023 | Kích thước 27 inch OLED | Độ phân giải 2K (2560x1440) | Tần số quét 240Hz (0.03ms) |<b>Nhận xét:</b> Màn hình Gaming đỉnh cao tấm nền OLED siêu rực rỡ, thời gian phản hồi siêu thực loại bỏ hoàn toàn bóng mờ chuyển động."
    },
    { 
        id: 24, 
        name: "BenQ ZOWIE XL2546K E-Sports", 
        img: "../assets/images/24.jpg",
        item: "Monitor",

        category: "monitors", 
        manufacturer: "BenQ",
        type: "gear", 

        price: "12,800,000 đ", 
        desc: "Năm 2020 | Kích thước 24.5 inch TN | Độ phân giải Full HD (1920x1080) | Tần số quét 240Hz (Công nghệ DyAc+) |<b>Nhận xét:</b> Tiêu chuẩn thi đấu tại hầu hết các giải eSports chuyên nghiệp. Công nghệ DyAc+ giúp làm rõ các chuyển động nhanh, triệt tiêu hiện tượng nhòe hình khi sấy súng."
    }
];