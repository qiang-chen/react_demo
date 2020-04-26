/**
 * @description 
 * @author cq
 * @Date 2020-04-24 14:25:15
 * @LastEditTime 2020-04-24 15:22:47
 * @LastEditors cq
 */


const { override, fixBabelImports, addWebpackPlugin } = require('customize-cra');
const AntdDayjsWebpackPlugin = require('antd-dayjs-webpack-plugin');

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: 'css',
  }),
  addWebpackPlugin(new AntdDayjsWebpackPlugin())
);
