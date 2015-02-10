///////////  Adjusting height of first section (intro big image) according to device height //////////
///////////  Managing background color of main menu during scrolling //////////
(function() {
  	'use strict';

  	var scrollEventTriggered = false, // flag to throttle stream of scroll events
  		resizeEventTriggered = false, // flag to throttle stream of resize events
		menu = document.querySelector('.b-main-menu'), // this is main menu
		introPage = document.querySelector('body > header'), // <header> contains big image
		// emailLogo = document.querySelector('.b-main-menu__email > span'), // email logo in main menu
		availHeight, // available viewport height
		timerScrollEvent,
		timerResizeEvent;

	window.addEventListener('DOMContentLoaded', imageHandler, false);
	window.addEventListener('resize', imageHandler, false);
	window.addEventListener('scroll', menuHandler, false);

  	function imageHandler() { // adjusting height of first section (intro big image) according to device height
    	
    	if (resizeEventTriggered == false) {

    		resizeEventTriggered = true;
 
        	availHeight = window.innerHeight;
        	introPage.style.height = availHeight + 'px'; 
       
       		timerResizeEvent = setTimeout(function(){ // managing background color of main menu during scrolling
				resizeEventTriggered = false; 
				clearTimeout(timerResizeEvent);
			}, 100);
 		}
  	}

	function menuHandler() { // managing background color of main menu during scrolling

		if (scrollEventTriggered == false) {
	
			scrollEventTriggered = true;

			if (document.documentElement.scrollTop > 100 || window.scrollY > 100) {
				menu.style.background = 'rgba(255,255,255,.9)';
				menu.style.color = 'rgb(113,158,217)';
				menu.style.borderBottom = 'solid 2px rgb(113,158,217)';
				menu.style.transition = 'all .8s ease-in';
				// emailLogo.style.background = 'rgba(113,158,217,.2)';
				// emailLogo.style.transition = 'all 1.2s ease-in';
			}
			else {
				menu.style.background = 'rgba(255,255,255,.4)';
				menu.style.color = 'rgb(255,255,255)';
				menu.style.borderBottom = 'none';
				menu.style.transition = 'all .8s ease-in';
				// emailLogo.style.background = 'rgba(255,255,255,.5)';
				// emailLogo.style.transition = 'all 1.2s ease-in';
			}

			scrollEventTriggered = false; 
		}
	}
})(); 
/////////////////////////////////////////////////////////////////

///////////  Smooth scrolling effect //////////
$(document).ready(function(){
  	'use strict';
  	$('a[href*=#]').click(function() {
    	if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      		var $target = $(this.hash);
      		$target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');
	      	if ($target.length) {
	        	var targetOffset = $target.offset().top;
	        	$('html,body').animate({scrollTop: targetOffset}, 700);
	        	return false;
	      	}
    	}
  	});
});
/////////////////////////////////////////////////////////////////

/////  Additional effects while hovering over portfolio items  /////
$(document).ready(function() {
	'use strict';
 	$(".b-itemContainer").mouseover(function() {
    	$(this).find(".b-itemContainer__details").css("border", "solid 1px rgb(255, 255, 255)");
    });
    $(".b-itemContainer").mouseout(function() {
        $(this).find(".b-itemContainer__details").css("border", "solid 1px rgba(113, 158, 217, .3)");
    });
});
/////////////////////////////////////////////////////////////////
