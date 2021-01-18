const alreadyLoggedIn = localStorage.getItem("loggedIn");

if(alreadyLoggedIn){
    window.location.href = "../html/dashboard.html";
}

const users = [
    {
        email: "emiro@emiro.com",
        password: "12345"
    },
    {
        email: "luis@emiro.com",
        password: "gatonegro"
    }
];

function login() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    // console.log("email: "+email+" "+"password: "+password);
    const found = users.find(element => element.email === email && element.password === password);
    // console.log(found);
    if (found){
        // alert("ingresando...")
        localStorage.setItem("loggedIn","true");
        window.location.href = "../html/dashboard.html";
        // window.location.replace("../html/dashboard.html");
    }else{
        alert("usuario y/o contraseña incorrectos");
    }
    
}