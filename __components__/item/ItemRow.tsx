import React from "react";
import { StyleSheet, View } from "react-native";
import type { ItemRowProps } from './types';

const ItemRow: React.FC<ItemRowProps> = ({ children }) => {
  return (
    <View style={styles.row}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 20,
  },
});

export default ItemRow;