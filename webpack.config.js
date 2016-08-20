var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');

module.exports = {
  context: __dirname + "/TestProject",
  devtool: debug ? "inline-sourcemap" : null,
  entry: './main.js',
  output: {
    path: __dirname + '/TestProject/',
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
          presets: ['es2015', 'react'],
          plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy']
        }
      }
    ]
  },
  plugins: debug ? [] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({mangle: false, sourcemap: false})
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
