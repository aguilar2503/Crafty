'use strict';

goog.require('Blockly.JavaScript');

Blockly.JavaScript['codebox_forward'] = function (block) {
	// var code = 'alert(\'forward\');\n';
	var code = 'setTimeout(function () {' +
		'codemaobox.emit(\'codeboxGo\');' +
	'}, 200);\n';

	return code;
}

Blockly.JavaScript['codebox_backward'] = function (block) {
	// var code = 'alert(\'backward\');\n';
	var code = 'setTimeout(function () {' +
		'codemaobox.emit(\'codeboxBack\');' +
	'}, 200);\n';	

	return code;
}

Blockly.JavaScript['codebox_turnleft'] = function (block) {
	// var code = 'alert(\'turn left\');\n';
	var code = 'setTimeout(function () {' +
		'codemaobox.emit(\'codeboxTurnLeft\');' +
	'}, 200);\n';	

	return code;
}

Blockly.JavaScript['codebox_turnright'] = function (block) {
	// var code = 'alert(\'turn right\');\n';
	var code = 'setTimeout(function () {' +
		'codemaobox.emit(\'codeboxTurnRight\');' +
	'}, 200);\n';	

	return code;
}

Blockly.JavaScript['codebox_leftspin'] = function (block) {
	// var code = 'alert(\'left spin\');\n';
	var code = 'setTimeout(function () {' +
		'codemaobox.emit(\'codeboxLeftSpin\');' +
	'}, 200);\n';

	return code;
}

Blockly.JavaScript['codebox_rightspin'] = function (block) {
	// var code = 'alert(\'right spin\');\n';
	var code = 'setTimeout(function () {' +
		'codemaobox.emit(\'codeboxRightSpin\');' +
	'}, 200);\n';	

	return code;
}

Blockly.JavaScript['codebox_stop'] = function (block) {
	// var code = 'alert(\'stop\');\n';
	var code = 'setTimeout(function () {' +
		'codemaobox.emit(\'codeboxStop\');' +
	'}, 200);\n';	

	return code;
}


