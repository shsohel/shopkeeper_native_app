/** @format */

import React from 'react';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../../constants';

const CustomBtn = ({ iconUrl, dimension, pixel, handlePress }) => {
  return (
    <TouchableOpacity style={styles.btnContainer(pixel)} onPress={handlePress}>
      <Image
        source={iconUrl}
        resizeMode="cover"
        style={styles.btnImg(dimension)}
      />
    </TouchableOpacity>
  );
};

export default CustomBtn;

const styles = StyleSheet.create({
  btnContainer: (pixel) => ({
    width: pixel ?? 30,
    height: pixel ?? 30,
    backgroundColor: COLORS.white,
    borderRadius: SIZES.small / 1.25,
    justifyContent: 'center',
    alignItems: 'center',
  }),
  btnImg: (dimension) => ({
    width: dimension,
    height: dimension,
    borderRadius: SIZES.small / 1.25,
  }),
});
