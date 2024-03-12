import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import type { ButtonIconProps } from './types';

const ButtonIcon: React.FC<ButtonIconProps> = ({ name }) => (
  <View style={styles.view}>
    <Ionicons name={name} size={28}/>
  </View>
);

const styles = StyleSheet.create({
  view: {
    paddingHorizontal: 12,
  },
});

export default ButtonIcon;