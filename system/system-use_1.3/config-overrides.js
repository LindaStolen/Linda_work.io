const { override, addLessLoader } = require('customize-cra');

module.exports = override(
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: { 
      '@base-color': '#19323C',
      '@btn-subtle-color': '#19323C',
      '@text-color': '#19323C',
      '@table-header-font-size': '@font-size-base',
      '@table-border-color': '#cccccc',
      'table-head-font-color': '#19323C',
      '@btn-default-active-bg': '#5d5d5d',
      '@btn-default-active-bg-dark': '#00CECB',
     }
  })
);