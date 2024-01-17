// DOM

const renderProductList = document.querySelector(".render-product-list");
const searchInput = document.querySelector("#search-input");
// Product list
let productList = [
    {
        id: "0001",
        imgSrc: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lp62u10kmamm32",
        name: "Giỏ quà Tết",
        rate: 5,
        price: 100000,
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus, saepe? Aliquam commodi ex quaerat provident facilis, dicta ad iste assumenda consequuntur amet eveniet voluptatibus beatae accusamus officia tenetur voluptatum fugiat?",
    },
    {
        id: "0002",
        imgSrc: "https://down-vn.img.susercontent.com/file/vn-11134201-7r98o-lpc4v5mph10b1a",
        name: "Áo dài tết nữ",
        rate: 5,
        price: 85000,
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus, saepe? Aliquam commodi ex quaerat provident facilis, dicta ad iste assumenda consequuntur amet eveniet voluptatibus beatae accusamus officia tenetur voluptatum fugiat?",
    },
    {
        id: "0003",
        imgSrc: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lnvbtlxo33zhde",
        name: "Áo dài tết nam",
        rate: 5,
        price: 120000,
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus, saepe? Aliquam commodi ex quaerat provident facilis, dicta ad iste assumenda consequuntur amet eveniet voluptatibus beatae accusamus officia tenetur voluptatum fugiat?",
    },
    {
        id: "0004",
        imgSrc: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lprjrbna7sjb19",
        name: "Mô hình bánh chưng",
        rate: 4,
        price: 90000,
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus, saepe? Aliquam commodi ex quaerat provident facilis, dicta ad iste assumenda consequuntur amet eveniet voluptatibus beatae accusamus officia tenetur voluptatum fugiat?",
    },
    {
        id: "0005",
        imgSrc: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-ll5yrtc8kp120e",
        name: "Bánh chưng vuông",
        rate: 4,
        price: 45000,
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus, saepe? Aliquam commodi ex quaerat provident facilis, dicta ad iste assumenda consequuntur amet eveniet voluptatibus beatae accusamus officia tenetur voluptatum fugiat?",
    },
    {
        id: "0006",
        imgSrc: "https://down-vn.img.susercontent.com/file/f0d6a7502c028f81ea0d0e889044f18d",
        name: "Bánh tét ngũ sắc",
        rate: 4,
        price: 90000,
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus, saepe? Aliquam commodi ex quaerat provident facilis, dicta ad iste assumenda consequuntur amet eveniet voluptatibus beatae accusamus officia tenetur voluptatum fugiat?",
    },
    {
        id: "0007",
        imgSrc: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-loxipffaz0i628",
        name: "Mô hình bánh tét",
        rate: 4,
        price: 90000,
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus, saepe? Aliquam commodi ex quaerat provident facilis, dicta ad iste assumenda consequuntur amet eveniet voluptatibus beatae accusamus officia tenetur voluptatum fugiat?",
    },
    {
        id: "0008",
        imgSrc: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lq1dltm5gg1j52",
        name: "Nón lá Việt Nam",
        rate: 5,
        price: 30000,
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus, saepe? Aliquam commodi ex quaerat provident facilis, dicta ad iste assumenda consequuntur amet eveniet voluptatibus beatae accusamus officia tenetur voluptatum fugiat?",
    },
    {
        id: "0009",
        imgSrc: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lqf0x1zoschjeb",
        name: "Cành đào Nhật Tân",
        rate: 5,
        price: 554000,
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus, saepe? Aliquam commodi ex quaerat provident facilis, dicta ad iste assumenda consequuntur amet eveniet voluptatibus beatae accusamus officia tenetur voluptatum fugiat?",
    },
    {
        id: "0010",
        imgSrc: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lp7sv7u8c123ef",
        name: "Hoa mai kẽm nhung",
        rate: 4,
        price: 80000,
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus, saepe? Aliquam commodi ex quaerat provident facilis, dicta ad iste assumenda consequuntur amet eveniet voluptatibus beatae accusamus officia tenetur voluptatum fugiat?",
    }
];
// Set the list to local storage
productList = localStorage.setItem('product-list', JSON.stringify(productList));
// Function
// Add to cart
const handleAddToCart = (productId) => {
    const selectedProduct = productList.find(product => product.id == productId);
  
    productsCart.push(selectedProduct);
    localStorage.setItem('products-cart', JSON.stringify(productsCart));
}
// Render product list
function renderProduct(selectedList) {
    // Declare a variable to store the elements
    let htmls = ``;
    // A loop to get data from selected list
    for (let i in selectedList) {
        let imgURL = selectedList[i].imgSrc;
        let productName = selectedList[i].name;
        let productRate = selectedList[i].rate;
        let productPrice = selectedList[i].price;
        let productId = selectedList[i].id;
        htmls += `
        <li class="product-item">
            <div class="img" style="background-image: url(${imgURL}) ;"></div>
            <div class="product-text">
                <h5 class="bold-letter">${productName}</h5>
                <div class="rate d-flex justify-between">
        `;
        for (let i = 1; i <= productRate; i++) {
            htmls += `<i class="fa-solid fa-star" style="color: #e8d611;"></i>`;
        }
        htmls += `</div>
                <p class="price">${productPrice}<i class="fa-solid fa-dong-sign" style="color: #000000;"></i></p>
            </div>
        `
        htmls += 
        `
                <button class="add-cart" onclick="handleAddToCart(${productId})">
                    <i class="fa-solid fa-cart-plus"></i>
                </button>
            </li>
        `
    }
    // Add to HTML
    renderProductList.innerHTML = htmls;
}
// Search function
function searchProduct(searchKey, selectedList) {
    let filterProduct = selectedList.filter(function (product) {
        return product.name.toLowerCase().includes(searchKey.toLowerCase());
    })
    renderProduct(filterProduct);
}
// Main script

// Get product list from local storage

productList = JSON.parse(localStorage.getItem('product-list')) || [];

// Call the render function

renderProduct(productList);

// Start finding things

searchInput.addEventListener("input", function (event) {
    searchProduct(event.target.value, productList);
})