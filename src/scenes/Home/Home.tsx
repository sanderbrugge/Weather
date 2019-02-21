import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
// @ts-ignore no official @types declaration files
import MapboxGL from '@mapbox/react-native-mapbox-gl';
import { TOKEN } from '../../Config';

MapboxGL.setAccessToken(TOKEN);

export default class Home extends Component<{}> {
  map;

  componentDidMount() {
    console.log('sup');
    console.log(this.map);
  }

  onPress = (e) => console.log(`clicked a location ${e}`);

  render() {
    return (
      <View style={styles.container}>
        <MapboxGL.MapView
          logoEnabled={false}
          compassEnabled={false}
          ref={(c) => (this.map = c)} 
          styleURL={MapboxGL.StyleURL.Street}
          zoomLevel={15}
          centerCoordinate={[11.256, 43.770]}
          style={styles.container}
          onPress={this.onPress}
        >
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