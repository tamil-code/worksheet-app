/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {  registerTranslation,en } from 'react-native-paper-dates'
import PushNotification from "react-native-push-notification";
import { firebase } from '@react-native-firebase/messaging';
registerTranslation('en', en)

PushNotification.configure({
    largeIcon: "ic_notification",
    smallIcon: "ic_notification",
  
    onNotification: function (notification) {
        console.log("NOTIFICATION:", notification)
    
      },
      requestPermissions: Platform.OS === 'ios'
})

AppRegistry.registerComponent(appName, () => App);
