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
  static getCookieValue(url: string, cookieName: string): Promise<any> { return; }

  @Cordova()
  static showLoginView(): void { }

  @Cordova()
  static logout(): void { }

}
