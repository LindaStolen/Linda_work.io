const path = require ('path') 
console.log('輸出路徑', path.resolve(__dirname, './dist'))
module.exports = {
    entry: "./resuite.less", //編譯前檔案的檔名
  
    output: { //編譯後的檔名
      path: path.resolve(__dirname, './dist'), //編譯結果的路徑
      filename: "resuite.css" //編譯結果的檔名
    },
    watch: true,

    module: {
        rule:[
            {
                test:/\.less$/,
                use: 'less-loader'
            }
        ]
    } //以上,只要是以 .less 結尾的檔案，都要先經過 less-loader 做第一階段的編譯

  }