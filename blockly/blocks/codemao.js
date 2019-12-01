'use strict';

goog.require('Blockly.Blocks');

var codemaoHUE = 20;

Blockly.Blocks['codemao_led'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("./blockly/media/codemao_led.png24", 40, 40, "*"))
        .appendField("pin")
        .appendField(new Blockly.FieldDropdown([["none", "NONE"], ["2", "pin_2"], ["3", "pin_3"], ["4", "pin_4"], ["5", "pin_5"], ["6", "pin_6"], ["7", "pin_7"], ["8", "pin_8"], ["9", "pin_9"], ["10", "pin_10"], ["11", "pin_11"], ["12", "pin_12"], ["13", "pin_13"]]), "led_pin");
    this.setNextStatement(true, null);
    this.setColour(codemaoHUE);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
    
    Blockly.BlockSvg.START_HAT = true;
  }
};

Blockly.Blocks['obj-cuarto'] = {
  init: function() {
  	var PROPERTIES =
  	[["none", "NONE"],
  	 ["on", "function_on"],
  	 ["off", "function_off"],
  	 // ["toggle", "function_toggle"],
  	 ["blink", "function_blink"],
  	 ["brightness", "function_brightness"],
  	 ["stop", "function_stop"]];

  	var dropdown = new Blockly.FieldDropdown(PROPERTIES, function (option) {
  		var shapeOfBlink = (option == 'function_blink');
  		var shapeOfBrightness = (option == 'function_brightness'); 

  		this.sourceBlock_.updateShapeOfBlink_(shapeOfBlink);
  		this.sourceBlock_.updateShapeOfBrightness_(shapeOfBrightness);
  	});

    this.appendDummyInput()
    	.setAlign(Blockly.ALIGN_CENTRE)
        .appendField("CLcuarto")
        .appendField(dropdown, "led_function");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(true);
    this.setColour(20);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  },
  mutationToDom: function () {
  	var container = document.createElement('mutation');
  	var blinkOption = (this.getFieldValue('PROPERTIES') == 'function_blink');

  	container.setAttribute('blink_option', blinkOption);

  	return container;
  },
  domToMutation: function (xmlElement) {
  	var blinkOption = (xmlElement.getAttribute('blink_option') == 'true');

  	this.updateShapeOfBlink_(blinkOption);
  },
  updateShapeOfBlink_: function (shapeOfBlink) {
  	var blinkExits = this.getInput('shape_blink');

  	if (shapeOfBlink) {
  		if (!blinkExits) {
  			this.appendDummyInput("shape_blink")
  				.setAlign(Blockly.ALIGN_RIGHT)
  				.appendField("every")
  				.appendField(new Blockly.FieldNumber(1000, -Infinity, Infinity, 1), "shape_blink_value")
  				.appendField("ms");
  		}
  	} else if (blinkExits) {
  		this.removeInput('shape_blink');
  	}
  },
  updateShapeOfBrightness_: function (shapeOfBrightness) {
  	var brightnessExits = this.getInput('shape_brightness');

  	if (shapeOfBrightness) {
  		if (!brightnessExits) {
  			this.appendDummyInput("shape_brightness")
  				.setAlign(Blockly.ALIGN_RIGHT)
  				.appendField("is")
  				.appendField(new Blockly.FieldNumber(10, 0, 255, 1), "shape_brightness_value");
  		}
  	} else if (brightnessExits) {
  		this.removeInput('shape_brightness');
  	}
  }
};

