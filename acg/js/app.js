$(function() {

    var day = 0;
    $.getJSON('json_daily.php', function(json_daily) {
        $("#localdata").append('<p class=text-center>helixdna最后更新的福利' + json_daily.data[0].mon + json_daily.data[0].day + '</p>')
        $("#shownow").append('<p class=text-center>当前页面显示的福利' + json_daily.data[day].mon + json_daily.data[day].day + '</p>')
            /*optional stuff to do after success */
        for (var x = 0; x < json_daily.data[day].imgs.length; x++) {
            $("#todaypic").append('<div class="col-md-4 col-xs-6"><img class="center-block img-responsive" src=http://acg.sugling.in/_uploadfiles/iphone5/640/' + json_daily.data[day].imgs[x] + '></div>')
            // if (x % 10 == 0) {
            //     $("#todaylink").append('<br><br>')
            // }
            // $("#todaylink").append('<p class="text-center">http://acg.sugling.in/_uploadfiles/iphone5/640/' + json_daily.data[day].imgs[x] + '</p>')
        }
        $("#todaylink").append('<h2 class=text-center>总计' + json_daily.data[day].imgs.length + '张</h2>')
    });
$("#go").click(function(event) {
	/* Act on the event */
if($("#counting").val()>=0){
	day=$("#counting").val();
}
    $.getJSON('json_daily.php', function(json_daily) {

        $("#shownow").html('<p class=text-center>当前显示的福利' + json_daily.data[day].mon + json_daily.data[day].day + '</p>')
            /*optional stuff to do after success */
             $("#todaypic").html("");
               $("#todaylink").html("");
        for (var x = 0; x < json_daily.data[day].imgs.length; x++) {
            $("#todaypic").append('<div class="col-md-4 col-xs-6"><img class="center-block img-responsive" src=http://acg.sugling.in/_uploadfiles/iphone5/640/' + json_daily.data[day].imgs[x] + '></div>')
            // if (x % 10 == 0) {
            //     $("#todaylink").append('<br><br>')
            // }
            // $("#todaylink").append('<p class="text-center">http://acg.sugling.in/_uploadfiles/iphone5/640/' + json_daily.data[day].imgs[x] + '</p>')
        }
        $("#todaylink").append('<h2 class=text-center>总计' + json_daily.data[day].imgs.length + '张</h2>')
    });




});

 
$("#next").click(function(event) {
    /* Act on the event */
if($("#counting").val()>=0){
    day=$("#counting").val();
    day++;
    $("#counting").val(day);
}
if($("#counting").val()<0){
    day=0;
    $("#counting").val(day);
}
    $.getJSON('json_daily.php', function(json_daily) {

        $("#shownow").html('<p class=text-center>当前显示的福利' + json_daily.data[day].mon + json_daily.data[day].day + '</p>')
            /*optional stuff to do after success */
             $("#todaypic").html("");
               $("#todaylink").html("");
        for (var x = 0; x < json_daily.data[day].imgs.length; x++) {
            $("#todaypic").append('<div class="col-md-4 col-xs-6"><img class="center-block img-responsive" src=http://acg.sugling.in/_uploadfiles/iphone5/640/' + json_daily.data[day].imgs[x] + '></div>')
            // if (x % 10 == 0) {
            //     $("#todaylink").append('<br><br>')
            // }
            // $("#todaylink").append('<p class="text-center">http://acg.sugling.in/_uploadfiles/iphone5/640/' + json_daily.data[day].imgs[x] + '</p>')
        }
        $("#todaylink").append('<h2 class=text-center>总计' + json_daily.data[day].imgs.length + '张</h2>')
    });




});


$("#pre").click(function(event) {
    /* Act on the event */
if($("#counting").val()>=0){
    day=$("#counting").val();
    day--;
    $("#counting").val(day);
}
if($("#counting").val()<0){
    day=0;
	 $("#counting").val(day);
}
    $.getJSON('json_daily.php', function(json_daily) {

        $("#shownow").html('<p class=text-center>当前显示的福利' + json_daily.data[day].mon + json_daily.data[day].day + '</p>')
            /*optional stuff to do after success */
             $("#todaypic").html("");
               $("#todaylink").html("");
        for (var x = 0; x < json_daily.data[day].imgs.length; x++) {
            $("#todaypic").append('<div class="col-md-4 col-xs-6"><img class="center-block img-responsive" src=http://acg.sugling.in/_uploadfiles/iphone5/640/' + json_daily.data[day].imgs[x] + '></div>')
            // if (x % 10 == 0) {
            //     $("#todaylink").append('<br><br>')
            // }
            // $("#todaylink").append('<p class="text-center">http://acg.sugling.in/_uploadfiles/iphone5/640/' + json_daily.data[day].imgs[x] + '</p>')
        }
        $("#todaylink").append('<h2 class=text-center>总计' + json_daily.data[day].imgs.length + '张</h2>')
    });




});














})
