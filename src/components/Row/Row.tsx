import * as React from 'react';
import { MappedOpenWeather } from '../../scenes/Home/Home';
import { TouchableOpacity, View, Text } from 'react-native';
import { RowStyles } from './RowStyles';
import FontAwesome from 'react-native-fontawesome';
import { getIcon } from '../../util/IconFactory';
import { WeatherMain } from '../../api/OpenWeather/OpenWeather.interfaces';

interface RowProps {
  info: MappedOpenWeather[];
}

interface RowMappedWeather {
  day: string,
  description: string,
  icon: WeatherMain,
}

const getInfo = (info: MappedOpenWeather[]) => {
  return info.reduce<RowMappedWeather>((accum, item) => {
    accum.day = item.day;
    accum.description = item.description;
    accum.icon = item.main;

    return accum;
  }, {
    day: '',
    description: '',
    icon: 'Clouds'
  });
}

const Row: React.FC<RowProps> = ({ info }) => {
  const mappedObj = getInfo(info);

  return (
    <TouchableOpacity
      onPress={() => console.log('clicked')}
    >
      <View style={RowStyles.container}>
        <Text style={RowStyles.title}>{mappedObj.day}</Text>
        <Text style={RowStyles.title}>{mappedObj.description}</Text>
        <View style={RowStyles.iconContainer}>
          <FontAwesome style={RowStyles.icon}>{getIcon(mappedObj.icon)}</FontAwesome>
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default Row;
