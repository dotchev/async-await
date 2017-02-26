'use strict';

module.exports = { inc, double };

function inc(x) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      ++x;
      if (x > 10) reject(new Error('Out of range: ' + x));
      else resolve(x);
    }, x);
  });
}

function double(x) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      x *= 2;
      if (x > 10) reject(new Error('Out of range: ' + x));
      else resolve(x);
    }, x);
  });
}

