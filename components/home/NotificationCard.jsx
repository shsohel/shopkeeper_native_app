/** @format */

import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
} from "react-native";

import { COLORS, FONT, SHADOWS, SIZES } from "../../constants";
import { checkImageURL } from "../../utils";

const NotificationCard = ({ customer, handleNavigate }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={handleNavigate}>
      <View style={styles.textContainer}>
        <Text style={styles.customerName} numberOfLines={1}>
          {customer.name}
        </Text>
        <Text style={styles.location}>{customer.address}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default NotificationCard;

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
  photoContainer: {
    width: 50,
    height: 50,
    backgroundColor: COLORS.white,
    borderRadius: SIZES.medium,
    justifyContent: "center",
    alignItems: "center",
  },
  customerImage: {
    width: "70%",
    height: "70%",
  },
  textContainer: {
    flex: 1,
    marginRight: SIZES.medium,
  },

  customerName: {
    fontSize: SIZES.medium,
    color: COLORS.primary,
  },
  location: {
    fontSize: SIZES.small + 2,
    fontFamily: FONT.regular,
    color: COLORS.gray,
    marginTop: 3,
    textTransform: "capitalize",
  },
  numberContainer: {
    width: 90,
  },
  taka: {
    fontSize: SIZES.medium,
    fontFamily: "DMBold",
    color: COLORS.secondary,
  },
});
