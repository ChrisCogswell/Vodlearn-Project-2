$(document).ready(function() {


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