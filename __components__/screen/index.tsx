import ScreenHeader from './ScreenHeader';
import ScreenRoot from './ScreenRoot';
import type { ScreenType } from './types';

const ScreenTemp: any = ScreenRoot;
ScreenTemp.Header = ScreenHeader

const Screen = ScreenTemp as ScreenType;

export { Screen };
