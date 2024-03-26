/* LAÇO DE REPETIÇÃO FOR

Laços oferecem um jeito fácil e rápido de executar um ação repetidas vezes.
*/



// for (let i = 0; i <= 10000; i++) {
//     let texto = window.document.getElementById('texto')
//     texto.innerHTML += `${i}, `

    
// }




var ano = new Date().getFullYear();

for (let i = ano; i >= 1900; i--) {
    let select = window.document.getElementById('ano');
    select.innerHTML += `<option value='${i}'>${i}</option>`;
}






const carros = ["Gol", "Fusca", "Brasilia", "Del rey", "Chevette"];
let texto = window.document.getElementById('texto').innerHTML = '';

for (let i = 0; i < carros.length; i++) {
    let texto = window.document.getElementById('texto');
    texto.innerHTML += `${carros[i]}, `;
}