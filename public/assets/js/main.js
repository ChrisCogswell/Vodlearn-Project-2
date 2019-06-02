

document.getElementById("signup-button").addEventListener("click",showSignUpForm);



function showSignUpForm(){
    document.getElementById("signup-form").style.display="block";
    document.getElementById("signup-button").style.display="none";
}

Array.from(document.getElementsByClassName("form-text")).forEach(function(element){
element.addEventListener("onfocus",
function (){
element.value="";

});

});


