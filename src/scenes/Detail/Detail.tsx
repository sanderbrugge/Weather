import * as React from 'react';
import { Text, View, StatusBar, FlatList } from 'react-native';
import { NavigationInjectedProps, NavigationParams, withNavigation } from 'react-navigation';
import { BAZOOKASLATLNG } from '../../Config';
import { colors } from '../../styles/base';
import * as Animatable from 'react-native-animatable';
import DetailRow from '../../components/DetailRow';
import { MappedOpenWeather, Forecast } from '../Home/Home';
import { fetchTeleportData } from '../../api/Teleport/Teleport';
import { DetailStyles } from './DetailStyles';
import Header from '../../components/Header';

interface IProps extends NavigationInjectedProps<NavigationParams> { }

class Detail extends React.Component<IProps> {
  navTitleView = React.createRef<Animatable.View>();

  getLandInfo = async (lat: number, lon: number) => {
    try {
      const response = await fetchTeleportData(lat, lon);
      console.log(response._embedded["location:nearest-cities"][0]._embedded["location:nearest-city"].full_name);
      console.log(response._embedded["location:nearest-cities"][0]._embedded["location:nearest-city"].population);
      console.log(response._embedded["location:nearest-cities"][0]._embedded["location:nearest-city"]._links["city:timezone"].name);
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    const coordinates = this.props.navigation.getParam('coordinates', [BAZOOKASLATLNG.lat, BAZOOKASLATLNG.lon]);
    const info = this.props.navigation.getParam('info', {}) as Forecast;
    const bgColor = this.props.navigation.getParam('bgColor', colors.blue);
    const data = Object.values(info) as MappedOpenWeather[];

    this.getLandInfo(coordinates[1], coordinates[0]);

    return (
      <View style={DetailStyles.container}>
        <StatusBar barStyle="light-content" />
        <Header
          title={'Forecast'}
          coordinates={coordinates}
          bgColor={bgColor}
          child={
            <>
              <Text style={DetailStyles.sectionTitle}>Forecast</Text>

              <FlatList
                data={data.slice(1)}
                horizontal
                renderItem={({ item }) => <DetailRow key={item.day} info={item} />}
                keyExtractor={(item) => item.day}
              />

              <Text style={DetailStyles.sectionTitle}>Info</Text>
            </>
          }
        />
      </View>
    );
  }
}

export default withNavigation(Detail);
