var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');

module.exports = {
  context: __dirname + "/",
  devtool: debug ? "inline-sourcemap" : null,
  entry: './src/main.js',
  output: {
    path: __dirname + '/src/',
    filename: 'index.min.js'
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
          presets: ['es2015', 'react', "stage-0"],
          plugins: ['react-html-attrs',
            'transform-class-properties',
            'transform-decorators-legacy',
            'transform-decorators']
        }
      },
      {
        test: /\.json$/,
        loader: 'json-loader',
      },
      {
        test: /\.css/,
        loaders: ['style', 'css']
      }
    ]
  },
  plugins: debug ? [] :
   [
     new webpack.DefinePlugin({
       "process.env": {
         NODE_ENV: JSON.stringify("production")
      }
     }),
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
