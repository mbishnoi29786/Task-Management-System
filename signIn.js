function signIn() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var users = JSON.parse(localStorage.getItem("users"));

    if(!email || !password){
        dispalyMassage("Plesase enter username and password");
        return
    }
    
    if(!users)
    {
        // No user found message
        dispalyMassage("No user found");
        return;
    }

    var loggedInUser = users.find(x=> x.email == email && x.password == password);
    if(!loggedInUser)
    {
        dispalyMassage("No user found");
         return;
    }

    dispalyMassage("Login Success");
    localStorage.setItem("loggedInUserEmail",loggedInUser.email);
    location.href = "./Home.html";
    // Redirect to home page
}

function dispalyMassage(message){
    var messageNode = document.getElementById("message");
    messageNode.style.display ="block";
    messageNode.innerHTML = message;
}
