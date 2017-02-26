'use strict';

const assert = require('assert');
const async = require('async');
const { inc, double } = require('../tools-async');

function calc(x, cb) {
  async.map(x, inc, cb);
}

calc([3, 4], (err, result) => {
  assert(!err);
  assert.deepEqual(result, [4, 5]);

  calc([9, 10], (err, result) => {
    assert(err && /11/.test(err.message));
    console.log('OK');
  });
});
