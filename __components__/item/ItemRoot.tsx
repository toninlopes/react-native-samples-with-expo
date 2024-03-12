import React from 'react';
import { TouchableOpacity, ViewProps } from 'react-native';
import { Link } from 'expo-router';
import type { ItemRootProps } from './types';

const ItemRoot: React.FC<ItemRootProps> = ({ href, ...rest }) => {

  if (href) {
    return (
      <Link asChild href={href}>
        <TouchableOpacity {...rest} />
      </Link>
    );  
  }

  return (
    <TouchableOpacity {...rest} />
  );
}

export default ItemRoot;