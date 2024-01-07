// DOM
const renderProductList = document.querySelector(".render-product-list");
// Product list
let productList = [
    {
        imgSrc: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lp62u10kmamm32",
        name: "Product name",
        rate: 5,
        price: 100000,
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus, saepe? Aliquam commodi ex quaerat provident facilis, dicta ad iste assumenda consequuntur amet eveniet voluptatibus beatae accusamus officia tenetur voluptatum fugiat?",
    },
    {
        imgSrc: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lp62u10kmamm32",
        name: "Product name",
        rate: 4,
        price: 90000,
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus, saepe? Aliquam commodi ex quaerat provident facilis, dicta ad iste assumenda consequuntur amet eveniet voluptatibus beatae accusamus officia tenetur voluptatum fugiat?",
    }
];
// Function
// Render product list
function renderProduct(selectedList) {
    // Declare a variable to store the elements
    let htmls = ``;
    // A loop to get data from selected list
    for (let i in selectedList) {
        let imgURL = productList[i].imgSrc;
        let productName = productList[i].name;
        let productRate = productList[i].rate;
        let productPrice = productList[i].price;
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
        </li>`
    }
    // Add to HTML
    renderProductList.innerHTML = htmls;
}
// Main script
// Get product list from local storage
productList = JSON.parse(localStorage.getItem('product-list')) || [];
// Call the render function
renderProduct(productList);