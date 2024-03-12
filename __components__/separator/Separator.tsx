import React from "react";
import { ColorValue, StyleSheet, View } from "react-native";
import type { SeparatorProps } from './types';

const Separator: React.FC<SeparatorProps> = ({ color, style }) => {
  return (
    <View style={[styles().separator, styles(color, style).border]} />
  );
};

const styles = (
  color?: ColorValue | undefined,
  style?: 'solid' | 'dotted' | 'dashed' | undefined,
) => ({
  ...StyleSheet.create({
    separator: {
      flex: 1,
    },
    border: {
      borderWidth: 0.8,
      borderColor: color || 'silver',
      borderStyle: style || 'dashed',
    },
  }),
});

export default Separator;