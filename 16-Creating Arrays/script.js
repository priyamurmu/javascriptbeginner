// Array Literal

const numbers = [12,45,33,29,39];

console.log(numbers);

// array constructor

const fruits = new Array('apple', 'grape', 
'orange');

console.log(fruits);


const fruits1 = new Array('apple', 'grape', 
'orange')

x = numbers[0];

x = numbers[0] + numbers[3];

x = `My Favorite fruit is ${fruits1[2]}.`;

// x = numbers.length;   5

console.log(x);


// exchannging values
const fruits2 = new Array('apple', 'grape', 
'orange');

fruits2[2] = 'pear';

x = fruits2;

console.log(x);

// fruit length
const fruits3 = new Array('apple', 'grape', 
'orange');
fruits3.length = 2;
x = fruits3;

console.log(x);

// adding values
const fruits4 = new Array('apple', 'grape', 
'orange');
fruits4[3] = 'pear';
x = fruits4;

console.log(x);

// adding value by length method
const fruits5 = new Array('apple', 'grape', 
'orange');
fruits5[fruits5.length] = 'blueberry';
fruits5[fruits5.length] = 'pear';
x = fruits5;

console.log(x);






