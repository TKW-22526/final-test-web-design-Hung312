// Hàm tạo thẻ HTML cho 1 sản phẩm (Card)
function createProductCard(product) {
    return `
        <div class="col-md-4 col-lg-3 col-sm-6">
            <div class="card h-100 shadow-sm">
                <div class="card-body text-center d-flex flex-column">
                    <img src="assets/images/${product.id}.jpg" alt="${product.name}" class="card-img-top mb-3" style="height: 200px; object-fit: contain;">
                    <h5 class="card-title fw-bold">${product.name}</h5>
                    <div class="mb-auto">
                        <span class="badge bg-secondary mb-2">${product.category}</span>
                        <p class="card-text text-danger fw-bold fs-5">${product.price}</p>
                    </div>
                    <a href="html/chi-tiet.html?id=${product.id}" class="btn btn-outline-primary mt-3 w-100">Xem chi tiết</a>
                </div>
            </div>
        </div>
    `;
}

// Hàm hiển thị danh sách sản phẩm (chạy trên index.html)
function renderProducts() {
    const componentsList = document.getElementById("components-list");
    const gearList = document.getElementById("gear-list");
    
    // Chỉ chạy nếu đang ở trang chủ (có tồn tại các thẻ div này)
    if (!componentsList || !gearList) return;

    // Xóa nội dung cũ
    componentsList.innerHTML = "";
    gearList.innerHTML = "";

    // Phân loại và chèn sản phẩm
    products.forEach(product => {
        const cardHTML = createProductCard(product);
        if (product.type === "component") {
            componentsList.innerHTML += cardHTML;
        } else if (product.type === "gear") {
            gearList.innerHTML += cardHTML;
        }
    });
}

// Hàm hiển thị chi tiết sản phẩm (chỉ chạy trên product-detail.html)
function renderProductDetail() {
    const detailContainer = document.getElementById("product-detail-container");
    if (!detailContainer) return; // Bỏ qua nếu không phải trang chi tiết

    // Lấy ID sản phẩm từ URL (ví dụ: product-detail.html?id=1)
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id'));

    const product = products.find(p => p.id === productId);

    if (product) {
        detailContainer.innerHTML = `
            <div class="row align-items-center">
                <div class="col-md-6 text-center bg-white p-5 border rounded shadow-sm">
                    <h1 class="text-muted"><img src="../assets/images/${product.id}.jpg" alt="${product.name}" class="img-fluid" style="width: 425px; height: auto;"></h1>
                </div>
                <div class="col-md-6 mt-4 mt-md-0 ps-md-5">
                    <span class="badge bg-dark mb-2">${product.category}</span>
                    <h2 class="fw-bold">${product.name}</h2>
                    <h3 class="text-danger fw-bold my-3">${product.price}</h3>
                    <p class="fs-5">${product.desc.split("|").join("<br>")}</p>
                    <div class="mt-4">
                        <a href="../index.html" class="btn btn-outline-secondary btn-lg me-2">Quay lại</a>
                    </div>
                </div>
            </div>
        `;
    } else {
        detailContainer.innerHTML = `
            <div class="alert alert-danger text-center">
                <h4>Không tìm thấy sản phẩm!</h4>
                <a href="index.html" class="btn btn-secondary mt-3">Về trang chủ</a>
            </div>
        `;
    }
}

// Hàm xử lý Form Liên hệ (chỉ chạy trên contact.html)
function handleContactForm() {
    const contactForm = document.getElementById("contact-form");
    if (!contactForm) return;

    contactForm.addEventListener("submit", function(e) {
        e.preventDefault();
        alert("Cảm ơn bạn! Yêu cầu hỗ trợ đã được ghi nhận. Đội ngũ kỹ thuật sẽ liên hệ lại sớm nhất.");
        this.reset(); // Xóa trắng form sau khi gửi
    });
}

// Khởi chạy các hàm dựa trên trang hiện tại
window.onload = function() {
    renderProducts();
    renderProductDetail();
    handleContactForm();
};