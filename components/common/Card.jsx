/** @format */

import { StyleSheet, View } from "react-native";
import { COLORS } from "../../constants";

export default function Card(props) {
  const { width, color, children } = props;
  return <View style={styles.card(width, color)}>{children}</View>;
}

const styles = StyleSheet.create({
  card: (width, color) => ({
    minHeight: "15%",
    backgroundColor: color ?? COLORS.primary,
    width: width ?? "100%",
    borderRadius: 5,
    padding: 5,
  }),
});
