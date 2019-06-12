$(document).ready(function() {

  $.get( "/quizlist", function( data ) {
    $( "#display-stage" ).html( data );
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

$("#settings-button").on("click", 
function (){
console.log("Display Settings");
    $.get( "/settings", function( data ) {
        $( "#display-stage" ).html( data );
        // document.getElementById("display-stage").innerHTML=data;
      });
    }
    );

$("#quizlist-button").on("click", 
function (){
console.log("Display Quizes");
    $.get( "/quizlist", function( data ) {
        $( "#display-stage" ).html( data );
        // document.getElementById("display-stage").innerHTML=data;
      });
}
);

} );

// $("#add-quiz-button").on("click", function(){
//   console.log("Create Quiz");

// });


