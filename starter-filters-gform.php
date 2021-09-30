<?php 

/*Additional*/
add_filter('gform_submit_button_3', 'gfTerms', 10, 2);
function gfTerms($button, $form){
	return $button .= '<div class="gf-terms"><img src="/wp-content/uploads/2021/09/RAPID-SSL-french.png"><p>En cliquant sur le bouton, j’accepte les <a href="/termes-et-conditions" rel="nofollow" target="_blank">Termes et Conditions</a></p></div>';
}


add_filter('gform_validation_message', 'gfValidationText', 10, 2);
function gfValidationText($button, $form){
	return 'LE FORMULAIRE NE SEMBLE PAS CORRECTEMENT REMPLI. LES ERREURS ONT ÉTÉ MISES EN SURBRILLANCE PLUS BAS.';
}