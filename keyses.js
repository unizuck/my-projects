let YourName = prompt("Qual o seu nome?");
let escolha;

do {
    escolha = prompt("Escolha um bloco (Block1, Block2, Block3):");

    switch (escolha) {
        case "Block1":
            console.log(`olaaa, eu sou o block1, prazer em te conhecer, ${YourName}`);
            break;
        case "Block2":
            if (YourName === "Rafaela") {
                console.log("que nome bonito");
            } else {
                console.log("que nome feio");
            }
            break;
        case "Block3":
            let PerguntaDoBloco = prompt(`olha eu sou o block3, prazer em te conhecer, ${YourName}. Por que você me escolheu?`);
            console.log("Você respondeu: " + PerguntaDoBloco);
            break;
        default:
            console.log("Bloco não reconhecido. Tente novamente.");
    }
} while (true);
