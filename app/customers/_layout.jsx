/** @format */

import React from "react";
import { Stack } from "expo-router";

const CustomerLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerShadowVisible: false,
        statusBarStyle: "dark",
      }}
    />
  );
};

export default CustomerLayout;
