let x;

 x= 5 + '5'; 

console.log(x, typeof x);

let y;

y=5+ Number('5');

console.log(y, typeof y);

let z;

z=5*'5';

console.log(z, typeof z);

let s; 

s= 5 + null;

console.log(s,typeof s);

let r;
r=Number(null);
console.log(r, typeof r);

let w;
w = Number(true);
// w = Number(false); (0)

// x = 5 + true;  = 6
// x = 5 + false; = 5

console.log(w, typeof w);


let a;
a= 5 + undefined;
console.log(a, typeof a);