// #1
const str = '';

console.log(str == false); // ?
console.log(str === false); // ?
console.log(str == null); // ?
console.log(str === null); // ?
console.log(null == undefined); // ?

console.log(typeof undefined); // ?
console.log(typeof null); // ?

const arr = [1,2,3];

console.log(typeof arr); // ?
console.log(typeof Array); // ?
console.log(typeof Object) // ?


// #2

let foo = { val: 'x' };
let bar = foo;

foo = { val: 'z' };

console.log(bar.val); // ?

// Ответ x

// #3
function foo() {
  setTimeout(foo, 0);
}

foo();


// #4

function makeCounter() {
  let count = 0;

  return function() {
    return count++;
  };
}

let counter = makeCounter();
let counter2 = makeCounter();

console.log( counter() ); // ?
console.log( counter() ); // ?

console.log( counter2() ); // ?
console.log( counter2() ); // ?

// #5

let phrase = 'Hello';

function greeting(name) {
  console.log( phrase + ', ' + name );
}

function func() {
  let phrase = 'Bye';
  greeting('John');
}

func();  // ?

// #6

let obj, method;

obj = {
  go: function() { alert(this); }
};

obj.go();               // (1) [object Object]

(obj.go)();             // (2) [object Object]

(method = obj.go)();    // (3) undefined
