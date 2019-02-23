import { Dimensions } from 'react-native'

export const dimensions = {
  fullHeight: Dimensions.get('window').height,
  fullWidth: Dimensions.get('window').width,
  headerHeight: 210,
  isLandscape: Dimensions.get('window').height < Dimensions.get('window').width,
}

export const colors = {
  black: '#000000',
  white: '#ffffff',
  grey: '#a5a5a5',
  red: '#DC143C',
  blue: '#4169E1',
  green: '#008000',
  yellow: '#FFFF00',
  transparent: 'transparent',
}

export const listViewBGColors = {
  red: '#DC143C',
  blue: '#4169E1',
  green: '#008000',
  purple: '800080',
}
