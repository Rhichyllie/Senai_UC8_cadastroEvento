let dataAtual = new Date(2022,8,8);

let dataEvento = new Date(2022,10,30);

let listaParticipantes = ["Adam", "Célia", "Elliot", "Heitor", "Gisele", "Michael", "Margarida"];

if (dataAtual > dataEvento){
    console.log("Data inválida, fim do cadastro!")
} else {
    console.log("Data válida!\n")

    const prompt = require('prompt-sync')({sigint: true});
    // linha de codigo para conseguir usar window.prompt na terminal

    let idade = parseInt(prompt("Digite a sua idade: "));
    if (idade < 18){
        console.log("Idade inválida, fim do cadastro!")
    } else { 
        console.log("Idade válida!\n") 
        let participante = prompt("Digite o nome do participante do evento: ");
        listaParticipantes.push(participante)
        let quantidade_deParticipantes = listaParticipantes.length

        if (quantidade_deParticipantes > 100){
            console.log("Cadastro não será possível por ter excedido o limite de 100 participantes!")
        } else{
            console.log(`Seu nome foi adicionado na lista: ${listaParticipantes}.\n`)
            console.log(`Cadastro permitido, aproveite o seu evento no dia ${dataEvento}.`)
        }

    } 
}
    