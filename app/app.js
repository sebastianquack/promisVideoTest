import {App, Platform} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {TabsPage} from './pages/tabs/tabs';


@App({
  template: '<ion-nav [root]="rootPage"></ion-nav>',
  config: {} // http://ionicframework.com/docs/v2/api/config/Config/
})
export class MyApp {
  static get parameters() {
    return [[Platform]];
  }

  constructor(platform) {
    this.rootPage = TabsPage;

    platform.ready().then(() => {
      if (window.cordova) {
        if (window.cordova.plugins && window.cordova.plugins.Keyboard) {
          cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
          cordova.plugins.Keyboard.disableScroll(true);
        }

        if (StatusBar) {
          StatusBar.styleDefault();
        }
        
        var permissions = cordova.plugins.permissions;  
        permissions.requestPermission(permissions.WRITE_EXTERNAL_STORAGE, 
          function(msg) { console.log("permission success: " + JSON.stringify(msg)) },
          function(msg) { console.log("permission error: " + JSON.stringify(msg)) })
        
      }
    });
  }
}
