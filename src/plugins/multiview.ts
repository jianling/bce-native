import { Plugin, Cordova } from './plugin';

/**
 * @name multiview
 * @description
 * Cordova / Phonegap plugin for multi webview
 */
@Plugin({
  pluginName: 'Multiview',
  plugin: 'cordova-plugin-multiview',
  pluginRef: 'Multiview',
  repo: ''
})
export class Multiview {

  @Cordova()
  static pushView(moduleName: string, moduleTitle: string, moduleConfigFile: string): void { }

  @Cordova()
  static popView(): void { }

  @Cordova()
  static hideNavigationBar(): void { }

}
