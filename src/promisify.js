'use strict';

const assert = require('assert');
const pify = require('pify');
const fs = pify(require('fs'));

async function main() {
  let text = await fs.readFile(__filename, 'utf8');
  assert(/some-token/.test(text));
}

main().then(() => {
  console.log('OK');
}).catch(err => {
  console.error(err);
});
