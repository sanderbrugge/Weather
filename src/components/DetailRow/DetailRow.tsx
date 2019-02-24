import * as React from 'react';
import { MappedOpenWeather } from '../../scenes/Home/Home';
import { View, Text } from 'react-native';
import { Icons } from 'react-native-fontawesome';
import { DetailRowStyles } from './DetailRowStyles';
import DetailText from '../DetailText/DetailText';
import { average } from '../../util/temp-util';

interface IProps {
  info: MappedOpenWeather;
}

const formatTemp = (temp: number) => ((temp - 32) * 5/9)

const DetailRow: React.FC<IProps> = ({ info }) => {
  return (
    <View style={DetailRowStyles.container}>
      <Text style={DetailRowStyles.title} >{info.day}</Text>
      <View style={DetailRowStyles.contentContainer}>
        <View style={DetailRowStyles.contentRow}>
          <DetailText icon={Icons.thermometerEmpty} text={`Min: ${formatTemp(info.minTemp)}`} />
          <DetailText icon={Icons.thermometerFull} text={`Max: ${info.maxTemp}`} />
          <DetailText icon={Icons.thermometerHalf} text={`Temp: ${average(info.temp)}`} />
        </View>
        <View style={DetailRowStyles.contentRow}>
          <DetailText icon={Icons.tachometerAlt} text={`Wind: ${average(info.windSpeed)}`} />
          <DetailText icon={Icons.tint} text={`Humidity: ${average(info.humidity)}`} />
        </View>
      </View>
    </View>
  );
}

export default DetailRow;
