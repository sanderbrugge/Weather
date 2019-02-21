import React, { Component } from 'react';
import { View } from 'react-native';
// @ts-ignore no official @types declaration files
import MapboxGL from '@mapbox/react-native-mapbox-gl';
import { TOKEN, BAZOOKASLATLNG } from '../../Config';
import MapView from '../../components/MapView/MapView';

MapboxGL.setAccessToken(TOKEN);

export default class Home extends Component<{}> {
  render() {

    return (
      <View style={{ flex: 1 }}>
        <MapView startCoordinates={BAZOOKASLATLNG} />
      </View>
    );
  }
}
