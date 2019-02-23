import * as React from 'react';
import { View } from 'react-native';
// @ts-ignore no official @types declaration files
import MapboxGL from '@mapbox/react-native-mapbox-gl';
import { MapViewStyles } from './styles';

interface IProps {
  coordinates: number[]
  updateCoordinates: (e: GeometryDetails) => void;
}

export interface GeometryDetails {
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


class MapView extends React.Component<IProps> {
  map: MapboxGL.MapView;

  render() {
    const { coordinates, updateCoordinates } = this.props

    return (
      <View style={[MapViewStyles.container, {}]}>
        <MapboxGL.MapView
          logoEnabled={false}
          compassEnabled={false}
          ref={(c: MapboxGL.MapView) => (this.map = c)}
          styleURL={MapboxGL.StyleURL.Street}
          zoomLevel={8}
          centerCoordinate={coordinates}
          style={MapViewStyles.container}
          onPress={updateCoordinates}
        >
          <MapboxGL.PointAnnotation id={'point'} coordinate={coordinates} />
        </MapboxGL.MapView>
      </View>
    );
  }

}

export default MapView;
