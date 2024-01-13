/** @format */

import {
  Button,
  Text,
  Platform,
  Dimensions,
  SafeAreaView,
  StyleSheet,
  View,
  ScrollView,
} from "react-native";

import { useRouter } from "expo-router";

import { COLORS, FONT, SIZES } from "../../constants";
import Card from "../../components/common/Card";
import Customers from "../../components/home/Customers";

export default function TabHomeScreen() {
  const router = useRouter();
  const { width } = Dimensions.get("screen");

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.twoCardContainer(width)}>
        <Card width="49%">
          <Text style={styles.cardTitle}>বাকিতে বিক্রয়</Text>
          <Text style={styles.taka}>{`৳ ২০৯৪৬`}</Text>
          <Text style={styles.month}>(জানুয়ারী, ২০২৪)</Text>
        </Card>
        <Card width="49%" color={COLORS.gray}>
          <Text style={styles.cardTitle}>বাকি পরিশোধ</Text>
          <Text style={styles.taka}>{`৳ ৭৯৮৫`}</Text>
          <Text style={styles.month}>(জানুয়ারী, ২০২৪)</Text>
        </Card>
      </View>
      <View style={styles.customerContainer}>
        <View>
          <Text style={styles.customerTitle}>কাস্টমার</Text>
        </View>
        <ScrollView>
          <Customers />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 140,
    // alignItems: "center",
  },
  twoCardContainer: (width) => ({
    display: "flex",
    columnGap: 5,
    flexDirection: "row",
    width: width,
    padding: 5,
    // backgroundColor: COLORS.primary,
  }),

  cardTitle: {
    color: COLORS.white,
  },
  taka: {
    color: COLORS.white,
    fontSize: 29,
    textAlign: "center",
  },
  month: {
    textAlign: "center",
    color: COLORS.white,
  },
  customerContainer: {
    padding: 5,
  },
  customerTitle: {
    fontSize: SIZES.large,
    fontFamily: FONT.medium,
    color: COLORS.primary,
  },
});
