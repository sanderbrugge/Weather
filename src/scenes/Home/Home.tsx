import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import { getDay } from 'date-fns';
// @ts-ignore no official @types declaration files
import MapboxGL from '@mapbox/react-native-mapbox-gl';
import { TOKEN, BAZOOKASLATLNG } from '../../Config';
import MapView from '../../components/MapView';
import { fetchWeatherDataCoordinates } from '../../api/OpenWeather/OpenWeather';
import { OpenWeather } from '../../api/OpenWeather/OpenWeather.interfaces';
import { getDayName } from '../../util/Const';
import Row from '../../components/Row';

MapboxGL.setAccessToken(TOKEN);

interface IState {
  weatherInfo?: OpenWeather;
}

export interface MappedOpenWeather {
  day: string;
  description: string;
}

function mapWeatherInfo(weatherInfo: OpenWeather) {
  return weatherInfo.list.reduce<MappedOpenWeather[]>((accum, item) => {
    const obj = {
      day: getDayName(getDay(item.dt_txt)),
      description: item.weather[0].description
    }

    if (!!!accum.find(mapped => mapped.day === getDayName(getDay(item.dt_txt)))) {
      accum.push(obj)
    }

    return accum;
  }, []);
}

class Home extends Component<{}, IState> {
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

    return (
      <View style={{ flex: 1 }}>
        <MapView startCoordinates={[BAZOOKASLATLNG.lat, BAZOOKASLATLNG.lon]} />
        <View style={{ flex: 1, backgroundColor: 'purple' }}>
          {weatherInfo &&
            <FlatList
              data={mapWeatherInfo(weatherInfo)}
              renderItem={({ item }) => <Row key={item.day} info={item} />}
              keyExtractor={item => item.day}
            />
          }
        </View>
      </View>
    );
  }
}

export default Home;
