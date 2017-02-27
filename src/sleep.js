'use strict';

const assert = require('assert');

function sleep(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}

async function answer() {
  console.log('Start');
  await sleep(2000);
  console.log('End');
  return 42;
}

var p = answer();
assert(p instanceof Promise);
p.then(result => {
  assert.equal(result, 42);
  console.log('OK');
}).catch(err => console.error(err));
