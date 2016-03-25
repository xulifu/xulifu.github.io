 function swiperAnimateCache() {
     for (allBoxes = window.document.documentElement.querySelectorAll(".ani"), i = 0; i < allBoxes.length; i++) allBoxes[i].attributes["style"] ? allBoxes[i].setAttribute("swiper-animate-style-cache", allBoxes[i].attributes["style"].value) : allBoxes[i].setAttribute("swiper-animate-style-cache", " "), allBoxes[i].style.visibility = "hidden"
 }

 function swiperAnimate(a) {
     clearSwiperAnimate();
     var b = a.slides[a.activeIndex].querySelectorAll(".ani");
     for (i = 0; i < b.length; i++) b[i].style.visibility = "visible", effect = b[i].attributes["swiper-animate-effect"] ? b[i].attributes["swiper-animate-effect"].value : "", b[i].className = b[i].className + "  " + effect + " " + "animated", style = b[i].attributes["style"].value, duration = b[i].attributes["swiper-animate-duration"] ? b[i].attributes["swiper-animate-duration"].value : "", duration && (style = style + "animation-duration:" + duration + ";-webkit-animation-duration:" + duration + ";"), delay = b[i].attributes["swiper-animate-delay"] ? b[i].attributes["swiper-animate-delay"].value : "", delay && (style = style + "animation-delay:" + delay + ";-webkit-animation-delay:" + delay + ";"), b[i].setAttribute("style", style)
 }

 function clearSwiperAnimate() {
     for (allBoxes = window.document.documentElement.querySelectorAll(".ani"), i = 0; i < allBoxes.length; i++) allBoxes[i].attributes["swiper-animate-style-cache"] && allBoxes[i].setAttribute("style", allBoxes[i].attributes["swiper-animate-style-cache"].value), allBoxes[i].style.visibility = "hidden", allBoxes[i].className = allBoxes[i].className.replace("animated", " "), allBoxes[i].attributes["swiper-animate-effect"] && (effect = allBoxes[i].attributes["swiper-animate-effect"].value, allBoxes[i].className = allBoxes[i].className.replace(effect, " "))
 }



 $(function() {
         var mySwiper = new Swiper('.swiper-container', {
             onInit: function(swiper) { //Swiper2.x的初始化是onFirstInit
                 swiperAnimateCache(swiper); //隐藏动画元素 
                 swiperAnimate(swiper); //初始化完成开始动画
             },
             onSlideChangeEnd: function(swiper) {
                 swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
             },
             direction: 'vertical',
             mousewheelControl: true,
             onSetTransition: function(swiper, transiton) {
                 //自定义事件
             }
         });
         mySwiper.enableKeyboardControl(); //开启键盘控制

         mySwiper.enableMousewheelControl();





         $('.player1,.player2').on({
             touchstart: function() {

             },
             touchend: function() {

             },
             click: function() {
                 /* Stuff to do when the mouse enters the element */
                 //$(this).toggleClass('stop');
                 var x = "";
                 var random = Math.round(Math.random()*15);
                 switch (random) {
                     case 0:
                         x = "爱我，你怕了吗？";
                         break;
                     case 1:
                         x = "我的内心几乎是崩溃的！";
                         break;
                     case 2:
                         x = "重启SpringBoard";
                         break;
                     case 3:
                         x = "年轻人，你的思想很危险啊！";
                         break;
                     case 4:
                         x = "精神污染成功！";
                         break;
                     case 5:
                         x = "听说放学以后，有人要打我？";
                         break;
                     case 6:
                         x = "有种放学别走！";
                         break;
                     case 7:
                         x = "警察叔叔，就是这个人！";
                         break;
                     case 8:
                         x = "中国江苏省无锡市";
                         break;
                     case 9:
                         x = "有什么新鲜事想告诉大家？";
                         break;
                     case 10:
                         x = "我只是一个不明真相的围观群众。";
                         break;
                          case 11:
                         x = "吓得我辣条都掉地上了！";
                         break;
                          case 12:
                         x = "给我来瓶82年的果粒橙。";
                         break;
                          case 13:
                         x = "用挖掘机炒菜哪家强？";
                         break;
                          case 14:
                         x = "我的心好累。";
                         break;
                          case 15:
                         x = "你愿意和我一起建设社会主义吗？";
                         break;
                 }
                 notie.alert(1, x, 2);
             }
         });





         $('#email').on({
             touchstart: function() {

             },
             touchend: function() {

             },
             click: function() {
                 /* Stuff to do when the mouse enters the element */

                 notie.alert(4, '来一封邮件试一试<br>helixdna@vip.qq.com', 2);
             }
         });

         $('#telephone').on({
             touchstart: function() {

             },
             touchend: function() {

             },
             click: function() {
                 /* Stuff to do when the mouse enters the element */

                 notie.alert(4, '来一发电话试一试<br>156-0151-5022', 2);
             }
         });



         $('#wechat').on({
             touchstart: function() {

             },
             touchend: function() {

             },
             click: function() {
                 /* Stuff to do when the mouse enters the element */

                 notie.alert(4, '搜索微信号:helixdna', 2);
             }
         });
















     })
     //本插件由www.swiper.com.cn提供
