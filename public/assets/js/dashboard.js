$(document).ready(function() {

<<<<<<< HEAD
=======
  $.get( "/quizlist", function( data ) {
    $( "#display-stage" ).html( data );
    // document.getElementById("display-stage").innerHTML=data;
  });

>>>>>>> 5a57f10764e3c2f17c7ddf55c6333f2debd8a7f8
    $("#addquiz-button").on("click", 
    function (){
    console.log("Display Add Quiz");
        $.get( "/addquiz", function( data ) {
            $( "#display-stage" ).html( data );
            // document.getElementById("display-stage").innerHTML=data;
          });
    }
    );

<<<<<<< HEAD
    $("#settings-button").on("click", 
    function (){
    console.log("Display Settings");
=======
$("#settings-button").on("click", 
function (){
console.log("Display Settings");
>>>>>>> 5a57f10764e3c2f17c7ddf55c6333f2debd8a7f8
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
<<<<<<< HEAD


=======

$("#add-quiz-button").on("click", function(){
  console.log("Create Quiz");
  // var newquiz={
  //   quiz_name:$("#quiz_name").value()
  // }

  
// }); 

});

//  $.ajax({
//     url: '/api/addquiz',
//     type: 'post',
//     dataType: 'json',
//     data: newquiz,
//     success: function(data) {
//                console.log("success")
//              }
>>>>>>> 5a57f10764e3c2f17c7ddf55c6333f2debd8a7f8
