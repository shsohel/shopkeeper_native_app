/** @format */

import { Text, Dimensions, SafeAreaView, StyleSheet, View } from "react-native";

import { useRouter } from "expo-router";

import { COLORS, FONT, SIZES } from "../../constants";
import Card from "../../components/common/Card";
import Customers from "../../components/home/Customers";

import CustomerOrders from "../../components/home/CustomerOrders";
import Tabs from "../../components/common/Tabs";

const tabs = [
  {
    id: "customers",
    name: "কাস্টমার",
    components: <Customers />,
    isActive: true,
  },
  {
    id: "orders",
    name: "অর্ডার",
    components: <CustomerOrders />,
    isActive: false,
  },
];

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
      {/* <View style={styles.tabContainer}>
        <View style={styles.tabs(width)}>
          {tabControl.map((tab) => {
            return (
              <View key={tab.id}>
                <Pressable onPress={() => handleTabControl(tab)}>
                  <View style={styles.tab(isActive(tab))}>
                    <Text style={styles.txt(isActive(tab))}>{tab.name}</Text>
                  </View>
                </Pressable>
              </View>
            );
          })}
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          {getActiveTabComponent()}
        </ScrollView>
      </View> */}
      <View style={styles.tabMainContainer}>
        <Tabs tabs={tabs} />
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
  tabMainContainer: {
    paddingBottom: 50,
  },
  customerTitle: {
    fontSize: SIZES.large,
    fontFamily: FONT.medium,
    color: COLORS.primary,
  },
});
