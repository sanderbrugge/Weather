import { StyleSheet } from "react-native";
import { colors } from "../../styles/base";

export const RowStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: 'white',
    borderBottomWidth: 0.5,
    justifyContent: 'center',
    height: 100,
    padding: 20,
    borderBottomLeftRadius: 80
  },
  title: {
    flex: 3,
    fontWeight: 'bold',
    fontSize: 16,
    color: 'white'
  },
  iconContainer: { flex: 2, alignItems: 'flex-end' },
  icon: { color: colors.white, fontSize: 35 }
});
