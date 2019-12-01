'use strict';

goog.require('Blockly.JavaScript');

Blockly.JavaScript['my_alert'] = function (block) {
	var text_my_content = block.getFieldValue('my_content');
	var code = 'alert(\'' + text_my_content + '\');\n';

	return code;
}

