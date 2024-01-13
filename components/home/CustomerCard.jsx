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

const CustomerCard = ({ customer, handleNavigate }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={handleNavigate}>
      <TouchableOpacity style={styles.photoContainer}>
        <Image
          source={{
            uri: checkImageURL(customer.image)
              ? customer.image
              : "https://img.freepik.com/premium-vector/vector-flat-illustration-woman-avatar-avatar-smiling-young-woman_469123-477.jpg",
          }}
          resizeMode="contain"
          style={styles.customerImage}
        />
      </TouchableOpacity>

      <View style={styles.textContainer}>
        <Text style={styles.customerName} numberOfLines={1}>
          {customer.name}
        </Text>
        <Text style={styles.location}>{customer.address}</Text>
      </View>

      <View style={styles.numberContainer}>
        <Text style={styles.taka}>{`৳ ৩০০ `}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CustomerCard;

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
    marginHorizontal: SIZES.medium,
  },

  customerName: {
    fontSize: SIZES.medium,
    fontFamily: "DMBold",
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
