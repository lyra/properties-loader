# @lyracom/properties-loader

> Webpack loader for .properties files, based on the [properties](https://www.npmjs.com/package/properties) package.

[![npm (scoped)](https://img.shields.io/npm/v/@lyracom/properties-loader)](https://www.npmjs.com/package/@lyracom/properties-loader)

## Installation

```sh
yarn add -D @lyracom/properties-loader
```

or

```sh
npm install -D @lyracom/properties-loader
```

## Usage

### Webpack configuration

```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.properties$/,
        loader: '@lyracom/properties-loader',
        options: {
          namespaces: true,
          sections: true,
          // other properties.parse options...
        },
      },
    ],
  },
}
```

### Webpack inline

```js
import strings from '!@lyracom/properties-loader?namespaces&sections!./strings.properties'
```

Options can be passed with a query parameter, e.g. `?namespaces&sections=false`, or a JSON object, e.g. `?{"namespaces":true,"sections":false}`.

More info here: https://webpack.js.org/concepts/loaders/#inline
