'use strict';

goog.require('Blockly.Blocks');

var colourOfCustom = 330;

Blockly.Blocks['my_alert'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("um...say:")
        .appendField(new Blockly.FieldTextInput("hello"), "my_content");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(colourOfCustom);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

