import * as React from 'react';
import FontAwesome from 'react-native-fontawesome';
import { DetailRowStyles } from '../DetailRow/DetailRowStyles';

interface IProps {
  icon: string;
  text: string;
}

const DetailText: React.FC<IProps> = ({ icon, text }) => <FontAwesome style={DetailRowStyles.item}>{icon}  {text}</FontAwesome>

export default DetailText;