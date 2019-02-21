import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
// @ts-ignore no official @types declaration files
import MapboxGL from '@mapbox/react-native-mapbox-gl';

MapboxGL.setAccessToken('sk.eyJ1Ijoic2FuZGVyYnJ1Z2dlIiwiYSI6ImNqc2Via2oyYjB3cHY0M3RiYmhtY2NqNmIifQ.vJXyD8y5dZNOIS6JAKZWJw');

export default class Home extends Component<{}> {
  navigationOptions = {
    header: null
  }

  render() {
    return (
      <View style={styles.container}>
        <MapboxGL.MapView
            styleURL={MapboxGL.StyleURL.Street}
            zoomLevel={15}
            centerCoordinate={[11.256, 43.770]}
            style={styles.container}>
        </MapboxGL.MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});