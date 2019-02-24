import * as React from 'react';
import { Text, View } from 'react-native';
import HeaderImageScrollView, { TriggeringView } from 'react-native-image-header-scroll-view';
import MapView from '../../components/MapView';
import { BAZOOKASLATLNG } from '../../Config';

class Detail extends React.Component<{}> {
  render() {
    return (
      <HeaderImageScrollView
        maxHeight={250}
        minHeight={80}
        renderHeader={() => (
          <MapView
            coordinates={[BAZOOKASLATLNG.lat, BAZOOKASLATLNG.lon]}
            zoomEnabled={false}
            pitchEnabled={false}
            scrollEnabled={false}
          />

        )}
      >
        <View style={{ height: 1000 }}>
          <TriggeringView onHide={() => console.log("text hidden")}>
            <Text>Scroll Me!</Text>
          </TriggeringView>
        </View>
      </HeaderImageScrollView>
    );
  }
}

export default Detail;