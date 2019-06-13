var sidebar={

getSidebar:function(view){
        console.log("getting sidebar");
        $.get("/sidebar/"+view,function(data){
          console.log(data);
          $(".side-bar").html(data);
        })
        }




}

export default sidebar;