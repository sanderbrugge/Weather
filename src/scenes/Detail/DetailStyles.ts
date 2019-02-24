import { StyleSheet } from "react-native";
import { colors } from "../../styles/base";


export const DetailStyles = StyleSheet.create({
  container: { flex: 1 },
  header: {
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 16,
    opacity: 0
  },
  headerTitle: {
    color: 'white',
    fontSize: 18,
    backgroundColor: 'transparent'
  },
  sectionTitle: {
    paddingLeft: 20,
    paddingTop: 20,
    paddingRight: 10,
    fontSize: 25,
    fontWeight: 'bold',
    color: colors.white
  }
});