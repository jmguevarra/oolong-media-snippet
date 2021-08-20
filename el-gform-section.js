/**
 * 
 * Title: Gravity Form Elementor Section
 * Description: This Snippet is for Elementor Section with Old Gravity Form used in oolong client sites. https://oolongmedia.ca/
 * Date Updated: 08-20-21
 * 
 */


jQuery(document).bind('gform_post_render', function(){

    /**
     * Create Button in Elementor add class on it " gfp2-btn ".
     * gfp1 is for elementor modules that serves as first page of Multi Page form
     * Classes for Elementor modules 2nd page: "gfp2 gf-page2 hide". The hide class must addd in Css display none.
     */
    jQuery('.gfp2-btn .elementor-button').click(function(e){  //This is only when AJAX is enabled move it in ready function or load function. not in 'gform post render'
		e.preventDefault(); //preventing default event
		
		jQuery('.gfp1').hide(); //add elementor modules for alternative first page of the Multi Form Page
		jQuery('.gfp2').fadeIn('slow').removeClass('hide'); //It show Elementor section with Gravity Form module.

		if( jQuery('.gfp2').hasClass('gf-page2') ){ //This will triger to skip the first default form page of gravity form in old oolong Forms
			jQuery('.gf-page2 .gform_page:first-child .gform_next_button').click();
		}

	});
	
	jQuery('.gf-page2 .gform_page:nth-child(2) .gform_previous_button').click(function(e){ // In second
		e.preventDefault(); //preventing default event
		
		jQuery('.gfp2').hide(); //
		jQuery('.gfp1').fadeIn('slow');
	});
 });

 /*
  * Copy To Used
  * 
 

 jQuery(document).bind('gform_post_render', function(){

    jQuery('.gfp2-btn .elementor-button').click(function(e){  
		e.preventDefault();
		
		jQuery('.gfp1').hide();
		jQuery('.gfp2').fadeIn('slow').removeClass('hide'); 

		if( jQuery('.gfp2').hasClass('gf-page2') ){ 
			jQuery('.gf-page2 .gform_page:first-child .gform_next_button').click();
		}

	});
	
	jQuery('.gf-page2 .gform_page:nth-child(2) .gform_previous_button').click(function(e){ // In second
		e.preventDefault(); 
		
		jQuery('.gfp2').hide(); 
		jQuery('.gfp1').fadeIn('slow');
	});

 });


/*
 *  End if Copy To Used
 */


/**
 * Styling 

    .hide{
        display:none;
    }

    //it mus be the first Id or you can used this class " .gform_wrapper .gformpage:first-child "
    #gform_page_41_1{ 
        visibility: hidden;
    } 
    

/**  End Styling  */