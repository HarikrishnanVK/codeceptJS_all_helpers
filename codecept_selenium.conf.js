const {
  setHeadlessWhen,
  setCommonPlugins
} = require('@codeceptjs/configure');
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: './*_test.js',
  output: './output',
  plugins: {
    wdio: {
      enabled: true,
      services: ['selenium-standalone'],
    }
  },
  helpers: {
    webdriver: {
      url: 'https://bupa.com',
      show: true,
      browser: 'chrome',
      host: "localhost",
      port: 4444,
      path: '/wd/hub',
      chrome: {
        args: [
          "--window-size=1920,1080"
        ]
      },
      waitForNavigation: "domcontentloaded",
      windowSize: "1920x1080",
      waitForTimeout: 30000
    }
  },
  include: {
    I: './steps_file.js',
    // loginPage: "./pages/login.js"
  },
  name: 'CodeceptJS'
}