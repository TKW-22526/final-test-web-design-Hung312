// Hàm tạo thẻ HTML cho 1 sản phẩm (Card)
function createProductCard(product) {
    return `
        <div class="col-md-4 col-lg-3 col-sm-6">
            <div class="card h-100 shadow-sm">
                <div class="card-body text-center d-flex flex-column">
                    <img src="${product.img}" alt="${product.name}" class="card-img-top mb-3" style="height: 200px; object-fit: contain;">
                    <h5 class="card-title fw-bold">${product.name}</h5>
                    <div class="mb-auto">
                        <span class="badge bg-secondary mb-2">${product.item}</span>
                        <p class="card-text text-danger fw-bold fs-5">${product.price}</p>
                    </div>
                    <a href="chi-tiet.html?id=${product.id}" class="btn btn-outline-primary mt-3 w-100">Xem chi tiết</a>
                </div>
            </div>
        </div>
    `;
}

function parsePrice(price) {
    return parseInt(price.replace(/[^\d]/g, '')) || 0;
}

// Hàm hiển thị danh sách sản phẩm (chạy trên index.html)
// sắp xếp, tìm kiếm và lọc trên pc components
function renderComponents() {
    const componentsList = document.getElementById("components-list");
    
    // Chỉ chạy nếu đang ở trang chủ (có tồn tại các thẻ div này)
    if (!componentsList) return;

    const searchInput = document.getElementById("search-components");
    const filteredType = document.getElementById("category-components");
    const filteredManufacturer = document.getElementById("brand-components");
    const sortPrice = document.getElementById("price-components");

    const searchTerm = searchInput ? searchInput.value.toLowerCase().trim(): "";
    const category = filteredType ? filteredType.value: "all";
    const manufacturer = filteredManufacturer ? filteredManufacturer.value: "all";
    const sortBy = sortPrice ? sortPrice.value: "default";

    let filteredProducts = products.filter(p => p.type === "component");

    if(searchTerm){
        filteredProducts = products.filter(p => p.name.toLowerCase().includes(searchTerm));
    }

    if(category !== "all"){
        filteredProducts = products.filter(p => p.category === category);
    }

    if(manufacturer !== "all"){
        filteredProducts = products.filter(p => p.manufacturer === manufacturer);
    }

    if(sortBy === "asc"){
        filteredProducts.sort((a,b) => parsePrice(a.price) - parsePrice(b.price));
    }
    else if (sortBy === "desc"){
        filteredProducts.sort((a,b) => parsePrice(b.price) - parsePrice(a.price));
    }
    // Xóa nội dung cũ
    componentsList.innerHTML = "";

    // Phân loại và chèn sản phẩm
    filteredProducts.forEach(p => {
            const cardHTML = createProductCard(p);
            if(p.type === "component")
                componentsList.innerHTML += cardHTML;
        });
}

//sắp xếp, tìm kiếm trên gaming gear
function renderGears() {
    const gearList = document.getElementById("gear-list");
    
    // Chỉ chạy nếu đang ở trang chủ (có tồn tại các thẻ div này)
    if (!gearList) return;

    const searchInput = document.getElementById("search-gear");
    const filteredType = document.getElementById("category-gear");
    const filteredManufacturer = document.getElementById("brand-gear");
    const sortPrice = document.getElementById("price-gear");

    const searchTerm = searchInput ? searchInput.value.toLowerCase().trim(): "";
    const category = filteredType ? filteredType.value: "all";
    const manufacturer = filteredManufacturer ? filteredManufacturer.value: "all";
    const sortBy = sortPrice ? sortPrice.value: "default";

    let filteredProducts = products.filter(p => p.type === "gear");
    if(searchTerm){
        filteredProducts = filteredProducts.filter(p => p.name.toLowerCase().includes(searchTerm));
    }

    if(category !== "all"){
        filteredProducts = products.filter(p => p.category === category);
    }

    if(manufacturer !== "all"){
        filteredProducts = products.filter(p => p.manufacturer === manufacturer);
    }

    if(sortBy === "asc"){
        filteredProducts.sort((a,b) => parsePrice(a.price) - parsePrice(b.price));
    }
    else if (sortBy === "desc"){
        filteredProducts.sort((a,b) => parsePrice(b.price) - parsePrice(a.price));
    }
    // Xóa nội dung cũ
    gearList.innerHTML = "";

    // Phân loại và chèn sản phẩm
    filteredProducts.forEach(p => {
        const cardHTML = createProductCard(p);
            if(p.type === "gear")
                gearList.innerHTML += cardHTML;
        });
}

