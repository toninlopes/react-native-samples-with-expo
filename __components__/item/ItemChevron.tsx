import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const ItemChevron: React.FC = () => {
  return (
    <View style={styles.view}>
      <Ionicons name='chevron-forward-outline' size={28}/>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    // paddingHorizontal: 12,
  },
});

export default ItemChevron;