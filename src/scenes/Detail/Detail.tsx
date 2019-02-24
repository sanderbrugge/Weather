import * as React from 'react';
import { Text, View, StatusBar, FlatList } from 'react-native';
import HeaderImageScrollView, { TriggeringView } from 'react-native-image-header-scroll-view';
import MapView from '../../components/MapView';
import { NavigationInjectedProps, NavigationParams, withNavigation } from 'react-navigation';
import { BAZOOKASLATLNG } from '../../Config';
import { colors } from '../../styles/base';
import * as Animatable from 'react-native-animatable';
import DetailRow from '../../components/DetailRow';
import { MappedOpenWeather } from '../Home/Home';

interface IProps extends NavigationInjectedProps<NavigationParams> { }

class Detail extends React.Component<IProps> {
  navTitleView = React.createRef<Animatable.View>();

  render() {
    const coordinates = this.props.navigation.getParam('coordinates', [BAZOOKASLATLNG.lat, BAZOOKASLATLNG.lon]);
    const info = this.props.navigation.getParam('info', {});
    const bgColor = this.props.navigation.getParam('bgColor', colors.blue);
    const data = Object.values(info) as MappedOpenWeather[];

    return (
      <View style={{ flex: 1, backgroundColor: bgColor }}>
        <StatusBar barStyle="light-content" />
        <HeaderImageScrollView
          maxOverlayOpacity={0.6}
          minOverlayOpacity={0.1}
          maxHeight={250}
          minHeight={80}
          renderHeader={() => (
            <MapView
              coordinates={coordinates}
              zoomEnabled={false}
              pitchEnabled={false}
              scrollEnabled={false}
            />
          )}
          renderFixedForeground={() => (
            <Animatable.View
              style={{
                height: 80,
                justifyContent: 'center',
                alignItems: 'center',
                paddingTop: 16,
                opacity: 0
              }}
              ref={navTitleView => {
                this.navTitleView = navTitleView;
              }}
            >
              <Text style={{
                color: 'white',
                fontSize: 18,
                backgroundColor: 'transparent'
              }}>
                Forecast
              </Text>
            </Animatable.View>
          )}
        >
          <View style={{ backgroundColor: bgColor }}>
            <TriggeringView
              onHide={() => this.navTitleView.fadeInUp(200)}
              onDisplay={() => this.navTitleView.fadeOut(100)}
            >
              <Text style={{
                paddingLeft: 20,
                paddingTop: 20,
                paddingRight: 10,
                fontSize: 25,
                fontWeight: 'bold',
                color: colors.white
              }}>Forecast</Text>

              <FlatList
                data={data.slice(1)}
                horizontal
                renderItem={({ item }) => <DetailRow key={item.day} info={item} />}
                keyExtractor={(item) => item.day}
              />

            </TriggeringView>
          </View>
        </HeaderImageScrollView>
      </View>
    );
  }
}

export default withNavigation(Detail);
