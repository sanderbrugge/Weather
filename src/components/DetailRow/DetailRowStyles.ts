import { StyleSheet } from "react-native";
import { colors, dimensions } from "../../styles/base";

export const DetailRowStyles = StyleSheet.create({
  borderlessContainer: { marginTop: 20, paddingLeft: 20, paddingRight: 10, paddingBottom: 10, width: dimensions.fullWidth },
  container: { borderRightColor: colors.grey, borderRightWidth: 1, marginTop: 20, paddingLeft: 20, paddingRight: 10, paddingBottom: 10, width: dimensions.fullWidth },
  title: { color: colors.white, fontSize: 20, marginTop: 10 },
  contentContainer: { flex: 1, flexDirection: 'row', justifyContent: 'space-around' },
  contentRow: { margin: 10, flex: 1 },
  item: { color: colors.white, fontSize: 16, margin: 5 }
});
