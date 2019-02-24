import * as React from 'react';
import HeaderImageScrollView, { TriggeringView } from 'react-native-image-header-scroll-view';
import { Text, View } from 'react-native';
import { DetailStyles } from '../../scenes/Detail/DetailStyles';
import MapView from '../MapView';
import * as Animatable from 'react-native-animatable';
import { dimensions } from '../../styles/base';

interface IProps {
  coordinates: number[];
  title: string;
  bgColor: string;
  child: React.ReactNode;
}

const Header: React.FC<IProps> = ({ title, coordinates, child, bgColor }) => {
  let navTitle = React.createRef<Animatable.View>();

  return (
    <HeaderImageScrollView
      maxOverlayOpacity={0.6}
      minOverlayOpacity={0.1}
      maxHeight={250}
      minHeight={80}
      fadeOutForeground
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
          style={DetailStyles.header}
          ref={navTitleView => {
            navTitle = navTitleView;
          }}
        >
          <Text style={DetailStyles.headerTitle}>
            {title}
          </Text>
        </Animatable.View>
      )}
    >

      <>
        <TriggeringView
          onHide={() => navTitle.fadeInUp(200)}
          onDisplay={() => navTitle.fadeOut(100)}
        />
        <View style={{ backgroundColor: bgColor }}>
          {child}
        </View>
      </>
    </HeaderImageScrollView>
  );
}

export default Header;