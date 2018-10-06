function checkForLastName() {

    var targetField = document.getElementById("lastNameField");

    if (targetField.value.length === 0) {
        alert("Please enter your last name");
        targetField.focus();
        targetField.style.background = "red";
        return false;
    }

    targetField.style.background = "white";

}

function checkForSelection() {
    if (document.getElementById("states").selectedIndex === 0) {
        alert("Please select a state.");
        return false;
    }
}

function validateRadios() {
    var radios = document.getElementsByName("r1");
    for (var i = 0; i < radios.length; i++) {

        if (radios[i].checked) {
            return true;
        }

    }
    alert("Please check one.");
    return false;
}

function validateEmail() {

    var targetField = document.getElementById("email").value;

    if (targetField.indexOf(" ") !== -1) {
        alert("Please correct email address");
        return false;

    }

    if (targetField.indexOf("@") < 1 || targetField.indexOf("@") > targetField.length - 5) {
        alert("Please correct email address");
        return false;
    }

}

function checkPassword() {
    try {

        var pass = document.getElementById("pass1").value;
        if (pass.length < 8) {
            throw "Please enter at least 8 characters.";

        }
        if (pass.indexOf(" ") !== -1) {
            throw "No spaces in the password, please.";
        }

    }
    catch (err) {
        alert(err);
        return false
    }

}


// function greetWorld() {
//     var greeting = "Hello world!";
//     consol.log(greeting);
// }

// function greetWorld() {
//     try {
//         var greeting = "Hello world!";
//         consol.log(greeting);
//     }
//     catch (err) {
//         alert(err);
//     }
// }

// greetWorld()