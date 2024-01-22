/** @format */

import React from "react";
import { Drawer } from "expo-router/drawer";
import { Text, View } from "react-native";

export default function RootLayout() {
  return (
    <Drawer
      drawerContent={() => (
        <View>
          <Text>Hello</Text>
        </View>
      )}
    />
  );
}
