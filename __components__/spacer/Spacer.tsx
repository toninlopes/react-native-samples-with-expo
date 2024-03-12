import { View, StyleSheet } from "react-native";

const Spacer: React.FC = () => (<View style={styles.view} />);

const styles = StyleSheet.create({
  view: {
    flex: 1,
  }
});

export default Spacer;