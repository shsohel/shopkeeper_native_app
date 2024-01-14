/** @format */

import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import CustomerOrders from "../../components/home/CustomerOrders";
import { COLORS, FONT, SIZES } from "../../constants";

export default function OrdersTab() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.tab}>
        <Text style={styles.txt}>অর্ডার সমুহ</Text>
      </View>
      <ScrollView
        style={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        <CustomerOrders />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 5,
    paddingHorizontal: 5,
  },
  scrollContainer: {
    marginBottom: 45,
    paddingBottom: 50,
  },
  tab: {
    backgroundColor: COLORS.lightWhite,
    paddingVertical: 4,
    paddingHorizontal: 20,

    // borderRadius: 2,
    borderColor: COLORS.primary,
    borderBottomWidth: 2,
  },
  txt: {
    fontSize: SIZES.large,
    fontFamily: FONT.medium,
    color: COLORS.primary,
  },
});
