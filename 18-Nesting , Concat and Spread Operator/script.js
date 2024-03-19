const fruits = ['apple', 'pear', 'orange'];
const berries =['strawberry', 'blueberry', 'raspberry'];
fruits.push(berries);

console.log(fruits);

const fruits1 = ['apple', 'pear', 'orange'];
const berries1 =['strawberry', 'blueberry', 'raspberry'];
fruits1.push(berries);
x = fruits1[3][1];

console.log(x);

const fruits3 = ['apple', 'pear', 'orange'];
const berries3 =['strawberry', 'blueberry', 'raspberry'];
const allFruits = [fruits, berries];
x = allFruits[1][0];

console.log(x);

// concatination
const fruits4 = ['apple', 'pear', 'orange'];
const berries4 =['strawberry', 'blueberry', 'raspberry'];
x = fruits.concat(berries);

console.log(x);

// spread Operator
const fruits5 = ['apple', 'pear', 'orange'];
const berries5 =['strawberry', 'blueberry', 'raspberry'];
 x = [...fruits, ...berries];

console.log(x);

// Flatten Arrays
const arr = [1, 2, [3, 4], 5, [6, 7], 8];
x = arr.flat();

console.log(x);

// Static Method on Array Object
y = Array.isArray('fruits');

console.log(y);

z =Array.from('123456789');

console.log(z);

const a = 1;
const b = 2;
const c = 3;

x =Array.of(a, b, c);

console.log(x);