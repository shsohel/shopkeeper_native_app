/** @format */

import React, { useState } from "react";
import {
  Dimensions,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { COLORS, FONT, SIZES } from "../../constants";
const { width } = Dimensions.get("screen");

const Tabs = (props) => {
  const { tabs } = props;
  const [tabControl, setTabControl] = useState(tabs);

  const handleTabControl = (selectedTab) => {
    const updateTabs = tabControl.map((tab) => {
      if (tab.id === selectedTab.id) {
        tab["isActive"] = true;
      } else {
        tab["isActive"] = false;
      }
      return tab;
    });
    setTabControl(updateTabs);
  };

  const isActive = (tab) => {
    return tab.isActive ?? false;
  };

  const getActiveTabComponent = () => {
    const component =
      tabControl.find((tab) => tab.isActive)?.components ?? null;
    return component;
  };
  return (
    <View style={styles.tabContainer}>
      <View style={styles.tabs(width)}>
        {tabControl.map((tab) => {
          return (
            <View key={tab.id}>
              <Pressable onPress={() => handleTabControl(tab)}>
                <View style={styles.tab(isActive(tab))}>
                  <Text style={styles.txt(isActive(tab))}>{tab.name}</Text>
                </View>
              </Pressable>
            </View>
          );
        })}
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        {getActiveTabComponent()}
      </ScrollView>
    </View>
  );
};

export default Tabs;

const styles = StyleSheet.create({
  tabContainer: {
    padding: 5,
  },
  tabs: (width) => ({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    columnGap: 5,
  }),
  tab: (active) => ({
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: COLORS.lightWhite,

    paddingVertical: 4,
    paddingHorizontal: 20,
    // borderRadius: 2,
    borderColor: COLORS.primary,
    borderBottomWidth: active ? 2 : 0,
  }),
  txt: (active) => ({
    fontSize: SIZES.large,
    fontFamily: FONT.medium,
    color: COLORS.primary,
  }),
});
