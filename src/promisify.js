'use strict';

const assert = require('assert');
const pify = require('pify');
const fs = pify(require('fs'));

async function main() {
  let text = await fs.readFile(__filename, 'utf8');
  assert(/some-token/.test(text)); // self-fulfilling prophecy

  try {
    await fs.readFile('no-such-file', 'utf8');
    assert(false, 'should throw');
  } catch (err) {
    assert.equal(err.code, 'ENOENT');
  }
}

main().then(() => {
  console.log('OK');
}).catch(err => {
  console.error(err);
});
