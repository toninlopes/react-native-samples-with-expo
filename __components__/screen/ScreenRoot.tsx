import { ScrollView, StyleSheet } from "react-native";
import type { ScreenRootProps } from './types';
import { useSafeAreaInsets } from "react-native-safe-area-context";

const ScreenRoot: React.FC<ScreenRootProps> = ({ children, ...rest }) => {
  const insets = useSafeAreaInsets();
  return (
    <ScrollView contentContainerStyle={styles(insets.bottom).container} {...rest}>
      {children}
    </ScrollView>
  );
};

const styles = (
  bottomInset?: number,
) => ({
  ...StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 20,
      paddingHorizontal: 20,
      paddingBottom: bottomInset,
    },
  }),
});


export default ScreenRoot;