let varA = "A"; // B
let varB = "B"; // C
let varC = "C"; // A

/*
const A = varA;
varA = varB;
varB = varC;
varC = A;


console.log(varA, varB, varC);

*/

[varA, varB, varC] = [varB, varC, varA]

console.log(varA, varB, varC);