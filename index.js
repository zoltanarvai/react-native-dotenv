var config = require("react-native/packager/rn-cli.config");

module.exports = {
  plugins: [
    [require('./plugin'), {
      replacedModuleName: 'react-native-dotenv',
      configDir: config.getProjectRoots()[0]
    }],
  ],
};
