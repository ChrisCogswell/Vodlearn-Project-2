$(document).ready(function() {
  $("#sign-out").on("click",function(){
    $.post("/signout",{},function(data){

    }
)
  });


  $.get( "/quizlist", function( data ) {
    $( "#display-stage" ).html( data );
    console.log("123");
     getSideBar("main");
    // document.getElementById("display-stage").innerHTML=data;
  });

    $("#addquiz-button").on("click", 
    function (){
    
    console.log("Display Add Quiz");
        $.get( "/addquiz", function( data ) {
            $( "#display-stage" ).html( data );
            
            // document.getElementById("display-stage").innerHTML=data;
          });
    }
    );

// $("#settings-button").on("click", 
// function (){
// console.log("Display Settings");
//     $.get( "/settings", function( data ) {
//         $( "#display-stage" ).html( data );
//         // document.getElementById("display-stage").innerHTML=data;
//       });
//     }
//     );

// $("#quizlist-button").on("click", 
// function (){
// console.log("Display Quizes");
//     $.get( "/quizlist", function( data ) {
//         $( "#display-stage" ).html( data );
//         // document.getElementById("display-stage").innerHTML=data;
//       });
// }
// );








function getSideBar(view){
  console.log("getting sidebar");
  $.get("/sidebar/"+view,function(data){
    console.log(data);
    $(".side-bar").html(data);
    addSideBarEventListener();
  })
}

function signOut(){
$.get("/signout",function(data){console.log(data);}
)

}

function addSideBarEventListener(){
  $("#quizlist-button").on("click", 
  function (){
  console.log("Display Quizes");
      $.get( "/quizlist", function( data ) {
          $( "#display-stage" ).html( data );
          getSideBar("main");
          // document.getElementById("display-stage").innerHTML=data;
        });
  }
  );

  $("#settings-button").on("click", 
function (){
console.log("Display Settings");
    $.get( "/settings", function( data ) {
        $( "#display-stage" ).html( data );
        // document.getElementById("display-stage").innerHTML=data;
      });
    }
    );




}





} );






