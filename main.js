// Ejercico 1 --> función flecha
/* Punto 1
function saludar() {
  return "Hola";
} */
const saludar = () => "Hola";

/* Punto 2
function division(a,b) {
  return a / b;
} */
const division = (a, b) => a / b;

/* Punto 3
function miNombre(nombre) {
  return `Mi nombre es ${nombre}`;
} */
const miNombre = (nombre) => `Mi nombre es ${nombre}`;

/* Punto 4
function test2() {
  console.log("Función test 2 ejecutada.");
}
function test1(callback) {
  callback();
} */
const test2 = () => "Función test 2 ejecutada."
const test1 = (callback) => callback();

// Ejercicio 2 --> .forEach
let gente = [
    {
        nombre: "Jamiro",
        edad: 45,
    },
    {
        nombre: "Juan",
        edad: 35,
    },
    {
        nombre: "Paco",
        edad: 34,
    },
    {
        nombre: "Pepe",
        edad: 14,
    },
    {
        nombre: "Pilar",
        edad: 24,
    },
    {
        nombre: "Laura",
        edad: 24,
    },
    {
        nombre: "Jenny",
        edad: 10,
    },
];
// Punto 1
const mayores25 = [];
gente.forEach((persona) => {
    if (persona.edad > 25) {
        mayores25.push(persona)
    }
});
console.log(mayores25)

// Punto 2
const genteConJ = [];
gente.forEach((persona2) => {
    let primeraLetra = (persona2.nombre).charAt(0); // para reconocer la primera letra del nombre
    if (primeraLetra === "J") {
        genteConJ.push(persona2)
    }
})
console.log(genteConJ)

// Ejercicio 3 --> .map
// Punto 1
const mayores2 = gente.map(persona => {
    if (persona.edad > 25) {
        return persona;
    }
})
console.log(mayores2);

// Punto 2
const genteConJ2 = gente.map(persona => {
    let primeraLetra2 = (persona.nombre).charAt(0);
    if (primeraLetra2 == "J") {
        return persona
    }
});
console.log(genteConJ2)

// Punto 3
const numbers = [4, 5, 6, 7, 8, 9, 10];
const resultado = numbers.map(numbers => numbers ** numbers);
console.log(resultado);

// Ejercicio 4 --> .filter
// Punto 1
const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const resultado2 = numbers2.filter(numbers2 => {
    if (numbers2 % 2 === 0) {
        return numbers2
    }
})
console.log(resultado2);

// Punto 2
const foodList = [
    { name: 'Tempeh', isVeggie: true },
    { name: 'Cheesbacon burguer', isVeggie: false },
    { name: 'Tofu burguer', isVeggie: true },
    { name: 'Entrecot', isVeggie: false }
];
const platos = foodList.filter((plato) =>
    plato.isVeggie == true)
    .map((vegano) => {
        return `Que rico ${vegano.name} me voy a comer!`
    });
console.log(platos);

// Ejercicio 5
const numeros = [39, 2, 4, 25, 62];
let resultado3 = numeros.reduce((a, b) => a * b);
console.log(resultado3)

// Extras
// .map
// Punto 1
const staff = [
    {
        name: "Pepe",
        role: "The Boss",
        hobbies: ["leer", "ver pelis"],
    },
    {
        name: "Ana",
        role: "becaria",
        hobbies: ["nadar", "bailar"],
    },
    {
        name: "Luis",
        role: "programador",
        hobbies: ["dormir", "comprar"],
    },
    {
        name: "Carlos",
        role: "secretario",
        hobbies: ["futbol", "queso"],
    },
];
let resultado4 = staff.map((personas) => {
    return `${personas.name} es ${personas.role} y le gusta ${personas.hobbies[0]} y ${personas.hobbies[1]}`
})
console.log(resultado4)

// Punto 2
const foodList2 = ["Pizza", "Ramen", "Paella", "Entrecot"];
let resultado5 = foodList2.map((comida, b) => {
    if (b === 0) {
        return `'Como soy de Italia, amo comer ${comida}'`;
    } else if (b === 1) {
        return `'Como soy de Japòn, amo comer ${comida}'`
    } else if (b === 2) {
        return `'Como soy de Valencia, amo comer ${comida}'`
    } else (b === 3)
    return `'Aunque no como carne, el ${comida} es sabroso'`
});
console.log(resultado5)

// .filter
const inventory = [
    {
        name: 'Mobile phone',
        price: 199
    },
    {
        name: 'TV Samsung',
        price: 459
    },
    {
        name: 'Viaje a cancún',
        price: 600
    },
    {
        name: 'Mascarilla',
        price: 1
    }
];
const resultado6 = inventory
    .filter(inventory =>
        inventory.price > 300)
    .map((resultado) => resultado.name)

console.log(resultado6)

// .reduce
const sentenceElements = [
    'Me',
    'llamo',
    'Nicolas',
    'y',
    'quiero',
    'sentir',
    'la',
    'fuerza',
    'con',
    'javascript'
];

const resultado7 = sentenceElements.reduce((a, b) => a + " " + b)
console.log(resultado7)