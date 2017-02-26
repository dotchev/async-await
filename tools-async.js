'use strict';

const async = require('async');

module.exports = { inc, double };

function inc(x, cb) {
  setTimeout(() => {
    ++x;
    if (x > 10) cb(new Error('Out of range: ' + x));
    else cb(null, x);
  }, x);
}

function double(x, cb) {
  setTimeout(() => {
    x *= 2;
    if (x > 10) cb(new Error('Out of range: ' + x));
    else cb(null, x);
  }, x);
}

