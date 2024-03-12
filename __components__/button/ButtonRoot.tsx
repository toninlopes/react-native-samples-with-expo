import { StyleSheet, TouchableOpacity } from "react-native";
import type { ButtonRootProps } from './types';

const ButtonRoot: React.FC<ButtonRootProps> = ({ children, disabled, ...rest }) => (
  <TouchableOpacity style={styles(disabled).button} disabled={disabled} {...rest}>
    {children}
  </TouchableOpacity>
);

const styles = (
  disabled?: boolean,
) => ({
  ...StyleSheet.create({
    button: {
      flexDirection: 'row',
      backgroundColor: 'silver',
      padding: 6,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 8,
      height: 42,
      opacity: disabled ? 0.4 : 1,
    },
    buttonText: {
      fontSize: 18,
    }
  }),
});

export default ButtonRoot;