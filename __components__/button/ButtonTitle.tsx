import { StyleSheet, Text } from "react-native";
import type { ButtonTitleProps } from './types';

const ButtonTitle: React.FC<ButtonTitleProps> = ({ children, ...rest }) => (
  <Text style={styles.text} {...rest}>{children}</Text>
);

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    alignSelf: 'center',
  },
});

export default ButtonTitle;