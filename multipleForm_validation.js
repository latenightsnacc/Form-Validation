function validateJoinForm(){
    var name = document.getElementById("Joinname").value;
    var email = document.getElementById("Joinemail").value;
    var phone = document.getElementById("JoinphnNo").value;
    var sector = document.getElementById("Joinsector").value;
    var error = document.getElementById("errorMessage");
    var text;

    error.style.padding = "10px";

    if (name.length < 10){
        text = "Please enter your full name.";
        error.innerHTML = text;
        return false;
    }
    if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))){
        text = "Please enter a valid email.";
        error.innerHTML = text;
        return false;
    }
    if (isNaN(phone) || phone.length < 11 || phone.length > 11){
        text = "Please enter a valid phone number.";
        error.innerHTML = text;
        return false;
    }
    if (sector == ''){
        text = "Please select your sector.";
        error.innerHTML = text;
        return false;
    }
    const data = new FormData();
    data.append("Name:", name);
    data.append("Email:", email);
    data.append("Phone number:", phone);
    data.append("Sector", sector);

    /*const xhr = new XMLHttpRequest();
    xhr.open("POST", "formSend.php", true);
    xhr.send(data);*/

    /*text = "Registration Successful!";
    error.innerHTML = text;*/
    alert(FormData());
    return true;    
}