/*Credit: Diego Leme https://codepen.io/diegoleme/pen/qBpyvr */
let password = document.getElementById("password");
let confirm_password = document.getElementById("confirm_password");

function confirmPassword() {
    if(password.value != confirm_password.value) {
        confirm_password.setCustomValidity("Passwords Don't Match")
    }
    else {
        confirm_password.setCustomValidity('');
    }
}

password.onchange = confirmPassword;
confirm_password.onkeyup = confirmPassword;