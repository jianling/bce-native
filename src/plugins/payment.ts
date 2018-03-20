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
  platforms: ['Android', 'iOS']
})
export class Payment {

  @Cordova()
  static alipay(signedString: string): Promise<void> { return; }

  @Cordova()
  static wxpay(param: Object): Promise<void> { return; }

}
