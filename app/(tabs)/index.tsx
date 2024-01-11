/** @format */

import { Button, Platform, SafeAreaView, StyleSheet, View } from "react-native";

import { Stack, useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { COLORS } from "../../constants";

export default function TabOneScreen() {
  const router = useRouter();
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Button
          color={COLORS.primary}
          onPress={() => {
            router.push("/auth/login");
          }}
          title="Got To"
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
