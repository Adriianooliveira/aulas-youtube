/* JSON

JSON significa javascript object notation que traduzido pro portugues fica algo
notificação de objeto javascript.

Explicando de um modo simples JSON é basicamente uma forma de converter um objeto em texto
e o contrário também, um texto e um objeto.

Ele é usado principalmente para transmitir dados entre sistemas de forma simples,
já que o formato de texto é lido por praticamente toda linguagem de programação.

Para trabalhar com JSON no javascript usamos dois métodos:

JSON.parse() -> converte texto no padrão JSON em objetos
JSON.stringify() -> converte objetos em texto padrão JSON

*/


//OBJETO CHAMADO CARRO
const carro = {
    marca: "fiat",
    modelo: "uno",
    motor: ["1.6", "1.4", "1.0"]
}


//CONVERTEMOS OBJETO PARA TEXTO 
let texto = JSON.stringify(carro);

//COLOCOU O TEXTO NO NOSSO HTML
document.getElementById('area').innerHTML = texto;

//CONVERTEMOS TEXTO PARA OBJETO
let obj = JSON.parse(texto);

//PEGAMOS UM VALOR DESTE OBJETO
console.log(obj.motor[2]);



// const ajax = new XMLHttpRequest();
// ajax.open('GET', 'https://viacep.com.br/ws/01001000/json/');
// ajax.send();

// ajax.onload = function() {
//     document.getElementById('area').innerHTML = this.responseText; //this.reponseText é a resposta que irá vir do texto do site
//     let obj = JSON.parse(this.responseText);
//     alert(obj.ddd);
// }


function buscarCep() {
    let input = document.getElementById('cep').value;

    const ajax = new XMLHttpRequest();
    ajax.open('GET', 'https://viacep.com.br/ws/' +input+ '/json/');
    ajax.send();

    ajax.onload = function() {
        //document.getElementById('res').innerHTML = this.responseText;

        //TRANSFORMEI O TEXTO EM OBJETO
        let obj = JSON.parse(this.responseText);
        //AQUI PEGUEI OS VALORES QUE EU QUERIA
        let logradouro = obj.logradouro;
        let cidade = obj.localidade;
        let estado = obj.uf;
        document.getElementById('res').innerHTML = `Logradouro: ${logradouro} <br> Cidade: ${cidade} <br> Estado: ${estado}`
    }
}