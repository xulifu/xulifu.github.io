
var myDate = new Date();
var hour=myDate.getHours();
var min=myDate.getMinutes();


$(function() {
	$(".time").html(hour+":"+min);
    $(".pin").click(function(event) {
        $(this).children(".ops").toggle();
    });

    $(".like").click(function(event) {
     $(".ops").fadeOut();
    });

    $('[data-toggle="tooltip"]').tooltip();
    $('[data-toggle="popover"]').popover();

    $(".comment").click(function(event) {
        $(".ops").fadeOut();
    });

})
