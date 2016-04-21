'use strict';

const fs = require('fs');

module.exports = function(gulp, config, plugins) {
  let deps = fs.readdirSync('./tasks');
  deps.pop();
  return {
    deps: deps.map((dep) => {
      return dep.split('-').join(':').split('.js')[0];
    }),
    fn: function() {}
  };
};
