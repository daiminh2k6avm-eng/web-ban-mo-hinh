// Danh sách 18 sản phẩm đa dạng
const products = [
    // --- GUNDAM ---
    {
        id: 1,
        name: "Gundam Barbatos Lupus Rex MG 1/100",
        category: "Gundam",
        price: 1250000,
        badge: "Bán chạy",
        size: "Tỉ lệ 1/100 (Cao khoảng 21cm)",
        material: "Nhựa cao cấp PVC/ABS, ráp sẵn khớp động",
        brand: "Bandai (Nhật Bản)",
        image: "https://bizweb.dktcdn.net/thumb/grande/100/535/699/products/5261beb9-8b0c-422d-990b-e60b43a9e206.jpg?v=1763713679923"
    },
    {
        id: 2,
        name: "Gundam RX-78-2 Ver 3.0 Bandai",
        category: "Gundam",
        price: 980000,
        badge: "",
        size: "Tỉ lệ 1/100 (Cao khoảng 18cm)",
        material: "Nhựa PVC chất lượng cao",
        brand: "Bandai (Nhật Bản)",
        image: "https://i.ebayimg.com/images/g/d~8AAeSwx-9qASB6/s-l1600.webp"
    },
    {
        id: 3,
        name: "Gundam Astray Red Frame Kai MG",
        category: "Gundam",
        price: 1450000,
        badge: "Hot",
        size: "Tỉ lệ 1/100 (Cao khoảng 20cm)",
        material: "Nhựa ABS, kèm kiếm Tactical Arms",
        brand: "Bandai (Nhật Bản)",
        image: "https://concagunpla.com/wp-content/uploads/2025/11/ltd-mg-astray_red_frame_kai_cross_contrast_colors_polarized_injection-boxart.webp"
    },
    {
        id: 4,
        name: "Gundam Wing Zero EW Ver.Ka",
        category: "Gundam",
        price: 1380000,
        badge: "Mới",
        size: "Tỉ lệ 1/100 (Cao khoảng 19cm)",
        material: "Nhựa PVC/ABS cao cấp",
        brand: "Bandai (Nhật Bản)",
        image: "https://i.ebayimg.com/images/g/s~cAAeSwCzBpqPez/s-l1600.webp"
    },

    // --- ONE PIECE ---
    {
        id: 5,
        name: "Mô hình Luffy Gear 5 Nika (Cao 28cm)",
        category: "One Piece",
        price: 850000,
        badge: "Hot",
        size: "Chiều cao 28cm",
        material: "PVC đặc nguyên khối, sơn tĩnh điện mịn",
        brand: "Banpresto / Bandai Spirits",
        image: "https://sieuthido.com/assets/uploads/images/2023/mo%20hinh%20Luffy%20Gear%205%20Nika%20vs%20Kaido.png"
    },
    {
        id: 6,
        name: "Mô hình Roronoa Zoro Tam Kiếm Phái Haki",
        category: "One Piece",
        price: 920000,
        badge: "Bán chạy",
        size: "Chiều cao 25cm",
        material: "PVC đặc nguyên khối, sơn tĩnh điện mịn",
        brand: "Banpresto / Bandai Spirits",
        image: "https://i.ebayimg.com/images/g/2eAAAeSwvShpOYII/s-l1600.webp"

    },
    {
        id: 7,
        name: "Mô hình Kaido Bách Thú Dạng Rồng (40cm)",
        category: "One Piece",
        price: 2450000,
        badge: "Cao cấp",
        image: "https://nguyenngocfigure.com/wp-content/uploads/2026/06/mo-hinh-one-piece-kaido-dang-2-baqi-studio-9.jpg"
    },

    // --- DRAGON BALL ---
    {
        id: 8,
        name: "Mô hình Son Goku Bản Năng Vô Cực (LED)",
        category: "Dragon Ball",
        price: 1150000,
        badge: "Hot",
        image: "https://bizweb.dktcdn.net/100/451/227/products/ec4cdbd8-619b-4c11-96b2-bbbf67936f30-1669608914887.jpg?v=1669608926187"
    },
    {
        id: 9,
        name: "Mô hình Vegeta Super Saiyan Blue",
        category: "Dragon Ball",
        price: 780000,
        badge: "",
        image: "https://images-na.ssl-images-amazon.com/images/I/7170GD9oGgL.jpg"
    },
    {
        id: 10,
        name: "Mô hình Rồng Thần Shenron & 7 Viên Ngọc Rồng",
        category: "Dragon Ball",
        price: 1650000,
        badge: "Giới hạn",
        image: "https://i.ebayimg.com/images/g/wrcAAOSw-zRl7qd1/s-l1600.webp"
    },

    // --- ANIME KHÁC (Jujutsu Kaisen, Demon Slayer, Naruto) ---
    {
        id: 11,
        name: "Mô hình Gojo Satoru - Lãnh Địa Vô Lượng Không Xứ",
        category: "Anime Khác",
        price: 890000,
        badge: "Bán chạy",
        image: "https://i.ebayimg.com/images/g/coEAAeSweq5pV3QA/s-l1600.webp"
    },
    {
        id: 12,
        name: "Mô hình Rengoku Kyojuro - Hơi Thở Của Lửa",
        category: "Anime Khác",
        price: 950000,
        badge: "",
        image: "https://japotyle.com/cdn/shop/files/GSCPLS-4570001510724-01.jpg?v=1786555331"
    },
    {
        id: 13,
        name: "Mô hình Uchiha Itachi & Susanoo (Naruto)",
        category: "Anime Khác",
        price: 1320000,
        badge: "Mới",
        image: "https://dinotoystore.vn/wp-content/uploads/2023/11/96388479_3838220962917744_1220421189155946496_n.jpg"
    },

    // --- MARVEL / DC ---
    {
        id: 14,
        name: "Mô hình Iron Man Mark 85 Deluxe Scale 1/10",
        category: "Marvel / DC",
        price: 2100000,
        badge: "Cao cấp",
        image: "https://cdn.mohinhcaocap.com/wp-content/uploads/2019/12/16203649/O1CN01jIjkxH1IapDK9Fw1C_2868430910.jpg"
    },
    {
        id: 15,
        name: "Mô hình Spider-Man No Way Home Iron Spider",
        category: "Marvel / DC",
        price: 1450000,
        badge: "",
        image: "https://bizweb.dktcdn.net/100/503/392/products/2-65ee15d9-1e50-4218-93ff-2bf563da8b3b.jpg?v=1709656714950"
    },
    {
        id: 16,
        name: "Mô hình Batman The Dark Knight (Kèm Đế Bat-Signal)",
        category: "Marvel / DC",
        price: 1850000,
        badge: "Mới",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStqCqxUqgBHwnA49EpnYwv9Or6Ex5bgnp53idBwRfQ3YhZpxiGzI7x4Ocz&s=10"
    },

    // --- NENDOROID / CHIBI ---
    {
        id: 17,
        name: "Nendoroid Anya Forger - Spy x Family (Chính hãng)",
        category: "Nendoroid",
        price: 650000,
        badge: "Cute",
        image: "https://www.sideshow.com/cdn-cgi/image/height=350,quality=80,f=auto/https://www.sideshow.com/storage/product-images/916018/tsume-art-spy-x-family-anya-forger-and-bond-forger-statue-silo_md.png"
    },
    {
        id: 18,
        name: "Nendoroid Hatsune Miku Magical Mirai Ver.",
        category: "Nendoroid",
        price: 720000,
        badge: "",
        image: "https://i.ebayimg.com/images/g/qmgAAOSw3jtlyGUs/s-l960.webp"
    },
    {
        id: 19,
        name: "Mô hình Xe Lamborghini Aventador SVJ Tỉ lệ 1:18",
        category: "Mô Hình Xe",
        price: 1650000,
        badge: "Hot",
        size: "Tỉ lệ 1:18 (Dài khoảng 26cm)",
        material: "Khung hợp kim Diecast nguyên khối, lốp cao su, mở được full cửa & nắp capo",
        brand: "AUTOart / Bburago",
        image: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lzvdbwb88om97a"
    },
    {
        id: 20,
        name: "Mô hình Xe Porsche 911 GT3 RS Tỉ lệ 1:24 (Có Đèn & Âm Thanh)",
        category: "Mô Hình Xe",
        price: 550000,
        badge: "Bán chạy",
        size: "Tỉ lệ 1:24 (Dài khoảng 20cm)",
        material: "Hợp kim kẽm cao cấp kết hợp nhựa ABS, có đèn LED trước/sau",
        brand: "Maisto / CheZhi",
        image: "https://down-vn.img.susercontent.com/file/vn-11134207-7ras8-m0q3hi6mmf0ve9"
    },
    {
        id: 21,
        name: "Mô hình Xe Ferrari SF90 Stradale Assetto Fiorano 1:18",
        category: "Mô Hình Xe",
        price: 2250000,
        badge: "Cao cấp",
        size: "Tỉ lệ 1:18 (Dài khoảng 25cm)",
        material: "Hợp kim Diecast sơn tĩnh điện 3 lớp, chi tiết khoang máy sắc nét",
        brand: "Bburago Signature",
        image: "https://down-vn.img.susercontent.com/file/e4ecf0e6f4a44875a3700e188db64d57"
    },
    {
        id: 22,
        name: "Mô hình Xe Nissan GT-R R35 Liberty Walk Tỉ lệ 1:64",
        category: "Mô Hình Xe",
        price: 380000,
        badge: "Mới",
        size: "Tỉ lệ 1:64 (Dài khoảng 7.5cm)",
        material: "Hợp kim Diecast, bánh cao su lăn trơn, kèm hộp Mica trưng bày",
        brand: "MiniGT",
        image: "https://sentock.vn/_next/image/?url=https%3A%2F%2Fadminnextjs.sentock.vn%2Fwp-content%2Fuploads%2F2026%2F05%2Fnissan-mgt-1248-r35.jpg&w=3840&q=75"
    }
];

