/** @format */

import { Redirect, Stack } from "expo-router";
import { useSelector } from "react-redux";
export default function AuthLayout() {
  const { authUser } = useSelector(({ auth }) => auth);
  console.log("authUser", authUser);

  if (authUser) return <Redirect href={"/"} />;

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
