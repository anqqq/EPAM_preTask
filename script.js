function valid() {
    let name = document.getElementById('inputUserName').value;
    let pass = document.getElementById('inputPassword').value;
    let rePass = document.getElementById('inputRePassword').value;
    let email = document.getElementById('exampleInputEmail').value;

    if (String(pass).length < 6) {
        alert('Password length must be more than 5 characters');
    } else if (pass != rePass) {
        alert('Passwords do not match!');
    } else {
        console.log(name, pass, rePass, email);
        sendJSON();
    }
}

function sendJSON() {
    let name = document.querySelector('#inputUserName');
    let pass = document.querySelector('#inputPassword');
    let email = document.querySelector('#exampleInputEmail');

    let result = document.querySelector('.result');

    let xhr = new XMLHttpRequest();
    url = "http://epampretask.com";
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            console.log(result);
        }
    };

    var data = JSON.stringify({ "name": name.value, "pass": pass.value, "email": email.value });
    xhr.send(data);
}