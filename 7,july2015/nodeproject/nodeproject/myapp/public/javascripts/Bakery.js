/**
 * Created by AttaurRehman on 07-Jul-15.
 */
$(function(){
    $("#addBakeryBtn").on("click", function(){

            $.ajax({

                    url : "/addNewProduct",
                    type : "post",
                    data : {
                        bakeryItemName : $("#txtBakeryItemName").val(),
                    },
                    success : function(a){
                        alert("Work Done");
                        console.log(a);
                        if(a && a.length){
                            for(var i = 0; i < a.length; i++){
                                document.getElementById('showDatabakeri').innerHTML += "<br>" + a[i].bakeryItemName;
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