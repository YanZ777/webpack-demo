const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = (_env, argv) => {
   const mode = process.env.NODE_ENV ?? argv.mode ?? 'production';
   return {
      mode,
      // This is where we want Webpack to start building its dependency graph.
      entry: './src/index.jsx',
      module: {
         rules: [
            {
               // What files to test against.
               test: /\.jsx?$/,
               // What files we don't want to test against.
               exclude: /node_modules/,
               use: {
                  // What Webpack should use to process these files.
                  loader: "babel-loader",
               },
            },
            {
               test: /\.(png|svg|jpg|gif)$/,
               include: path.resolve(__dirname, 'images'),
               exclude: /src/,
               use: ['file-loader'],
            },
         ],
      },
      // The name of the bundle and the location that it should go.
      output: {
         filename: 'bundle.js',
         path: path.resolve(__dirname, 'dist'),
      },
      // Plugins are used to manage things at a higher level than a bundle. 
      // HtmlWebpackPlugin is being used here to grab a template and put it 
      // into my output folder.
      plugins: [
         new HtmlWebpackPlugin({
            title: 'Output Management',
            template: path.resolve(__dirname, 'public', 'template.html'),
         }),
      ],
      // The following creates an alias so that import path is more easily accessed.
      resolve: {
         alias: {
            'working-with-webpack/debug': path.resolve(__dirname, 'src/'),
         },
         extensions: ['.js', '.jsx'],
      },
      devtool: mode === 'development' ? 'eval-source-map' : false,
   };
};