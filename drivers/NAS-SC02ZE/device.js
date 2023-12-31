'use strict';

const Homey = require('homey');
const { ZwaveDevice } = require('homey-zwavedriver');

class WallSwitchDual_SC02ZE extends ZwaveDevice {

  async onNodeInit() {
    // enable debugging
    // this.enableDebug();

    // print the node's info to the console
    // this.printNode();

    // register device capabilities
    this.registerCapability('onoff', 'SWITCH_BINARY');

    //===== Led On/Off
    let SC02ZE_LED_mode_run_listener = async (args) => {
      this.log('FlowCardAction Set Led Mode to: ', args.switch_LED_onoff);
      this.configurationSet({
        id: 'backlight'
      }, args.switch_LED_onoff);
    };
    let actionSC02ZE_led_mode = this.homey.flow.getActionCard('SC02ZE_switch_LED');
  }
}
module.exports = WallSwitchDual_SC02ZE;
