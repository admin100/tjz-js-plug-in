tjz-js-plug-in
==============
tjz-js-plug-in整合了工作中常用的JavaScript代码，方便快速开发使用。  
注意使用前需先导入jQuery library。

####Features

####Document
[tjz.select.js](src/tjz.select.js) 基于select标签的扩展。只要在select标签上指定tvalue的值，就可以自动选中，tvalue所对应的option。  
[tjz.dwz.js](src/tjz.dwz.js) 对DWZ框架form提交的扩展，可以取代原有的validateCallback函数，以openTab方式提交表单。  
[tjz.functions.js](src/tjz.functions.js) 常用JavaScript工具函数库。  
	- trim(text) 去除text字符串首尾的空格并返回  
	- formatFloat(src, pos) 取小数点后pos位，如取小数点后两位，pos=2  
    - remove(index) 删除指定索引位置的数组元素  
    - removeVal(value) 根据value参数的值删除数组中的指定元素  

####License
GNU GENERAL PUBLIC LICENSE Version 2.0(GPL V2)
