const produkti1= 35;
const sasiaeproduktit1 = 2;
const produkti2= 24;
const sasiaeproduktit2 = 1;
const zbritja= 0.15;
const transporti= 4;

const parazbritjes = (produkti1*sasiaeproduktit1) + (produkti2*sasiaeproduktit2);
const shumaezbritjes = parazbritjes * zbritja;
const paszbritjes = parazbritjes - shumaezbritjes;
const totali = paszbritjes + transporti;

console.log("Cmimi para zbritjes eshte: $" + parazbritjes);
console.log("Shuma e zbritjes eshte: $" + shumaezbritjes);
console.log("Cmimi pas zbritjes eshte: $" + paszbritjes);
console.log("Cmimi total me transport eshte: $" + totali);