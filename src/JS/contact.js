// DOM

const submitForm = document.querySelector('.right-form');
// Function
function handleContact(event){
    event.preventDefault();
    alert("Gửi thư thành công!");
}
// Main script

submitForm.addEventListener('submit', function(event){
    handleContact(event);
})
