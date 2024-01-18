// DOM

const userAuthentication = document.querySelector(".user-authentication");

// Function

function handleSignout() {
    localStorage.setItem("current-signin-account", "");
    alert("Đăng xuất thành công!");
    window.location.reload();
    return;
}

function renderAccount() {
    currentSigninAccount = JSON.parse(localStorage.getItem('current-signin-account')) || "";
    if (currentSigninAccount) {
        userAuthentication.innerHTML =
            `
            <div class = "account-text has-dropdown">
                Hello, <strong>${currentSigninAccount}</strong>
                <i class="fa-solid fa-chevron-right dropdown-arrow"></i>
                <ul class="dropdown-container account-option">
                    <li>
                        <button class="sign-out-button">Sign out</button>
                    </li>
                </ul>
            </div>
        `;
    }
    else {
        userAuthentication.innerHTML =
            `
            <a href="./signin.html" class="decoration-none color-black">Sign In</a>
            <p> / </p>
            <a href="./signup.html" class="decoration-none color-black">Sign Up</a>
        `
    }
}

// Main script
renderAccount();

const SignOutButton = document.querySelector(".sign-out-button");

SignOutButton.addEventListener("click", function (event) {
    handleSignout();
    renderAccount();
})