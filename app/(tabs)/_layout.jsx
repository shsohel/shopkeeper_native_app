import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Stack, Tabs, useNavigation, useRouter } from 'expo-router';
import {
  Button,
  Image,
  Pressable,
  Text,
  View,
  useColorScheme,
} from 'react-native';

import Colors from '../../constants/Colors';
import { COLORS, icons } from '../../constants';
import { tabStyle } from '../../assets/styles/tabStyle';
import { DrawerActions } from '@react-navigation/native';

export default function TabLayout() {
  const router = useRouter();
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
          backgroundColor: "#00ADB5",
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
        name="five"
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
