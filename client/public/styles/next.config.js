const withSass = require('@zeit/next-sass');

module.exports = withSass(
  withSass({
    webpack(config) {
      return config;
    },
  }),
);
