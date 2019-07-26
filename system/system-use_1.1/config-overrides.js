const { override, addLessLoader } = require('customize-cra');
module.exports = override(
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: { 
      '@calendar-header-width': '550px',
      '@base-color': '#f44336',
     },
    //  localIdentName: '[local]--[hash:base64:5]' 
  })
);
