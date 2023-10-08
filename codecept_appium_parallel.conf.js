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
            url: "https://www.bupa.com",
            waitForNavigation: "domcontentloaded",
            waitForTimeout: 30000,
            platform: "Android",
            browser: 'chrome',
            desiredCapabilities: {
                "appium:automationName": "UIAutomator2",
                "appium:platformName": "Android",
                "appium:platformVersion": "11.0",
                "appium:avd": "Pixel_4_API_30",
                "appium:browserName": "chrome"
            }
        },
    },
    multiple: [{
        desiredCapabilities: {
            "appium:automationName": "UIAutomator2",
            "appium:platformName": "Android",
            "appium:platformVersion": "11.0",
            "appium:avd": "Pixel_4_API_30",
            "appium:browserName": "chrome"
        }
    },
    {
        desiredCapabilities: {
            "appium:automationName": "UIAutomator2",
            "appium:platformName": "Android",
            "appium:platformVersion": "11.0",
            "appium:avd": "Nexus5",
            "appium:browserName": "chrome"
        }
    }],
    include: {
        I: './steps_file.js'
    },
    mocha: {},
    name: 'CodeceptJS',
}