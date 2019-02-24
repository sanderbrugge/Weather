import * as React from 'react';
import { MappedOpenWeather } from '../../scenes/Home/Home';
import { View, Text } from 'react-native';
import FontAwesome, { Icons } from 'react-native-fontawesome';
import { DetailRowStyles } from './DetailRowStyles';
import DetailText from '../DetailText/DetailText';
import { average } from '../../util/temp-util';
import { colors } from '../../styles/base';

interface IProps {
  info: MappedOpenWeather;
  selected: boolean;
}

const DetailRow: React.FC<IProps> = ({ info, selected }) => {
  const selectedDay = selected ? Icons.star : null;

  return (
    <View style={DetailRowStyles.container}>
      <FontAwesome style={{ color: colors.yellow }}>
        <Text style={DetailRowStyles.title}>{info.day}  </Text>{selectedDay} 
      </FontAwesome>
      <View style={DetailRowStyles.contentContainer}>
        <View style={DetailRowStyles.contentRow}>
          <DetailText icon={Icons.thermometerEmpty} text={`Min: ${info.minTemp}`} />
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
