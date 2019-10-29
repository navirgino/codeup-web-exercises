"use strict";

$(document).ready(function () {
        //jQuery Docs ==> https://api.jquery.com/

        /**********************************************
         *        ** General Selector Syntax **
         *********************************************/
        //$('selector');


        /**********************************************
         *            ** jQuery Methods **
         *********************************************/

        // .html: returns the HTML contents of selected element or the first element in a collection. Similar to the innerHTML property we previously covered.
        // .css: allows us to change CSS properties for a given element or elements. Similar to the style property previously discussed.


        /**********************************************
         *            ** ID Selector **
         *********************************************/
            // $('#some-id');

            // TODO TOGETHER: Select the contents/html of the id 'book-welcome' and set equal to the variable 'contents'. Console.log the contents
        var contents = $("#book-welcome").html();
        console.log(contents);


        // TODO TOGETHER: Change the background color of the id 'book-welcome'
        $("#book-welcome").css({'background-color': 'green', 'color': 'white'});

        // TODO: Select the contents/html of the id 'book-bundle-one' and set equal to the variable 'bookBundle'. Console.log the contents
        var bookBundle = $("#book-bundle-one").html();
        console.log(bookBundle);

        // TODO: Change one css property of the id 'container'
        $("#container").css({"font-size": "20px", "background-color": "gold", "box-shadow": "10px 10px 15px green"});


        /**********************************************
         *            ** CLASS Selector **
         *********************************************/
        // $('.some-class');

        // TODO TOGETHER: Change the font size of all the .main-headings
        $(".main-headings").css('font-size', '40px');


        // TODO: Explore the following JS Bin example:
        //  https://jsbin.com/topupe/1/edit?js,output

        // TODO BONUS: Add additional class names to the page, and practice changing the css or viewing the contents


        /**********************************************
         *            ** ELEMENT Selector **
         *********************************************/
        //	$('tag_name')

        // TODO TOGETHER: Change the background color of all paragraph tags
		$("p").css({"background-color" : "green", "color" : "white"});

        // TODO: Explore the following JS Bin example:
        //  https://jsbin.com/gayir/1/edit?js,output


        // TODO BONUS: Add additional elements to the page, and practice changing the css or viewing the contents
        //function that creates dream
        function dream(){
                //calculating random color of dream
                var color = 'rgb('+Math.floor(Math.random()*255)+','+Math.floor(Math.random()*255)+','+Math.floor(Math.random()*255)+')';

                //calculating random X position
                var x = Math.floor(Math.random()*$(window).width());

                //calculating random Y position
                var y = Math.floor(Math.random()*$(window).height());

                //creating the dream and hide
                var drawingpix = $('<span>').attr({class: 'drawingpix'}).hide();

                //appending it to body
                $(document.body).append(drawingpix);

                //styling dream.. filling colors.. positioning.. showing.. growing..fading
                drawingpix.css({
                        'background-color':color,
                        'border-radius':'100px',
                        '-moz-border-radius': '100px',
                        '-webkit-border-radius': '100px',
                        top: y-14,    //offsets
                        left: x-14 //offsets
                }).show().animate({
                        height:'200px',
                        width:'200px',
                        'border-radius':'500px',
                        '-moz-border-radius': '500px',
                        '-webkit-border-radius': '500px',
                        opacity: 0.1,
                        top: y-250,    //offsets
                        left: x-250
                }, 3000).fadeOut(2000);

                //Every dream's end starts a new dream
                window.setTimeout('dream()',200);
        }

        $(document).ready(function() {
                //calling the first dream

        });
        // dream();


        /**********************************************
         *            ** MULTIPLE Selector **
         *********************************************/
        // $("selector1, selector2, ...")


        // TODO TOGETHER: Change the background color of id 'mystery-genre' and 'book-bundle-three' to red
        $('mystery-genre, #book-bundle-three').css('background-color', 'white');

        // TODO: Explore the following JS Bin example:
        //  https://jsbin.com/qejeli/1/edit?output


        // TODO BONUS: Add additional elements to the page with ids and classes,
        //  and practice changing the css or viewing the contents
        $('romance-genre, #book-bundle-one').css('background-color', 'white');


        /**********************************************
         *            ** THE ALL Selector **
         *********************************************/
        // $('*')
        // A common use is to put a border around every element to help see the layout of a page.

        // TODO TOGETHER: Create a border around all elements
        $('*').css({'border' : '1px solid white', 'padding' : '50px'});
        // $('header').click(function(){
        //         var header = $(this);
        //         //getting the next element
        //         var content = header.next();
        //         //open up the content needed - toggle the slide- if visible, slide up, if not slidedown.
        //         content.slideToggle(500, function () {
        //                 //execute this after slideToggle is done
        //                 //change text of header based on visibility of content div
        //                 header.text(function () {
        //                         //change text based on condition
        //                         return content.is(":visible") ? "Collapse" : "Expand";
        //                 });
        //         });
        //
        // });

        // TODO: Explore the following JS Bin example:
        //  https://jsbin.com/fivucu/1/edit?js,output


    }
);