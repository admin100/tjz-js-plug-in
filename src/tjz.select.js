/**
 * author:tjzaimee
 * description:In the select tag plus tvalue = "Default", so that you can automatically selected. Need jQuery support.
 * date:2013-10-31
 */
$(function() {
	var selects = $("select");
	for ( var i = 0; i < selects.length; i++) {
		var select = selects[i];
		var defaultValue = $(select).attr('tvalue');
		var optionArray = $(select).find('option');
		for ( var j = 0; j < optionArray.length; j++) {
			var option = optionArray[j];
			if (option.value == defaultValue) {
				optionArray[j].selected = true;
			}
		}
	}
});