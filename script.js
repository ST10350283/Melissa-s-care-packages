function validateForm(){

    var validateName =
    document.getElementById("uname").value;
    if (validateName == "username" ||
    validateName == "") {
        alert("enter your username");
    }
    var validatePassword =
    document.getElementById("pass").value;
    if (validatePassword == "password" ||
    validatePassword == "") {
        alert("enter valid password");
    }
}