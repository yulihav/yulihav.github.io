function start() {

	var elementPosition = $('#header_nav').offset();

	$(window).scroll(function() {
		if ($(window).scrollTop() > elementPosition.top) {
			$('#header_nav').css('position', 'fixed').css('top', '0');
		} else {
			$('#header_nav').css('position','relative');
		}
	});

	$(window).scroll(function(){
		$("#header_pic").css("opacity", 1 - $(window).scrollTop() / 1550);
	}); 

}

window.onload = start;