Blockly.Blocks['obj-tv'] = {
  init: function() {
  	var PROPERTIES =
  	[["none", "NONE"],
  	 ["on", "function_on"],
  	 ["off", "function_off"],
  	 // ["toggle", "function_toggle"],
  	 ["blink", "function_blink"],
  	 ["brightness", "function_brightness"],
  	 ["stop", "function_stop"]];

  	var dropdown = new Blockly.FieldDropdown(PROPERTIES, function (option) {
  		var shapeOfBlink = (option == 'function_blink');
  		var shapeOfBrightness = (option == 'function_brightness'); 

  		this.sourceBlock_.updateShapeOfBlink_(shapeOfBlink);
  		this.sourceBlock_.updateShapeOfBrightness_(shapeOfBrightness);
  	});

    this.appendDummyInput()
    	.setAlign(Blockly.ALIGN_CENTRE)
        .appendField("CLtv")
        .appendField(dropdown, "led_function");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(true);
    this.setColour(50);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  },
  mutationToDom: function () {
  	var container = document.createElement('mutation');
  	var blinkOption = (this.getFieldValue('PROPERTIES') == 'function_blink');

  	container.setAttribute('blink_option', blinkOption);

  	return container;
  },
  domToMutation: function (xmlElement) {
  	var blinkOption = (xmlElement.getAttribute('blink_option') == 'true');

  	this.updateShapeOfBlink_(blinkOption);
  },
  updateShapeOfBlink_: function (shapeOfBlink) {
  	var blinkExits = this.getInput('shape_blink');

  	if (shapeOfBlink) {
  		if (!blinkExits) {
  			this.appendDummyInput("shape_blink")
  				.setAlign(Blockly.ALIGN_RIGHT)
  				.appendField("every")
  				.appendField(new Blockly.FieldNumber(1000, -Infinity, Infinity, 1), "shape_blink_value")
  				.appendField("ms");
  		}
  	} else if (blinkExits) {
  		this.removeInput('shape_blink');
  	}
  },
  updateShapeOfBrightness_: function (shapeOfBrightness) {
  	var brightnessExits = this.getInput('shape_brightness');

  	if (shapeOfBrightness) {
  		if (!brightnessExits) {
  			this.appendDummyInput("shape_brightness")
  				.setAlign(Blockly.ALIGN_RIGHT)
  				.appendField("is")
  				.appendField(new Blockly.FieldNumber(10, 0, 255, 1), "shape_brightness_value");
  		}
  	} else if (brightnessExits) {
  		this.removeInput('shape_brightness');
  	}
  }
};

Blockly.Blocks['obj-riego'] = {
  init: function() {
  	var PROPERTIES =
  	[["none", "NONE"],
  	 ["on", "function_on"],
  	 ["off", "function_off"],
  	 // ["toggle", "function_toggle"],
  	 ["blink", "function_blink"],
  	 ["brightness", "function_brightness"],
  	 ["stop", "function_stop"]];

  	var dropdown = new Blockly.FieldDropdown(PROPERTIES, function (option) {
  		var shapeOfBlink = (option == 'function_blink');
  		var shapeOfBrightness = (option == 'function_brightness'); 

  		this.sourceBlock_.updateShapeOfBlink_(shapeOfBlink);
  		this.sourceBlock_.updateShapeOfBrightness_(shapeOfBrightness);
  	});

    this.appendDummyInput()
    	.setAlign(Blockly.ALIGN_CENTRE)
        .appendField("CLriego")
        .appendField(dropdown, "led_function");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(true);
    this.setColour(78);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  },
  mutationToDom: function () {
  	var container = document.createElement('mutation');
  	var blinkOption = (this.getFieldValue('PROPERTIES') == 'function_blink');

  	container.setAttribute('blink_option', blinkOption);

  	return container;
  },
  domToMutation: function (xmlElement) {
  	var blinkOption = (xmlElement.getAttribute('blink_option') == 'true');

  	this.updateShapeOfBlink_(blinkOption);
  },
  updateShapeOfBlink_: function (shapeOfBlink) {
  	var blinkExits = this.getInput('shape_blink');

  	if (shapeOfBlink) {
  		if (!blinkExits) {
  			this.appendDummyInput("shape_blink")
  				.setAlign(Blockly.ALIGN_RIGHT)
  				.appendField("every")
  				.appendField(new Blockly.FieldNumber(1000, -Infinity, Infinity, 1), "shape_blink_value")
  				.appendField("ms");
  		}
  	} else if (blinkExits) {
  		this.removeInput('shape_blink');
  	}
  },
  updateShapeOfBrightness_: function (shapeOfBrightness) {
  	var brightnessExits = this.getInput('shape_brightness');

  	if (shapeOfBrightness) {
  		if (!brightnessExits) {
  			this.appendDummyInput("shape_brightness")
  				.setAlign(Blockly.ALIGN_RIGHT)
  				.appendField("is")
  				.appendField(new Blockly.FieldNumber(10, 0, 255, 1), "shape_brightness_value");
  		}
  	} else if (brightnessExits) {
  		this.removeInput('shape_brightness');
  	}
  }
};

