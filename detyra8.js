const fletePune = 157;
const fletePerStudent = 6;

const grupe = Math.floor(fletePune / fletePerStudent);
const mbetja = fletePune % fletePerStudent;
const kontrolli = (grupe * fletePerStudent) + mbetja;

console.log('Flete pune gjithsej: ' + fletePune);
console.log("Pjesetemi i paperpunuar:" + (fletePune / fletePerStudent));
console.log("Grupe te plota prej 6 flete: " + grupe);
console.log("Fleta te mbetura: " + mbetja);
console.log("Kontrolli i pjesetimit: " + kontrolli);