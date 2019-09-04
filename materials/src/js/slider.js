// JavaScript Document
$ (function() {
	
	$('.menuToggle') .on('click', function(){
		
		$('.menu') .slideToggle(300, function(){
			
			if($(this).css('display')==='none'){
				$(this).removeAttr('style');
			}
			
		});
		
	});
	
});





//слайдер на всех страницах//
 // You can also use "$(window).load(function() {"
    $(function () {
      // Slideshow 1
      $("#slider1").responsiveSlides({
        maxwidth: 1200,
        speed: 1200,
      });
	  });
	 
	 
/***********/
 //слайдер на ForSale//
 // You can also use /
  "$(window).load(function() {"
    $(function () {
      // Slideshow 1
      $("#slider2").responsiveSlides({
        maxwidth: 800,
        speed: 1200,
      });
	  });

/**********/
	  
//Подсветить активный пункт меню или ссылку//
onload = function ()
{
for (var lnk = document.links, j = 0; j < lnk.length; j++)
if (lnk [j].href == document.URL) lnk [j].style.cssText = '#defa11 inset; background-color: rgba(236,166,98,0.80); border-radius: 8px; border: rgba(227,128,31,1.00) 1px solid; color: rgba(255,255,255,1.00);';
}
//Кнопка вверх на всех страницах
$(document).ready(function(){
 
$(window).scroll(function(){
if ($(this).scrollTop() > 600) {
$('.scrollup').fadeIn();
} else {
$('.scrollup').fadeOut();
}
}); 
$('.scrollup').click(function(){
$("html, body").animate({ scrollTop: 0 }, 500);
return false;
});
});
// кнопки в подвале
var _tmr = _tmr || [];
_tmr.push({id: "2652373",  type: "pageView", start: (new Date()).getTime()});
(function (d, w) {
   var ts = d.createElement("script"); ts.type = "text/javascript"; ts.async = true;
   ts.src = (d.location.protocol == "https:" ? "https:" : "http:") + "//top-fwz1.mail.ru/js/code.js";
   var f = function () {var s = d.getElementsByTagName("script")[0]; s.parentNode.insertBefore(ts, s);};
   if (w.opera == "[object Opera]") { d.addEventListener("DOMContentLoaded", f, false); } else { f(); }
})(document, window);
(function (d, w, c) {
    (w[c] = w[c] || []).push(function() {
        try {
            w.yaCounter30119029 = new Ya.Metrika({id:30119029,
                    clickmap:true,
                    trackLinks:true,
                    accurateTrackBounce:true});
        } catch(e) { }
    });

    var n = d.getElementsByTagName("script")[0],
        s = d.createElement("script"),
        f = function () { n.parentNode.insertBefore(s, n); };
    s.type = "text/javascript";
    s.async = true;
    s.src = (d.location.protocol == "https:" ? "https:" : "http:") + "//mc.yandex.ru/metrika/watch.js";

    if (w.opera == "[object Opera]") {
        d.addEventListener("DOMContentLoaded", f, false);
    } else { f(); }
})(document, window, "yandex_metrika_callbacks");

onload = function ()
{
for (var lnk = document.links, j = 0; j < lnk.length; j++)
if (lnk [j].href == document.URL) lnk [j].style.cssText = '#defa11 inset; border-radius: 6px; color:#FAA21A;';
}
/****Меню для моб версии
		$(function() {
			var pull 		= $('#pull');
				menu 		= $('.topMenu ul');
				menuHeight	= menu.height();

			$(pull).on('click', function(e) {
				e.preventDefault();
				menu.slideToggle();
			});

			$(window).resize(function(){
        		var w = $(window).width();
        		if(w > 320 && menu.is(':hidden')) {
        			menu.removeAttr('style');
        		}
    		});
		});
		
*/
