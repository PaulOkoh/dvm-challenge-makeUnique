// Write a function to remove all duplciate letters from a provided string. The string will only contail lowercase letters between a - z. The string will not contain spaces.

// For example:

// >>> makeUnique('helloworld')
// // helowrd

// >>> makeUnique('iwanttoclimbamountain')
// // iwantoclmbu
// Write your solution below:

const makeUnique = (str) => [...new Set(str.split(""))].join("");

console.log(makeUnique("helloworld"));
console.log(makeUnique("iwanttoclimbamountain"));
