// Tipos Primitivos

// 1 - string
// 2 - number
// 3 - boolean
// 4 - undefined
// 5 - null

// Object - Map
// Array - Set
// Date
// RegExp
// Error
// EvalError
// RangeError
// ReferenceError
// SyntaxError
// TypeError
// URIError
// XMLError
// Math
// JSON
// Number
// String
// Boolean
// Undefined
// Null
// NaN
// Infinity

const filmes = new Array(100)
filmes[0] = "Spider man 2"
filmes[1] = "Spider man 2"
filmes[2] = "Spider man 2"
filmes[3] = "Spider man 2"

const filmes2 = ["Spider man 2", "Spider man 2", "Spider man 2", "Minions"];

// Set náo repete valores
console.log(new Set(filmes2))

const filme = {
    name: "Spider man 2",
    age: function() {
        return 2004
    }
}

const filme2 = new Object();
// Formas de acessar um atributo em um objeto
// filme['name']
// filme.name

// console.log(filme.age())


// Anonima
// function () {

// }
// Namespace
function tedLasso(){
    const teste = "ooooo"
    return {
        protagonista: "teste",
        age: 2004,
        label: this.teste,
    }
}

console.log(tedLasso().label)
// Arrow
const getNameArrow = () => {
    return "Spider man 2"
}

const getName2 = () => ({
    name: "Spider man 2",
    age: 2004
})

const somar = (x,y) => x + y

console.log(somar(4,5))
