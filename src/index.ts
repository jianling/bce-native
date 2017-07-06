import { initAngular1 } from './ng1';

const DEVICE_READY_TIMEOUT = 2000;

declare var window;

import { AppVersion } from './plugins/appversion';
import { BDPush } from './plugins/bdpush';
import { CallNumber } from './plugins/call-number';
import { Device } from './plugins/device';
import { HTTP } from  './plugins/http';
import { InAppBrowser } from './plugins/inappbrowser';
import { Keyboard } from './plugins/keyboard';
import { MTJ } from './plugins/mtj';
import { Multiview } from './plugins/multiview';
import { NativeStorage } from './plugins/nativestorage';
import { Payment } from './plugins/payment';
import { Splashscreen } from './plugins/splashscreen';
import { StatusBar } from './plugins/statusbar';

export * from './plugins/appversion';
export * from './plugins/bdpush';
export * from './plugins/call-number';
export * from './plugins/device';
export * from './plugins/http';
export * from './plugins/inappbrowser';
export * from './plugins/keyboard';
export * from './plugins/mtj';
export * from './plugins/multiview';
export * from './plugins/nativestorage';
export * from './plugins/payment';
export * from './plugins/splashscreen';
export * from './plugins/statusbar';

// Window export to use outside of a module loading system
window['IonicNative'] = {
  AppVersion,
  BDPush,
  CallNumber,
  Device,
  HTTP,
  InAppBrowser,
  Keyboard,
  MTJ,
  Multiview,
  NativeStorage,
  Payment,
  Splashscreen,
  StatusBar
};

initAngular1(window['IonicNative']);

// To help developers using cordova, we listen for the device ready event and
// log an error if it didn't fire in a reasonable amount of time. Generally,
// when this happens, developers should remove and reinstall plugins, since
// an inconsistent plugin is often the culprit.
const before = Date.now();

let didFireReady = false;
document.addEventListener('deviceready', () => {
  console.log('DEVICE READY FIRED AFTER', (Date.now() - before), 'ms');
  didFireReady = true;
});

setTimeout(() => {
  if (!didFireReady && window.cordova) {
    console.warn(`Native: deviceready did not fire within ${DEVICE_READY_TIMEOUT}ms. This can happen when plugins are in an inconsistent state. Try removing plugins from plugins/ and reinstalling them.`);
  }
}, DEVICE_READY_TIMEOUT);
