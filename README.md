
[![NPM](https://nodei.co/npm/bce-native.png?stars&downloads)](https://nodei.co/npm/bce-native/)
[![NPM](https://nodei.co/npm-dl/bce-native.png?months=6&height=2)](https://nodei.co/npm/bce-native/)

# Ionic Native

Ionic Native is a curated set of wrappers for Cordova plugins that make adding any native functionality you need to your [Ionic](http://ionicframework.com/), Cordova, or Web View mobile app easy.

### Documentation

For the full Ionic Native documentation, please visit [http://ionicframework.com/docs/v2/native/](http://ionicframework.com/docs/v2/native/).

### Promises and Observables

Ionic Native wraps plugin callbacks in a Promise or [Observable](https://gist.github.com/staltz/868e7e9bc2a7b8c1f754), providing a common interface for all plugins and ensuring that native events trigger change detection in Angular 2.

```
import { Geolocation } from 'bce-native';

Geolocation.getCurrentPosition().then(pos => {
  console.log('lat: ' + pos.coords.latitude + ', lon: ' + pos.coords.longitude);
});

let watch = Geolocation.watchPosition().subscribe(pos => {
  console.log('lat: ' + pos.coords.latitude + ', lon: ' + pos.coords.longitude);
});

// to stop watching
watch.unsubscribe();
```

## Installation

Run following commmand to install ionic-native in your project.
```
npm install bce-native --save
```
