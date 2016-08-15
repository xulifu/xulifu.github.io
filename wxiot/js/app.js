 $(function() {
     $("#cal").click(function(event) {
         /* Act on the event */
         var optionmoney = $("#money option:selected").index() - 1; //获取选中的项
         var optionamount = $("#amount option:selected").index() - 1; //获取选中的项
         var optionyear = $("#year option:selected").index() - 1; //获取选中的项

         var money = 0;
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

         var amount = 0;
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

         var year = 0;
         switch (optionyear) {
             case 0:
                 year = 5;
                 break;
             case 1:
                 year = 10;
                 break;
         }

         console.log(money);
         console.log(amount);
         console.log(year);

         var discount=0;
         discount=money-amount-year;



$("#discount").text(discount+"%");






     });


$("#reset").click(function(event) {
	/* Act on the event */
	$("#discount").text("NaN");
	   console.log("Reset complete");
});








 })
