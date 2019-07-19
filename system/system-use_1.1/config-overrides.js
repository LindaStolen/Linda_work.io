const { override, addLessLoader } = require('customize-cra');
// const rewireLess = require('react-app-rewire-less');
//   const HtmlWebpackPlugin = require('html-webpack-plugin');
//   const path = require('path');
module.exports = override(
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: { 
      '@calendar-header-width': 550px,
     }
  })
);