import * as React from 'react';
import { MappedOpenWeather } from '../../scenes/Home/Home';
import { View, Text } from 'react-native';
import { average } from '../../util/temp-util';
import { colors } from '../../styles/base';
import FontAwesome, { Icons } from 'react-native-fontawesome';

interface IProps {
  info: MappedOpenWeather;
}

const DetailRow: React.FC<IProps> = ({ info }) => {
  return (
    <View>
      <Text style={{ color: colors.white, fontSize: 20, margin: 10 }} >{info.day}</Text>
      <View style={{ margin: 10 }}>
        <FontAwesome style={{ color: colors.white, fontSize: 16, margin: 5 }}>{Icons.thermometerEmpty} min: {info.minTemp}</FontAwesome>
        <FontAwesome style={{ color: colors.white, fontSize: 16, margin: 5 }}>{Icons.thermometerFull} max: {info.maxTemp}</FontAwesome>
        <FontAwesome style={{ color: colors.white, fontSize: 16, margin: 5 }}>{Icons.thermometerHalf} temp: {average(info.temp)}</FontAwesome>
        <FontAwesome style={{ color: colors.white, fontSize: 16, margin: 5 }}>{Icons.cloud} temp: {average(info.windSpeed)}</FontAwesome>
        <FontAwesome style={{ color: colors.white, fontSize: 16, margin: 5 }}>{Icons.tint} temp: {average(info.humidity)}</FontAwesome>
      </View>
    </View>
  );
}

export default DetailRow;
