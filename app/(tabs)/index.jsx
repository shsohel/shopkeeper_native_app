/** @format */

import { Button, Platform, SafeAreaView, StyleSheet, View } from 'react-native';

import { Stack, Tabs, useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { COLORS } from '../../constants';
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';

export default function TabHomeScreen() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <View>
        {/* <Button
          color={COLORS.primary}
          onPress={() => {
            router.push('/auth/login');
          }}
          title="Got To"
        /> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
