import { Stack } from "expo-router";

const Layout: React.FC = () => {
  return <Stack
    screenOptions={{
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      headerTintColor: 'black',
      headerBackTitleVisible: false,
    }}
  />
};

export default Layout;