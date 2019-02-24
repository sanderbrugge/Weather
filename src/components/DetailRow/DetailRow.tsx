import * as React from 'react';
import { MappedOpenWeather } from '../../scenes/Home/Home';
import { View, Text } from 'react-native';
import { average } from '../../util/temp-util';
import FontAwesome, { Icons } from 'react-native-fontawesome';
import { DetailRowStyles } from './DetailRowStyles';

interface IProps {
  info: MappedOpenWeather;
}

const DetailRow: React.FC<IProps> = ({ info }) => {
  return (
    <View style={DetailRowStyles.container}>
      <Text style={DetailRowStyles.title} >{info.day}</Text>
      <View style={DetailRowStyles.contentContainer}>
        <View style={DetailRowStyles.contentRow}>
          <FontAwesome style={DetailRowStyles.item}>{Icons.thermometerEmpty} min: {info.minTemp}</FontAwesome>
          <FontAwesome style={DetailRowStyles.item}>{Icons.thermometerFull} max: {info.maxTemp}</FontAwesome>
          <FontAwesome style={DetailRowStyles.item}>{Icons.thermometerHalf} temp: {average(info.temp)}</FontAwesome>
        </View>
        <View style={DetailRowStyles.contentRow}>
          <FontAwesome style={DetailRowStyles.item}>{Icons.tachometerAlt} wind: {average(info.windSpeed)}</FontAwesome>
          <FontAwesome style={DetailRowStyles.item}>{Icons.tint} humidity: {average(info.humidity)}</FontAwesome>
        </View>
      </View>
    </View>
  );
}

export default DetailRow;
