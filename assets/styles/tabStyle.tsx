/** @format */

import { StyleSheet } from "react-native";
import { COLORS } from "../../constants";

export const tabStyle = StyleSheet.create({
  main: (active: boolean) => ({
    backgroundColor: active ? COLORS.appColor.primaryColor : "#D0D0D0",
    borderColor: active ? "none" : "white",
    borderWidth: active ? 0 : 2,

    borderRadius: 200,
    height: active ? 62 : 50,
    width: active ? 62 : 50,
    padding: 0,
    marginTop: active ? -60 : 0,
    alignItems: "center",
    justifyContent: "center",
    // position: "relative",
    // zIndex: 1,
  }),
});
