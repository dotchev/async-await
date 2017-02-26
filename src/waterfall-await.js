'use strict';

const assert = require('assert');
const { inc, double } = require('../tools-await');

async function calc(x) {
  let r = await inc(x);
  return await double(r);
}

async function main() {
  let result = await calc(3);
  assert.equal(result, 8);

  try {
    result = await calc(5);
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
