import ItemChevron from './ItemChevron';
import ItemContent from './ItemContent';
import ItemRoot from './ItemRoot';
import ItemRow from './ItemRow';
import type { ItemType } from './types';

const ItemTemp: any = ItemRoot;
ItemTemp.Content = ItemContent;
ItemTemp.Chevron = ItemChevron;
ItemTemp.Row = ItemRow;

const Item = ItemTemp as ItemType;

export { Item };