Blockly.Blocks['obj-baño'] = {
  init: function() {
  	var PROPERTIES =
  	[["none", "NONE"],
  	 ["on", "function_on"],
  	 ["off", "function_off"],
  	 // ["toggle", "function_toggle"],
  	 ["blink", "function_blink"],
  	 ["brightness", "function_brightness"],
  	 ["stop", "function_stop"]];

  	var dropdown = new Blockly.FieldDropdown(PROPERTIES, function (option) {
  		var shapeOfBlink = (option == 'function_blink');
  		var shapeOfBrightness = (option == 'function_brightness'); 

  		this.sourceBlock_.updateShapeOfBlink_(shapeOfBlink);
  		this.sourceBlock_.updateShapeOfBrightness_(shapeOfBrightness);
  	});

    this.appendDummyInput()
    	.setAlign(Blockly.ALIGN_CENTRE)
        .appendField("CLbaño")
        .appendField(dropdown, "led_function");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(true);
    this.setColour(126);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  },
  mutationToDom: function () {
  	var container = document.createElement('mutation');
  	var blinkOption = (this.getFieldValue('PROPERTIES') == 'function_blink');

  	container.setAttribute('blink_option', blinkOption);

  	return container;
  },
  domToMutation: function (xmlElement) {
  	var blinkOption = (xmlElement.getAttribute('blink_option') == 'true');

  	this.updateShapeOfBlink_(blinkOption);
  },
  updateShapeOfBlink_: function (shapeOfBlink) {
  	var blinkExits = this.getInput('shape_blink');

  	if (shapeOfBlink) {
  		if (!blinkExits) {
  			this.appendDummyInput("shape_blink")
  				.setAlign(Blockly.ALIGN_RIGHT)
  				.appendField("every")
  				.appendField(new Blockly.FieldNumber(1000, -Infinity, Infinity, 1), "shape_blink_value")
  				.appendField("ms");
  		}
  	} else if (blinkExits) {
  		this.removeInput('shape_blink');
  	}
  },
  updateShapeOfBrightness_: function (shapeOfBrightness) {
  	var brightnessExits = this.getInput('shape_brightness');

  	if (shapeOfBrightness) {
  		if (!brightnessExits) {
  			this.appendDummyInput("shape_brightness")
  				.setAlign(Blockly.ALIGN_RIGHT)
  				.appendField("is")
  				.appendField(new Blockly.FieldNumber(10, 0, 255, 1), "shape_brightness_value");
  		}
  	} else if (brightnessExits) {
  		this.removeInput('shape_brightness');
  	}
  }
};

