const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/JS/index.js',   // putanja do glavnog JS fajla, koja je u fajlu SRC
  output: {
    path: path.resolve(__dirname, 'dist'), // putanja gde prebacujemo JS fajl
    filename: 'JS/bundle.js'              // putanja gde cemo napraviti JS fajla
  },
  plugins: [
    new HtmlWebpackPlugin ({
      filename:'index.html',                // ime HTML fajla koji ce se napraviti
      template:'./src/index.html'           // putanja fajla koji uzimamo
    })
  ],
  module: {
   rules: [
     {
       test: /\.css$/i,
       use: ['style-loader', 'css-loader'],
     },
   ],
 },
  mode: 'development'
};
