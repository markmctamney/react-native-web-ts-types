import { ColorValue } from '../../types';

//import createElement from '../createElement';
import React from 'react';

export type PickerItemProps = {
	color?: ColorValue;
	label: string;
	testID?: string;
	value?: number | string;
};

export default class PickerItem extends React.Component<PickerItemProps> {}
