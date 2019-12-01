'use strict';

goog.require('Blockly.JavaScript');

Blockly.JavaScript['codemao_led'] = function (block) {
  var dropdown_led_pin = block.getFieldValue('led_pin');

  var pinNum = null;

  switch (dropdown_led_pin) {
  	case 'NONE':
  		pinNum = null;
  		break;  	
  	case 'pin_2':
  		pinNum = 2;
  		break;
  	case 'pin_3':
  		pinNum = 3;
  		break;
  	case 'pin_4':
  		pinNum = 4;
  		break;
  	case 'pin_5':
  		pinNum = 5;
  		break;
  	case 'pin_6':
  		pinNum = 6;
  		break;
  	case 'pin_7':
  		pinNum = 7;
  		break;
  	case 'pin_8':
  		pinNum = 8;
  		break;
  	case 'pin_9':
  		pinNum = 9;
  		break;
  	case 'pin_10':
  		pinNum = 10;
  		break;
  	case 'pin_11':
  		pinNum = 11;
  		break;
  	case 'pin_12':
  		pinNum = 12;
  		break;
  	case 'pin_13':
  		pinNum = 13;
  		break;
  }

  var code = 'variable = new five.Led(' + pinNum + ');';

  return code;
};

Blockly.JavaScript['obj-cuarto'] = function (block) {
	var dropdown_led_function = block.getFieldValue('led_function');
	var functionToRun = null;
  
	switch (dropdown_led_function) {
		case 'NONE':
			functionToRun = "cuarto.off();";
			break;
		case 'function_on':
			functionToRun = "cuarto.on();";
			break;
		case 'function_off':
			functionToRun = "cuarto.off();";
			break;
		// case 'function_toggle':
		// 	functionToRun = "codemao[temp.led].toggle();";
		// 	break;
		case 'function_blink':
			var blinkValue = block.getFieldValue('shape_blink_value');
			
			functionToRun = "cuarto.blink(" + blinkValue + ");";
			break;
		case 'function_brightness':
			var brightnessValue = block.getFieldValue('shape_brightness_value');
			
			functionToRun = "cuarto.brightness(" + brightnessValue + ");";
			break;
		case 'function_stop':
			functionToRun = "";
			break;
	}
  
	var code =  functionToRun + '\n';
  
	return code;
};

Blockly.JavaScript['obj-tv'] = function (block) {
  var dropdown_led_function = block.getFieldValue('led_function');
  var functionToRun = null;

  switch (dropdown_led_function) {
  	case 'NONE':
  		functionToRun = "tv.off();";
  		break;
  	case 'function_on':
  		functionToRun = "tv.on();";
  		break;
  	case 'function_off':
  		functionToRun = "tv.off();";
  		break;
  	// case 'function_toggle':
  	// 	functionToRun = "codemao[temp.led].toggle();";
  	// 	break;
  	case 'function_blink':
  		var blinkValue = block.getFieldValue('shape_blink_value');
  		
  		functionToRun = "tv.blink(" + blinkValue + ");";
  		break;
  	case 'function_brightness':
  		var brightnessValue = block.getFieldValue('shape_brightness_value');
  		
  		functionToRun = "tv.brightness(" + brightnessValue + ");";
  		break;
  	case 'function_stop':
  		functionToRun = "";
  		break;
  }

  var code =  functionToRun + '\n';

  return code;
};

Blockly.JavaScript['obj-riego'] = function (block) {
	var dropdown_led_function = block.getFieldValue('led_function');
	var functionToRun = null;
  
	switch (dropdown_led_function) {
		case 'NONE':
			functionToRun = "riego.off();";
			break;
		case 'function_on':
			functionToRun = "riego.on();";
			break;
		case 'function_off':
			functionToRun = "riego.off();";
			break;
		// case 'function_toggle':
		// 	functionToRun = "codemao[temp.led].toggle();";
		// 	break;
		case 'function_blink':
			var blinkValue = block.getFieldValue('shape_blink_value');
			
			functionToRun = "riego.blink(" + blinkValue + ");";
			break;
		case 'function_brightness':
			var brightnessValue = block.getFieldValue('shape_brightness_value');
			
			functionToRun = "riego.brightness(" + brightnessValue + ");";
			break;
		case 'function_stop':
			functionToRun = "";
			break;
	}
  
	var code =  functionToRun + '\n';
  
	return code;
};

