const alreadyLoggedIn = localStorage.getItem("loggedIn");

if(!alreadyLoggedIn){
    window.location.href = "../html/login.html";
}