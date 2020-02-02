# React Native Template

This is a React Native template project created to use for the mobile programming exam.
Please feel free to use it however you want.

## Getting started
- clone or download the repository
- open the project folder in any IDE you want
- run `yarn install` for installing all the required packages
- for iOS development you must `cd ios && pod install` to install all cocoapods dependencies
- run `yarn ios` or `yarn android` and get ready to code

## Useful commands
- `yarn ios` - starts the iOS application
- `yarn android` - starts the Android application
- `yarn start` - starts the Metro Bundler independently
- `yarn test` - runs the Jest tests
- `yarn format` - runs [prettier](https://prettier.io/) on all modified files
- `yarn lint` - runs [eslint](https://eslint.org/) on all modified files
- `yarn fix` - runs both `yarn format` and `yarn lint` on all modified files

> Keep in mind that the project uses husky so on pre-commit the `yarn fix` command will be run.

## Packages used
- [react-native](https://facebook.github.io/react-native/) - A framework for building native apps with React
- [react-redux](https://react-redux.js.org/) - A predictable state container for JS Apps
- [redux-saga](https://redux-saga.js.org/) - A library that makes application side effects easier to manage
- [redux-persist](https://github.com/rt2zz/redux-persist) - A library used to persist and rehydrate a redux store
- [reduxsauce](https://github.com/jkeam/reduxsauce) - A few tools for working with redux codebase
- [axios](https://github.com/axios/axios) - Promise based HTTP client for the browser and node.js
- [ui-kitten](https://akveo.github.io/react-native-ui-kitten/) - A React-Native UI Framework
___
Please feel free to suggest any changes and improvements and let me know if you encounter issues :blush: