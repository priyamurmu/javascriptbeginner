const num1 = 5;

console.log(typeof num1);

const num2= new Number(5);

console.log(typeof num2);

let x;

const num3 = new Number(6);

x = num3.toString();

console.log(x);

let y;

const num4 = new Number(4987);

y = num4.toString().length;

console.log(y);


let z;

const num5 = new Number(498);

z = num5.toFixed(5);

console.log(z);

let a;

const num6 = new Number(49.87);

a = num6.toPrecision(2);

console.log(a);

x = num.toExponential(2)
// 49.87e+0

x = num.tolocalString('en-US')
// 5
x= num.valueOf()
// 49.87
x = Number.MAX_VALUE
// 1.7976931348623157e+308

x = Number.MIN_VALUE
// 5e-324

