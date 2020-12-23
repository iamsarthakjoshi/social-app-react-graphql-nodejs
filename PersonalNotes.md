# My Personal Notes

# Babel

# Typescript

- Creating React and TypeScript apps with Webpack
  > https://www.carlrippon.com/creating-react-and-typescript-apps-with-webpack/

# Webpack Tutorials

- Config Webpack + React + JavaScript/TypeScript
  > https://www.youtube.com/watch?v=ihhPyqfdbjo (Sep 10, 2020)
- devServer & Hot Module Replacement (Live Reload)
  > https://www.youtube.com/watch?v=yR25JoybTxo (Sep 29, 2020)
- React (Babel) and Sass webpack Tutorial: Extract CSS Into Its Own Separate File
  > https://www.youtube.com/watch?v=eddzBlXBl3Y&t=386s

## Run dev server with webpack-cli

- _webpack serve_ **vs** _webpack-dev-server_
  > If project has these versions webpack": "^5.2.0 webpack-cli": "^4.1.0 webpack-dev-server": "^3.11.0, use "webpack serve" since webpack 5 removed most depricated features

## style-loader & css-loader

- style-loader makes the css acutally load in the browser, otherwise css-loader alone wouldn't work (at least in dev env)
- css-loader is responsible for just making sure it actually can import and end up in our bundle

## mini-css-extract-plugin

- the reason we're getting this main.css file in **build** folder is because we are using `mini-css-extract-plugin` so we're using this plugin and we're using its loader. Normally stylings would actually be part of the _js bundle_, so this is just so that the styling is actually not part of the bundle but instead its has it's own separate file.

## webpack.DefinePlugin + cross-env

Sometimes when we're developing we have multiple environments. So we have our beta environment we might have our development, uats, staging environment and then production environment and so all these environments have different environment variables. Hence, we want our builds to be different depending on which environment, we're in to do this what i'm going to use cross-env library.

- cross-env helps to export NODE_ENV to user-defined variable in package.json's script object
  > "build:beta": "cross-env NODE_ENV=beta webpack"
  > "start:beta": "cross-env NODE_ENV=prod_beta webpack serve"
- webpack.DefinePlugin helps to define custom NODE_ENV in webpack.config.js
  ```
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: JSON.stringify(process.env.NODE_ENV) },
    }),
  ```
- Note: if webpack.DefinePlugin is enabled, then default NODE_ENV is overwritten, so you must use cross-env in package.json's script object (even for default NODE_ENV variables set by node.)

## check for depricated webpack plugins

> node --trace-deprecation ./node_modules/.bin/webpack

## html-webpack-plugin

Helps to generate html files with cached files (below)

## Cache busting string for bundle.js and main.css files

Example:

```
 output: {
    filename: 'bundle.[fullhash].js',
    path: path.resolve(__dirname, 'build'),
  },
```

```
  new MiniCssExtractPlugin({ filename: 'main.[fullhash].css' })
```
