/** @format */

import React from "react";
import { Pressable, SafeAreaView, Text, View } from "react-native";
import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import ScreenHeaderBtn from "../../components/common/ScreenHeaderBtn";
import { icons } from "../../constants";

const CustomerDerails = () => {
  const params = useLocalSearchParams();
  const router = useRouter();
  const handleRouter = () => {
    router.back();
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Stack.Screen
        options={{
          headerShadowVisible: false,
          headerBackVisible: false,
          headerTitle: "",
          headerLeft: () => (
            <ScreenHeaderBtn
              iconUrl={icons.left}
              dimension="60%"
              handlePress={() => router.back()}
            />
          ),
          headerRight: () => (
            <ScreenHeaderBtn iconUrl={icons.more} dimension="60%" />
          ),
          headerTitle: "",
        }}
      >
        <View style={{ flex: 1 }}>
          <Pressable
            onPress={() => {
              handleRouter("/");
            }}
          >
            <View>
              <Text>Hello</Text>
            </View>
          </Pressable>
        </View>
      </Stack.Screen>
    </SafeAreaView>
  );
};

export default CustomerDerails;
