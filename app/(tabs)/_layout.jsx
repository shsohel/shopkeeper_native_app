/** @format */

import { Redirect, Tabs, useRouter } from "expo-router";
import { Image, View } from "react-native";

import { COLORS, icons } from "../../constants";
import { tabStyle } from "../../assets/styles/tabStyle";
import { useSelector } from "react-redux";
export default function TabLayout() {
  const router = useRouter();
  const { authUser } = useSelector(({ auth }) => auth);

  if (!authUser) return <Redirect href={"/auth/login"} />;

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        title: "",
        headerStyle: {
          backgroundColor: COLORS.primary,
        },

        tabBarShowLabel: false,

        tabBarStyle: {
          height: 65,
          backgroundColor: COLORS.primary,
        },

        tabBarItemStyle: {
          marginHorizontal: 16,
        },
      }}
    >
      <Tabs.Screen
        name="customers"
        options={{
          title: "Customers",
          headerShadowVisible: false,

          tabBarIcon: ({ focused }) => (
            <View style={tabStyle.main(focused)}>
              <Image
                style={{ height: 35, width: 35 }}
                source={focused ? icons.customerIconWhite : icons.customerIcon}
                resizeMode="contain"
                alt=""
              />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="orders"
        options={{
          title: "Orders",
          tabBarIcon: ({ focused }) => (
            <>
              <View style={tabStyle.main(focused)}>
                <Image
                  style={{ height: 35, width: 35 }}
                  source={focused ? icons.cartIconWhite : icons.cartIcon}
                  resizeMode="contain"
                  alt=""
                />
              </View>
            </>
          ),
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={tabStyle.main(focused)}>
              <Image
                style={{ height: 35, width: 35 }}
                source={focused ? icons.homeIconWhite : icons.homeIcon}
                resizeMode="contain"
                alt=""
              />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="notifications"
        options={{
          title: "Notifications",
          tabBarIcon: ({ focused }) => (
            <View style={tabStyle.main(focused)}>
              <Image
                style={{ height: 39, width: 39 }}
                source={
                  focused ? icons.notificationIconWhite : icons.notificationIcon
                }
                resizeMode="contain"
                alt=""
              />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={tabStyle.main(focused)}>
              <Image
                style={{ height: 39, width: 39 }}
                source={
                  focused ? icons.profileSettingsWhite : icons.profileSettings
                }
                resizeMode="contain"
                alt=""
              />
            </View>
          ),
        }}
      />
    </Tabs>
  );
}
