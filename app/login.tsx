/** @format */

import React, { useState } from "react";
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
} from "react-native";
import { COLORS, FONT, SIZES, icons } from "../constants";

export default function Login() {
  const [login, setLogin] = useState({
    phoneNumber: "",
    password: "",
  });

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.loginWrapper}>
        <View style={styles.logoWrapper}>
          <View style={styles.logo}>
            <Image source={icons.customerIcon} />
          </View>
        </View>
        <View>
          <Text style={styles.title}>Login</Text>
        </View>
        <View style={styles.textBox}>
          <TextInput
            style={styles.input}
            inputMode="tel"
            value={login.phoneNumber}
            onChangeText={(text) => {
              setLogin({
                ...login,
                phoneNumber: text,
              });
            }}
            placeholder="Phone Number"
          />
        </View>
        <View style={styles.textBox}>
          <TextInput
            style={styles.input}
            inputMode="search"
            secureTextEntry={true}
            value={login.password}
            onChangeText={(text) => {
              setLogin({
                ...login,
                password: text,
              });
            }}
            placeholder="Password"
          />
        </View>
        <View style={styles.button}>
          <Button color={COLORS.primary} title="Login" />
          <Button color={COLORS.secondary} title="Sign Up" />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.lightWhite,
  },

  loginWrapper: {
    display: "flex",
    justifyContent: "center",
    padding: 50,
    gap: 20,
  },

  logoWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  logo: {
    width: 100,
    height: 100,
    borderWidth: 1,
    borderColor: COLORS.gray,
    borderRadius: SIZES.xSmall,
  },

  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: COLORS.primary,
  },

  textBox: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: COLORS.white,
    height: 50,
    borderRadius: SIZES.xSmall,
    borderWidth: 1,
    borderColor: COLORS.gray,
  },

  input: {
    fontFamily: FONT.regular,
    paddingHorizontal: SIZES.medium,
  },
  button: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "flex-end",
    gap: 20,
  },
});
