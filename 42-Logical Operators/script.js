console.log(10>5 && 30 > 15 && 40 >30);
// with && all have to be true


console.log(10>20|| 30>15 );
// with || one of them have to be true

// && - will reurn first falsy value or the last value
let a;
let b;
let c;
let d;

a = 10 && 20;
b = 10 && 20 && 30;
c = 10 && 0 && 30;
d = 10 && " " && 0 && 30;

console.log(a);
console.log(b);
console.log(c);
console.log(d);

const posts = ['post one', 'post two'];
posts.length > 0 && console.log(posts[0]);

// || - will return the first truthy value or the  value
let e;
let f;
let g;

e = 10||20;
f = 0||20;
g = 0|| null ||" "||undefined;

console.log(e);
console.log(f);
console.log(g);

//  ?? - Returns the right side operand when the left is null or undefined

let m;
let n;
let o;
let p;
let q;

m = 10 ?? 20;
n = null ?? 20;
o = undefined ?? 30;
p = 0 ?? 30;
q = ' ' ?? 30;

console.log(m);
console.log(n);
console.log(o);
console.log(p);
console.log(q);
