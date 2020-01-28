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
	function isNumeric(value) {
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

		//숫자일 때
		if(isNumeric(value)) {
			result = value;

			//숫자일 때
			if(isNumeric(decimal)) {
				var split = result.toString().split('.'),
					secondSplit = split[1];
				
				//소수점이 있을 때
				if(secondSplit) {
					split[1] = secondSplit.substring(0, decimal);

					result = parseFloat(split.join('.'));
				}
			}
		}

		return result;
	};
})();