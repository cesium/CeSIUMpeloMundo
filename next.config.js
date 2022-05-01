const pkg = require('./package.json');

// starts a command line process to get the git hash
const commitHash = require('child_process').execSync('git rev-parse HEAD').toString().trim();

module.exports = {
  env: {
    APP_NAME: pkg.name,
    APP_DESCRIPTION: pkg.description,
    APP_VERSION: pkg.version,
    APP_LICENSE: pkg.license,
    HOMEPAGE: pkg.homepage,
    BUG_TRACKER: pkg.bugs,
    REPOSITORY_URL: pkg.repository.url,
    COMMIT_HASH: commitHash
  }
};
