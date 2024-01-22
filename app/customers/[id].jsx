/** @format */

import {
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { COLORS, FONT, SIZES, icons } from "../../constants";
import images from "../../constants/images";
import { convertToBangla } from "../../utils";
import CustomerOrders from "../../components/home/CustomerOrders";
import ScreenHeaderBtn from "../../components/common/ScreenHeaderBtn";
import { Stack, router } from "expo-router";

export default function CustomerDetails() {
  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen
        options={{
          headerShadowVisible: false,
          headerBackVisible: false,

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
      />
      <View style={styles.intoContainer}>
        <View style={styles.authPhotoWrapper}>
          <Image style={styles.authPhoto} source={images.userPhoto} />
        </View>
        <View>
          <Text style={styles.name}>রইসুল আমিন</Text>
        </View>
        <View>
          <Text style={styles.phone}>
            {convertToBangla("+880-1811-275653")}
          </Text>
        </View>
      </View>
      <View style={styles.orderTitle}>
        <Text style={styles.txt}> সদ্য অর্ডার সমুহ</Text>
      </View>
      <ScrollView
        style={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        <CustomerOrders />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: COLORS.lightWhite,
    alignItems: "center",
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  scrollContainer: {
    width: "100%",

    marginBottom: 20,
  },

  orderTitle: {
    backgroundColor: COLORS.lightWhite,
    paddingVertical: 4,
    paddingHorizontal: 10,
    width: "100%",
    // borderRadius: 2,
    borderColor: COLORS.primary,
    borderBottomWidth: 2,
  },
  txt: {
    fontSize: SIZES.medium,
    fontFamily: FONT.medium,
    color: COLORS.primary,
  },

  intoContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  authPhotoWrapper: {
    padding: 10,
    borderColor: COLORS.primary,
    borderWidth: 2,
    borderRadius: 100,
    marginVertical: 5,
    position: "relative",
  },

  authPhoto: {
    width: 80,
    height: 80,
    borderRadius: 100,
  },

  name: {
    fontSize: SIZES.medium,
    fontFamily: FONT.medium,
    color: COLORS.primary,
  },
  phone: {
    marginVertical: 5,
    fontSize: SIZES.medium,
    fontFamily: FONT.medium,
    color: COLORS.secondary,
  },
});
