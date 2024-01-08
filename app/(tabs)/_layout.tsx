import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Image, Pressable, View, useColorScheme } from "react-native";

import Colors from "../../constants/Colors";
import { icons } from "../../constants";
import { tabStyle } from "../../assets/styles/tabStyle";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
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
                style={{ height: 39, width: 39 }}
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
                  style={{ height: 39, width: 39 }}
                  source={
                    focused ? icons.customerIconWhite : icons.customerIcon
                  }
                  resizeMode="contain"
                  alt=""
                />
              </View>
              {/* {focused && (
                <View style={{ position: "absolute", zIndex: 0 }}>
                  <Image
                    style={{
                      height: 80,
                      width: 80,
                      marginTop: -26,
                    }}
                    source={icons.halfCircle}
                    resizeMode="contain"
                    alt=""
                  />
                </View>
              )} */}
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
                style={{ height: 39, width: 39 }}
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
                source={focused ? icons.customerIconWhite : icons.customerIcon}
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
