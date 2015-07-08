/**
 * Created by AttaurRehman on 07-Jul-15.
 */
$(function(){
    $("#slide").mouseenter(function(){
        var div = $("#slide");
        div.animate({height: '500px', opacity: '0.4'}, "slow");
        div.animate({width: '850px', opacity: '0.8'}, "slow");
        div.animate({height: '200px', opacity: '0.4'}, "slow");
        div.animate({width: '800px', opacity: '0.8'}, "slow");
    });

    $("#addBtn").on("click", function(){
                var user_input = prompt("Please Enter Your Name");
                var user_inputQuantity = parseInt(prompt("Enter Quantity Item"));
                var mango_price = 100;
                var total_fruitprice = 0;
                total_fruitprice = mango_price*user_inputQuantity;
                $.ajax({

                        url : "/addNewProduct",
                        type : "post",
                        data : {
                            FruitName : user_input,
                            FQuantity : user_inputQuantity,
                            Total_FAmount : total_fruitprice
                        },
                        success : function(array){
                            alert("Work Done");
                            console.log(array);
                            if(array && array.length){
                                var html=" ";
                                for(var i = 0; i < array.length; i++){
                                     html +=array[i].FruitName ? ( "<br>" + "Fruit Name: "+array[i].FruitName+"<br>"+"Quantity: "+array[i].FQuantity+"<br>"+"ToTal Price: "+array[i].Total_FAmount) : " ";
                                }
                                document.getElementById('showDataFruit').innerHTML = html;


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
    $("#addBakeryBtn").on("click", function(){
                var user_input = prompt("Please Enter Your Name");
                var user_inputQuantity = parseInt(prompt("Enter Quantity Item"));
                var Bakeri_price = 100;
                var total_Bakeriprice = 0;
                total_Bakeriprice = Bakeri_price*user_inputQuantity;
                $.ajax({

                        url : "/addNewProduct",
                        type : "post",
                        data : {
                            BakeriName : user_input,
                            BQuantity : user_inputQuantity,
                            Total_BAmount : total_Bakeriprice
                        },
                        success : function(array){
                            alert("Work Done");
                            console.log(array);
                            if(array && array.length){
                                var html= "";
                                for(var i = 0; i < array.length; i++){

                                    html+= array[i].BakeriName?("<br>"+ "Bakeri Name: " + array[i].BakeriName+"<br>"+ "Quantity: "+array[i].BQuantity+"<br>"+ "Total Price: "+array[i].Total_BAmount):" ";
                                }
                                document.getElementById('showDatabakeri').innerHTML=html;

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
    $("#sportbtn").on("click", function(){
                var user_input = prompt("Please Enter Your Name");
                var user_inputQuantity = parseInt(prompt("Enter Quantity Item"));
                var sports_price = 100;
                var total_sportsprice = 0;
                total_sportsprice = sports_price*user_inputQuantity;
                $.ajax({

                        url : "/addNewProduct",
                        type : "post",
                        data : {

                            SportName : user_input,
                            SQuantity : user_inputQuantity,
                            Total_SAmount : total_sportsprice
                        },
                        success : function(array){
                            alert("Work Done");
                            console.log(array);
                            if(array && array.length){
                                var html = " ";
                                for(var i = 0; i < array.length; i++){
                                    html += array[i].SportName ?("<br>"+ "Sport Name: " + array[i].SportName+"<br>"+ "Quantity: "+array[i].SQuantity+"<br>"+ "TotalPrice: "+array[i].Total_SAmount):"";
                                }
                                document.getElementById('showDataSport').innerHTML = html;
                            }
                        },
                        error : function(){
                            alert("Error in sending data to server");
                        }
                    }

                );
        }
    );
    $("#ShowData").on("click", function () {
        $.ajax({
            url : '/getData',
            type : "get",
            success : function(array){
                alert("Work Done");
                //console.log(array)
                var html = " ";
                var html1 = " ";
                var html2=" ";
                if(array && array.length){
                   //   document.getElementById('showData').innerHTML += "<br>"+"Fruit List: "+"<br>" + array[0].FruitName+"<br>"+array[0].Total_FAmount+"<br>"+array[1].BakeriName+"<br>"+array[1].Total_BAmount;
                for(var i=0;i<array.length;i++){
                    html +=array[i].FruitName ? ( "<br>" + "Fruit Name: "+array[i].FruitName+"<br>"+"Quantity: "+array[i].FQuantity+"<br>"+"ToTal Price: "+array[i].Total_FAmount) : " ";
                    html1+= array[i].BakeriName?("<br>"+ "Bakeri Name: " + array[i].BakeriName+"<br>"+ "Quantity: "+array[i].BQuantity+"<br>"+ "Total Price: "+array[i].Total_BAmount):" ";
                    html2 += array[i].SportName ?("<br>"+ "Sport Name: " + array[i].SportName+"<br>"+ "Quantity: "+array[i].SQuantity+"<br>"+ "TotalPrice: "+array[i].Total_SAmount):"";
                }
                    document.getElementById('showData').innerHTML = html+html1+html2;
                }
            },
            error : function(){
                alert("Sorry");
            }

        })
    })
});