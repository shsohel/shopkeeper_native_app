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
  Pressable,
} from "react-native";
import { COLORS, FONT, SIZES, icons } from "../../constants";
import { Link } from "expo-router";

export default function SignUp() {
  const [whom, setWhom] = useState("shopkeeper");
  const [signUp, setSignUp] = useState({
    name: "",
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
        <View style={styles.loginTxt}>
          <View>
            <Text style={styles.title}> একাউন্ট তথ্য </Text>
          </View>
          <View style={styles.who}>
            <Pressable
              onPress={() => {
                setWhom("shopkeeper");
              }}
            >
              <Text style={styles.whoBtn(whom === "shopkeeper")}>দোকানদার</Text>
            </Pressable>
            <Pressable
              onPress={() => {
                setWhom("customer");
              }}
            >
              <Text style={styles.whoBtn(whom === "customer")}>কাস্টমার</Text>
            </Pressable>
          </View>
        </View>

        <View style={styles.textBox}>
          <TextInput
            style={styles.input}
            value={signUp.name}
            onChangeText={(text) => {
              setSignUp({
                ...signUp,
                name: text,
              });
            }}
            placeholder="নিজের নাম দিন"
          />
        </View>
        <View style={styles.textBox}>
          <TextInput
            style={styles.input}
            inputMode="tel"
            value={signUp.phoneNumber}
            onChangeText={(text) => {
              setSignUp({
                ...signUp,
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
            value={signUp.password}
            onChangeText={(text) => {
              setSignUp({
                ...signUp,
                password: text,
              });
            }}
            placeholder="পাসওয়ার্ড "
          />
        </View>
        <View style={styles.button}>
          <Button color={COLORS.primary} title="সাবমিট করুন" />
        </View>
        <View style={styles.signUp}>
          <Text style={styles.link}>আপনার কি একাউন্ট আছে?</Text>
          <Link style={styles.createAccountBtn} href="/auth/login">
            লগিন
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

  loginTxt: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  who: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 5,
  },
  whoBtn: (active) => ({
    backgroundColor: active ? COLORS.white : COLORS.primary,
    padding: SIZES.xxSmall,
    color: active ? COLORS.primary : COLORS.white,
    borderBottomColor: active ? COLORS.primary : COLORS.white,
    borderBottomWidth: active ? 2 : 0,
  }),

  textBox: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: COLORS.white,
    height: 40,
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
