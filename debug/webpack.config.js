const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = (_env, argv) => {
   const mode = process.env.NODE_ENV ?? argv.mode ?? 'production';
   return {
      mode,
      entry: './src/index.js',
      module: {
         rules: [
            {
               test: /\.js?$/,
               exclude: /node_modules/,
               use: {
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
      output: {
         filename: 'bundle.js',
         path: path.resolve(__dirname, 'dist'),
      },
      plugins: [
         new HtmlWebpackPlugin({
            title: 'Output Management',
            template: path.resolve(__dirname, 'public', 'template.html'),
         }),
      ],
      resolve: {
         alias: {
            'working-with-webpack/debug': path.resolve(__dirname, 'src/'),
         },
         extensions: ['.js', '.jsx'],
      },
      devtool: mode === 'development' ? 'eval-source-map' : false,
   };
};