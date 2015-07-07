/**
 * Created by AttaurRehman on 07-Jul-15.
 */
$(function(){
    $("#addBtn").on("click", function(){

                $.ajax({

                        url : "/addNewProduct",
                        type : "post",
                        data : {
                            FruitName : $("#txtFruitName").val(),
                        },
                        success : function(a){
                            alert("Work Done");
                            console.log(a);
                            if(a && a.length){
                                for(var i = 0; i < a.length; i++){
                                    document.getElementById('showDataFruit').innerHTML += "<br>" + a[i].FruitName;
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