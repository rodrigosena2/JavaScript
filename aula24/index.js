/*
Entre 0 - 11 - Bom dia
Entre 12 - 17 - Boa tarde
Entre 18 - 23 - Boa noite
*/

// If pode ser usado sozinho
// Sempre que utilizo a palavra else, preciso de um if antes 
// Eu posso ter vários else ifs na checagem


const hora = 15;

if (hora >= 0 && hora <= 11) {
    console.log('Bom dia');
} else if (hora >= 12 && hora <= 17) {
    console.log('Boa tarde')
} else if (hora >= 18 && hora <= 23) {
    console.log('Boa noite')
} else {
    console.log('Informe uma hora correta')
}