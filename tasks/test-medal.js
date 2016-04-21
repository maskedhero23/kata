'use strict';

module.exports = function(gulp, config, plugins) {
  return function() {
    return gulp
      .src('test/medal.spec.js', {
        read: false
      })
      .pipe(plugins.mocha());
  };
};
