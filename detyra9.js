const cmimi1 = "19.90";
const cmimi2 = "8.50";
const sasia1 = 2;
const sasia2 = 3;

const c1 = Number(cmimi1);
const c2 = Number(cmimi2);

const totali1 = c1 * sasia1;
const totali2 = c2 * sasia2;
const shuma = totali1 + totali2;

const tarifa = shuma * 0.10;
const finale = shuma + tarifa;
const finaleFormatume = finale.toFixed(2);

console.log("Totali i produktit 1: $" + totali1.toFixed(2));
console.log("Totali i produktit 2: $" + totali2.toFixed(2));
console.log("Shuma e porosise: $" + shuma.toFixed(2));
console.log("Tarifa e transportit (10%): $" + tarifa.toFixed(2));
console.log('Shuma finale e porosise me transport: $' + finaleFormatume);
console.log("Tipi i vleres se formatizumev  : " + typeof finaleFormatume);