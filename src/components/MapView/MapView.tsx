import * as React from 'react';
import { View } from 'react-native';
// @ts-ignore no official @types declaration files
import MapboxGL from '@mapbox/react-native-mapbox-gl';
import { MapViewStyles } from './styles';

interface IProps {
  startCoordinates: number[]
}

interface IState {
  pinnedCoordinate?: number[];
}

interface GeometryDetails {
  geometry: {
    coordinates: number[],
    type: string
  },
  properties: {
    screenPointX: number
    screenPointY: number
  },
  type: string
}


class MapView extends React.Component<IProps, IState> {
  map: MapboxGL.MapView;

  state = {
    pinnedCoordinate: undefined
  }
  
  onPress = (e: GeometryDetails) => {
    this.setState({ pinnedCoordinate: e.geometry.coordinates })
  };

  render() {
    const { pinnedCoordinate } = this.state;
    const { startCoordinates } = this.props

    return (
      <View style={[MapViewStyles.container, {  }]}>
        <MapboxGL.MapView
          logoEnabled={false}
          compassEnabled={false}
          ref={(c: MapboxGL.MapView) => (this.map = c)}
          styleURL={MapboxGL.StyleURL.Street} 
          zoomLevel={10}
          centerCoordinate={startCoordinates}
          style={MapViewStyles.container}
          onPress={this.onPress}
        >
          {pinnedCoordinate &&
            <MapboxGL.PointAnnotation id={'point'} coordinate={pinnedCoordinate} />
          }
        </MapboxGL.MapView>
      </View>
    );
  }

}

export default MapView;
