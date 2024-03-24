/* SWITCH

É usado para realizar diferentes ações com bases em diferentes condições
no mesmo bloco de verificação. Caso a condição não seja compativel
não será executada e o valor  padrão será acionado.
 */

function verificaCor() {
    let cor = window.document.getElementById('cor').value;
    cor = cor.toLowerCase();

    switch (cor) {
        case "blue":
            document.body.style.backgroundColor = 'blue';
            break;
        case "yellow":
            document.body.style.backgroundColor = 'yellow';
            break;
        case "green":
            document.body.style.backgroundColor = 'green';
            break;
        case "black":
            document.body.style.backgroundColor = 'black';
            document.body.style.color = 'white';
            break;
        case "":
            window.document.getElementById('texto').innerHTML = 'Texto em branco';
            break;
        default:
            window.document.getElementById('texto').innerHTML = `Nenhuma cor disponivel para (${cor})`;
    }
}


function diaSemana() {
    let dia = new Date(). getDay();

    switch (dia) {

        case 0:
            console.log('Domingo')
            break;
        case 1:
            console.log('Segunda-feira')
            break;
        case 2:
            console.log('Terça-feira')
            break;
        case 3:
            console.log('Quarta-feira')
            break;
        case 4:
            console.log('Quinta-feira')
            break;
        case 5:
            console.log('Sexta-feira')
            break;
        case 6:
            console.log('Sábado')
            break;
        
        default:

    }
}
