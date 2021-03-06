'use strict';

const assert = require('assert');
const async = require('async');
const { inc, double } = require('../tools-async');

function calc(x, y, cb) {
  async.race([
    inc.bind(null, x),
    double.bind(null, y)
  ], cb);
}

calc(3, 4, (err, result) => {
  assert(!err);
  assert.equal(result, 4);

  calc(9, 6, (err, result) => {
    assert(err && /12/.test(err.message));
    console.log('OK');
  });
});
