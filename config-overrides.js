/**
 * @description 
 * @author cq
 * @Date 2020-04-24 14:25:15
 * @LastEditTime 2020-04-27 19:07:42
 * @LastEditors cq
 */


const { override, fixBabelImports, addWebpackPlugin, addWebpackAlias } = require('customize-cra');
const AntdDayjsWebpackPlugin = require('antd-dayjs-webpack-plugin');
const path = require("path");

const alter_config = () => (config, env) => {
  const oneOf_loc = config.module.rules.findIndex(n => n.oneOf)
  config.module.rules[oneOf_loc].oneOf = [    //例如要增加处理less的配置
    {
      test: /\.less$/,
      use: [
        require.resolve('style-loader'),
        {
          loader: require.resolve('css-loader'),
          options: {
            importLoaders: 1,
          },
        },
        {
          loader: 'less-loader'
        }
      ],
    },
    ...config.module.rules[oneOf_loc].oneOf
  ]

  return config;
}


module.exports = override(
  alter_config(),   //将自定义配置组合进来
  fixBabelImports('import', { //配置antd按需加载
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: 'css',
  }),
  addWebpackAlias({  //增加路径别名的处理
    '@': path.resolve(__dirname,".",'src')
  }),
  addWebpackPlugin(new AntdDayjsWebpackPlugin())
);
