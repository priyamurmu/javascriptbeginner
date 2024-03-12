let d ;
 d = new Date();

 console.log(d);
//  date is object

let d1 ;
 d1 = new Date(2023, 5, 13, 12, 30, 0);
// 0 index based
 console.log( d1);

 let d2 ;
 d2 = new Date('2023-07-10T12:30:25');
// no index based
 console.log(d2);

 let d3 ;
 d3 = new Date('07/02/2023 12:30:45');

 console.log(d3);

 let d4 ;
 d4 = new Date('2022-07-10');

 console.log(d4);

 let d5 ;
 d5 = Date.now();

 console.log(d5);

 let d6 ;
 d6 = new Date('07-10-2022 12:30:00');
d6 = d.getTime();
 console.log(d6);

 let d7 ;
 d7 = new Date(Date.now() / 1000);

 console.log(d7);



