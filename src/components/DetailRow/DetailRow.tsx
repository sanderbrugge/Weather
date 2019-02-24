import * as React from 'react';
import { MappedOpenWeather } from '../../scenes/Home/Home';
import { View, Text } from 'react-native';
import { average } from '../../util/average-calc';

interface IProps {
  info: MappedOpenWeather;
}

const DetailRow: React.FC<IProps> = ({ info }) => {
  return (
      <View>
          <Text>{info.day}</Text>
          <View>
          <Text>{info.minTemp}</Text>
          <Text>{info.maxTemp}</Text>
          <Text>{average(info.temp)}</Text>
          <Text>{average(info.windSpeed)}</Text>
          <Text>{average(info.humidity)}</Text>
          </View>
      </View>
  );
}

export default DetailRow;
