/**
 * @author JungHyunKwon
 * @version 1.0.0
 */
try {
	(function() {
		'use strict';
		
		/**
		 * @name 숫자 확인
		 * @since 2017-12-06
		 * @param {*} value
		 * @return {boolean}
		 */
		function _isNumber(value) {
			return typeof value === 'number' && !isNaN(value) && isFinite(value);
		}

		/**
		 * @name toFixed
		 * @param {number} value
		 * @param {number} decimal
		 * @return {number}
		 * @since 2018-07-13
		 */
		window.toFixed = function(value, decimal) {
			var result = NaN;
			
			//값이 숫자일 때
			if(_isNumber(value)) {
				result = value;
				
				//소수가 숫자일 때
				if(_isNumber(decimal)) {
					var splitValue = value.toString().split('.'),
						splitValue1 = splitValue[1];
					
					//소수점이 있을 때
					if(splitValue1) {
						splitValue[1] = splitValue1.substring(0, decimal);
						result = parseFloat(splitValue.join('.'), 10);
					}
				}
			}

			return result;
		};
	})();
}catch(e) {
	console.error(e);
}