// Object

// Crie um objeto que represente um carro
// Deverá conter os seguintes atributos: cor, modelo, ano, darPartida(function), freiar(function)

// const carro = {
//     cor: "vermelho",
//     modelo: "Onix",
//     ano: 2015,
//     darPartida: function() {
//         console.log("Carro andando")
//     },
//     freiar: function() {
//         console.log("Carro freiando")
//     },
//     dono: {
//         nome: "Pedro",
//         endereco: {
//             rua: "teste",
//             bairro: "teste",
//         }
//     }
// }


// Crie um objeto que represente um aluno
// Deverá conter os seguintes atributos: nome, idade, matricula,
// notas(array de número), renovarMatricula(function)

const aluno = {
    nome: "José Silva",
    idade: 18,
    matricula: "112312313rdfewfv",
    notas: [10, 6, 8, 10],
    renovarMatricula: function() {
        console.log("Aluno matriculado")
    }
}

// Acessar os atributos
// Ponto
// console.log(carro.dono.endereco.rua)
// Colchetes
// console.log(carro['dono']['endereco']['rua'])

// Object.keys - retorna um array das chaves do objeto
// console.log(Object.keys(aluno))
// Object.values - retorna um array das valores do objeto
// console.log(Object.values(aluno))
// Object.entries - retorna um array multidimensional dos valores e das chaves
// console.log(Object.entries(aluno))

// Pattern(Factory) Function - funçao com objetivo de gerar um objeto

// function alunoFactory(props) {
//     const aluno = {
//         nomeCompleto: `${props.nome} ${props.sobrenome}`,
//         idade: props.idade,
//         anoInicio: new Date(),
//         matricula: Math.floor(Math.random() * 1000000),
//         renovarMatricula: function() {
//             console.log("Aluno matriculado")
//         }
//     }

//     return aluno
// }

// const alunoPedro = alunoFactory({ nome: "Pedro", sobrenome: "Lucena", idade: 50 })

// console.log(alunoPedro)
// Array

// pop - remove o último item
// shift - remove o primeiro item
// push - adiciona na última posiçao
// length - tamanho do array
// slice - recorta o array e retorna o valor recortado
// splice - recorta o array e retorna o array sem os valores recortados


// Iteraçao
// map - itera e retorna outro array com o mesmo tamanho
// filter - itera e filtra o array retornando apenas os itens que passam na condiçao
// find -  retorna o primeiro item que passa pela condiçao
// findIndex -  retorna o index do primeiro item que passa pela condiçao
// reduce -  itera e retorna um valor reduzido