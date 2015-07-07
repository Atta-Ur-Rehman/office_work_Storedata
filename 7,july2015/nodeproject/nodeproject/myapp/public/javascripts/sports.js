/**
 * Created by AttaurRehman on 07-Jul-15.
 */
$(function(){
    $("#button").on("click", function(){

            $.ajax({

                    url : "/addNewProduct",
                    type : "post",
                    data : {
                        sports_item : $("#sportsitem").val()
                    },
                    success : function(a){
                        alert("Work Done");
                        console.log(a);
                        if(a && a.length){
                            for(var i = 0; i < a.length; i++){
                                document.getElementById('showDataFruit').innerHTML += "<br>" + a[i].sports_item;
                            }

                            //document.getElementById('showDataFruit').innerHTML = JSON.stringify(a);
                        }

                    },
                    error : function(){
                        alert("Error in sending data to server");
                    }
                }

            );

        }
    );

});