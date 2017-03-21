import { Plugin, Cordova } from './plugin';

/**
 * @name BDPush
 * @description
 * Cordova / Phonegap plugin for baidu push. Supports iOS.
 */
@Plugin({
  pluginName: 'BDPush',
  plugin: 'cordova-plugin-bdpush',
  pluginRef: 'BDPush',
  repo: '',
  platforms: ['iOS']
})
export class BDPush {

  @Cordova()
  static registerNotifications(): Promise<void> { return; }

  @Cordova()
  static unregisterNotifications(): Promise<void> { return; }

}
