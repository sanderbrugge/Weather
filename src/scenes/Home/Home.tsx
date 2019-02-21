import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
// @ts-ignore no official @types declaration files
import MapboxGL from '@mapbox/react-native-mapbox-gl';
import { TOKEN } from '../../Config';

MapboxGL.setAccessToken(TOKEN);

interface IState {
  pinnedCoordinate?: number[];
}

interface GeometryDetails {
  geometry: {
    coordinates: number[],
    type: string
  },
  properties: {
    screenPointX: number
    screenPointY: number
  },
  type: string
}

export default class Home extends Component<{}, IState> {
  map: MapboxGL.MapView;

  state = {
    pinnedCoordinate: undefined
  }
  
  onPress = (e: GeometryDetails) => {
    this.setState({ pinnedCoordinate: e.geometry.coordinates })
  };

  render() {
    const { pinnedCoordinate } = this.state;

    return (
      <View style={styles.container}>
        <MapboxGL.MapView
          logoEnabled={false}
          compassEnabled={false}
          ref={(c: MapboxGL.MapView) => (this.map = c)}
          styleURL={MapboxGL.StyleURL.Street}
          zoomLevel={10}
          centerCoordinate={[3.2140535, 51.2067714]}
          style={styles.container}
          onPress={this.onPress}
        >
          {pinnedCoordinate &&
            <MapboxGL.PointAnnotation id={'point'} coordinate={pinnedCoordinate} />
          }
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