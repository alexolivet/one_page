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

    }, 782000); // timeout value


    //add value to textarea
    //only add value on first click
    var oldvalue;
    var newvalue;
    $(".buttons").one('click',function () {
        oldvalue = $(".textarea").val();  //GET THE VALUE OF TEXTBOX WHEN USER CLICKS
        if (oldvalue) {newvalue = ', '+$(this).html();} // IF THE TEXTBOX ISN'T BLANK, PLACE A COMMA BEFORE THE NEW VALUE
        else {newvalue = $(this).html();} //IF THE TEXTBOX IS BLANK, DON'T ADD A COMMA
        $(".textarea").val(oldvalue + newvalue + " \n"); //PLACE THE ORIGINAL AND NEW VALUES INTO THE TEXTBOX.
    });

        //clears the content of textarea
        //not best but good enough for now
        $(".clear").click(function(e) {
            e.preventDefault();
            $(".textarea").val('uItem');
        });

            //when button is clicked add item to list
            $("button").click(function(){
                var value=$(this).attr("value");
                if (typeof value === "undefined") { //disabling this button so it does not add but only remove item from the list
                //do nothing
            }
            else{
                $("ol").append("<li>"+ value + "<a href='javascript:void(0); 'onclick='decrementValue();' class='remove'>×</a></li>"); 
                $("#textarea_2").append("* "+value+ "\n"); 


            }
        });
           //remove item of choice
           $(document).on("click", "a.remove" , function(e) {
            $(this).parent().remove();
    var textVal = $('#textarea_2').val().split(' ');
    textVal.pop();
    $('#textarea_2').val(textVal.join(' '));
        });


           $('.Backspace').on('click', function () {
            values.pop();
            $('#textarea').val(values.join(" "));
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


function incrementValue()
{
    var amount = parseInt(document.getElementById('number').value);
    amount = isNaN(amount) ? 0 : amount;
    if(amount<15){
        amount++;
            document.getElementById('number').value = amount; //count input field
             document.getElementById('number_form').value = amount;//copy count to form


         }
     }
     function decrementValue()
     {
        var amountMinus = parseInt(document.getElementById('number').value);
        amountMinus = isNaN(amountMinus) ? 0 : amountMinus;
        if(amountMinus>=1){
            amountMinus--;
            document.getElementById('number').value = amountMinus;//count input field
             document.getElementById('number_form').value = amountMinus;//copy count to form
         }

     }



