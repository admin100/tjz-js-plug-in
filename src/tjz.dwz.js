/**
 * author:tjzaimee@163.com
 * description:Some extensions for dwz
 * date:2013-11-07
 */

/**
 * Replace dwz of validateCallback function, allowing the form to be submitted openTab
 */
function validateOpenTab(form,navTabId,titleStr) {  
    var $form = $(form);  
    if (!$form.valid()) {  
        return false;  
    }  
    navTab.openTab(navTabId || "NavTabId", $form.attr("action"), { title:titleStr || "New Tab", fresh:false, data:$form.serializeArray() });
    return false;
}
/**
 * Will select the label of the selected option tvalue value assigned to the specified id elements
 * @param combox
 */
function tvalueToRef(combox){
	 var $option=$(combox).children("option:selected");
	 var ref = $(combox).attr("ref");
	 $("#"+ref+"").val($option.attr("tvalue"));
}