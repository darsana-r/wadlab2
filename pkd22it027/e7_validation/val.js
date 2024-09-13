function validateForm() {
    let name = document.getElementById("name").value;
    let password = document.getElementById("password").value;
    let email = document.getElementById("email").value;
    let age = document.getElementById("age").value;

    if (name =="" || name.length<2 || checkAlphabets(name)==false) {
        alert("Enter a valid name");
        return false;
    }

    if (password.length < 6) {
        alert("Password must be at least 6 characters long");
        return false;
    }

    if (email=="") {
        alert("Please enter a valid email address");
        return false;
    }

    if (age < 18 || age > 30) {
        alert("Age must be between 18 and 30");
        return false;
    }

    function checkAlphabets(input) {
        for (const char of input) {
            if (!(char >= "a" && char <= "z") && !(char >= "A" && char <= "Z") && !(char==" ")) {
                return false;
            }
        }
        return true;
    }

    return true;
}

