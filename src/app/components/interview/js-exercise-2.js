const { of } = require("rxjs");

const promise = Promise.resolve(true);
const obs = of(true);

setTimeout(() => {
  console.log('Log #1');
}, 0);

console.log('Log #2');

promise.then(() => console.log('Log #3'));

obs.subscribe(() => console.log('Log #4'));

console.log('Log #5');

// Ответ: 2 4 5 3 1