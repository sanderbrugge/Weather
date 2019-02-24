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
import { withNavigation, NavigationInjectedProps, NavigationParams } from 'react-navigation';

MapboxGL.setAccessToken(TOKEN);

export interface MappedOpenWeather {
  day: string;
  main: WeatherMain;
  description: string;
  maxTemp: number;
  minTemp: number;
  humidity: number[];
  temp: number[]
  windSpeed: number[];
}

export interface Forecast {
  [x: string]: MappedOpenWeather;
}

function mapInfo(weatherInfo: OpenWeather) {
  return weatherInfo.list.reduce<Forecast>((accum, item) => {
    const obj = {
      day: getDayName(getDay(item.dt_txt)),
      main: item.weather[0].main,
      description: item.weather[0].description,
      maxTemp: item.main.temp_max,
      minTemp: item.main.temp_min,
      humidity: [item.main.humidity],
      windSpeed: [item.wind.speed],
      temp: [item.main.temp]
    }

    if (!accum[obj.day]) {
      accum[obj.day] = obj;
      return accum;
    }

    if(accum[obj.day].minTemp > obj.minTemp) {
      accum[obj.day].minTemp = obj.minTemp;
    }

    if(accum[obj.day].maxTemp < obj.maxTemp) {
      accum[obj.day].maxTemp = obj.maxTemp;
    }

    return accum;
  }, {});
}

interface IProps extends NavigationInjectedProps<NavigationParams> { }

interface IState {
  weatherInfo?: OpenWeather;
  coordinates: number[];
  bgColor: string;
}

class Home extends Component<IProps, IState> {
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

  onDaySelect = () => {
    const { weatherInfo, coordinates, bgColor } = this.state;
    if (weatherInfo) {
      const info = mapInfo(weatherInfo)

      this.props.navigation.navigate('Detail', { 'info': info, 'coordinates': coordinates, 'bgColor': bgColor });
    }
  }

  render() {
    const { weatherInfo, coordinates, bgColor } = this.state;

    if(weatherInfo) {
      console.log(mapInfo(weatherInfo));
    }


    return (
      <View style={{ flex: 1 }}>
        <MapView coordinates={coordinates} updateCoordinates={this.updateCoordinates} zoomEnabled pitchEnabled scrollEnabled />
        <View style={{ flex: 1, backgroundColor: bgColor }}>
          {weatherInfo &&
            <FlatList
              data={Object.values(mapInfo(weatherInfo)).slice(1)}
              renderItem={({ item, index }) => <Row key={index} info={item} onPress={this.onDaySelect} />}
              keyExtractor={(item) => item.day}
            />
          }
        </View>
      </View>
    );
  }
}

export default withNavigation(Home);
