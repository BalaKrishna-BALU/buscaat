/**
 * @author Bala Krishna
 */
 (function($) {
 	$.fn.myplugin = function() {
 		var base = $(this);
 		base.init = function() {
 			base.getval();
 		};
 		base.getval = function() {
 			base.find('input:required').each(function(index, el) {
 				if($(el).val()){
 					if(/^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test($(el).val())){
 						$(el).next("span").empty();
 					}else{
 						$(el).next("span").empty();
 						$(el).after("<span style='color:red'>Enter only number's</span>");
 					}
 				}else{
 					$(el).next("span").empty();
 					$(el).after("<span style='color:red'>This field is required</span>");
 				}
 			});
 		};
 		base.init();
 	};
 })(jQuery);