Blockly.Blocks['obj-sala'] = {
  init: function() {
  	var PROPERTIES =
  	[["none", "NONE"],
  	 ["on", "function_on"],
  	 ["off", "function_off"],
  	 // ["toggle", "function_toggle"],
  	 ["blink", "function_blink"],
  	 ["brightness", "function_brightness"],
  	 ["stop", "function_stop"]];

  	var dropdown = new Blockly.FieldDropdown(PROPERTIES, function (option) {
  		var shapeOfBlink = (option == 'function_blink');
  		var shapeOfBrightness = (option == 'function_brightness'); 

  		this.sourceBlock_.updateShapeOfBlink_(shapeOfBlink);
  		this.sourceBlock_.updateShapeOfBrightness_(shapeOfBrightness);
  	});

    this.appendDummyInput()
    	.setAlign(Blockly.ALIGN_CENTRE)
        .appendField("CLsala")
        .appendField(dropdown, "led_function");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(true);
    this.setColour(183);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  },
  mutationToDom: function () {
  	var container = document.createElement('mutation');
  	var blinkOption = (this.getFieldValue('PROPERTIES') == 'function_blink');

  	container.setAttribute('blink_option', blinkOption);

  	return container;
  },
  domToMutation: function (xmlElement) {
  	var blinkOption = (xmlElement.getAttribute('blink_option') == 'true');

  	this.updateShapeOfBlink_(blinkOption);
  },
  updateShapeOfBlink_: function (shapeOfBlink) {
  	var blinkExits = this.getInput('shape_blink');

  	if (shapeOfBlink) {
  		if (!blinkExits) {
  			this.appendDummyInput("shape_blink")
  				.setAlign(Blockly.ALIGN_RIGHT)
  				.appendField("every")
  				.appendField(new Blockly.FieldNumber(1000, -Infinity, Infinity, 1), "shape_blink_value")
  				.appendField("ms");
  		}
  	} else if (blinkExits) {
  		this.removeInput('shape_blink');
  	}
  },
  updateShapeOfBrightness_: function (shapeOfBrightness) {
  	var brightnessExits = this.getInput('shape_brightness');

  	if (shapeOfBrightness) {
  		if (!brightnessExits) {
  			this.appendDummyInput("shape_brightness")
  				.setAlign(Blockly.ALIGN_RIGHT)
  				.appendField("is")
  				.appendField(new Blockly.FieldNumber(10, 0, 255, 1), "shape_brightness_value");
  		}
  	} else if (brightnessExits) {
  		this.removeInput('shape_brightness');
  	}
  }
};


Blockly.Blocks['obj-puerta'] = {
  init: function() {
  	var PROPERTIES =
  	[["none", "NONE"],
  	 ["on", "function_on"],
  	 ["off", "function_off"],
  	 // ["toggle", "function_toggle"],
  	 ["blink", "function_blink"],
  	 ["brightness", "function_brightness"],
  	 ["stop", "function_stop"]];

  	var dropdown = new Blockly.FieldDropdown(PROPERTIES, function (option) {
  		var shapeOfBlink = (option == 'function_blink');
  		var shapeOfBrightness = (option == 'function_brightness'); 

  		this.sourceBlock_.updateShapeOfBlink_(shapeOfBlink);
  		this.sourceBlock_.updateShapeOfBrightness_(shapeOfBrightness);
  	});

    this.appendDummyInput()
    	.setAlign(Blockly.ALIGN_CENTRE)
        .appendField("CLpuerta")
        .appendField(dropdown, "led_function");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(true);
    this.setColour(197);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  },
  mutationToDom: function () {
  	var container = document.createElement('mutation');
  	var blinkOption = (this.getFieldValue('PROPERTIES') == 'function_blink');

  	container.setAttribute('blink_option', blinkOption);

  	return container;
  },
  domToMutation: function (xmlElement) {
  	var blinkOption = (xmlElement.getAttribute('blink_option') == 'true');

  	this.updateShapeOfBlink_(blinkOption);
  },
  updateShapeOfBlink_: function (shapeOfBlink) {
  	var blinkExits = this.getInput('shape_blink');

  	if (shapeOfBlink) {
  		if (!blinkExits) {
  			this.appendDummyInput("shape_blink")
  				.setAlign(Blockly.ALIGN_RIGHT)
  				.appendField("every")
  				.appendField(new Blockly.FieldNumber(1000, -Infinity, Infinity, 1), "shape_blink_value")
  				.appendField("ms");
  		}
  	} else if (blinkExits) {
  		this.removeInput('shape_blink');
  	}
  },
  updateShapeOfBrightness_: function (shapeOfBrightness) {
  	var brightnessExits = this.getInput('shape_brightness');

  	if (shapeOfBrightness) {
  		if (!brightnessExits) {
  			this.appendDummyInput("shape_brightness")
  				.setAlign(Blockly.ALIGN_RIGHT)
  				.appendField("is")
  				.appendField(new Blockly.FieldNumber(10, 0, 255, 1), "shape_brightness_value");
  		}
  	} else if (brightnessExits) {
  		this.removeInput('shape_brightness');
  	}
  }
};