Blockly.JavaScript['obj-baño'] = function (block) {
	var dropdown_led_function = block.getFieldValue('led_function');
	var functionToRun = null;
  
	switch (dropdown_led_function) {
		case 'NONE':
			functionToRun = "baño.off();";
			break;
		case 'function_on':
			functionToRun = "baño.on();";
			break;
		case 'function_off':
			functionToRun = "baño.off();";
			break;
		// case 'function_toggle':
		// 	functionToRun = "codemao[temp.led].toggle();";
		// 	break;
		case 'function_blink':
			var blinkValue = block.getFieldValue('shape_blink_value');
			
			functionToRun = "baño.blink(" + blinkValue + ");";
			break;
		case 'function_brightness':
			var brightnessValue = block.getFieldValue('shape_brightness_value');
			
			functionToRun = "baño.brightness(" + brightnessValue + ");";
			break;
		case 'function_stop':
			functionToRun = "";
			break;
	}
  
	var code =  functionToRun + '\n';
  
	return code;
};

Blockly.JavaScript['obj-sala'] = function (block) {
	var dropdown_led_function = block.getFieldValue('led_function');
	var functionToRun = null;
  
	switch (dropdown_led_function) {
		case 'NONE':
			functionToRun = "sala.off();";
			break;
		case 'function_on':
			functionToRun = "sala.on();";
			break;
		case 'function_off':
			functionToRun = "sala.off();";
			break;
		// case 'function_toggle':
		// 	functionToRun = "codemao[temp.led].toggle();";
		// 	break;
		case 'function_blink':
			var blinkValue = block.getFieldValue('shape_blink_value');
			
			functionToRun = "sala.blink(" + blinkValue + ");";
			break;
		case 'function_brightness':
			var brightnessValue = block.getFieldValue('shape_brightness_value');
			
			functionToRun = "sala.brightness(" + brightnessValue + ");";
			break;
		case 'function_stop':
			functionToRun = "";
			break;
	}
  
	var code =  functionToRun + '\n';
  
	return code;
};

Blockly.JavaScript['obj-puerta'] = function (block) {
	var dropdown_led_function = block.getFieldValue('led_function');
	var functionToRun = null;
  
	switch (dropdown_led_function) {
		case 'NONE':
			functionToRun = "puerta.off();";
			break;
		case 'function_on':
			functionToRun = "puerta.on();";
			break;
		case 'function_off':
			functionToRun = "puerta.off();";
			break;
		// case 'function_toggle':
		// 	functionToRun = "codemao[temp.led].toggle();";
		// 	break;
		case 'function_blink':
			var blinkValue = block.getFieldValue('shape_blink_value');
			
			functionToRun = "puerta.blink(" + blinkValue + ");";
			break;
		case 'function_brightness':
			var brightnessValue = block.getFieldValue('shape_brightness_value');
			
			functionToRun = "puerta.brightness(" + brightnessValue + ");";
			break;
		case 'function_stop':
			functionToRun = "";
			break;
	}
  
	var code =  functionToRun + '\n';
  
	return code;
};




Blockly.JavaScript['codemao_led_sub_2'] = function (block) {
  var dropdown_super_led_function = block.getFieldValue('function_option');
  var code = null;

  switch (dropdown_super_led_function) {
    case 'NONE':
      code = "codemao[temp.led].stop();codemao[temp.led].off();\n";
      break;
    case 'PULSE':
      var duration = Blockly.JavaScript.valueToCode(block, 'pulse_input',
          Blockly.JavaScript.ORDER_FUNCTION_CALL);
      
      code = "codemao[temp.led].pulse(" + duration + ");\n";
      break;
    case 'ANIMATION':
      code = "codemao[temp.led].off();\n";
      break;
  }

  // return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
  return code;
};

