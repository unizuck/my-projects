let nomeDeUser = prompt("qual o seu nome?");
let nivelDeXP;
let continuar;

do {
    nivelDeXP = Number(prompt("qual o seu nivel de xp?")); // Convertendo para número

    if (isNaN(nivelDeXP)) {
        console.log("por favor insira um valor válido");
        continue;
    }

    if (nivelDeXP <= 10) {
        console.log(`olá ${nomeDeUser}, seu nivel é ferro`);
    } else if (nivelDeXP >= 11 && nivelDeXP <= 20) {
        console.log(`olá ${nomeDeUser}, seu nivel é bronze`); // Corrigido "bonze" para "bronze"
    } else if (nivelDeXP >= 21 && nivelDeXP <= 50) {
        console.log(`olá ${nomeDeUser}, seu nivel é prata`);
    } else if (nivelDeXP >= 51 && nivelDeXP <= 70) {
        console.log(`olá ${nomeDeUser}, seu nivel é ouro`);
    } else if (nivelDeXP >= 71 && nivelDeXP <= 80) {
        console.log(`olá ${nomeDeUser}, seu nivel é platina`);
    } else if (nivelDeXP >= 81 && nivelDeXP <= 90) {
        console.log(`olá ${nomeDeUser}, seu nivel é ascendente`); // Corrigido "ascendete" para "ascendente"
    } else if (nivelDeXP >= 91 && nivelDeXP <= 100) {
        console.log(`olá ${nomeDeUser}, seu nivel é imortal`);
    } else {
        console.log(`olá ${nomeDeUser}, seu nivel é radiante`); // Modificado para mostrar "radiante" em vez do valor
    }

    continuar = prompt("deseja continuar? (sim/não)").toLowerCase(); // Adicionado toLowerCase()
} while (continuar === "sim");

console.log(`${nomeDeUser}, seu programa foi encerrado`);