Blockly.Blocks['codemao_led_sub_2'] = {
  init: function() {
    var PROPERTIES =
    [["none", "NONE"],
     ["pulse", "PULSE"],
     ["animation", "ANIMATION"]];

    var dropdown = new Blockly.FieldDropdown(PROPERTIES, function (option) {
      var pulseSelected = (option == 'PULSE');
      var animationSelected = (option == 'ANIMATION');

      this.sourceBlock_.updateShapeOfPulse_(pulseSelected);
      this.sourceBlock_.updateShapeOfAnimation_(animationSelected);
    });

    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("./blockly/media/codemao_led_sub_2.png", 20, 20, "*"))
        .appendField("super LED")
        .appendField(dropdown, "function_option");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(true);
    this.setColour(codemaoHUE);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  },
  updateShapeOfPulse_: function (pulseSelected) {
    var shapeExists = this.getInput('pulse_input');

    if (pulseSelected) {
      if (!shapeExists) {
        this.appendValueInput('pulse_input')
            .appendField('with')
            .setCheck('Number');
        this.appendDummyInput('justForText')
            .appendField('ms');
      }
    } else if (shapeExists) {
      this.removeInput('pulse_input');
      this.removeInput('justForText');
    }
  },
  updateShapeOfAnimation_: function (animationSelected) {
    var animationExists = this.getInput('animation_input_duration');

    if (animationSelected) {
      if (!animationExists) {
        this.setInputsInline(false);

        this.appendDummyInput('animation_input_duration')
            .appendField('duration:')
            .appendField(new Blockly.FieldNumber(3000, -Infinity, Infinity, 1), 'animation_input_duration_value')
            .appendField('ms');
            // TODO: no array input yet
        this.appendDummyInput('animation_input_cue_points')
            .appendField('cue points:');
            // TODO: no array input yet
        this.appendDummyInput('animation_input_key_frames')
            .appendField('key frames:');
      }
    } else if (animationExists) {
      this.setInputsInline(true);

      this.removeInput('animation_input_duration');
      this.removeInput('animation_input_cue_points');
      this.removeInput('animation_input_key_frames');
    }
  }
};

Blockly.Blocks['codemao_led_sub'] = {
  init: function() {
  	var PROPERTIES =
  	[["none", "NONE"],
  	 ["2", "codemao_led_pin_2"],
  	 ["3", "codemao_led_pin_3"],
  	 ["4", "codemao_led_pin_4"],
  	 ["5", "codemao_led_pin_5"],
  	 ["6", "codemao_led_pin_6"],
  	 ["7", "codemao_led_pin_7"],
  	 ["8", "codemao_led_pin_8"],
  	 ["9", "codemao_led_pin_9"],
  	 ["10", "codemao_led_pin_10"],
  	 ["11", "codemao_led_pin_11"],
  	 ["12", "codemao_led_pin_12"],
  	 ["13", "codemao_led_pin_13"]];

  	var PROPERTIES1 =
  	[["none", "NONE"],
  	 ["on", "codemao_led_function_on"],
  	 ["off", "codemao_led_function_off"],
  	 ["toggle", "codemao_led_function_toggle"],
  	 ["blink", "codemao_led_function_blink"],
  	 ["stop", "codemao_led_function_stop"]];

  	var dropdown1 = new Blockly.FieldDropdown(PROPERTIES1, function (option) {
  		var blinkOption = (option == 'codemao_led_function_blink');

  		this.sourceBlock_.updateShape_(blinkOption);
  	});

    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField(new Blockly.FieldImage("./blockly/media/codemao_led_sub.png", 20, 20, "*"))
        .appendField("pin")
        .appendField(new Blockly.FieldDropdown(PROPERTIES), "codemao_led_pin_options")
        .appendField("LED")
        .appendField(dropdown1, "codemao_led_function_options");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    // this.setMutator(new Blockly.Mutator(['codemao_led_function_blink']));
    this.setInputsInline(true);
    this.setColour(codemaoHUE);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  },
  mutationToDom: function () {
  	var container = document.createElement('mutation');
  	var blinkOption = (this.getFieldValue('PROPERTIES1') == 'codemao_led_function_blink');

  	container.setAttribute('blink_option', blinkOption);

  	return container;
  },
  domToMutation: function (xmlElement) {
  	var blinkOption = (xmlElement.getAttribute('blink_option') == 'true');

  	this.updateShape_(blinkOption);
  },
  updateShape_: function (blinkOption) {
  	var inputExits = this.getInput('codemao_led_shape_blink');

  	if (blinkOption) {
  		if (!inputExits) {
  			this.appendDummyInput("codemao_led_shape_blink")
  				.setAlign(Blockly.ALIGN_RIGHT)
  				.appendField("every")
  				.appendField(new Blockly.FieldNumber(0, -Infinity, Infinity, 1), "codemao_led_shape_blink_value")
  				.appendField("ms");
  		}
  	} else if (inputExits) {
  		this.removeInput('codemao_led_shape_blink');
  	}
  }
};

