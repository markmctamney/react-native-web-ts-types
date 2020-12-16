import React from 'react';

import { ViewProps, ViewStyle } from '../View/types';

export type ScrollViewProps = ViewProps & {
	contentContainerStyle?: ViewStyle;
	horizontal?: boolean;
	keyboardDismissMode?: 'none' | 'interactive' | 'on-drag';
	onContentSizeChange?: (e: any) => void;
	onScroll?: (e: any) => void;
	pagingEnabled?: boolean;
	refreshControl?: any;
	scrollEnabled?: boolean;
	scrollEventThrottle?: number;
	stickyHeaderIndices?: Array<number>;
};

export default class ScrollView extends React.Component<ScrollViewProps> {}
