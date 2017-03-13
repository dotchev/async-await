'use strict';

const assert = require('assert');
const { inc, double } = require('../tools-await');

async function calc(x) {
  return await Promise.all([inc(x), double(x)]);
}

async function main() {
  let result = await calc(3);
  assert.deepEqual(result, [4, 6]);

  try {
    result = await calc(6);
    assert(false, 'should throw');
  } catch (err) {
    assert(/12/.test(err.message));
  }
}

main().then(() => {
  console.log('OK');
}).catch(err => {
  console.error(err);
});
