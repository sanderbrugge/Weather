import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { getDay } from 'date-fns';
// @ts-ignore no official @types declaration files
import MapboxGL from '@mapbox/react-native-mapbox-gl';
import { TOKEN, BAZOOKASLATLNG } from '../../Config';
import MapView from '../../components/MapView';
import { fetchWeatherDataCoordinates } from '../../api/OpenWeather/OpenWeather';
import { OpenWeather } from '../../api/OpenWeather/OpenWeather.interfaces';
import { getDayName } from '../../util/Const';

MapboxGL.setAccessToken(TOKEN);

interface IState {
  weatherInfo?: OpenWeather;
}

// group days based on date, check which weather description occurs the most and use that as indicator in the listview

export default class Home extends Component<{}, IState> {
  state: IState = {
    weatherInfo: undefined
  }

  async componentDidMount() {
    try {
      const response = await fetchWeatherDataCoordinates(BAZOOKASLATLNG.lat, BAZOOKASLATLNG.lon);
      this.setState({ weatherInfo: response });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    const { weatherInfo } = this.state;
    if (weatherInfo) {
      console.log(getDayName(getDay(weatherInfo.list[0].dt_txt)));
    }
    return (
      <View style={{ flex: 1 }}>
        <MapView startCoordinates={[BAZOOKASLATLNG.lat, BAZOOKASLATLNG.lon]} />
        <View style={{ flex: 1, backgroundColor: 'blue' }}>

        </View>
      </View>
    );
  }
}
