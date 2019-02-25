# Weather

React native implementation of the Weather App.

# Run the app in development

You need to have Xcode (mac only) and Android Studio installed for the simulators and projects. You'll also need Node, Watchman, React Devtools and the React Native CLI.

```
brew install node
brew install watchman
npm install -g react-native-cli
npm install -g react-devtools
```

After you have finished installing, run yarn to install the dependencies. 

Go into the project folder via CLI

```
$ cd Weather
```

## Launch the iOS simulator

There are yarn scripts available to quickly launch iOS, to launch the iOS simulator run:

```
$ yarn run ios
```

First time setup will take a while, but once it's done, you can enable hot reloading by shaking the device (cmd + d for iOS) and enabling 'Hot Reload'.

## Android

The Android implementation for this app will not launch, the reason for that is [this issue](https://github.com/facebook/react-native/issues/18692)

I did not have any more time to update my RN version to fix the issue.

## Demo

If you have any troubles running the iOS build, you can find a demo of the app [here](https://github.com/vixez/SanderBruggeTest/blob/master/demo.mov?raw=true)

## Extra info

As requested in the specs, the detail-page has a static map that can't be moved. I would achieve this by using an image for performance reasons. I decided to use [MapBox](https://www.mapbox.com/) which does not offer the API for fetching png's of coordinates on their [free tier](https://docs.mapbox.com/help/how-mapbox-works/static-maps/#high-resolution-images). 
