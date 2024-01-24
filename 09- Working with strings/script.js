let x ;

const name ='priya';
const age = 24;

x = 'hello,my name is ' + name + ' and i am ' + age + ' years old' ;

console.log(x);

// template literals

x = `hello , my name is ${name} and i am ${age} years old`;

console.log (x);

// string properties and method

const s =  new String('hello world');

x = typeof s;
// object
x = s.length;

 console.log(x);


// access value by key
const s1 = "hello nicck";

x = s1[0];
x= s1 [6];

 x = s.__proto__;

// x = s.toUpperCase();
// HELLO NICCK

// x = s.toLowercase();
// hello nicck

// x = s.charAt(1);
// e

// x = s.indexof('e');zZ
//  1

// x = s.substring(0,4);
// hell 3 tk ka lega 1 no piche

// x = s.slice(7); same hi h
// x = s.substring(7);
// orld 7 se suru  hokr last tak
 
// x = s.siice(-11);
// hello world

// x = s.slice(-11, -6);
// hello

// x= '      hello world';
// x= x.trim();
// hello world

// x= s.replace('world','john');
// hello john

// x = s.includes("hello")   true
// x = s.inclides ("helli")   false


// x = s.valueOf();
// 11

// x = s.split();
// ['hello world]

// x = s.split(" ");
// ["hello", "world"]

x = s.split('');

console.log(x);


