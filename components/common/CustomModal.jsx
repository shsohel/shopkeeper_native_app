import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';

import CustomBtn from './CustomBtn';
import { COLORS, SIZES, SHADOWS, icons } from '../../constants';

export default function CustomModal(props) {
  const { handlePress, title, footer, children } = props;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainContainer}>
        <View>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{title}</Text>
            <Pressable>
              <CustomBtn
                iconUrl={icons.left}
                dimension="60%"
                handlePress={handlePress}
              />
            </Pressable>
          </View>
          <View style={styles.line} />
        </View>
        <ScrollView
          style={styles.scrollContainer}
          showsVerticalScrollIndicator={false}
        >
          {children}
        </ScrollView>
        {footer && footer}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightWhite,

    padding: SIZES.small,
  },
  titleContainer: {
    padding: SIZES.small,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    color: COLORS.primary,
    fontSize: SIZES.medium,
  },
  line: {
    borderColor: COLORS.gray2,
    borderWidth: 0.3,
  },
  mainContainer: {
    flex: 1,
    backgroundColor: COLORS.lightWhite,
    opacity: 1,
    borderRadius: SIZES.xxSmall,
    borderWidth: 0.5,
    borderColor: COLORS.gray2,
    ...SHADOWS.medium,
  },
  scrollContainer: {
    padding: SIZES.small,
  },
});
