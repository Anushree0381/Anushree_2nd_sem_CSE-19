function checkNumber() {
    let num = document.getElementById("number").value;

    if (num === "") {
        document.getElementById("result").innerHTML =
            "Please enter a number.";
    }
    else if (num % 2 == 0) {
        document.getElementById("result").innerHTML =
            num + " is an Even Number.";
    }
    else {
        document.getElementById("result").innerHTML =
            num + " is an Odd Number.";
    }
}