var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');

module.exports = {
  context: __dirname + "/",
  devtool: debug ? "inline-sourcemap" : null,
  entry: './src/main.js',
  output: {
    path: __dirname + '/',
    filename: 'index.js'
  },
  devServer: {
    inline: true,
    port: 3333
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react', 'stage-1', "stage-0"],
          plugins: ['react-html-attrs',
            'transform-class-properties',
            'transform-decorators-legacy',
            'transform-decorators']
        }
      },
      {
        test: /\.json$/,
        loader: 'json-loader',
      }
    ]
  },
  plugins: debug ?
   [
     new webpack.IgnorePlugin(/regenerator|nodent|js\-beautify/, /ajv/)
   ] :
   [
     new webpack.optimize.DedupePlugin(),
     new webpack.optimize.OccurenceOrderPlugin(),
     new webpack.optimize.UglifyJsPlugin({mangle: false, sourcemap: false},
     new webpack.IgnorePlugin(/regenerator|nodent|js\-beautify/, /ajv/))
  ]
}


// module.exports = {
//   entry: './main.js',
//   output: {
//     path: './',
//     filename: 'index.js'
//   },
//   devServer: {
//     inline: true,
//     port: 3333
//   },
//   module: {
//     loaders: [
//       {
//         test: /\.js$/,
//         exclude: /node_modules/,
//         loader: 'babel',
//         query: {
//           presets: ['es2015', 'react']
//         }
//       }
//     ]
//   }
// }
