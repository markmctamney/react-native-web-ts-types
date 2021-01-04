import type { ViewProps } from '../View';
import PickerItem, { PickerItemProps } from './PickerItem';
// TODO: implement StyleObj
//import { type StyleObj } from '../StyleSheet';

export { PickerItem, PickerItemProps };

export type PickerProps = ViewProps & {
	children?: PickerItem | Array<typeof PickerItem>;
	enabled?: boolean;
	onValueChange?: (arg0: number | string, arg1: number) => void;
	selectedValue?: number | string;
	style?: any; //StyleObj;

	/* compat */
	itemStyle?: any; //StyleObj;
	mode?: string;
	prompt?: string;
};

export default class Picker extends React.Component<PickerProps> {}
