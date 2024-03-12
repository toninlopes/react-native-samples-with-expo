import { TextProps, TouchableOpacityProps } from "react-native";

export type ButtonRootProps = TouchableOpacityProps;

export type ButtonTitleProps = TextProps;

export type ButtonIconProps = {
  name: 'timer-outline'
};

export type ButtonType = React.FC<ButtonRootProps> & {
  Title: React.FC<ButtonTitleProps>;
  Icon: React.FC<ButtonIconProps>;
};