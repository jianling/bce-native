import { Plugin, Cordova } from './plugin';

/**
 * @name MTJ
 * @description
 * Cordova / Phonegap plugin for baidu push. Supports iOS.
 */
@Plugin({
  pluginName: 'MTJ',
  plugin: 'cordova-plugin-mtj',
  pluginRef: 'mtj',
  repo: '',
  platforms: ['iOS']
})
export class MTJ {

  @Cordova()
  static eventStart(eventId: string, eventLabel: string): Promise<void> { return; }

  @Cordova()
  static eventEnd(eventId: string, eventLabel: string): Promise<void> { return; }

  @Cordova()
  static logEvent(eventId: string, eventLabel: string): Promise<void> { return; }

  @Cordova()
  static logEventWithDurationTime(eventId: string, eventLabel: string, duration: number): Promise<void> { return; }

  @Cordova()
  static pageviewStartWithName(name: string): Promise<void> { return; }

  @Cordova()
  static pageviewEndWithName(name: string): Promise<void> { return; }

}
