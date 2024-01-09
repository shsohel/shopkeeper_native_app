/** @format */

import { Button, StyleSheet, View } from "react-native";

import { useRouter } from "expo-router";

export default function TabOneScreen() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Button
        onPress={() => {
          router.push("/login");
        }}
        title="Got To"
      />

      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      {/* <EditScreenInfo path="app/(tabs)/index.tsx" /> */}
    </View>
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
