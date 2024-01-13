/** @format */

import { StyleSheet, View } from "react-native";
import { COLORS, FONT, SIZES } from "../../constants";

import React, { useState } from "react";
import CustomerCard from "./CustomerCard";
import { useRouter } from "expo-router";

const data = [
  {
    id: 1,
    name: "আব্দুর রহমান",
    address: "শেরশাহ, চট্টগ্রাম, বাংলাদেশ",
  },
  {
    id: 2,
    name: "মোহাম্মদ বোরহান উদ্দিন",
    address: "২নং গেইট, চট্টগ্রাম, বাংলাদেশ",
  },
  {
    id: 3,
    name: "মোহাম্মদ বোরহান উদ্দিন",
    address: "২নং গেইট, চট্টগ্রাম, বাংলাদেশ",
  },
  {
    id: 4,
    name: "মোহাম্মদ বোরহান উদ্দিন",
    address: "২নং গেইট, চট্টগ্রাম, বাংলাদেশ",
  },
  {
    id: 5,
    name: "মোহাম্মদ বোরহান উদ্দিন",
    address: "২নং গেইট, চট্টগ্রাম, বাংলাদেশ",
  },
  {
    id: 6,
    name: "মোহাম্মদ বোরহান উদ্দিন",
    address: "২নং গেইট, চট্টগ্রাম, বাংলাদেশ",
  },
  {
    id: 7,
    name: "মোহাম্মদ বোরহান উদ্দিন",
    address: "২নং গেইট, চট্টগ্রাম, বাংলাদেশ",
  },
  {
    id: 9,
    name: "মোহাম্মদ বোরহান উদ্দিন",
    address: "২নং গেইট, চট্টগ্রাম, বাংলাদেশ",
  },
];

const Customers = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  return (
    <View style={styles.container}>
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
              handleNavigate={() => router.push(`/customer/${customer?.id}`)}
            />
          ))
        )}
      </View>
    </View>
  );
};

export default Customers;

const styles = StyleSheet.create({
  container: {
    marginTop: SIZES.small,
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
