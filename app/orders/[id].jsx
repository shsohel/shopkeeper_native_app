/** @format */

import React from 'react';
import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';
import { Stack, useLocalSearchParams, useRouter } from 'expo-router';
import ScreenHeaderBtn from '../../components/common/ScreenHeaderBtn';
import { COLORS, FONT, SIZES, icons } from '../../constants';

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

const OrderDetails = () => {
  const params = useLocalSearchParams();
  const router = useRouter();
  const handleRouter = () => {
    router.back();
  };
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
          headerTitle: '',
        }}
      />

      <View style={styles.infoContainer}>
        <View style={styles.txtContainer}>
          <Text style={styles.txt}>কাস্টমার</Text>
          <Text style={styles.dotTxt}>:</Text>
          <Text style={styles.secondaryTxt}>সাহনাজ চৌধুরী</Text>
        </View>
        <View style={styles.txtContainer}>
          <Text style={styles.txt}>মোবাইল</Text>
          <Text style={styles.dotTxt}>:</Text>
          <Text style={styles.secondaryTxt}>+৮৮০-১৮১১-২৭৫৬৫৩</Text>
        </View>
        <View style={styles.txtContainer}>
          <Text style={styles.txt}>অর্ডার নং</Text>
          <Text style={styles.dotTxt}>:</Text>
          <Text style={styles.secondaryTxt}>০৪৩৮৯৩৪৪৩৭৯</Text>
        </View>
        <View style={styles.txtContainer}>
          <Text style={styles.txt}>তারিখ</Text>
          <Text style={styles.dotTxt}>:</Text>
          <Text style={styles.dateTxt}>
            জানুয়ারি ১৪, ২০২৪ (সকাল ১০টা:৩২মিনিট)
          </Text>
        </View>
        <View style={styles.txtContainer}>
          <Text style={styles.txt}>স্ট্যাটাস</Text>
          <Text style={styles.dotTxt}>:</Text>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              gap: 10,
            }}
          >
            <Text style={styles.pendingTxt}>অপেক্ষমান</Text>
            <Pressable
              onPress={() => {
                router.push({
                  pathname: `/orders/manage-order`,
                  params: {
                    order: orderItemsData,
                  },
                });
              }}
            >
              <Text style={styles.btn}>গ্রহণ করুন</Text>
            </Pressable>
          </View>
        </View>
      </View>
      <View></View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        // refreshControl={
        //   <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        // }
      >
        <View style={styles.detailsContainer}>
          <View style={styles.lineContainer}>
            <Text style={styles.lineTxt}>বিস্তারিত : </Text>
            <View style={styles.hairline} />
          </View>
          {orderItemsData.map((product) => {
            return (
              <View key={product.id} style={styles.txtContainer}>
                <Text style={styles.headingTxt}>{product.name}</Text>
                <Text style={styles.dotTxt}>:</Text>
                <Text
                  style={styles.orderValueTxt}
                >{`${product.quantity} ${product.unit}`}</Text>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default OrderDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightWhite,
    padding: SIZES.small,
  },
  infoContainer: {
    backgroundColor: COLORS.solidWhite,
    borderRadius: SIZES.xxSmall,
    borderWidth: 1,
    borderColor: COLORS.gray2,
    padding: SIZES.small,
    marginBottom: SIZES.medium,
  },
  detailsContainer: {
    backgroundColor: COLORS.solidWhite,
    borderRadius: SIZES.xxSmall,
    borderWidth: 1,
    borderColor: COLORS.gray2,
    padding: SIZES.small,
  },
  txtContainer: {
    display: 'flex',
    flexDirection: 'row',
    columnGap: 5,
    alignItems: 'center',
    marginVertical: 5,
  },
  txt: {
    fontSize: SIZES.medium,
    fontFamily: FONT.medium,
    color: COLORS.primary,
    width: 90,
  },
  dotTxt: {
    fontSize: SIZES.medium,
    fontFamily: FONT.medium,
    color: COLORS.gray2,
    width: 15,
  },
  secondaryTxt: {
    fontSize: SIZES.medium,
    fontFamily: FONT.medium,
    color: COLORS.secondary,
    // backgroundColor: COLORS.gray2,
    width: 250,
  },
  pendingTxt: {
    fontSize: SIZES.medium,
    fontFamily: FONT.medium,
    color: COLORS.secondary,
    // backgroundColor: COLORS.gray2,
  },
  dateTxt: {
    fontSize: SIZES.small,
    fontFamily: FONT.medium,
    color: COLORS.secondary,
    // backgroundColor: COLORS.gray2,
    width: 250,
  },

  headingTxt: {
    fontSize: SIZES.medium,
    fontFamily: FONT.medium,
    color: COLORS.secondary,
    width: 180,
  },
  orderValueTxt: {
    fontSize: SIZES.medium,
    fontFamily: FONT.medium,
    width: 90,
  },
  btn: {
    backgroundColor: COLORS.primary,
    color: COLORS.lightWhite,
    padding: 4,
    fontSize: SIZES.small,
    fontWeight: '600',
    borderRadius: SIZES.xxSmall,
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
    borderWidth: 0.2,
    width: '78%',
  },
});
