/** @format */

import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { COLORS, SIZES, FONT } from "../../constants";
import { router, useLocalSearchParams } from "expo-router";
import CustomModal from "../../components/common/CustomModal";
import { convertToBangla, convertToEnglish } from "../../utils";
import _ from "lodash";
const orderItemsData = [
  {
    id: 1,
    name: "আলু",
    quantity: "২",
    unit: "কেজি",
    price: "0",
  },
  {
    id: 2,
    name: "সয়াবিন তেল",
    quantity: "২",
    unit: "লিটার",
    price: "0",
  },
  {
    id: 3,
    name: "পিঁয়াজ",
    quantity: "১",
    unit: "কেজি",
    price: "0",
  },
  {
    id: 4,
    name: "চিনি",
    quantity: "২৫০",
    unit: "গ্রাম",
    price: "2",
  },
];

export default function ManageOrder() {
  const params = useLocalSearchParams();
  const [orders, setOrders] = useState(orderItemsData);

  const handlePriceChange = (text, id) => {
    const findIndex = orders.findIndex((o) => o.id === id);
    const deepCloneOrders = [...orders];
    deepCloneOrders[findIndex].price = convertToEnglish(text);
    setOrders(deepCloneOrders);
  };

  const handlePress = () => {
    router.back();
  };

  const totalPrice = _.sum(orders.map((order) => Number(order.price)));

  return (
    <CustomModal
      title="অর্ডার মেনেজ"
      handlePress={handlePress}
      footer={
        <View style={styles.footerContainer}>
          <Pressable>
            <Text style={styles.btn(true)}>গ্রহণ করুন</Text>
          </Pressable>
          <Pressable>
            <Text style={styles.btn(false)}>বাতিল করুন</Text>
          </Pressable>
        </View>
      }
    >
      <View style={styles.detailsContainer}>
        <View style={styles.lineContainer}>
          <Text style={styles.lineTxt}>দাম নির্ধারণ : </Text>
          <View style={styles.hairline} />
        </View>
        {orders.map((product) => {
          return (
            <View key={product.id} style={styles.productContainer}>
              <View style={styles.txtContainer}>
                <Text style={styles.headingTxt}>{product.name}</Text>
                <Text style={styles.dotTxt}>:</Text>
                <Text
                  style={styles.orderValueTxt}
                >{`${product.quantity} ${product.unit}`}</Text>
              </View>
              <View style={styles.priceContainer}>
                <View style={styles.price}>
                  <Text style={styles.headingTxt}>দাম/মূল্য </Text>
                  <Text style={styles.dotTxt}>:</Text>
                  <View>
                    <TextInput
                      style={{
                        paddingHorizontal: 4,
                        paddingVertical: 2,
                        width: 90,
                        backgroundColor: COLORS.white,
                        borderRadius: 4,
                        borderWidth: 1,
                        borderColor: COLORS.gray2,
                        textAlign: "right",
                        fontSize: SIZES.medium,
                        fontFamily: FONT.medium,
                      }}
                      inputMode="decimal"
                      value={convertToBangla(product.price)}
                      onChangeText={(text) =>
                        handlePriceChange(text, product.id)
                      }
                      selectTextOnFocus={true}
                    />
                  </View>
                  <Text style={styles.headingTxt}>টাকা</Text>
                </View>
              </View>
            </View>
          );
        })}
        <View style={styles.priceEndingLine} />
        <View style={styles.priceContainer}>
          <View style={styles.price}>
            <Text style={styles.headingTxt}>মোট দাম </Text>
            <Text style={styles.dotTxt}>:</Text>
            <View>
              <Text
                style={{ paddingHorizontal: 2, width: 90, textAlign: "right" }}
              >
                {convertToBangla(totalPrice.toString())}
              </Text>
            </View>
            <Text style={styles.headingTxt}>টাকা</Text>
          </View>
        </View>
      </View>
    </CustomModal>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    backgroundColor: COLORS.solidWhite,

    padding: SIZES.small,
  },
  lineContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    columnGap: 4,
    marginBottom: 10,
  },
  lineTxt: {
    fontSize: SIZES.medium,
    fontFamily: FONT.medium,
    color: COLORS.secondary,
  },
  hairline: {
    borderWidth: 0.3,
    width: "78%",
  },
  priceEndingLine: {
    marginVertical: 5,
    borderWidth: 0.3,
    width: "100%",
  },
  productContainer: {
    marginVertical: 5,
    borderRadius: SIZES.xxSmall,
    borderWidth: 1,
    borderColor: COLORS.primary,
    padding: SIZES.xxSmall,
  },
  txtContainer: {
    display: "flex",
    flexDirection: "row",
    columnGap: 5,
    alignItems: "center",
    marginVertical: 5,
    borderRadius: SIZES.xxSmall,
    borderWidth: 1,
    borderColor: COLORS.gray2,
    padding: SIZES.xxSmall,
  },
  price: {
    display: "flex",
    flexDirection: "row",
    columnGap: 5,
    alignItems: "center",
    marginVertical: 5,
  },
  priceContainer: {
    borderRadius: SIZES.xxSmall,
    borderWidth: 1,
    borderColor: COLORS.gray2,
    paddingHorizontal: SIZES.xxSmall,
  },
  dotTxt: {
    fontSize: SIZES.medium,
    fontFamily: FONT.medium,
    color: COLORS.gray2,
    width: 15,
  },
  headingTxt: {
    fontSize: SIZES.medium,
    fontFamily: FONT.medium,
    color: COLORS.secondary,
    width: 160,
  },
  rate: {
    fontSize: SIZES.medium,
    fontFamily: FONT.medium,
    color: COLORS.secondary,
  },
  orderValueTxt: {
    fontSize: SIZES.medium,
    fontFamily: FONT.medium,
    width: 128,
    textAlign: "right",
  },
  footerContainer: {
    padding: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  btn: (accept) => ({
    backgroundColor: accept ? COLORS.primary : COLORS.gray2,
    color: accept ? COLORS.lightWhite : COLORS.secondary,
    padding: 4,
    fontSize: SIZES.medium,
    fontWeight: "600",
    borderRadius: SIZES.xxSmall,
  }),
});
