  /*$(document).ready(function(){


  //用一個function包住同樣的程式碼 =>重構

  
  var currentText = "";

  $("#btn0").on("click",function() {
     alert("1qsdwqwdqwef");
  });


  }*/
  //$("message").text()

$(document).ready(function(){

  var currentText = "";
  var consult = 0;
  var operator = 0;

  $("")

  $("button.btnnum").each(function(){

    $(this).click(function(){

      if(currentText != 0){
        currentText += $(this).attr('id');
        $("#result").text(currentText);

      }else{
        currentText = $(this).attr('id');
        $("#result").text(currentText);
      }


      if(operator == 5){
        consult = 0;
        operator = 0;
      }

    });
  });

  $("#btnc").on("click",function(){
    clearUp();
    //$("#result").text(0);
  });

  $("#btnac").on("click",function(){
    operator = 0;
    consult = 0;
    clearUp();
    $("#result").text(consult);
  });

  $("#btnadd").on("click",function(){
    caculate(operator);
    operator = 1;
  });
  

  $("#btnsub").on("click",function(){
    caculate(operator);
    operator = 2;
  });  

  $("#btnmul").on("click",function(){
    caculate(operator);
    operator = 3;
  });  

  $("#btndiv").on("click",function(){
    caculate(operator);
    operator = 4;
  });  


  $("#btneql").on("click",function(){

    caculate(operator);
    $("#result").text(consult);
    operator = 5;

  });

  function caculate(ope){

      var tmp;
      //判斷輸入數字
      if(currentText != ""){
          tmp = parseInt(currentText);
      }else{
        tmp = 0;
      }



      switch(ope){

          case 0:
            //alert($(this).attr('id'));

            /*switch($(this).attr('id')){
                case "btnadd":
                  operator = 1;
                  break;
                case "btnsub":
                  operator = 2;
                  break;
                case "btnmul":
                  operator = 3;
                  break;
                case "btndiv":
                  operator = 4;
                  break;
                alert("operatorchange:"+operator);
            }*/

            consult = tmp;

            

            //alert("first:"+consult);

            break;
            
          case 1:
            consult += tmp;
            //alert("addconsult:"+consult);
            
            break;

          case 2:
            consult -= tmp;
            //alert("subconsult:"+consult);
            
            break;

          case 3:
            consult *= tmp;
            break;

          case 4:
            consult /= tmp;
            break;

          case 5:
            //alert("hi");
            break;

          default:
            break;
          }

        clearUp();  
    
  }


  function clearUp(){
    currentText = "";
    $("#result").text(currentText);
  }
  /*鍵盤輸入
   $(document).keydown(function(e){
         $("#txtboxToFilter").keydown(function (e) {
        // Allow: backspace, delete, tab, escape, enter and .
        if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
             // Allow: Ctrl+A
            (e.keyCode == 65 && e.ctrlKey === true) || 
             // Allow: home, end, left, right
            (e.keyCode >= 35 && e.keyCode <= 39)) {
                 // let it happen, don't do anything
                 return;
        }
        // Ensure that it is a number and stop the keypress
        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
            e.preventDefault();
        }
        });
    });
    */
 


});
