
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

    $slider.setAttribute('class', isOpen ? 'slide-out' : 'signup-container');
});



