/* ***************************
  Enable Smooth Scrolling
  Author: Chris Coyier
  URL:  CSS-Tricks.com
  ***************************** */
$(document).ready(function() { //start document ready

    //start easy scrolling
    $('a[href*=#]:not([href=#]):not([href=#show]):not([href=#hide])').click(function() {
        if ($(window).width() < 768) {
            $('#mainPage').removeClass('open');
            setTimeout(function() {
                $('#mainPage').removeClass('visible');
            }, 250);
            open = 0;
        }
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    }); //end easy scrolling


    setTimeout(function() { // start timeout for modal 

        //modal starts here
        var id = '#dialog';

        //Get the screen height and width
        var maskHeight = $(document).height();
        var maskWidth = $(window).width();

        //Set heigth and width to mask to fill up the whole screen
        $('#mask').css({
            'width': maskWidth,
            'height': maskHeight
        });

        //transition effect		
        $('#mask').fadeIn(1000);
        $('#mask').fadeTo("slow", 0.9);

    //Get the window height and width
    var winH = $(window).height();
    var winW = $(window).width();

        //Set the popup window to center
        $(id).css('top', winH / 3 - $(id).height() / 2);
        $(id).css('left', winW / 2 - $(id).width() / 2);

        //transition effect
        $(id).fadeIn(2000);

        //if close button is clicked
        $('.window .close').click(function(e) {
            //Cancel the link behavior
            e.preventDefault();

            $('#mask').hide();
            $('.window').hide();
        });

        //if mask is clicked
        $('#mask').click(function() {
            $(this).hide();
            $('.window').hide();
        }); //end modal window

    }, 2000); // timeout value


    //add value to textarea
  var oldvalue;
    var newvalue;
    $(".buttons").click(function () {
        oldvalue = $(".textarea").val();  //GET THE VALUE OF TEXTBOX WHEN USER CLICKS
        if (oldvalue) {newvalue = ', '+$(this).html();} // IF THE TEXTBOX ISN'T BLANK, PLACE A COMMA BEFORE THE NEW VALUE
        else {newvalue = $(this).html();} //IF THE TEXTBOX IS BLANK, DON'T ADD A COMMA
        $(".textarea").val(oldvalue + newvalue + " \n"); //PLACE THE ORIGINAL AND NEW VALUES INTO THE TEXTBOX.
    });

        //clears the content of textarea
        //not best but good enough for now
        $(".clear").click(function(e) {
        e.preventDefault();
        $(".textarea").val('');
    });

}); //end document ready




//open - close slide menu
//the desired width can be changed here
function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
}
//open - close slide menu
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}




