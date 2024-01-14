/** @format */

import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";

import { COLORS, FONT, SIZES } from "../../constants";
import Customers from "../../components/home/Customers";

export default function CustomsTab() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.tab}>
        <Text style={styles.txt}>কাস্টমার</Text>
      </View>

      <ScrollView
        style={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        <Customers />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
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
