/** @format */

import React from 'react';
import { Stack } from 'expo-router';

const OrderLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="manage-order"
        options={{
          headerShown: false,
          // Set the presentation mode to modal for our modal route.
          presentation: 'modal',
        }}
      />
    </Stack>
  );
};

export default OrderLayout;
