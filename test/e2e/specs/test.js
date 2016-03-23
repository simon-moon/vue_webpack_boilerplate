// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  'default e2e tests': function (browser) {
    browser
    .url('http://localhost:8080')
      .waitForElementVisible('.jumbotron', 5000)
      .assert.elementPresent('.logo')
      .assert.elementCount('span', 1)
      .assert.elementCount('p', 2)
      .assert.elementCount('img', 1)
      .end()
  }
}
