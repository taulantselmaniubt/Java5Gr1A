const akomodim = 94;
const transport = 42;
const ushqim = 57;
const persona = 3;
const buxheti = 80;

const total = akomodim + transport + ushqim;
const perPerson = total / persona;
const mbetet = buxheti - perPerson;

console.log("Total shpenzimet: " + total);
console.log("Shpenzimet per person: " + perPerson);
console.log("Buxheti mbetet: " + mbetet);