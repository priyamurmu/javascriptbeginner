// Challenge 
const arr = [1, 2, 3, 4, 5, 6];
arr.reverse();
arr.push(0)

console.log(arr);
// Result: [6, 5, 4, 3, 2, 1, 0]

const arr1 = [1, 2, 3, 4, 5, ];
arr1.push(6);
arr1.unshift(0);
arr1.reverse();

console.log(arr1);

// challenge 2

const arr2 = [1,2,3,4,5];
const arr3 = [5,6,7,8,9,10];

// solution 1
const arr4 = arr2.slice(0, 4).concat(arr3);

console.log(arr4);

// solution 2
const arr5 = [1,2,3,4,5];
const arr6 = [6,7,8,9,10];


const arr7 = [...arr5, ...arr6];

console.log(arr7);
