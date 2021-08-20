//console.log('Ool global is here');
var OOL = {};
var d = document;
var $;

// Ready, go
jQuery(d).ready(function () {
    $ = jQuery; // if you need
	OOL.gformPostRender();
    //console.log('Document is ready, jquery is present');
    //OOL.exemple_function(); // call to a function, see below
});


OOL.gformPostRender = function(){
	$(d).bind('gform_post_render', function(event, form_id, current_page){
		
		//Auto next slide for radio
		$('.gfnext input[type="radio"]').click(function(){
			if($(this).prop('checked')){
				$(this).parents('.gform_page').find('.gform_next_button').click();
			}
		});
	
		//for Dynamic form pages with elementor front gform-page
		const gfPageElementor = function(id){
			if(id != form_id){ return; } //return if not the form ID
			if(!$('.gform_wrapper').parents('.elementor-inner-section').hasClass('gfpage-elementor')){ return; } //return if class is missing
			
			$('#gfp1-btn').click(function(){
				$('.gfp1').hide();
				$('.gfp2').fadeIn('slow').removeClass('hide');
				$('.gform_page:first-child .gform_page_footer').prepend('<input type="button" id="gfp2-retour" class="gform_previous_button button" value="RETOUR">');
			});
		};
		gfPageElementor(2);
		
	});
};