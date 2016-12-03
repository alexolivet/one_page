/* ***************************
  Enable Smooth Scrolling
  Author: Chris Coyier
  URL:  CSS-Tricks.com
  ***************************** */

$(document).ready(function() {	//start document ready

	$('a[href*=#]:not([href=#]):not([href=#show]):not([href=#hide])').click(function() {
		if ($(window).width() < 768) {
			$('#mainPage').removeClass('open');
			setTimeout(function(){$('#mainPage').removeClass('visible');}, 250);
			open = 0;
		}
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				$('html,body').animate({
					scrollTop: target.offset().top
				}, 1000);
				return false;
			}
		}
	});


}); //end document ready


//open - close menu
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}
