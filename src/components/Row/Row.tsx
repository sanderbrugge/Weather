import * as React from 'react';
import { MappedOpenWeather } from '../../scenes/Home/Home';
import { TouchableOpacity, View, Text } from 'react-native';
import { RowStyles } from './RowStyles';

interface RowProps {
  info: MappedOpenWeather;
}

const Row: React.FC<RowProps> = ({ info }) => {
  return (
    <TouchableOpacity
      onPress={() => console.log('clicked')}
    >
      <View style={{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomColor: 'white',
        borderBottomWidth: 0.5,
        justifyContent: 'center',
        height: 100,
        padding: 20
      }}>
        <Text style={RowStyles.title}>{info.day}</Text>
        <Text style={RowStyles.title}>{info.description}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default Row;
