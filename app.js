/*const carBrands = ["Audi", "Ferari", "BMW", "Skoda", "Volvo"];


for (let i = 0; i < carBrands.length; i++) { 
    console.log("Značka auta: ", carBrands[i]);
  }*/

function cislo1(a, b) {
    const vysledek = a*b;
    return vysledek;
}

function cislo2(c, d) {
    if (d == 0) {
        return "Není možné dělit nulou";
    }
    const vysledek2 = c/d;
    return vysledek2;
}


const lol = cislo1(8, 9);
const lol2 = cislo2(3, 0);

console.log(lol);
console.log(lol2);


