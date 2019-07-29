const { override, addLessLoader } = require('customize-cra');

module.exports = override(
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: { 
      '@base-color': '#8FC0A9',
      '@dropdown-link-hover-color': '#FFF39B'
     }
  })
);