// Falsy Values:
//- false
// - 0
// - "" or (empty string)
// - null
// - undefined
// - NaN

const email = 'test@test.com';


if (email) {
  console.log('You passed in an email');
}

console.log(Boolean(email));

const x = false;

if (x) {
  console.log('This is truthy');
} else {
  console.log('This is Falsy');
}

console.log(Boolean(x));

// Truthy Values:
//- Everything else that is not falsy
// - true
// - '0' (0 in a string)
// - ' ' (space in a string)
// - 'false' (false in a string)
// - [] (empty array)
//  - (empty object)
//  - function () {} (empty function)


const x1 = [];
if (x1) {
  console.log('This is truthy');
} else {
  console.log('This is Falsy');
}

console.log(Boolean(x1));

// Truthy and Falsy caveats
const children = 2;

if (children) {
  console.log(`You have ${children} children`);
}else {
  console.log(`Please enter number of children`);
}

// CHECKING FOR EMPTY ARRAYS
const posts = ['Post One' , 'Post Two'];

if (posts) {
  console.log('List Posts');
}else {
  console.log('No Posts');
}

// Checking for empty objects
const user = {
  name: 'Brad',
};

if (Object.keys(user).length > 0) {
  console.log('List User');
}else {
  console.log('No User');
}

// Loose Equality(==)

console.log(false === 0);
console.log('' === 0);
console.log(null === undefined);