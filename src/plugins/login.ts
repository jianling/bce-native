import { Plugin, Cordova } from './plugin';

/**
 * @name baidu login
 * @description
 * Cordova / Phonegap plugin for baidu login
 */
@Plugin({
  pluginName: 'Login',
  plugin: 'cordova-plugin-login',
  pluginRef: 'Login',
  repo: ''
})
export class Login {

  @Cordova()
  static getCookie(url: string): Promise<any> { return; }

  @Cordova()
  static getCookieValue(url: string, cookieKey: string): Promise<any> { return; }

  @Cordova()
  static showPASSQRCodeScanViewController(): Promise<any> { return; }

  @Cordova()
  static showPASSAccountRealNameViewController(): Promise<any> { return; }

  @Cordova()
  static showLoginView(): Promise<any> { return; }

  @Cordova()
  static showPassLoginView(): Promise<any> { return; }

  @Cordova()
  static showUCLoginView(): Promise<any> { return; }

  @Cordova()
  static showUCRegisterView(): Promise<any> { return; }

  @Cordova()
  static ucLoginSuccess(url: Object): Promise<any> { return; }

  @Cordova()
  static popView(): void { }

  @Cordova()
  static logout(): Promise<any> { return; }

}
