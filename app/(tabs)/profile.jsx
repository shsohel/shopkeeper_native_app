/** @format */

import {
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { COLORS, FONT, SIZES, icons } from "../../constants";
import images from "../../constants/images";
import { useDispatch } from "react-redux";
import { bindAuthUser } from "../../store/auth";
export default function ProfileTab() {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(bindAuthUser(null));
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.intoContainer}>
        <View style={styles.authPhotoWrapper}>
          <Image style={styles.authPhoto} source={images.userPhoto} />
          <Pressable style={styles.photoAddBtn}>
            <Image style={styles.addIcon} source={icons.addIcon} />
          </Pressable>
        </View>
        <View>
          <Text style={styles.name}>SH SOHEL</Text>
        </View>
        <Pressable onPress={() => handleLogout()}>
          <Text style={styles.logoutBtn}>Logout</Text>
        </Pressable>
      </View>
      <View style={styles.detailsContainer}>
        <View style={styles.txtContainer}>
          <Text style={styles.txt}>দোকানের নাম</Text>
          <Text style={styles.dotTxt}>:</Text>
          <Text style={styles.secondaryTxt}>শাহ আমানত স্টোর</Text>
        </View>
        <View style={styles.txtContainer}>
          <Text style={styles.txt}>ফোন নাম্বার</Text>
          <Text style={styles.dotTxt}>:</Text>
          <Text style={styles.secondaryTxt}>০১৮১১-২৭৫৬৫৩</Text>
        </View>
        <View style={styles.txtContainer}>
          <Text style={styles.txt}> ‍রেজিস্ট্রেশন নং</Text>
          <Text style={styles.dotTxt}>:</Text>
          <Text style={styles.secondaryTxt}>০৫৪৯৭</Text>
        </View>
        <View style={styles.txtContainer}>
          <Text style={styles.txt}>এনআইডি নং</Text>
          <Text style={styles.dotTxt}>:</Text>
          <Text style={styles.secondaryTxt}>০৫৪৯৭-৫৯৪৯৫৪-৪৫</Text>
        </View>
        <View style={styles.txtContainer}>
          <Text style={styles.txt}>ইমেইল</Text>
          <Text style={styles.dotTxt}>:</Text>
          <Text style={styles.secondaryTxt}>shsohel.tc@gmail.com</Text>
        </View>
        <View style={styles.txtContainer}>
          <Text style={styles.txt}>ঠিকানা</Text>
          <Text style={styles.dotTxt}>:</Text>
          <Text
            style={styles.secondaryTxt}
            lineBreakMode="tail"
            numberOfLines={2}
          >
            ২নং গেইট, কর্নফুলি মার্কেট, স্টোর নং-৫, চট্টগ্রাম।
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightWhite,
    alignItems: "center",
    paddingHorizontal: 10,
    paddingTop: 50,
  },
  intoContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  authPhotoWrapper: {
    padding: 10,
    borderColor: COLORS.primary,
    borderWidth: 2,
    borderRadius: 100,
    marginVertical: 5,
    position: "relative",
  },
  photoAddBtn: {
    position: "absolute",
    right: 0,
    top: 0,
  },
  addIcon: {
    width: 30,
    height: 30,
  },
  authPhoto: {
    width: 80,
    height: 80,
    borderRadius: 100,
  },

  name: {
    fontSize: SIZES.medium,
    fontFamily: FONT.medium,
    color: COLORS.primary,
  },
  logoutBtn: {
    fontSize: SIZES.small,
    fontFamily: FONT.bold,
    color: COLORS.solidWhite,
    backgroundColor: COLORS.primary,
    padding: SIZES.xxSmall,
    borderRadius: SIZES.xxxSmall,
    marginVertical: SIZES.small,
  },
  txt: {
    fontSize: SIZES.large,
    fontFamily: FONT.medium,
    color: COLORS.primary,
    width: 140,
  },
  dotTxt: {
    fontSize: SIZES.large,
    fontFamily: FONT.medium,
    color: COLORS.gray2,
    width: 15,
  },
  secondaryTxt: {
    fontSize: SIZES.medium,
    fontFamily: FONT.medium,
    color: COLORS.secondary,
    // backgroundColor: COLORS.gray2,

    width: 215,
  },

  detailsContainer: {
    borderColor: COLORS.gray2,
    borderRadius: 5,
    borderWidth: 1,
    width: "100%",
    padding: 10,
    marginTop: 15,
  },
  txtContainer: {
    display: "flex",
    flexDirection: "row",
    columnGap: 5,
    alignItems: "center",
    marginVertical: 5,
  },
});