// Hàm hiển thị chi tiết sản phẩm
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
                    <span class="badge bg-dark mb-2">${product.item}</span>
                    <h2 class="fw-bold">${product.name}</h2>
                    <h3 class="text-danger fw-bold my-3">${product.price}</h3>
                    <p class="fs-5">${product.desc.split("|").join("<br>")}</p>
                    <div class="mt-4">
                        <a href="san-pham.html" class="btn btn-outline-secondary btn-lg me-2">Quay lại</a>
                    </div>
                </div>
            </div>
        `;
    } else {
        detailContainer.innerHTML = `
            <div class="alert alert-danger text-center">
                <h4>Không tìm thấy sản phẩm!</h4>
                <a href="san-pham.html" class="btn btn-secondary mt-3">Về trang sản phẩm</a>
            </div>
        `;
    }
}
//Sắp xếp, tìm kiếm, và xóa mọi kết quả lọc/sắp xếp/tìm kiếm
// =========================================== 

function resetComponentsFilters() {
    const search = document.getElementById("search-components");
    const type = document.getElementById("category-components");
    const manu = document.getElementById("brand-components");
    const sort = document.getElementById("price-components");
    if (search) search.value = "";
    if (type) type.value = "all";
    if (manu) manu.value = "all";
    if (sort) sort.value = "default";
    // Gọi render lại (sẽ lấy giá trị mới đã reset)
    renderComponents();
}

function resetGearsFilters() {
    const search = document.getElementById("search-gear");
    const type = document.getElementById("category-gear");
    const manu = document.getElementById("brand-gear");
    const sort = document.getElementById("price-gear");
    if (search) search.value = "";
    if (type) type.value = "all";
    if (manu) manu.value = "all";
    if (sort) sort.value = "default";
    // Gọi render lại (sẽ lấy giá trị mới đã reset
    renderGears();
}
//==========================================    
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

window.onload = function() {
    // Components
    const searchComp = document.getElementById("search-components");
    const typeComp = document.getElementById("type-components");
    const manuComp = document.getElementById("manufacturer-components");
    const sortComp = document.getElementById("sort-components");
    const resetComp = document.getElementById("reset-components");

    if (searchComp) searchComp.addEventListener("input", renderComponents);
    if (typeComp) typeComp.addEventListener("change", renderComponents);
    if (manuComp) manuComp.addEventListener("change", renderComponents);
    if (sortComp) sortComp.addEventListener("change", renderComponents);
    if (resetComp) resetComp.addEventListener("click", resetComponentsFilters);

    // Gear
    const searchGear = document.getElementById("search-gear");
    const typeGear = document.getElementById("type-gear");
    const manuGear = document.getElementById("manufacturer-gear");
    const sortGear = document.getElementById("sort-gear");
    const resetGearBtn = document.getElementById("reset-gear");

    if (searchGear) searchGear.addEventListener("input", renderGears);
    if (typeGear) typeGear.addEventListener("change", renderGears);
    if (manuGear) manuGear.addEventListener("change", renderGears);
    if (sortGear) sortGear.addEventListener("change", renderGears);
    if (resetGearBtn) resetGearBtn.addEventListener("click", resetGearsFilters);

    renderComponents();
    renderGears();

    // Các hàm khác
    renderProductDetail();
    handleContactForm();
};