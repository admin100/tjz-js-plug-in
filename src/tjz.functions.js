/**
 * author:tjzaimee@163.com
 * description:JavaScript tool library
 * date:2013-11-18
 */

/**
 * Encapsulated into the trim function to remove trailing spaces string
 */
function trim(text){
	return text.replace(/^\s+|\s+$/g,"");
}

/**
 * Decimal places
 * @param src
 * @param pos
 * @returns {Number}
 */
function formatFloat(src, pos)
{
    return Math.round(src*Math.pow(10, pos))/Math.pow(10, pos);
}
/**
 * Delete array element by index
 * @param index
 */
Array.prototype.remove=function(index)
{
	for(var i = 0; i < this.length; i++){
		if(this[i] == this[index]){
			for(var j = i; j < this.length; j++){
				this[j] = this[j+1];
			}
			this.length--;
		}
	 }
};
/**
 * According to delete the corresponding array element value
 * @param value
 */
Array.prototype.removeVal=function(value)
{
	for(var i = 0; i < this.length; i++){
		if(this[i] == value){
			for(var j = i; j < this.length; j++){
				this[j] = this[j+1];
			}
			this.length--;
		}
	 }
};