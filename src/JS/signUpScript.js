// DOM
const fullName = document.querySelector("#full-name");
const birthday = document.querySelector("#birthday");
const gender = document.getElementsByName("gender");
const username = document.querySelector("#username");
const phoneNumber = document.querySelector("#phone-number");
const password = document.querySelector("#password");
const rePassword = document.querySelector("#re-password");
const signUpForm = document.querySelector("#sign-up-form");
const accountTest = {
    fullName,
    birthday,
    gender,
    username,
    phoneNumber,
    password,
    rePassword,
    signUpForm,
}
console.log(accountTest);
// Function
// Sign up function
function handleSignUp(event) {
    // Prevent reloading after clicking submit
    event.preventDefault();
    // Sign up information
    let fullNameValue = fullName.value;
    let birthdayValue = birthday.value;
    let genderValue;
    let usernameValue = username.value;
    let phoneNumberValue = phoneNumber.value;
    let passwordValue = password.value;
    let rePasswordValue = rePassword.value;
    for (const i in gender) {
        if(gender[i].checked){
            genderValue = gender[i].value;
        }
    }
    let accountData = {
        fullNameValue,
        birthdayValue,
        genderValue,
        usernameValue,
        phoneNumberValue,
        passwordValue,
        rePasswordValue,
    }
    console.log(accountData);
    // Condition to sign up
    if (!fullNameValue || !birthdayValue || !genderValue || !usernameValue || !phoneNumberValue || !passwordValue || !rePasswordValue) {
        alert("Vui lòng điền hết tất cả các trường.");
        return;
    }
    else if (passwordValue != rePasswordValue) {
        alert("Vui lòng nhập lại mật khẩu chính xác.");
        return;
    }
    // Push to account list if all condition is true
    accountList.push(accountData);
    // Add to account list in local storage
    localStorage.setItem('account-list', JSON.stringify(accountList));
    // Alert when sign up successfully
    alert("Bạn đã đăng kí thành công! Nhấp vào đây để sang trang Sign in.");
    window.location.replace("./signin.html");
}
// Variable, array, object
// Account List
let accountList = JSON.parse(localStorage.getItem('account-list')) || [];
// Main script

signUpForm.addEventListener('submit', function (event) {
    handleSignUp(event);
})

