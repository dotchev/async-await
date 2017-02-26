'use strict';

const assert = require('assert');
const async = require('async');
const { inc, double } = require('../tools-async');

function calc(x, cb) {
  async.waterfall([
    inc.bind(null, x),
    double
  ], cb);
}

calc(3, (err, result) => {
  assert(!err);
  assert.equal(result, 8);

  calc(5, (err, result) => {
    assert(err && /12/.test(err.message));
    console.log('OK');
  });
});
