/* OBJETOS

Objetos são basicamente variáveis com muitos valores dentro.

Ex: const carro = {marca:"ford", modelo:"ka", ano:2020}

Os valores dentro de um objeto são chamados propriedades.

Objetos também podem ter métodos. Um método é uma funçao colocados dentro de uma propriedade. 

 */


const carro = {marca: "ford", modelo: "ka", ano: 2020, placa: "ABC-1234", buzina:function() {
    alert('Biiiiiiiiiiiiiiiii');
}, completo: function(){
    return "A marca é "+this.marca+ " e o modelo é: " +this.modelo; //this quer dizer "ESTE", que neste caso se refere ao objeto (carro)
}};


console.log(carro.marca, carro.modelo);  //ou console.log(carro["marca"], carro["modelo"]);

carro.buzina();


console.log(carro.completo());