'use strict';

const assert = require('assert');
const { inc, double } = require('../tools-await');

async function calc(x, y) {
  return await Promise.all([inc(x), double(y)]);
}

async function main() {
  let result = await calc(3, 4);
  assert.deepEqual(result, [4, 8]);

  try {
    result = await calc(5, 6);
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
