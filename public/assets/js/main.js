
var usernamecheck=false;
var passwordcheck=false;


document.getElementById("signup-button").addEventListener("click",showSignUpForm);



function showSignUpForm(){
    document.getElementById("signup-form").style.display="block";
    document.getElementById("signup-button").style.display="none";
}

document.getElementById("input-username").addEventListener("focus",
function (){
if(this.value=="Enter Username"){
this.value="";
this.style.color="#B21B00";
if(this.value.length>=1){
usernamecheck=true;}
this.addEventListener("focusout",function(){
    if(this.value==""){
        this.value="Enter Username";
        this.style.color="lightgray";
        usernamecheck=false;
    }
},false)
}

});

document.getElementById("input-password").addEventListener("focus",
function (){
if(this.value=="Enter Password"){
this.value="";
this.type="password";
passwordcheck=true;
this.style.color="#B21B00";
this.addEventListener("focusout",function(){
    if(this.value==""){
        this.value="Enter Password";
        this.style.color="lightgray";
        this.type="text";
        passwordcheck=false;
    }
},false)
}

});


var $slider = document.getElementById('slider');
var $toggle = document.getElementById('signup-button');
var $toggleBack = document.getElementById('submit-button');

$toggle.addEventListener('click', function() {
    var isOpen = $slider.classList.contains('signup-container');

$toggleBack    

    $slider.setAttribute('class', isOpen ? 'slide-out' : 'signup-container');
});

$("#create-account-button").on("click", createAccount);
$("#login-button").on("click", login);

function createAccount(){
data={
username:$("#username-input-signup").val(),
email: $("#email-input-signup").val(),
password: $("#password-input-signup").val()
}
$.post("/signup",data,function(results){
    if(results.err !=null){
    alert(results.err.message);}
    if(results.token){
        sessionStorage.setItem('token', results.token);
        window.location.href = "./dashboard/"+results.username;
    }

})

}


function login(){
var data={
username:$("#input-username").val(),
password:$("#input-password").val()
};

    $.post("/login",data,function(results){
        if(results.err !=null){
        alert(results.err.message);}
        if(results.token){
            sessionStorage.setItem('token', results.token);
            window.location.href = "./dashboard/"+results.token;
        }
    
    });

}
