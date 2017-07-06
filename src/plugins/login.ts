import { Plugin, Cordova } from './plugin';

/**
 * @name baidu login
 * @description
 * Cordova / Phonegap plugin for multi webview
 */
@Plugin({
  pluginName: 'Login',
  plugin: 'cordova-plugin-login',
  pluginRef: 'Login',
  repo: ''
})
export class Login {

  @Cordova()
  static getCookie(url: string): Promise<void> { return; }

  @Cordova()
  static getCookieValue(url: string, cookieName: string): Promise<void> { return; }

  @Cordova()
  static showLoginView(): void { }

  @Cordova()
  static logout(): void { }

}
