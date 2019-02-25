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

## Demo

If you have any troubles running the iOS build, you can find a demo of the app here: https://github.com/vixez/SanderBruggeTest/blob/master/demo.mov?raw=true