let cart = [];
let currentCategory = 'all';

// Định dạng tiền VNĐ
function formatVND(amount) {
    return amount.toLocaleString('vi-VN') + 'đ';
}

// Hiển thị danh sách sản phẩm
function renderProducts(list) {
    const productList = document.getElementById('product-list');
    productList.innerHTML = '';

    if (list.length === 0) {
        productList.innerHTML = '<p>Không tìm thấy mô hình nào phù hợp.</p>';
        return;
    }

    list.forEach(product => {
        const badgeHTML = product.badge ? `<span class="product-badge">${product.badge}</span>` : '';
        productList.innerHTML += `
            <div class="product-card">
                <div class="img-wrapper">
                    ${badgeHTML}
                    <img src="${product.image}" alt="${product.name}">
                </div>
                <div class="product-info">
                    <span class="product-category">${product.category}</span>
                    <h3 class="product-title">${product.name}</h3>
                    <p class="product-price">${formatVND(product.price)}</p>
                    <button class="details-btn" onclick="openProductDetails(${product.id})">Xem chi tiết</button>
                    <button class="add-btn" onclick="addToCart(${product.id})">+ Thêm vào giỏ</button>
                </div>
            </div>
        `;
    });
}

// Mặc định cho các sản phẩm chưa có thông số riêng
function getProductDetails(product) {
    const brands = {
        "Gundam": "Bandai (Nhật Bản)",
        "One Piece": "Banpresto / Bandai Spirits",
        "Dragon Ball": "Banpresto / Bandai Spirits",
        "Anime Khác": "Hãng sản xuất tùy phiên bản",
        "Marvel / DC": "Hãng sản xuất tùy phiên bản",
        "Nendoroid": "Good Smile Company"
    };

    return {
        size: product.size || "Kích thước tùy phiên bản (khoảng 15–25cm)",
        material: product.material || "Nhựa PVC/ABS cao cấp (tùy phiên bản)",
        brand: product.brand || brands[product.category] || "Đang cập nhật"
    };
}

