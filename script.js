/* mapeamento html*/
const result = document.querySelector(".result")
const humanScore = document.querySelector("#human-score")
const machineScore = document.querySelector("#machine-score")

let humanScoreNumber = 0
let machineScoreNumber = 0


/* escolha humana*/
const playHuman = (humanChoice) => {
    playTheGame(humanChoice, playMachine())/* escolha humana vs escolha maquina*/

}
/* escolha da maquina*/
const playMachine = () => {
    const choices = ['rock', 'paper', 'scissors']
    const randomNumber = Math.floor(Math.random() * 3)/*.. quem ganhou*/
    return choices[randomNumber]

}
/* quem ganhou*/
const playTheGame = (human, machine) => {
    /* console.log('humano;' + human + " maquina; " + machine)*/

    if (human === machine) {
        result.innerHTML = "Deu empate"
    }
    else if (human === 'paper' && machine === 'rock' ||
        human === 'rock' && machine === 'scissors' ||
        human === 'scissors' && machine === 'paper') {
        humanScoreNumber++
        humanScore.innerHTML = humanScoreNumber
        result.innerHTML = " Você ganhou!"
    }
    else {
        machineScoreNumber++
        machineScore.innerHTML = machineScoreNumber
        result.innerHTML = "A maquina ganhou !"

    }

}