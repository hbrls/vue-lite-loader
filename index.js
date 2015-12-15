var REG_FLAG = /(\(|\))\/\* \.vue \*\//g;
var REG_KEYWORD = /(class)Name=/g;
var REG_BIND = /v-bind:/g;
var REG_ON = /v-on:/g;


module.exports = function(source, map) {
	this.cacheable && this.cacheable();
	source = source.replace(REG_FLAG, '`')
								 .replace(REG_KEYWORD, '$1=')
								 .replace(REG_BIND, ':')
								 .replace(REG_ON, '@');
  this.callback(null, source, map);
}
