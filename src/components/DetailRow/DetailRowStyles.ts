import { StyleSheet } from "react-native";
import { colors } from "../../styles/base";

export const DetailRowStyles = StyleSheet.create({
  container: { borderBottomColor: colors.grey, borderBottomLeftRadius: 40, borderBottomWidth: 0.5, paddingLeft: 20 },
  title: { color: colors.white, fontSize: 20, marginTop: 10 },
  contentContainer: { flex: 1, flexDirection: 'row', justifyContent: 'space-around' },
  contentRow: { margin: 10, flex: 1 },
  item: { color: colors.white, fontSize: 16, margin: 5 }
});
