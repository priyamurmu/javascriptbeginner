const arr = [34, 55, 95, 20, 15];
arr.push(100);

console.log(arr);

const arr1 = [34, 55, 95, 20, 15];
arr.pop();
// pahle jaise kr dega

console.log(arr1);

const arr2 = [34, 55, 95, 20, 15];
arr2.unshift(99);

console.log(arr2);

const arr3 = [34, 55, 95, 20, 15];
arr3.shift();
// shuru ka hta dega

console.log(arr3);

const arr4 = [34, 55, 95, 20, 15];
arr4.reverse();
// pecche trf se age

console.log(arr4);

let x;
const arr5 = [34, 55, 95, 20, 15];
x = arr5.includes(20);
// if we write 200 we get false

console.log(x);

let x1 ;
const arr6 = [34, 55, 95, 20, 15];
x1 = arr6.indexOf(15);

console.log(x1);

let x2 ;
const arr7 = [34, 55, 95, 20, 15];
x2 = arr7.slice(1, 4);
// 1 index ke bad ka lega 3 tk last ka nhi

console.log(x2);

let x3 ;
const arr8 = [34, 55, 95, 20, 15];
x3 = arr8.splice(1, 4);

console.log(x3);

let x4 ;
const arr9 = [34, 55, 95, 20, 15];
x4 = arr9.splice(3, 1);

console.log(x4, arr);

let x5 ;
const arr10 = [34, 55, 95, 20, 15];
x5 = arr10.splice(1, 4).reverse().toString();

console.log(x5);
