/** @format */

import React, { useState } from 'react';
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  ScrollView,
  Pressable,
} from "react-native";
import { COLORS, FONT, SIZES, icons } from "../../constants";
import { Link, router } from "expo-router";

import { useDispatch } from "react-redux";
import { bindAuthUser } from "../../store/auth";
export default function Login() {
  const dispatch = useDispatch();
  const [whom, setWhom] = useState("shopkeeper");

  const [login, setLogin] = useState({
    phoneNumber: "",
    password: "",
  });

  const handleLogin = () => {
    const obj = {
      name: "এসএইচ সোহেল",
      shop: "শাহ আমানত স্টোর",
      phoneNumber: "০১৮১১২৭৫৬৫৩",
      registrationNo: "০৫৪৯৭৯",
      nidNo: "০৮৪৯৫৮৪৯৮৫৯৪৮",
      email: "",
      role: whom,
      address: "২নং গেইট, কর্নফুলি মার্কেট, স্টোর নং-৫, চট্টগ্রাম",
    };
    dispatch(bindAuthUser(obj));
  };

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
            <Text style={styles.title}>লগিন তথ্য</Text>
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
          <Button
            color={COLORS.primary}
            title="লগিন করুন"
            onPress={() => {
              handleLogin();
            }}
          />
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
  },

  loginWrapper: {
    justifyContent: "center",
    padding: 50,
    gap: 20,
  },

  logoWrapper: {
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
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    gap: 20,
    marginVertical: SIZES.medium,
  },
});
