//this is a js file
let nome = prompt("qual seu nome?");
let cor = prompt("qual sua cor preferida?");


console.log("A cor favorita de " + nome + " é " + cor);
console.log(`a cor favorita de ${nome} é ${cor}`);

// propriedade length ( a propriedade diz qual é o tamanho de uma string, incluindo espaços.)
const Nome = "Franciele Dorr"
console.log(Nome.length) //14

//metodo toLowerCase() minuscula
// o metodo toLowerCase() transforma todas as letras da sua string em minusculas.

const frase = "oieEE!"
const fraseMinuscula = frase.toLowerCase()
// fraseMinuscula = oieee!


//metodo toUpperCase() MAIUSCULA
//const Frase = "oieee!"
//const FraseMaiuscula = frase.toUpperCase();
// FraseMaiuscula = OIEEE!

//Metodo trim() encontra email

//const email = " mika@gmail.com ";
//console.log(email.trim());
// "mika@gmail.com";

//metodo includes (caracteres)
// metodo determina se um cojunto de caracteres pode ser encontrado dentro de outra string, retornando true ou false

//const frase1 = "Hoje comi cenoura";
//frase.includes("cenoura") // true
//frase.includes("batata") // false

//metodo replaceAll(chars1, chars2)

//const frase2 = "HOJE COMI CENOURA, ADORO CENOURA";
//const novaFrase = frase2.replaceAll("CENOURA", "BATATA");
//novaFrase = Hoje comi BATATA, adoro BATATA;


// variavel
const FRASE = "boa noite pessoal!"
console.log(FRASE)
const FRASEmaiuscula = FRASE.toUpperCase()
console.log(FRASEmaiuscula)


const novaFRASE = FRASE.replaceAll ("O" , "I")
console.log(novaFRASE)


console.log(FRASE.length) //18


///o que são arrays? Lista de elementos. ex: lista de compras, alunos, numeros, objetos, etc...

//const listaDeCompras = ["batata", "alface", "queijo"]
//const listaDeNumerosMega = [2, 3, 12, 15, 26]

//const meuArray = ["banana", 15, true]

//const listaDeCompras = ["abacate", "banana", "tomate"]
//console.log(listaDeCompras)

//*const segundoItem = listaDeCompras[2] 
//*console.log(segundoItem)

const listaRaçaDeCachorro = ["buldogue", "labrador", "maltês", "rottweiler", "poodle"]
console.log(listaRaçaDeCachorro)
 

const listaDeNumeros = [0, 1, 2, 3, 4]
console.log(listaDeNumeros)

const segundoItem = listaRaçaDeCachorro[2]
console.log(segundoItem) //maltês


/// length diz a quantidades de itens de um array.
const pokemon = ["bulbasauro", "squirtle", "charmander"]
console.log(pokemon.length) //3

//includes determina se um array contem um determinado elemento, retornando true ou false.

const seriesBoas = ["the Big Bang Theory", "Brooklyn Nine-nine"]
console.log(seriesBoas)

seriesBoas.includes("The Big Bang Theory") //true

seriesBoas.includes("Game of Thrones") //false


//metodo push - adiciona um ou mais elementos ao final de um array.

const numeros = [1, 2, 3]

numeros.push(4)
console.log(numeros) // [1, 2, 3, 4]

numeros.push(5, 6, 7)
console.log(numeros) //[1, 2, 3, 4, 5, 6, 7]

//metodo pop() remove o ultimo elemento de um array.

const meusPeixes = ["palhaço", "mandarim", "esturjão"]

meusPeixes.pop()
console.log(meusPeixes) // ["palhaço", "mandarim"]

//metodo splice(i, n) - o metodo remove n elementos a partir da posiçao i do array.

const letras = ["a", "b", "c", "d", "e", "f", "g", "h"]
console.log(letras)

// indices (i)  0 1 2 3 4 5 6 7

letras.splice(2, 1)
//letras = ['a], "b", "c", "d", "e", "f", "g", "h"
// indices (i) 0 1 2 3 4 5 6

letras.splice(3, 2) // letras = ["a", "b", "d", "g", "h"]


const valores = ["1", "2", "3", "4", "5", "6"]
console.log(valores)

console.log(valores.length) //6

valores.push(7)
console.log(valores) // ['1', '2', '3', '4', '5', '6', 7]

valores.splice(3,2)
console.log(valores)

console.log(valores.length) //5
















