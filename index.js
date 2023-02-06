function validateEmail(){
    let mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    let email = document.getElementById('email').value;
    if(!email.match(mailformat)){
        console.log("error");
        document.getElementById("email").style.borderColor="red";
        return false;
    }
    document.getElementById("email").style.borderColor="green";
    return true;
}

function validatePassword() {
    let password = document.getElementById('password').value;
    console.log(password);
    let minChars = 8;
    let passwordFormat  = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;

    if(password.length < minChars || !passwordFormat.test(password)) {
        document.getElementById("password").style.borderColor="red";
        return false;
    }
    console.log("true");
    document.getElementById("password").style.borderColor="green";
    return true;
}

function validateForm() {
    
    let emailValid = validateEmail();
    let passwordValid = validatePassword();

    if(emailValid && passwordValid) {
        document.getElementById("registered-text").style.borderColor="green";
        document.getElementById("registered-text").innerHTML="Registered Succesfully";
        document.getElementById("registered-text").style.display = "block"
    }
    else
        return false;
    
}

function mouseOverButton() {
    document.getElementById("submit").style.backgroundColor = "blue"
}

function mouseOutButton() {
    document.getElementById("submit").style.backgroundColor = "aqua"
}