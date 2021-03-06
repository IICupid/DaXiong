var Type = (function() {
	var Type = {};
	for(var i = 0, tpe; type = ["String", "Array", "Number"][i++];) {
		(function(type) {
			Type['is' + type] = function(obj) {
				return Object.prototype.toString.call(obj) === '[object ' + type + ']';
			}
		})(type)
	}
	return Type;
})();

/*
 * 
 */
function convertJsonToUrl(params, exclude) {
	if(!(Object.prototype.toString.call(exclude) === '[object Array]')) {
		exclude = [];
	}
	var returnUrl = "",
		tempVal = null,
		i = 1;
	for(var item in params) {
		tempVal = params[item];
		if(exclude.indexOf(tempVal) > -1) {
			continue;
		} else {
			if(i !== 1) {
				returnUrl += "&";
			}
			returnUrl += item;
			returnUrl += "=";
			returnUrl += params[item];
			i++;
		}
	}
	return returnUrl;
}
/*
 * 记录日志
 */
function log() {
	console.log.apply(console, arguments);
}

//获取样式的值
function getStyleValue(element, name) {
	var value = null;
	if(!element || !name) {
		return value;
	}

	value = element.style[name];
	if(!!value) {
		return value;
	}

	if(!window.getComputedStyle) {
		value = window.getComputedStyle(element, null).getPropertyValue(name);
	} else {
		value = element.currentStyle[value];
	}
	return value;
}