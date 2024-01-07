// DOM
const usernameInput = document.querySelector("#username-input");
const passwordInput = document.querySelector("#password-input");
const signInForm = document.querySelector("#sign-in-form");
// Data list
let accountList = JSON.parse(localStorage.getItem('account-list')) || [];
console.log(accountList);
// Function
// Sign in function
function handleSignin(event) {
    // Prevent reloading after submitting form
    event.preventDefault();
    // Data from input
    let username = usernameInput.value;
    let password = passwordInput.value;
    // Loop to find the correct account
    for (let i in accountList) {
        // Current account in array
        let currentUsername = accountList[i].usernameValue;
        let currentPassword = accountList[i].passwordValue;
        // Compare
        if (currentUsername == username && currentPassword == password) {
            alert("Đăng nhập thành công!");
            window.location.replace("../HTML/index.html");
            return ;
        }
    }
    alert("Mật khẩu hoặc tên đăng nhập bị sai!");
}
// Main script

signInForm.addEventListener("submit", function (event) {
    handleSignin(event);
})

