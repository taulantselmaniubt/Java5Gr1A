const eHena = 95;
const eMarta = 80;
const eMerkure = 115;

const totalMinuta = eHena + eMarta + eMerkure;
const oreDhjetore = totalMinuta / 60;
const minutaMbetura = totalMinuta % 60;

console.log('Gjithsej minuta: ' + totalMinuta);
console.log('Koha totale: ' + oreDhjetore + ' ore dhe ' + minutaMbetura + ' minuta');
console.log('Minutat e mbetura: ' + minutaMbetura);