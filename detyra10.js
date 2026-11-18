const pjesemarres = 45;
const cmimiPerPerson = 12;
const salla = 180;
const materialet = 95;
const reklama = 60;

const teardhurat = pjesemarres * cmimiPerPerson;
let shpenzimet = salla + materialet + reklama;
const diferenca1 = teardhurat - shpenzimet;

shpenzimet += 25;
const diferenca2 = teardhurat - shpenzimet;

console.log("Pjesemarres: " + pjesemarres + " cmimi per person: $" + cmimiPerPerson);
console.log("Te ardhurat: $" + teardhurat);
console.log("---");
console.log("Sallat: $" + salla);
console.log("Materialet: $" + materialet);
console.log("Reklama: $" + reklama);
console.log("Shpenzimet: $" + shpenzimet);
console.log("---");
console.log("Diferenca (fitimi): $" + diferenca1);
console.log("Shpenzime te paparashikuara: $25");
console.log("Shpenzimet e reja totale: $" + shpenzimet);
console.log("Diferenca e dyte pas shtimit te shpenzimeve: $" + diferenca2);
console.log("---");