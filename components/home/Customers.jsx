/** @format */

import { StyleSheet, View } from "react-native";
import { COLORS, FONT, SIZES } from "../../constants";

import React, { useState } from "react";
import CustomerCard from "./CustomerCard";
import { useRouter } from "expo-router";
import Animated, {
  SlideInDown,
  SlideInLeft,
  SlideInRight,
  SlideInUp,
} from "react-native-reanimated";

const data = [
  {
    id: 1,
    name: "সোলাইমান",
    address: "শেরশাহ, চট্টগ্রাম, বাংলাদেশ",
    due: "১৩০",
  },
  {
    id: 2,
    name: "মোহাম্মদ বোরহান উদ্দিন",
    address: "২নং গেইট, চট্টগ্রাম, বাংলাদেশ",
    due: "৭৯৯৯",
  },
  {
    id: 3,
    name: "ইকবাল হোসাইন মিলন",
    address: "২নং গেইট, চট্টগ্রাম, বাংলাদেশ",
    due: "৬৪২৪",
  },
  {
    id: 4,
    name: "সাখাওয়াত হোসাইন",
    address: "২নং গেইট, চট্টগ্রাম, বাংলাদেশ",
    due: "১০০",
  },
  {
    id: 5,
    name: "আইমুন নাহার",
    address: "২নং গেইট, চট্টগ্রাম, বাংলাদেশ",
    due: "৫০৯",
  },
  {
    id: 6,
    name: "কামরুজ্জামান সবুজ",
    address: "২নং গেইট, চট্টগ্রাম, বাংলাদেশ",
    due: "৩৩০",
  },
  {
    id: 7,
    name: "ইলিয়াস হোসাইন তুইমুর",
    address: "২নং গেইট, চট্টগ্রাম, বাংলাদেশ",
    due: "৪০৯৮",
  },
  {
    id: 9,
    name: "বেলাল উদ্দিন",
    address: "২নং গেইট, চট্টগ্রাম, বাংলাদেশ",
    due: "২৩৫",
  },
  {
    id: 45,
    name: "বেলাল উদ্দিন",
    address: "২নং গেইট, চট্টগ্রাম, বাংলাদেশ",
    due: "২৩৫",
  },
];

const Customers = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  return (
    <Animated.View
      style={styles.container}
      entering={SlideInLeft}
      exiting={SlideInRight}
    >
      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size="large" color={COLORS.primary} />
        ) : error ? (
          <Text>Something Went Wrong!</Text>
        ) : (
          data?.map((customer) => (
            <CustomerCard
              customer={customer}
              key={`${customer.id}`}
              handleNavigate={() => router.push(`/customers/${customer?.id}`)}
            />
          ))
        )}
      </View>
    </Animated.View>
  );
};

export default Customers;

const styles = StyleSheet.create({
  container: {
    marginTop: SIZES.xxSmall,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: SIZES.small,
  },
  headerTitle: {
    fontSize: SIZES.large,
    fontFamily: FONT.medium,
    color: COLORS.primary,
  },
  headerBtn: {
    fontSize: SIZES.medium,
    fontFamily: FONT.medium,
    color: COLORS.gray,
  },
  cardsContainer: {
    marginTop: SIZES.medium,
    gap: SIZES.small,
  },
});
