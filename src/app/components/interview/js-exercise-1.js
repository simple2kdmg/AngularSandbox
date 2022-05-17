const promise = Promise.resolve(true);

setTimeout(() => {
  console.log('Log #1');
}, 0);

console.log('Log #2');

promise.then(() => console.log('Log #3'));

console.log('Log #4');

promise.then(() => console.log('Log #5'));

// Ответ: 2 4 3 5 1
