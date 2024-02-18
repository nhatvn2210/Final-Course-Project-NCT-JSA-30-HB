// DOM

const submitForm = document.querySelector('.right-form');
const subjectInput = document.querySelector('#subject');
const messageInput = document.querySelector('#message');
const currentSignInAccount = JSON.parse(localStorage.getItem('current-signin-account')) || '';
console.log(currentSignInAccount);
// Function
function handleContact(event) {
    // Prevent from reloading
    event.preventDefault();
    // Compare
    if (!currentSignInAccount) {
        alert('Bạn phải đăng nhập trước đã!');
        return ;
    }
    if (!subjectInput || !messageInput) {
        alert("Bạn phải điền hết tất cả chỗ trống!");
        return ;
    }
    alert("Gửi thư thành công!");
}
// Main script

submitForm.addEventListener('submit', function (event) {
    handleContact(event);
})
