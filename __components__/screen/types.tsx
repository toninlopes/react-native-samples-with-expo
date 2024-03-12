import { ScrollViewProps } from "react-native";

export type ScreenRootProps = ScrollViewProps;

export type ScreenHeaderProps = {
  title: string;
  isLargeTitle?: boolean;
};

export type ScreenType = React.FC<ScreenRootProps> & {
  Header: React.FC<ScreenHeaderProps>;
};