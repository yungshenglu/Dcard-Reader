const path = require('path');
const CracoAntDesignPlugin = require("craco-antd");
const CracoLessPlugin = require('craco-less');

module.exports = {
  style: {
    less: {
      loaderOptions: {
        implementation: require('less'),
      }
    },
  },
  webpack: {
    alias: {
      '@': path.resolve(__dirname, './src/'),
      '@C': path.resolve(__dirname, './src/components/'),
      '@H': path.resolve(__dirname, './src/hooks/'),
      '@I': path.resolve(__dirname, './src/interface/'),
      '@L': path.resolve(__dirname, './src/layout'),
      '@P': path.resolve(__dirname, './src/plugin/'),
      '@S': path.resolve(__dirname, './src/style/'),
      '@U': path.resolve(__dirname, './src/utils/'),
      '@V': path.resolve(__dirname, './src/views/'),
    },
  },
  plugins: [
    {
      plugin: CracoAntDesignPlugin,
      options: {
        customizeThemeLessPath: path.join(
          __dirname,
          "src/styles/antd.theme.less"
        ),
      },
    },
    {
      plugin: CracoLessPlugin,
      options: {
        cssLoaderOptions: {
          modules: { localIdentName: "[local]_[hash:base64:5]" },
        },
        modifyLessRule: function(lessRule, _context) {
          lessRule.test = /\.(module)\.(less)$/;
          lessRule.exclude = path.join(__dirname, 'node_modules');
          return lessRule;
        },
      },
    },
  ],
  devServer: {
    port: 9528,
  },
}