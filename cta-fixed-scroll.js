jQuery(window).scroll(function(){
	function ctaScroll(startTag, endTag){
		let viewport25 = jQuery(window).height() * 0.25,
			startTagTop = jQuery(startTag).offset().top +  jQuery(startTag).height(),
			endTagTop = jQuery(endTag).offset().top - viewport25;
		
		if( jQuery(this).scrollTop() >= startTagTop  ) { 
			jQuery('.fixed-scroll').addClass('active');
		}else{
			jQuery('.fixed-scroll').removeClass('active');
		}
		
		if( jQuery(this).scrollTop() >= endTagTop ) {
			jQuery('.fixed-scroll').removeClass('active'); 
		}
	}
	
	ctaScroll('.start-to-scroll', '#form-sec'); //page 4299
	
});