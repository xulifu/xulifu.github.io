$(function() {

    $.getJSON('json_list.php', function(json_list) {
        /*optional stuff to do after success */
        for (var i = 0; i < json_list.length; i++) {
            $("#todayhot").append('<div class="col-md-4 col-xs-6"><img class="center-block img-responsive" src=http://beauty.sugling.in/_uploadfiles/iphone5/640/' + json_list[i] + '></div>')

            if (i % 10 == 0) {
                $("#hotlink").append('<br><br>')
            }
            $("#hotlink").append('<p class="text-center">http://beauty.sugling.in/_uploadfiles/iphone5/640/' + json_list[i] + '</p>')
        }
        $("#hotlink").append('<br>' + json_list.length + '<br>')


    });
    var day = 0;
    $.getJSON('json_daily.php', function(json_daily) {
        $("#localdata").append('<p class=text-center>helixdna最后更新的福利' + json_daily.data[0].mon + json_daily.data[0].day + '</p>')
        $("#shownow").append('<p class=text-center>当前页面显示的福利' + json_daily.data[day].mon + json_daily.data[day].day + '</p>')
            /*optional stuff to do after success */
        for (var x = 0; x < json_daily.data[day].imgs.length; x++) {
            $("#todaypic").append('<div class="col-md-4 col-xs-6"><img class="center-block img-responsive" src=http://beauty.sugling.in/_uploadfiles/iphone5/640/' + json_daily.data[day].imgs[x] + '></div>')
            // if (x % 10 == 0) {
            //     $("#todaylink").append('<br><br>')
            // }
            // $("#todaylink").append('<p class="text-center">http://beauty.sugling.in/_uploadfiles/iphone5/640/' + json_daily.data[day].imgs[x] + '</p>')
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
            $("#todaypic").append('<div class="col-md-4 col-xs-6"><img class="center-block img-responsive" src=http://beauty.sugling.in/_uploadfiles/iphone5/640/' + json_daily.data[day].imgs[x] + '></div>')
            // if (x % 10 == 0) {
            //     $("#todaylink").append('<br><br>')
            // }
            // $("#todaylink").append('<p class="text-center">http://beauty.sugling.in/_uploadfiles/iphone5/640/' + json_daily.data[day].imgs[x] + '</p>')
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
            $("#todaypic").append('<div class="col-md-4 col-xs-6"><img class="center-block img-responsive" src=http://beauty.sugling.in/_uploadfiles/iphone5/640/' + json_daily.data[day].imgs[x] + '></div>')
            // if (x % 10 == 0) {
            //     $("#todaylink").append('<br><br>')
            // }
            // $("#todaylink").append('<p class="text-center">http://beauty.sugling.in/_uploadfiles/iphone5/640/' + json_daily.data[day].imgs[x] + '</p>')
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
            $("#todaypic").append('<div class="col-md-4 col-xs-6"><img class="center-block img-responsive" src=http://beauty.sugling.in/_uploadfiles/iphone5/640/' + json_daily.data[day].imgs[x] + '></div>')
            // if (x % 10 == 0) {
            //     $("#todaylink").append('<br><br>')
            // }
            // $("#todaylink").append('<p class="text-center">http://beauty.sugling.in/_uploadfiles/iphone5/640/' + json_daily.data[day].imgs[x] + '</p>')
        }
        $("#todaylink").append('<h2 class=text-center>总计' + json_daily.data[day].imgs.length + '张</h2>')
    });




});














})
