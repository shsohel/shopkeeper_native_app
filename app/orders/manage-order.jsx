import { StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';
import { COLORS, SIZES, FONT } from '../../constants';
import { router, useLocalSearchParams } from 'expo-router';
import CustomModal from '../../components/common/CustomModal';

const orderItemsData = [
  {
    id: 1,
    name: 'আলু',
    quantity: '২',
    unit: 'কেজি',
  },
  {
    id: 2,
    name: 'সয়াবিন তেল',
    quantity: '২',
    unit: 'লিটার',
  },
  {
    id: 3,
    name: 'পিঁয়াজ',
    quantity: '১',
    unit: 'কেজি',
  },
  {
    id: 4,
    name: 'চিনি',
    quantity: '২৫০',
    unit: 'গ্রাম',
  },
];

export default function ManageOrder() {
  const params = useLocalSearchParams();
  console.log(params);
  const handlePress = () => {
    router.back();
  };
  return (
    <CustomModal title="অর্ডার মেনেজ" handlePress={handlePress}>
      <View style={styles.detailsContainer}>
        <View style={styles.lineContainer}>
          <Text style={styles.lineTxt}>দাম নির্ধারণ : </Text>
          <View style={styles.hairline} />
        </View>
        {orderItemsData.map((product) => {
          return (
            <View key={product.id} style={styles.productContainer}>
              <View style={styles.txtContainer}>
                <Text style={styles.headingTxt}>{product.name}</Text>
                <Text style={styles.dotTxt}>:</Text>
                <View
                  style={{
                    backgroundColor: COLORS.gray2,
                    borderRadius: 3,
                  }}
                >
                  <TextInput style={{ padding: 2 }} value={product.quantity} />
                </View>
                <View
                  style={{
                    backgroundColor: COLORS.gray2,
                    borderRadius: 3,
                  }}
                >
                  <TextInput style={{ padding: 2 }} value={product.unit} />
                </View>
              </View>
              <View style={styles.priceContainer}>
                <View style={styles.price}>
                  <Text style={styles.headingTxt}>দাম/মূল্য </Text>
                  <Text style={styles.dotTxt}>:</Text>
                  <View
                    style={{
                      backgroundColor: COLORS.gray2,
                      borderRadius: 3,
                    }}
                  >
                    <TextInput style={{ padding: 2 }} value="২০০" />
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
              <Text style={{ padding: 2 }}>৯৯৪৯</Text>
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
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
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
    width: '78%',
  },
  priceEndingLine: {
    marginVertical: 5,
    borderWidth: 0.3,
    width: '100%',
  },
  productContainer: {
    marginVertical: 5,
    borderRadius: SIZES.xxSmall,
    borderWidth: 1,
    borderColor: COLORS.primary,
    padding: SIZES.xxSmall,
  },
  txtContainer: {
    display: 'flex',
    flexDirection: 'row',
    columnGap: 5,
    alignItems: 'center',
    marginVertical: 5,
    borderRadius: SIZES.xxSmall,
    borderWidth: 1,
    borderColor: COLORS.gray2,
    padding: SIZES.xxSmall,
  },
  price: {
    display: 'flex',
    flexDirection: 'row',
    columnGap: 5,
    alignItems: 'center',
    marginVertical: 5,
  },
  priceContainer: {
    borderRadius: SIZES.xxSmall,
    borderWidth: 1,
    borderColor: COLORS.gray2,
    padding: SIZES.xxSmall,
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
    width: 90,
  },
});
