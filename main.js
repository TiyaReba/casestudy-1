function formValidation(statusCheck){
    let username = document.getElementById("userid").value;
    let password = document.getElementById("password").value;
    statusCheck(username,password);
}

function sucess(usr,pass){
    if(usr=="admin" && pass=="12345"){
        document.querySelector("form").action="./todo.html";

    }
    else{
        alert("invalid Login");
    }
}

function login(){
    formValidation(sucess);
}