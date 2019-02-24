import * as React from 'react';
import { Text, View, StatusBar, FlatList } from 'react-native';
import { NavigationInjectedProps, NavigationParams, withNavigation } from 'react-navigation';
import { BAZOOKASLATLNG } from '../../Config';
import { colors, dimensions } from '../../styles/base';
import DetailRow from '../../components/DetailRow';
import { MappedOpenWeather, Forecast } from '../Home/Home';
import { fetchTeleportData } from '../../api/Teleport/Teleport';
import { DetailStyles } from './DetailStyles';
import Header from '../../components/Header';
import { Icons } from 'react-native-fontawesome';
import DetailText from '../../components/DetailText/DetailText';
import { DetailRowStyles } from '../../components/DetailRow/DetailRowStyles';
import { Weekday } from '../../util/Const';

interface LandInfo {
  name: string;
  population: number;
  timezone: string;
}

interface IProps extends NavigationInjectedProps<NavigationParams> { }

interface IState {
  landInfo?: LandInfo;
}

class Detail extends React.Component<IProps, IState> {
  state: IState = {
    landInfo: undefined
  }

  componentDidMount() {
    const coordinates = this.props.navigation.getParam('coordinates', [BAZOOKASLATLNG.lat, BAZOOKASLATLNG.lon]);
    this.getLandInfo(coordinates[1], coordinates[0]);
  }

  getLandInfo = async (lat: number, lon: number) => {
    try {
      const response = await fetchTeleportData(lat, lon);

      const fullName = response._embedded["location:nearest-cities"][0]._embedded["location:nearest-city"].full_name;
      const population = response._embedded["location:nearest-cities"][0]._embedded["location:nearest-city"].population;
      const timezone = response._embedded["location:nearest-cities"][0]._embedded["location:nearest-city"]._links["city:timezone"].name;

      this.setState({ landInfo: { name: fullName, population: population, timezone: timezone } });

    } catch (e) {
      console.log(e);
    }
  }

  render() {
    const { landInfo } = this.state;

    const coordinates = this.props.navigation.getParam('coordinates', [BAZOOKASLATLNG.lat, BAZOOKASLATLNG.lon]);
    const info = this.props.navigation.getParam('info', {}) as Forecast;
    const bgColor = this.props.navigation.getParam('bgColor', colors.blue);
    const selected = this.props.navigation.getParam('index', Weekday.MONDAY);
    const data = Object.values(info) as MappedOpenWeather[];

    return (
      <View style={DetailStyles.container}>
        <StatusBar barStyle="light-content" />
        <Header
          title={'Forecast'}
          coordinates={coordinates}
          bgColor={bgColor}
          child={
            <View style={{ flex: 1 }}>
              <Text style={DetailStyles.sectionTitle}>Forecast</Text>

              <View style={{ height: 150 }}>
                <FlatList
                  data={data.slice(1)}
                  horizontal
                  renderItem={({ item }) => <DetailRow key={item.day} info={item} selected={item.day === selected} />}
                  keyExtractor={(item) => item.day}
                />
              </View>


              <Text style={DetailStyles.sectionTitle}>Info</Text>
              {landInfo &&
                <View style={DetailRowStyles.borderlessContainer}>
                  <View style={{ marginLeft: 10 }}>
                    <DetailText icon={Icons.clock} text={landInfo.timezone} />
                    <DetailText icon={Icons.map} text={landInfo.name} />
                    <DetailText icon={Icons.user} text={`${landInfo.population}`} />
                  </View>
                </View>
              }
            </View>
          }
        />
      </View>
    );
  }
}

export default withNavigation(Detail);
