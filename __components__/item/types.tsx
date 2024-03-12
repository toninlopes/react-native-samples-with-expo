import { ReactNode } from "react";
import { TouchableOpacityProps } from "react-native";

export type ItemRootProps = { href?: string } & TouchableOpacityProps;

export type ItemContentProps = {
  title: string;
};

export type ItemRowProps = {
  children: ReactNode;
};

export type ItemType = React.FC<ItemRootProps> & {
  Row: React.FC<ItemRowProps>;
  Content: React.FC<ItemContentProps>;
  Chevron: React.FC;
};