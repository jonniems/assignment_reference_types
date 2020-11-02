//Deel 2: Arrays

let array = ['groen', 'blauw', 'rood'];

console.log(array);
console.log(array.length);
console.log(array[0]);
console.log(array[array.length - 1]);

array.push('geel');
array.push(5);
array.push({ greeting: "hi ik ben een object" });

console.log(array[5].greeting);