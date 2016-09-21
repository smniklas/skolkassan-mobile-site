"use strict"
const BackTop = {
    init:function(){
        var amountScrolled = 300;
        
        $(window).scroll(function() {
        	if ( $(window).scrollTop() > amountScrolled ) {
        		$('.back-top').fadeIn('slow');
        	} else {
        		$('.back-top').fadeOut('slow');
        	}
        });
        $('a.back-to-top').click(function() {
        	$('html, body').animate({
        		scrollTop: 0
        	}, 700);
        	return false;
        });
    }
}
document.onload = BackTop.init();