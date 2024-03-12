import { ColorValue } from "react-native";

export type SeparatorProps = {
  color?: ColorValue | undefined;
  style?: 'solid' | 'dotted' | 'dashed' | undefined;
};

export type SeparatorType = React.FC<SeparatorProps>;