Blockly.JavaScript['codemao_led_sub'] = function (block) {
  var dropdown_codemao_led_pin_options = block.getFieldValue('codemao_led_pin_options');
  var dropdown_codemao_led_function_options = block.getFieldValue('codemao_led_function_options');

  var pinNum = null;
  var functionToRun = null;

  switch (dropdown_codemao_led_pin_options) {
  	case 'codemao_led_pin_2':
  		pinNum = 2;
  		break;
  	case 'codemao_led_pin_3':
  		pinNum = 3;
  		break;
  	case 'codemao_led_pin_4':
  		pinNum = 4;
  		break;
  	case 'codemao_led_pin_5':
  		pinNum = 5;
  		break;
  	case 'codemao_led_pin_6':
  		pinNum = 6;
  		break;
  	case 'codemao_led_pin_7':
  		pinNum = 7;
  		break;
  	case 'codemao_led_pin_8':
  		pinNum = 8;
  		break;
  	case 'codemao_led_pin_9':
  		pinNum = 9;
  		break;
  	case 'codemao_led_pin_10':
  		pinNum = 10;
  		break;
  	case 'codemao_led_pin_11':
  		pinNum = 11;
  		break;
  	case 'codemao_led_pin_12':
  		pinNum = 12;
  		break;
  	case 'codemao_led_pin_13':
  		pinNum = 13;
  		break;
  }

  switch (dropdown_codemao_led_function_options) {
  	case 'codemao_led_function_on':
  		functionToRun = "codemao[temp.led].on()";
  		break;
  	case 'codemao_led_function_off':
  		functionToRun = "codemao[temp.led].off()";
  		break;
  	case 'codemao_led_function_toggle':
  		functionToRun = "codemao[temp.led].toggle()";
  		break;
  	case 'codemao_led_function_blink':
  		var blinkValue = block.getFieldValue('codemao_led_shape_blink_value');
  		
  		functionToRun = "codemao[temp.led].blink(" + blinkValue + ")";
  		break;
  	case 'codemao_led_function_stop':
  		functionToRun = "codemao[temp.led].stop()";
  		break;
  }

  var code = 'codemao[indexOfCodemao] = new five.Led(' + pinNum + ');\n' + functionToRun + ';\n' +
             'temp.led = indexOfCodemao;\n' +
             'indexOfCodemao++;\n';

  return code;
};

Blockly.JavaScript['codemao_motor'] = function(block) {
  var dropdown_pwm_option = block.getFieldValue('pwm_option');
  var dropdown_dir_option = block.getFieldValue('dir_option');

  var pwmPin, dirPin;

  switch (dropdown_pwm_option) {
    case 'NONE':
      pwmPin = null;
      break;
    case 'THREE':
      pwmPin = 3;
      break;
    case 'FIVE':
      pwmPin = 5;
      break;
    case 'SIX':
      pwmPin = 6;
      break;
    case 'NINE':
      pwmPin = 9;
      break;
    case 'TEN':
      pwmPin = 10;
      break;
    case 'ELEVEN':
      pwmPin = 11;
      break;
  }

  var DIRECTION = {
    'NONE': null, 
    'TWO': 2,
    'FOUR': 4,
    'SEVEN': 7,
    'EIGHT': 8,
    'TWELVE': 12,
    'THIRTEEN': 13
  };

  dirPin = DIRECTION[dropdown_dir_option]; 

  var code = 'codemao[indexOfCodemao] = new five.Motor({pins: {pwm: ' + pwmPin + ', dir: ' + dirPin + '}});\n' +
             'temp.motor = indexOfCodemao;\n' +
             'indexOfCodemao++;\n';
  
  return code;
};

Blockly.JavaScript['codemao_motor_sub'] = function(block) {
  var dropdown_motor_function = block.getFieldValue('motor_function');
  var code;

  switch (dropdown_motor_function) {
    case 'NONE':
      code = 'codemao[temp.motor].stop();\n';
      break;
    case 'FORWARD':
      var value = block.getFieldValue('input_area_value');

      code = 'codemao[temp.motor].forward(' + value + ');\n';
      break;
    case 'REVERSE':
      var value = block.getFieldValue('input_area_value');

      code = 'codemao[temp.motor].reverse(' + value + ');\n';
      break;
    case 'START':
      var value = block.getFieldValue('input_area_value');

      code = 'codemao[temp.motor].start(' + value + ');\n';
      break;
    case 'STOP':
      code = 'codemao[temp.motor].stop();\n';
      break;
  }

  return code;
};


