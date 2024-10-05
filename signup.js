function sighUp(){
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
// Valiate email before
    if(!email || !password){
        dispalyMassage("Plesase enter username and password");
        return;
    }
    var users = JSON.parse(localStorage.getItem("users"));
    if(!users){
        localStorage.setItem("users",JSON.stringify([{email,password}]));
        setLoogedInUser(email);
        dispalyMassage("SignUp Success");
        return;
    }
    var user = users.find(x=> x.email == email);
    if(user){
        // user already exist
        dispalyMassage("User already exist");
        return;
    }
    localStorage.setItem("users",JSON.stringify([...users,{email,password}]));
    setLoogedInUser(email);
    dispalyMassage("SignUp Success");
    location.href = "./Home.html";
    // Signup success message
}

function dispalyMassage(message){
    var messageNode = document.getElementById("message");
    messageNode.style.display ="block";
    messageNode.innerHTML = message;
}

function setLoogedInUser(email){
    localStorage.setItem("loggedInUserEmail",email);
}