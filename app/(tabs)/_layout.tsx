import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs, useNavigation, useRouter } from "expo-router";
import { Image, Pressable, View, useColorScheme } from "react-native";

import Colors from "../../constants/Colors";
import { COLORS, icons } from "../../constants";
import { tabStyle } from "../../assets/styles/tabStyle";
import { TouchableOpacity } from "react-native-gesture-handler";

import Animated, { useAnimatedProps } from "react-native-reanimated";
import { StatusBar } from "expo-status-bar";
export type StyleProps = {
  active: boolean;
};
export default function TabLayout() {
  const colorScheme = useColorScheme();
  const navigation = useNavigation();
  const router = useRouter();

  // const handleDrawerOpen = () => {
  //   router.push("/");
  //   navigation.dispatch(DrawerActions.openDrawer());
  // };

  const animatedProps = useAnimatedProps(() => {
    return {
      opacity: 5,
    };
  });
  return (
    <Tabs
      screenOptions={{
        // headerShadowVisible: false,
        // headerShown: false,
        ///tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerStyle: {
          backgroundColor: COLORS.primary,
        },
        tabBarShowLabel: false,
        // headerShadowVisible: false,

        tabBarStyle: {
          height: 65,
          backgroundColor: "#00ADB5",
        },
        headerRight: () => (
          <Link href="/modal" asChild>
            <Pressable>
              {({ pressed }) => (
                <FontAwesome
                  name="info-circle"
                  size={25}
                  color={Colors[colorScheme ?? "light"].text}
                  style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                />
              )}
            </Pressable>
          </Link>
        ),
        // tabBarItemStyle: {
        //   // backgroundColor: "#D0D0D0",
        //   // borderColor: "#FFFFFF",
        //   // borderWidth: 2,
        //   // borderRadius: 200,
        //   // height: 50,

        //   // alignItems: "center",
        //   marginHorizontal: 16,
        // },
      }}
    >
      <Tabs.Screen
        name="three"
        options={{
          title: "Tab One",
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
        name="two"
        options={{
          title: "Tab Two",
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
          title: "Tab Three",

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
        name="four"
        options={{
          title: "Tab Three",

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
