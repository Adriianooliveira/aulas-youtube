/*CLASSES EM JAVASCRIPT

Em 2015 foi introduzido no javascript as classes. As classes são um conceito 
antigo em programação e várias linguagens utilizam elas. Mas no javascript isso é relativamente novo, por isso mesmo programadores experientes não sabem muito bem utilizar.

Basicamente, as classes são como "fábricas" para criar objetos.
pode se dizer que são "funções especias" para criação de objetos.

Assim como uma fábrica da vida real precisa das máquinas para construir os objetos, as Classes no javascript usa um métodos chamado constructor() para fábricar os objetos.

*/


class Carro{
    constructor(valor1,valor2,valor3) {
        this.marca = valor1;
        this.modelo = valor2;
        this.ano = valor3;
    }

    buzina(){
        return `${this.modelo} buzinou: Biiiiiiiiiiiiiiiii`;
    }
}

const uno = new Carro("Fiat", "Uno", 2001);
const gol = new Carro("Volkswagen", "Gol", 2012);
console.log(uno.buzina());
console.log(gol.buzina());
gol.ano = 2015;
console.log(gol)