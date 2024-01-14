/** @format */

import { StyleSheet, View } from "react-native";
import { COLORS, FONT, SIZES } from "../../constants";

import React, { useState } from "react";

import { useRouter } from "expo-router";
import OrderCard from "./OrderCard";

const data = [
  {
    id: 1,
    orderNo: "2642-4541",
    customerName: "আব্দুর রহমান",
    dateTime: "জানুয়ারি ১৪, ২০২৪.",
    day: "বোরবার",
  },
  {
    id: 2,
    orderNo: "2642-0541",
    customerName: "মিলন মাহমুদ",
    dateTime: "জানুয়ারি ১৪, ২০২৪.",
    day: "শনিবার",
  },
  {
    id: 3,
    orderNo: "2642-9541",
    customerName: "বোরহান উদ্দিন",
    dateTime: "জানুয়ারি ১৩, ২০২৪.",
    day: "শুক্রবার",
  },
  {
    id: 4,
    orderNo: "9642-4541",
    customerName: "কারিম মিয়া",
    dateTime: "জানুয়ারি ১৪, ২০২৪.",
    day: "বোরবার",
  },
  {
    id: 5,
    orderNo: "2642-4541",
    customerName: "আব্দুর রহমান",
    dateTime: "জানুয়ারি ১৪, ২০২৪.",
    day: "বোরবার",
  },
  {
    id: 6,
    orderNo: "2642-4541",
    customerName: "আব্দুর রহমান",
    dateTime: "জানুয়ারি ১৪, ২০২৪.",
    day: "বোরবার",
  },
  {
    id: 7,
    orderNo: "2642-4541",
    customerName: "আব্দুর রহমান",
    dateTime: "জানুয়ারি ১৪, ২০২৪.",
    day: "বোরবার",
  },
  {
    id: 8,
    orderNo: "2642-4541",
    customerName: "আব্দুর রহমান",
    dateTime: "জানুয়ারি ১৪, ২০২৪.",
    day: "বোরবার",
  },
];

const CustomerOrders = () => {
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
          data?.map((order) => (
            <OrderCard
              order={order}
              key={`${order.id}`}
              handleNavigate={() => router.push(`/order/${order?.id}`)}
            />
          ))
        )}
      </View>
    </View>
  );
};

export default CustomerOrders;

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
