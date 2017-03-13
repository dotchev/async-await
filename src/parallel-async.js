'use strict';

const assert = require('assert');
const async = require('async');
const { inc, double } = require('../tools-async');

function calc(x, cb) {
  async.parallel([
    inc.bind(null, x),
    double.bind(null, x)
  ], cb);
}

calc(3, (err, result) => {
  assert(!err);
  assert.deepEqual(result, [4, 6]);

  calc(6, (err, result) => {
    assert(err && /12/.test(err.message));
    console.log('OK');
  });
});
