const { override, addLessLoader } = require('customize-cra');
module.exports = override(
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: { 
      '@calendar-header-width': '550px',
     }
  })
);