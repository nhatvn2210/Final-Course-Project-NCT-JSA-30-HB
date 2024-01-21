// DOM
const headerElement = document.querySelector('.header');
const footerElement = document.querySelector('.footer');
// Tester
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
function insertFooter(){
    let htmls = `
        <div class="container d-flex justify-evenly">
            <div class="video">
                <iframe src="https://www.youtube.com/embed/IHEOZ0O8APU?si=w3AU-TZjCjflz3-E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
            <form action="" class="comment">
                <p>Bạn có thể cho một lời nhận xét được chứ?</p>
                <div class="content">
                    <input type="text" class="comment-input" name="" id="" placeholder="Leave your message here">
                    <input type="submit" value="Send" class="comment-submit">
                </div>
            </form>
        </div>
    `
    footerElement.innerHTML = htmls;
}
// Main script
insertNav();
insertFooter();