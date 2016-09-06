 $(function() {
     $("#cal").click(function(event) {
         /* Act on the event */
         var optionlevel = $("#level option:selected").index() - 1; //获取选中的项
         var optionmoney = $("#money option:selected").index() - 1; //获取选中的项
         var optionamount = $("#amount option:selected").index() - 1; //获取选中的项
         var optionyear = $("#year option:selected").index() - 1; //获取选中的项
         var level = 0;
         var money = 0;
         var amount = 0;
         var year = 0;
         switch (optionlevel) {
             case 0:
                 switch (optionmoney) {
                     case 0:
                         money = 80;
                         break;
                     case 1:
                         money = 70;
                         break;
                     case 2:
                         money = 60;
                         break;
                     case 3:
                         money = 55;
                         break;
                     case 4:
                         money = 50;
                         break;
                 }
                 break;
             case 1:
                 switch (optionmoney) {
                     case 0:
                         money = 70;
                         break;
                     case 1:
                         money = 60;
                         break;
                     case 2:
                         money = 55;
                         break;
                     case 3:
                         money = 50;
                         break;
                     case 4:
                         money = 45;
                         break;
                 }
                 break;
         }








         switch (optionamount) {
             case 0:
                 amount = 3;
                 break;
             case 1:
                 amount = 5;
                 break;
             case 2:
                 amount = 10;
                 break;
         }

         switch (optionyear) {
             case 0:
                 year = 5;
                 break;
             case 1:
                 year = 10;
                 break;
         }
         console.log(level);
         console.log(money);
         console.log(amount);
         console.log(year);

         var discount = 0;
         discount = money - amount - year;



         $("#discount").text(discount + "%");






     });


     $("#reset").click(function(event) {
         /* Act on the event */
         $("#discount").text("NaN");
         console.log("Reset complete");
     });








 })
