# Getting Started

To install react-native-web-ts-types, run

`npm i https://github.com/gtechnologies/react-native-web-ts-types.git`

or

`yarn add https://github.com/gtechnologies/react-native-web-ts-types.git`

It will automatically be saved as @types/react-native-web and allow you to use TypeScript with [react-native-web](https://github.com/necolas/react-native-web).

## Why is this package needed?

[react-native-web](https://github.com/necolas/react-native-web) is a powerful front-end development library that enables you to use the interface for [React Native](https://reactnative.dev/) components when developing on web. Thus far, react-native-web has used Facebook's [flow](https://flow.org/) instead of TypeScript for adding typing to JavaScript components. For developers using TypeScript, this can be problematic and cause compiling issues. Our team has built [react-native-web-ts-types](https://github.com/gtechnologies/react-native-web-ts-types.git) to make developing with react-native-web easier for teams using TypeScript.

## How To Convert From Flow To TypeScript

Generally, most files written in Flow can be converted to TypeScript using Khan Academy's flow-to-ts library.

`https://flow-to-ts.netlify.app/`
`https://github.com/Khan/flow-to-ts`

### Flow Type to TypeScript Type

`type ViewStyle = $PropertyType<ViewProps, 'style'>;` -> `type ViewStyle = ViewProps['style'];`

## // TODO

-   Filter for "forwardPropsList"

## Convert UI Components

-   FlatList

## Convert Other Files

# Known Issues

# Questions

-   Should we convert all React.Component to React.PureComponent or React.FunctionComponent?

# Discussion

-   https://github.com/necolas/react-native-web/issues/832
-   https://github.com/necolas/react-native-web/issues/1684
-   https://stackoverflow.com/questions/55231350/why-is-typescript-not-parsing-my-react-native-web-code-not-using-create-rea
