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
                <img src="./assets/images/logo.png" alt="">
            </div>
            <ul class="menu d-flex justify-between">
                <li class="menu__item has-dropdown">
                    <a href="./index.html" class="decoration-none color-black">Home</a>
                    <i class="fa-solid fa-chevron-right dropdown-arrow"></i>
                    <ul class="dropdown-container">
                        <li>
                            <a href="./index.html#traditional-food" class="color-black decoration-none">Món ăn truyền thống</a>
                        </li>
                        <li>
                            <a href="./index.html#traditional-clothes" class="color-black decoration-none">Trang phục truyền thống</a>
                        </li>
                        <li>
                            <a href="./index.html#traditional-festival" class="color-black decoration-none">Lễ hội truyền thống</a>
                        </li>
                    </ul>
                </li>
                <li class="menu__item">
                    <a href="./shop.html" class="decoration-none color-black">Shop</a>
                </li>
                <!--
                <li class="menu__item">
                    <a href="./blog.html" class="decoration-none color-black">Blog</a>
                </li>
                -->
                <li class="menu__item">
                    <a href="./contact.html" class="decoration-none color-black">Contact</a>
                </li>
                <li class="menu__item">
                    <a href="./music.html" class="decoration-none color-black">Music</a>
                </li>
            </ul>
            <div class="signin_signup d-flex items-center user-authentication">
                <a href="./signin.html" class="decoration-none color-black">Sign In</a>
                <p class="no-margin"> / </p>
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