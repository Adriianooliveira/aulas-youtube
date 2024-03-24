/* ARRAYS (Matrizes)

Os arrays JavaScript são usados para armazenar vários valores
em uma única variável. Diferente dos objetos, que funcionam com propriedades ou "nomes" que você dá para os itens dentro dele é encontrado pela posição.


Imagine um array como uma lista de itens, com controle, por ordem de posição dentro dele.

Ex: const lista = ["arroz", "feijão", "macarrão", "leite"];

A lista[0] (lista na posição 0) vai conter o valor "arroz".
A lista[1] (lista na posição 1) vai conter o valor "feijão".

E assim por diante.

*/




//primeiro modo
const lista = ["arroz", "feijão", "macarrão", "leite"];
alert(lista[0])

//SEGUNDO MODO
// const lista [];

// lista[0] = "arroz";
// lista[1] = "feijão";
// lista[2] = "macarrão";
// lista[3] = "leite";



//TERCEIRO MODO 
//const lista = new Array("arroz", "feijão", "macarrão", "leite");



lista[0] = "café";
alert(lista[0]);
console.log(lista);





const pessoa1 = ["Adriano", "Oliveira", 30];  //array
pessoa1[0];

alert(pessoa1[pessoa1.length - 1]); //pegar o ultimo item da lista

//adicionar mais um intem no final 
pessoa1.push("Brasileiro");
//outro metodo de adicionar item no final
pessoa1[pessoa1.length] = "solteiro";
//mais um metodo
pessoa1[5] = "Paraná";
console.log(pessoa1);

console.log(Array.isArray(pessoa1));



const pessoa2 = {nome: "Adriano", sobrenome: "Oliveira", idade: 30}; //objeto
pessoa2.nome;