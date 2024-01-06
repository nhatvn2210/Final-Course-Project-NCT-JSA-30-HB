// DOM
const headerElement = document.querySelector('.header');
// Tester
console.log(document.querySelector('.header'));
// Insert Navigation to every necessary pages
function insertNav() {
    let htmls = `
    <div class="container">
        <nav class="d-flex justify-between items-center">
            <div class="logo">
                <img src="../assets/images/logo.png" alt="">
            </div>
            <ul class="menu d-flex justify-between">
                <li class="menu__item">
                    <a href="./index.html" class="decoration-none color-black">Home</a>
                </li>
                <li class="menu__item">
                    <a href="./home.html" class="decoration-none color-black">Shop</a>
                </li>
                <li class="menu__item">
                    <a href="./home.html" class="decoration-none color-black">Blog</a>
                </li>
                <li class="menu__item">
                    <a href="./home.html" class="decoration-none color-black">About us</a>
                </li>
                <li class="menu__item">
                    <a href="./home.html" class="decoration-none color-black">Contact</a>
                </li>
            </ul>
            <div class="signin_signup d-flex">
                <a href="./signin.html" class="decoration-none color-black">Sign In</a>
                <p> / </p>
                <a href="./signup.html" class="decoration-none color-black">Sign Up</a>
            </div>
        </nav>
    </div>
    `;
    headerElement.innerHTML = htmls;
    headerElement.classList.add('position-fixed');
}
// Main script
insertNav();