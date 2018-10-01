// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  'default e2e tests': (browser) => {
    browser
      .url(process.env.VUE_DEV_SERVER_URL)
      .waitForElementVisible('#app', 5000)
      .assert.containsText('[data-ruid=button-to-test]', 'I\'m a button')
      .assert.containsText('[data-ruid=li-to-test-3]', 'I\'m a list item 3')
      .end();
  },
};
