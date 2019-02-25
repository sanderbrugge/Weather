import * as React from 'react';
import HeaderImageScrollView, { TriggeringView } from 'react-native-image-header-scroll-view';
import { Text, View, TouchableOpacity } from 'react-native';
import { DetailStyles } from '../../scenes/Detail/DetailStyles';
import MapView from '../MapView';
import * as Animatable from 'react-native-animatable';
import FontAwesome, { Icons } from 'react-native-fontawesome';
import { colors, baseColorWithOpacity } from '../../styles/base';

interface IProps {
  coordinates: number[];
  title: string;
  bgColor: string;
  child: React.ReactNode;
  goBack: () => void;
}

const Header: React.FC<IProps> = ({ title, coordinates, child, bgColor, goBack }) => {
  let navTitle = React.createRef<Animatable.View>();

  return (
    <HeaderImageScrollView
      maxOverlayOpacity={0.6}
      minOverlayOpacity={0.1}
      maxHeight={250}
      minHeight={80}
      fadeOutForeground
      scrollViewBackgroundColor={bgColor}
      renderHeader={() => (
        <MapView
          coordinates={coordinates}
          zoomEnabled={false}
          pitchEnabled={false}
          scrollEnabled={false}
        />
      )}
      renderFixedForeground={() => (
        <>
          <TouchableOpacity onPress={goBack} style={{ zIndex: 999, position: "absolute", top: 40, left: 20, width: 30, height: 30, borderRadius: 30, alignItems: 'center', justifyContent: 'center', backgroundColor: baseColorWithOpacity(colors.black, '80') }}>
            <FontAwesome style={{ color: colors.white, fontSize: 18 }}>{Icons.angleLeft}</FontAwesome>
          </TouchableOpacity>
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
        </>
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