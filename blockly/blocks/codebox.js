'use strict';

goog.require('Blockly.JavaScript');

var colourOfCodebox = 120;

Blockly.Blocks['codebox_forward'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField("forward");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(colourOfCodebox);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['codebox_backward'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField("backward");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(colourOfCodebox);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['codebox_turnleft'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField("turn left");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(colourOfCodebox);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['codebox_turnright'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField("turn right");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(colourOfCodebox);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['codebox_leftspin'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField("left spin");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(colourOfCodebox);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['codebox_rightspin'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField("right spin");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(colourOfCodebox);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['codebox_stop'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField("stop");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(colourOfCodebox);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

