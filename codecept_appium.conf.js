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
    helpers: {
        appium: {
            platform: "Android",
            browser: 'chrome',
            desiredCapabilities: {
                "appium:automationName": "UIAutomator2",
                "appium:platformName": "Android",
                "appium:platformVersion": "11.0",
                "appium:avd": "Pixel_4_API_30",
                "appium:browserName": "chrome"
            },
            url: "https://www.bupa.com",
            waitForNavigation: "domcontentloaded",
            windowSize: "1920x1080",
            waitForTimeout: 30000
        }
    },
    include: {
        I: './steps_file.js'
    },
    mocha: {},
    name: 'CodeceptJS',
}