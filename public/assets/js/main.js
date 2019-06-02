

document.getElementById("signup-button").addEventListener("click",showSignUpForm);



function showSignUpForm(){
    document.getElementById("signup-form").style.display="block";
    document.getElementById("signup-button").style.display="none";
}

Array.from(document.getElementsByClassName("login-input")).forEach(function(element){
element.addEventListener("focus",
function (){
element.value="";
element.style.color="#B21B00";

});

});


