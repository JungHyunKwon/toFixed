/**
 * @author JungHyunKwon
 * @version 1.0.0
 */
(function() {
	'use strict';
	
	/**
	 * @name 숫자 확인
	 * @since 2017-12-06
	 * @param {*} value
	 * @return {boolean}
	 */
	function _isNumeric(value) {
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
		if(_isNumeric(value)) {
			result = value;
			
			//소수가 숫자일 때
			if(_isNumeric(decimal)) {
				var split = value.toString().split('.'),
					firstSplit = split[1];
				
				//소수점이 있을 때
				if(firstSplit) {
					split[1] = firstSplit.substring(0, decimal);
					result = parseFloat(split.join('.'), 10);
				}
			}
		}

		return result;
	};
})();