let nomeDeUser = prompt("qual o seu nome?");
let nivelDeXP;
let continuar;

do {
    nivelDeXP = Number(prompt("qual o seu nivel de xp?")); // Convertendo para número

    if (isNaN(nivelDeXP)) {
        console.log("por favor insira um valor válido");
        continue;
    }

    if (nivelDeXP <= 1000) {
        console.log(`olá ${nomeDeUser}, seu nivel é ferro`);
    } else if (nivelDeXP >= 1001 && nivelDeXP <= 2000) {
        console.log(`olá ${nomeDeUser}, seu nivel é bronze`); // Corrigido "bonze" para "bronze"
    } else if (nivelDeXP >= 2001 && nivelDeXP <= 5000) {
        console.log(`olá ${nomeDeUser}, seu nivel é prata`);
    } else if (nivelDeXP >= 5001 && nivelDeXP <= 7000) {
        console.log(`olá ${nomeDeUser}, seu nivel é ouro`);
    } else if (nivelDeXP >= 7001 && nivelDeXP <= 8000) {
        console.log(`olá ${nomeDeUser}, seu nivel é platina`);
    } else if (nivelDeXP >= 8001 && nivelDeXP <= 9000) {
        console.log(`olá ${nomeDeUser}, seu nivel é ascendente`); // Corrigido "ascendete" para "ascendente"
    } else if (nivelDeXP >= 9001 && nivelDeXP <= 10000) {
        console.log(`olá ${nomeDeUser}, seu nivel é imortal`);
    } else {
        console.log(`olá ${nomeDeUser}, seu nivel é radiante`); // Modificado para mostrar "radiante" em vez do valor
    }

    continuar = prompt("deseja continuar? (sim/não)").toLowerCase(); // Adicionado toLowerCase()
} while (continuar === "sim");

console.log(`${nomeDeUser}, seu programa foi encerrado`);