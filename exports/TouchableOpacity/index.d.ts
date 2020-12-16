import React from 'react';

import type { TouchableWithoutFeedbackProps } from '../TouchableWithoutFeedback';
import type { ViewProps, ViewStyle } from '../View';

export type TouchableOpacityProps = TouchableWithoutFeedbackProps & {
	activeOpacity?: number | null | undefined;
	style?: ViewStyle | null | undefined;
};

export default class TouchableOpacity extends React.Component<TouchableOpacityProps> {}
