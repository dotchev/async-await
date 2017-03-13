'use strict';

const assert = require('assert');
const bluebird = require('bluebird');
const { inc, double } = require('../tools-await');

async function calc(arr) {
  return await bluebird.mapSeries(arr, inc);
}

async function main() {
  let result = await calc([3, 4]);
  assert.deepEqual(result, [4, 5]);

  try {
    result = await calc([9, 10]);
    assert(false, 'should throw');
  } catch (err) {
    assert(/11/.test(err.message));
  }
}

main().then(() => {
  console.log('OK');
}).catch(err => {
  console.error(err);
});
