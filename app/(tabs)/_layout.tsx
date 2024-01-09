import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs, useNavigation, useRouter } from "expo-router";
import { Image, Pressable, View, useColorScheme } from "react-native";

import Colors from "../../constants/Colors";
import { icons } from "../../constants";
import { tabStyle } from "../../assets/styles/tabStyle";
import { TouchableOpacity } from "react-native-gesture-handler";
import { DrawerActions } from "@react-navigation/native";
import { useDrawerStatus } from "@react-navigation/drawer";

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const navigation = useNavigation();
  const router = useRouter();

  // const handleDrawerOpen = () => {
  //   router.push("/");
  //   navigation.dispatch(DrawerActions.openDrawer());
  // };
  const isDrawerOpen = useDrawerStatus() === "open";
  return (
    <Tabs
      screenOptions={{
        // headerShown: false,
        // tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,

        tabBarShowLabel: false,

        tabBarStyle: {
          height: 65,
          backgroundColor: "#00ADB5",
        },
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
