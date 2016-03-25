function swiperAnimateCache() {
    for (allBoxes = window.document.documentElement.querySelectorAll(".ani"), i = 0; i < allBoxes.length; i++) allBoxes[i].attributes.style ? allBoxes[i].setAttribute("swiper-animate-style-cache", allBoxes[i].attributes.style.value) : allBoxes[i].setAttribute("swiper-animate-style-cache", " "), allBoxes[i].style.visibility = "hidden"
}

function swiperAnimate(e) {
    clearSwiperAnimate();
    var t = e.slides[e.activeIndex].querySelectorAll(".ani");
    for (i = 0; i < t.length; i++) t[i].style.visibility = "visible", effect = t[i].attributes["swiper-animate-effect"] ? t[i].attributes["swiper-animate-effect"].value : "", t[i].className = t[i].className + "  " + effect + " animated", style = t[i].attributes.style.value, duration = t[i].attributes["swiper-animate-duration"] ? t[i].attributes["swiper-animate-duration"].value : "", duration && (style = style + "animation-duration:" + duration + ";-webkit-animation-duration:" + duration + ";"), delay = t[i].attributes["swiper-animate-delay"] ? t[i].attributes["swiper-animate-delay"].value : "", delay && (style = style + "animation-delay:" + delay + ";-webkit-animation-delay:" + delay + ";"), t[i].setAttribute("style", style)
}

function clearSwiperAnimate() {
    for (allBoxes = window.document.documentElement.querySelectorAll(".ani"), i = 0; i < allBoxes.length; i++) allBoxes[i].attributes["swiper-animate-style-cache"] && allBoxes[i].setAttribute("style", allBoxes[i].attributes["swiper-animate-style-cache"].value), allBoxes[i].style.visibility = "hidden", allBoxes[i].className = allBoxes[i].className.replace("animated", " "), allBoxes[i].attributes["swiper-animate-effect"] && (effect = allBoxes[i].attributes["swiper-animate-effect"].value, allBoxes[i].className = allBoxes[i].className.replace(effect, " "))
}


$(function() {



    $("[data-toggle='tooltip']").tooltip();
    $("[data-toggle='popover']").popover();
    $("#infolist li").click(function(event) {
        /* Act on the event */
        var x = $("#infolist li").eq($(this).index()).text();
        $("#selectinfo").html(x + '&nbsp<span class="caret"></span>');
    });
    new Swiper(".top .swiper-container", {
        onInit: function(e) {
            swiperAnimateCache(e), swiperAnimate(e)
        },
        onSlideChangeEnd: function(e) {
            swiperAnimate(e)
        },
        onSetTransition: function() {},
        direction: "horizontal",
        autoplay: 2000,

        loop: true,
        pagination: '.swiper-pagination1',
        paginationClickable: true,

    });
    new Swiper(".newsslide .swiper-container", {
        onInit: function(e) {
            swiperAnimateCache(e), swiperAnimate(e)
        },
        onSlideChangeEnd: function(e) {
            swiperAnimate(e)
        },
        onSetTransition: function() {},
        direction: 'vertical',
        autoplay: 2000,

        effect: 'fade',
        fade: {
            crossFade: true,
        },
        loop: true,


    });

})
 