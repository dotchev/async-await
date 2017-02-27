[![Build Status](https://travis-ci.org/dotchev/async-await.svg?branch=master)](https://travis-ci.org/dotchev/async-await)

# async-await
Show common async operations with both async.js and ES6 async-await

Node.js [v7.6.0][1] brings official support for [async functions][2].
This is an [ES7 feature][3] that allows handling asynchronous operations in a clean way.

Here is an overview of major weapons at our disposal to fight [callback hell][4]:
* The popular [async][5] package
* [fibers][8] package in node.js
* [Promise][6] - since ES6 (Node.js v0.12)
* [Generators][7] - since ES6 (Node.js v4)
* [Async Functions][3] - since ES7 (Node.js v7.6.0)

## Async Functions

Here is a basic example of an async function:
```js
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
```

It all starts and ends with a promise: 
* ***await*** takes a promise and suspends the current script until the
promise is fulfilled. Then the script is resumed and ***await*** returns the 
resolved value or throws the reject reason.
* ***await*** can appear _only_ in an ***async*** function
* ***async*** function always returns a promise, so one can ***await*** it

**Note** that ***await*** does not block the event queue, so node.js can process
other events while waiting for the promise.

## Promisify

We can easily promisify existing callback APIs using packages like [pify][9].
```js
const assert = require('assert');
const pify = require('pify');
const fs = pify(require('fs'));

async function main() {
  let text = await fs.readFile(__filename, 'utf8');
  assert(/some-token/.test(text));
}
```

## Common Operations

### Waterfall

* [async](src/waterfall-async.js)
* [async-await](src/waterfall-await.js)

### Parallel

* [async](src/parallel-async.js)
* [async-await](src/parallel-await.js)

### Race

* [async](src/race-async.js)
* [async-await](src/race-await.js)

### Map

* [async](src/map-async.js)
* [async-await](src/map-await.js)

### Map Series

* [async](src/mapSeries-async.js)
* [async-await](src/mapSeries-await.js)


[1]: https://github.com/nodejs/node/blob/master/doc/changelogs/CHANGELOG_V7.md#7.6.0
[2]: https://developers.google.com/web/fundamentals/getting-started/primers/async-functions
[3]: https://tc39.github.io/ecmascript-asyncawait/
[4]: http://callbackhell.com/
[5]: http://caolan.github.io/async/
[6]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Promise
[7]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/function*
[8]: https://github.com/laverdet/node-fibers
[9]: https://github.com/sindresorhus/pify
