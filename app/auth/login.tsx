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
  ScrollView,
} from "react-native";
import { COLORS, FONT, SIZES, icons } from "../../constants";
import { Link, Stack } from "expo-router";

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
          <Text style={styles.title}>লগিন তথ্য</Text>
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
            placeholder="ফোন নাম্বার"
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
            placeholder="পাসওয়ার্ড"
          />
        </View>
        <View style={styles.button}>
          <Link href="/forgot-password" style={styles.link}>
            আপনি কি পাসওয়ার্ড ভুলে গেছেন ?
          </Link>
          <Button color={COLORS.primary} title="লগিন করুন" />
        </View>
        <View style={styles.signUp}>
          <Text style={styles.link}> একাউন্ট তৈরি করেন নি?</Text>
          <Link style={styles.createAccountBtn} href="/auth/sign-up">
            একাউন্ট তৈরি করুন
          </Link>
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
    borderRadius: SIZES.xxSmall,
    borderWidth: 1,
    borderColor: COLORS.gray,
  },

  input: {
    fontFamily: FONT.regular,
    paddingHorizontal: SIZES.medium,
  },
  link: {
    color: COLORS.primary,
  },
  button: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "flex-end",
    gap: 20,
  },
  createAccountBtn: {
    backgroundColor: COLORS.primary,
    padding: SIZES.xSmall,
    borderRadius: 2,
    color: COLORS.lightWhite,
    fontWeight: "700",
  },
  signUp: {
    height: 100,
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    gap: 20,
    marginVertical: SIZES.medium,
  },
});
