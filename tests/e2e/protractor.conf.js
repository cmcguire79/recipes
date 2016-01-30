exports.config = {
  specs: [
    'features/*.feature'
  ],
  capabilities: {
    'browserName': 'chrome'
  },
  baseUrl: 'http://recipes.com/',
  rootElement: '*[ng-app]',

  framework: 'custom',

  frameworkPath: '../../node_modules/protractor-cucumber-framework',
  cucumberOpts: {
    require: 'features/steps/HomeSteps.js',
    format: 'pretty'
  }
};
