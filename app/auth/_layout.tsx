/** @format */

import { Stack } from "expo-router";

export default function AuthLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="login"
        options={{
          headerShadowVisible: false,
          statusBarStyle: "dark",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="sign-up"
        options={{
          headerShadowVisible: false,
          statusBarStyle: "dark",
          headerShown: false,
        }}
      />
    </Stack>
  );
}
