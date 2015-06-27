
$( document ).ready(function() {
 
 $("#skittles").on('click', function() {
 	var message ="Wild Berry"
    $("#skittles").append(" " + message + ", of course!")

 })

 $("#jimcarrey").on('click', function () {
 	var response ="Spy shot of me frantically coding to finish this project last night."
	$("#jimcarrey").text(response) 
 })

// change background color//

var colorOrig=$(".listborder").css('background-color');
    $(".listborder").hover(function() {
        $(this).css("background", "#DED1B3")}, 
        function() {
        $(this).css("background", colorOrig)
    });
})




