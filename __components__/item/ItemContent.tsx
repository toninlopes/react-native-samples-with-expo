import React from "react";
import { Text, StyleSheet, View } from "react-native";
import type { ItemContentProps } from './types';

const ItemContent: React.FC<ItemContentProps> = ({ title }) => {
  return (
    <View style={styles.view}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
  },
  title: {
      fontSize: 22,
  },
});

export default ItemContent;