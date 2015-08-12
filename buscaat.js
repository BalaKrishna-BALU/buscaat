/**
 * @author Bala Krishna
 */
 (function($) {

 	'use strict';

 	$.fn.buscaat = function() {
 		var base = $(this);
 		base.init = function() {
 			base.getval();
 		};
 		base.getval = function() {
 			base.find('input:required').each(function(index, el) {
 				if($(el).val()){
 					checkType(el);
 				}else{
 					($(el).next("span.errorMessage").length>0)?($(el).next("span.errorMessage").text('This field is required')):($(el).after("<span class='errorMessage'>This field is required</span>"));
 				}
 			});
 		};
 		function checkType(element){
 			switch(element.type){
				case "email":
					if(/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test($(element).val())){
 						$(element).next("span.errorMessage").remove();
 					}else{
 						($(element).next("span.errorMessage").length>0)?($(element).next("span.errorMessage").text('Enter valid email address')):($(element).after("<span class='errorMessage'>Enter valid email address</span>"));
 					}
					break;
				case "number":
					if(/^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test($(element).val())){
 						$(element).next("span.errorMessage").remove();
 					}else{
 						($(element).next("span.errorMessage").length>0)?($(element).next("span.errorMessage").text('Enter only numbers')):($(element).after("<span class='errorMessage'>Enter only numbers</span>"));
 					}
 					break;
				case "url":
					if(/^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test($(element).val())){
 						$(element).next("span.errorMessage").remove();
 					}else{
 						($(element).next("span.errorMessage").length>0)?($(element).next("span.errorMessage").text('Enter valid url')):($(element).after("<span class='errorMessage'>Enter valid url</span>"));
 					}
 					break;
				case "date":
					if(!/Invalid|NaN/.test(new Date($(element).val()).toString())){
 						$(element).next("span.errorMessage").remove();
 					}else{
 						($(element).next("span.errorMessage").length>0)?($(element).next("span.errorMessage").text('Enter valid date')):($(element).after("<span class='errorMessage'>Enter valid date</span>"));
 					}
 					break;
				default:
					console.log("default",element);
 			}
 		};
 		base.init();
 	};
 })(jQuery);