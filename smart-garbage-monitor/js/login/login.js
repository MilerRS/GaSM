function loginFunction() {
    var userLogin = document.getElementById("userLogin").value;
    var passLogin = document.getElementById("passLogin").value;

    var txt = { nume: userLogin, parola: passLogin };

    var obj = JSON.stringify(txt);

    if (validatuserLogin(userLogin) && validatePassLogin(passLogin)) {

        var xhr = new XMLHttpRequest(),
            method = 'POST',
            overrideMimeType = 'application/json',
            url = "https://smart-garbage-monitor.herokuapp.com/rest/rest.php/login";

        xhr.onreadystatechange = function() {

            if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
                var ok = JSON.parse(xhr.responseText);
                console.log(ok);
                location.replace(ok);
            }
        };
        xhr.open(method, url, true);
        console.log(obj);
        xhr.send(obj);
    }
}

function validatuserLogin(userLogin) {
    if (userLogin.value == "") {
        alert("Introduceti un username!");
        return false;
    }
    return true;
}

function validatePassLogin(passLogin) {
    if (passLogin.value == "") {
        alert("Introduceti o parola!");
        return false;
    }
    return true;
}