import React, { Component } from 'react';
import { View } from 'react-native';
// @ts-ignore no official @types declaration files
import MapboxGL from '@mapbox/react-native-mapbox-gl';
import { TOKEN, BAZOOKASLATLNG } from '../../Config';
import MapView from '../../components/MapView';
import { fetchWeatherDataCoordinates } from '../../api/OpenWeather/OpenWeather';

MapboxGL.setAccessToken(TOKEN);

export default class Home extends Component<{}> {
  async componentDidMount() {
    try {
      const response = await fetchWeatherDataCoordinates(BAZOOKASLATLNG.lat, BAZOOKASLATLNG.lon);
      console.log(response)
    } catch (e) {
      console.log(e);
    }
  }

  render() {

    return (
      <View style={{ flex: 1 }}>
        <MapView startCoordinates={[BAZOOKASLATLNG.lat, BAZOOKASLATLNG.lon]} />
        <View style={{ flex: 1 }}></View>
      </View>
    );
  }
}
