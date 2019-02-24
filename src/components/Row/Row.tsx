import * as React from 'react';
import { MappedOpenWeather } from '../../scenes/Home/Home';
import { TouchableOpacity, View, Text } from 'react-native';
import { RowStyles } from './RowStyles';
import FontAwesome from 'react-native-fontawesome';
import { getIcon } from '../../util/IconFactory';

interface RowProps {
  info: MappedOpenWeather;
  onPress: () => void;
}

const Row: React.FC<RowProps> = ({ info, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
    >
      <View style={RowStyles.container}>
        <Text style={RowStyles.title}>{info.day}</Text>
        <Text style={RowStyles.title}>{info.description}</Text>
        <View style={RowStyles.iconContainer}>
          <FontAwesome style={RowStyles.icon}>{getIcon(info.main)}</FontAwesome>
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default Row;
