// DOM

const userAuthentication = document.querySelector(".user-authentication");
const currentSigninAccount = JSON.parse(localStorage.getItem('current-signin-account'));
const SignOutButton = document.querySelector(".sign-out-button");
console.log(SignOutButton);
// Function

function handleSignout(signOutInput){
    
}

// Main script

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