Blockly.Blocks['codemao_motor'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("./blockly/media/codemao_motor.jpg", 40, 40, "*"))
        .appendField("pins");
    this.appendDummyInput()
        .appendField("pwm pin")
        .appendField(new Blockly.FieldDropdown([["none", "NONE"], ["3", "THREE"], ["5", "FIVE"], ["6", "SIX"], ["9", "NINE"], ["10", "TEN"], ["11", "ELEVEN"]]), "pwm_option");
    this.appendDummyInput()
        .appendField("dir pin")
        .appendField(new Blockly.FieldDropdown([["none", "NONE"], ["2", "TWO"], ["4", "FOUR"], ["7", "SEVEN"], ["8", "EIGHT"], ["12", "TWELVE"], ["13", "THIRTEEN"]]), "dir_option");
    this.setInputsInline(false);
    this.setNextStatement(true, null);
    // this.setDeletable(true);
    // this.setCommentText('The motor is bidirectional');
    this.setColour(20);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');

    Blockly.BlockSvg.START_HAT = true;
  }
};

Blockly.Blocks['codemao_motor_sub'] = {
  init: function() {
    var PROPERTIES = [
      ["none", "NONE"],
      ["forward", "FORWARD"],
      ["reverse", "REVERSE"],
      ["start", "START"],
      ["stop", "STOP"]
    ]; 

    var dropdown = new Blockly.FieldDropdown(PROPERTIES, function (option) {
      var specialInputs = (option == 'FORWARD' || option == 'REVERSE' || option == 'START');

      this.sourceBlock_.updateShape_(specialInputs);
    });

    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("./blockly/media/codemao_motor_sub.jpg", 20, 20, "*"))
        .appendField("Motor")
        .appendField(dropdown, "motor_function");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(true);
    this.setColour(codemaoHUE);
    
    var thisBlock = this;
    this.setTooltip(function () {
      var mode = thisBlock.getFieldValue('motor_function');
      var TOOLTIPS = {
        'NONE': 'none: please select one operation for the motor',
        'FORWARD': 'forward: please ensure the value you give being 0~255',
        'REVERSE': 'reverse: please ensure the value you give being 0~255',
        'START': 'start: please ensure the value you give being 0~255',
        'STOP': 'stop: the car will be stopped'
      };

      return TOOLTIPS[mode];
    });
    this.setHelpUrl('http://www.example.com/');
  },

  // onchange: function (changeEvent) {
  //   var thisBlock = this;

  //   this.setWarningText('TEST');
    // if (thisBlock.getInput('input_area')) {
    //   thisBlock.setWarningText('Hint: the value of PWM should between 0 and 255');
    // } else {
    //   thisBlock.setWarningText('???');
    // }
  // },

  updateShape_: function (specialInputs) {
    var inputExits = this.getInput('input_area');
    // var warning;

    if (specialInputs) {
      if (!inputExits) {
        this.appendDummyInput('input_area')
            .appendField('with PWM of')
            .appendField(new Blockly.FieldNumber(100, 0, 255, 1), 'input_area_value');

        // warning = new Blockly.Warning(this);

        // warning.setText('Hint: the value of PWM should between 0 and 255', 'warning_text');
        // warning.setVisible(true);
      }
    } else if (inputExits) {
      this.removeInput('input_area');

      // if (warning) {
      //   warning.setVisible(false);
      //   warning.dispose();
      // }
    }
  }
};



