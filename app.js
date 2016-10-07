/*(function (){

	console.log("salut");


	function color() {
		var buttons = $(".color");
		buttons.css("background",$(this).data("color"));

	});
};
*/
$('input').css('background',function(){
	return $(this).data('color');
});

$('input').on("click", function() {
	var backColor = $(this).data('color');
	
	if($("#modify-texte").is(':checked')){
		$('.main').css('color', backColor);
	} else {
		$('body').css('background', backColor);

	}


});






