/* 
 * This code will run once the page is loaded and make sure the main menu is not scrolled off.
 * See https://www.w3schools.com/bootstrap/bootstrap_ref_js_affix.asp for details
 */
jQuery(document).ready(function(){
    jQuery('#block-lipzi-main-menu').affix({offset: {top: 300} });
});
