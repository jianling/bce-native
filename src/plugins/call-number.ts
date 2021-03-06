import { Plugin, Cordova } from './plugin';

/**
 * @name CallNumber
 * @description
 * Call a number directly from your Cordova/Ionic application.
 *
 * @usage
 * ```
 * import {CallNumber} from 'ionic-native';
 *
 * CallNumber.callNumber(18001010101, true)
 *   .then(() => console.log('Launched dialer!'))
 *   .catch(() => console.log('Error launching dialer'));
 *
 * ```
 */
@Plugin({
  plugin: 'call-number',
  pluginRef: 'plugins.CallNumber',
  repo: 'https://github.com/Rohfosho/CordovaCallNumberPlugin',
  platforms: ['Android', 'iOS']
})
export class CallNumber {
  /**
   * Calls a phone number
   * @param numberToCall {string} The phone number to call as a string
   * @param bypassAppChooser {boolean} Set to true to bypass the app chooser and go directly to dialer
   */
  @Cordova({
    callbackOrder: 'reverse'
  })
  static callNumber(numberToCall: string, bypassAppChooser: boolean): Promise<any> {
    return;
  }
}
