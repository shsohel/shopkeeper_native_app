/** @format */

import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

import { COLORS, FONT, SHADOWS, SIZES } from "../../constants";

const OrderCard = ({ order, handleNavigate }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={handleNavigate}>
      <View style={styles.textContainer}>
        <Text style={styles.orderNo} numberOfLines={1}>
          {order.orderNo}
        </Text>
        <Text style={styles.customerName}>{order.customerName}</Text>
      </View>

      <View style={styles.dateContainer}>
        <Text style={styles.day}>{order.day}</Text>
        <Text style={styles.dayTime}>{order.dateTime}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default OrderCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    padding: SIZES.medium,
    borderRadius: SIZES.small,
    backgroundColor: "#FFF",
    ...SHADOWS.medium,
    shadowColor: COLORS.white,
  },

  textContainer: {
    flex: 1,
    marginRight: SIZES.medium,
  },

  orderNo: {
    fontSize: SIZES.medium,
    fontFamily: FONT.bold,
    color: COLORS.primary,
  },
  day: {
    fontSize: SIZES.medium,
    fontFamily: FONT.bold,
    color: COLORS.secondary,
  },
  customerName: {
    fontSize: SIZES.small + 2,
    fontFamily: FONT.regular,
    color: COLORS.gray,
    marginTop: 3,
    textTransform: "capitalize",
  },
  dayTime: {
    fontSize: SIZES.small + 2,
    fontFamily: FONT.regular,
    color: COLORS.gray,
    marginTop: 3,
    textTransform: "capitalize",
  },
  dateContainer: {
    width: 120,
  },
  taka: {
    fontSize: SIZES.medium,
    fontFamily: FONT.bold,
    color: COLORS.secondary,
  },
});
