import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import { getDay } from 'date-fns';
// @ts-ignore no official @types declaration files
import MapboxGL from '@mapbox/react-native-mapbox-gl';
import { TOKEN, BAZOOKASLATLNG } from '../../Config';
import MapView from '../../components/MapView';
import { fetchWeatherDataCoordinates } from '../../api/OpenWeather/OpenWeather';
import { OpenWeather, Coordinates, WeatherMain } from '../../api/OpenWeather/OpenWeather.interfaces';
import { getDayName } from '../../util/Const';
import Row from '../../components/Row';
import { GeometryDetails } from '../../components/MapView/MapView';
import { colors, listViewBGColors } from '../../styles/base';

MapboxGL.setAccessToken(TOKEN);

export interface MappedOpenWeather {
  day: string;
  main: WeatherMain;
  description: string;
  maxTemp: number;
  minTemp: number;
  humidity: number;
  windSpeed: number;
}

export interface Forecast {
  [x: string]: MappedOpenWeather[];
}

function mapWeatherInfo(weatherInfo: OpenWeather) {
  return weatherInfo.list.reduce<Forecast>((accum, item) => {
    const obj = {
      day: getDayName(getDay(item.dt_txt)),
      main: item.weather[0].main,
      description: item.weather[0].description,
      maxTemp: item.main.temp_max,
      minTemp: item.main.temp_min,
      humidity: item.main.humidity,
      windSpeed: item.wind.speed
    }

    if (!accum[obj.day]) {
      accum[obj.day] = [obj];
      return accum;
    }

    accum[obj.day] = accum[obj.day].concat(obj);
    return accum;
  }, {});
}

interface IState {
  weatherInfo?: OpenWeather;
  coordinates: number[];
  bgColor: string;
}

class Home extends Component<{}, IState> {
  state: IState = {
    weatherInfo: undefined,
    coordinates: [BAZOOKASLATLNG.lat, BAZOOKASLATLNG.lon],
    bgColor: colors.blue
  }

  componentDidMount() {
    this.fetchWeatherData(BAZOOKASLATLNG);
  }

  fetchWeatherData = async (coordinates: Coordinates) => {
    try {
      const response = await fetchWeatherDataCoordinates(coordinates.lat, coordinates.lon);
      this.setState({ weatherInfo: response, bgColor: this.getRandomColor() });
    } catch (e) {
      console.log(e);
    }
  }

  updateCoordinates = (e: GeometryDetails) => {
    const coordinates = {
      lat: e.geometry.coordinates[0],
      lon: e.geometry.coordinates[1],
    }

    this.setState({ coordinates: e.geometry.coordinates })

    this.fetchWeatherData(coordinates);
  };

  getRandomColor = () => {
    // @ts-ignore
    const availableColors = Object.keys(listViewBGColors).filter(color => listViewBGColors[color] !== this.state.bgColor);
    const keys = Object.keys(availableColors)
    // @ts-ignore
    return availableColors[keys[keys.length * Math.random() << 0]];
  }



  render() {
    const { weatherInfo, coordinates, bgColor } = this.state;

    return (
      <View style={{ flex: 1 }}>
        <MapView coordinates={coordinates} updateCoordinates={this.updateCoordinates} />
        <View style={{ flex: 1, backgroundColor: bgColor }}>
          {weatherInfo &&
            <FlatList
              data={Object.values(mapWeatherInfo(weatherInfo)).slice(1)}
              renderItem={({ item, index }) => <Row key={index} info={item} />}
              keyExtractor={(item, index) => item[index].day}
            />
          }
        </View>
      </View>
    );
  }
}

export default Home;
