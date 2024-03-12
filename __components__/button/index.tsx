import ButtonIcon from './ButtonIcon';
import ButtonRoot from './ButtonRoot';
import ButtonTitle from './ButtonTitle';
import type { ButtonType } from './types';

const ButtonTemp: any = ButtonRoot;
ButtonTemp.Title = ButtonTitle;
ButtonTemp.Icon = ButtonIcon;

const Button = ButtonTemp as ButtonType;

export { Button };
