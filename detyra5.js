const a = "25";
const b = "17";
const c = "8";

const shumaPaKonvertim = a + b + c;
console.log("Shuma pa konvertim: $" + shumaPaKonvertim);
console.log("Tipi: " + typeof shumaPaKonvertim);

const x = Number(a);
const y = Number(b);
const z = Number(c);

const shuma = x + y + z;
const mesatarja = shuma / 3;

console.log("Shuma me Number(): $" + (x + y + z));
console.log("Mesatarja: $" + mesatarja);
console.log("Tipi i shumes: " + typeof shuma);
console.log("Tipi i mesatares: " + typeof mesatarja);