// Mở thông tin chi tiết sản phẩm
function openProductDetails(id) {
    const product = products.find(item => item.id === id);
    if (!product) return;

    const details = getProductDetails(product);
    document.getElementById('detail-img').src = product.image;
    document.getElementById('detail-img').alt = product.name;
    document.getElementById('detail-category').textContent = product.category;
    document.getElementById('detail-name').textContent = product.name;
    document.getElementById('detail-price').textContent = formatVND(product.price);
    document.getElementById('detail-size').textContent = details.size;
    document.getElementById('detail-material').textContent = details.material;
    document.getElementById('detail-brand').textContent = details.brand;
    document.getElementById('detail-add-btn').onclick = () => {
        addToCart(product.id);
        toggleDetailModal();
    };
    document.getElementById('detail-modal').style.display = 'flex';
}

function toggleDetailModal() {
    const modal = document.getElementById('detail-modal');
    modal.style.display = modal.style.display === 'flex' ? 'none' : 'flex';
}

// Lọc sản phẩm theo danh mục và ô tìm kiếm
function setCategory(category, btnElement) {
    currentCategory = category;
    document.querySelectorAll('.cat-btn').forEach(btn => btn.classList.remove('active'));
    btnElement.classList.add('active');
    filterProducts();
}

function filterProducts() {
    const keyword = document.getElementById('search-input').value.toLowerCase();
    const filtered = products.filter(p => {
        const matchCat = currentCategory === 'all' || p.category === currentCategory;
        const matchSearch = p.name.toLowerCase().includes(keyword);
        return matchCat && matchSearch;
    });
    renderProducts(filtered);
}

