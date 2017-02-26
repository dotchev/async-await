'use strict';

const fs = require('fs');
const path = require('path');
const execSync = require('child_process').execSync;

let files = fs.readdirSync('src');
for (let f of files) {
  console.log(f);
  try {
  execSync('node ' + path.join('src', f), { stdio: 'inherit' });
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
}
console.log('SUCCESS');
