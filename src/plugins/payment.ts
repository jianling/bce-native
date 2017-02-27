import { Plugin, Cordova } from './plugin';

/**
 * @name payment
 * @description
 * Cordova / Phonegap plugin for alipay and weixinpay. Supports iOS.
 */
@Plugin({
  pluginName: 'Payment',
  plugin: 'cordova-plugin-payment',
  pluginRef: 'Payment',
  repo: '',
  platforms: ['iOS']
})
export class Payment {

  @Cordova()
  static pay(signedString: string): Promise<void> { return; }

}
