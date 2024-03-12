import type { ScreenHeaderProps } from './types';
import { Stack } from "expo-router";

const ScreenHeader: React.FC<ScreenHeaderProps> = ({ title, isLargeTitle }) => {
  return (
    <Stack.Screen options={{
      title,
      headerLargeTitle: isLargeTitle,
    }} />
  );
};

export default ScreenHeader;