// Thêm sản phẩm vào giỏ hàng
function addToCart(id) {
    const product = products.find(p => p.id === id);
    const existingItem = cart.find(item => item.id === id);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    updateCartUI();
}

// Xóa sản phẩm khỏi giỏ
function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    updateCartUI();
}

// Cập nhật giao diện giỏ hàng
function updateCartUI() {
    const cartCount = document.getElementById('cart-count');
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');

    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.innerText = totalItems;

    if (cart.length === 0) {
        cartItems.innerHTML = '<p>Giỏ hàng đang trống.</p>';
        cartTotal.innerText = '0đ';
        return;
    }

    cartItems.innerHTML = '';
    let totalPrice = 0;

    cart.forEach(item => {
        totalPrice += item.price * item.quantity;
        cartItems.innerHTML += `
            <div class="cart-item">
                <div>
                    <h4>${item.name}</h4>
                    <small>${formatVND(item.price)} x ${item.quantity}</small>
                </div>
                <button class="remove-btn" onclick="removeFromCart(${item.id})">Xóa</button>
            </div>
        `;
    });

    cartTotal.innerText = formatVND(totalPrice);
}

// Đóng / Mở giỏ hàng
function toggleCart() {
    const modal = document.getElementById('cart-modal');
    modal.style.display = modal.style.display === 'flex' ? 'none' : 'flex';
}

// Thanh toán
function checkout() {
    if (cart.length === 0) {
        alert("Giỏ hàng của bạn đang trống!");
        return;
    }
    alert("🎉 Đặt hàng thành công! Cảm ơn bạn đã mua mô hình tại FigureZone.");
    cart = [];
    updateCartUI();
    toggleCart();
}
// Thay thế hàm checkout() cũ bằng đoạn này:
function checkout() {
    if (cart.length === 0) {
        alert("Giỏ hàng của bạn đang trống!");
        return;
    }
    // Đóng giỏ hàng lại và mở form nhập thông tin
    toggleCart();
    const checkoutModal = document.getElementById('checkout-modal');
    checkoutModal.style.display = 'flex';
}

// Đóng / Mở modal form thanh toán
function toggleCheckoutModal() {
    const checkoutModal = document.getElementById('checkout-modal');
    checkoutModal.style.display = checkoutModal.style.display === 'flex' ? 'none' : 'flex';
}

// Xử lý khi người dùng bấm "Xác Nhận Đặt Hàng" trong form
function submitOrder(event) {
    event.preventDefault(); // Ngăn trang web bị load lại

    // Lấy thông tin từ form
    const name = document.getElementById('cus-name').value;
    const phone = document.getElementById('cus-phone').value;
    const address = document.getElementById('cus-address').value;
    const note = document.getElementById('cus-note').value;

    // Tính tổng tiền
    let totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    // Tạo thông báo chi tiết đơn hàng
    let orderSummary = `🎉 ĐẶT HÀNG THÀNH CÔNG!\n\n`;
    orderSummary += `👤 Khách hàng: ${name}\n`;
    orderSummary += `📞 Số điện thoại: ${phone}\n`;
    orderSummary += `📍 Địa chỉ: ${address}\n`;
    if(note) orderSummary += `📝 Ghi chú: ${note}\n`;
    orderSummary += `💰 Tổng tiền: ${formatVND(totalPrice)}\n\n`;
    orderSummary += `Shop sẽ liên hệ xác nhận đơn hàng và giao mô hình trong thời gian sớm nhất!`;

    alert(orderSummary);

    // Reset giỏ hàng và đóng form
    cart = [];
    updateCartUI();
    toggleCheckoutModal();

    // Xóa dữ liệu trong form sau khi đặt xong
    document.getElementById('checkout-form').reset();
}

// Khởi chạy lần đầu
renderProducts(products);
// Xử lý gửi form liên hệ CSKH
function submitContact(event) {
    event.preventDefault();
    alert("✅ Cảm ơn bạn đã gửi câu hỏi! Bộ phận CSKH của FigureZone sẽ phản hồi qua email hoặc liên hệ lại với bạn trong thời gian sớm nhất.");
    event.target.reset(); // Xóa sạch nội dung trong form sau khi gửi
}