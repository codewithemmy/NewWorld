let username = document.getElementById('uname');
let email = document.getElementById('email');
let password = document.getElementById('pass');
let button = document.querySelector('.the-button');
let message = document.getElementById('message');
let regEx = /\S+@\S+\.\S/;
let form = document.querySelector('.form');

            

function validate() {
if (username.value.trim() =="" || password.value =="" ) {
    alert('NO BLANK VALUES ALLOWED');
    return false;
    }
else {
        return true; 
}
}

function checkInput() {
    if(username.value.trim() !=="" && regEx.test(email.value) && message.value.trim() !=="") {
        button.style.backgroundColor = 'brown';
    } else {
        button.style.backgroundColor = 'black';
    }
}



form.addEventListener('submit', function(event) {
    event.allowDefault();
    console.log(event)
})
