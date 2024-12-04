const greeting = (name) => alert('Hello' + name);

const processUserInput = (callback) => {
    const name = prompt('type your name:');
    callback(name);
}


processUserInput

const number = 2;

const randonNumber = (min, max) => {
    return Math.round(Math.random() * (max - min) + min);// retorna um número aleatório maior que zero e meno que 1

}

console.log(randonNumber(2, 10))

//Eu tenho uma lista de números de 1 à 60 e preciso que seja sorteado 6 números, porém tem que ser 3 números impares e três números pares. Pode gerar um algoritmo usando javaScript coma função  Math.random()   







function gerarNumeros() {
    const pares = [];
    const impares = [];

    // Função para gerar um número aleatório entre 1 e 60
    function gerarNumeroAleatorio() {
        return Math.floor(Math.random() * 60) + 1;
    }

    // Gera 3 números pares
    while (pares.length < 3) {
        const numero = gerarNumeroAleatorio();
        if (numero % 2 === 0 && !pares.includes(numero)) {
            pares.push(numero);
        }
    }

    // Gera 3 números ímpares
    while (impares.length < 3) {
        const numero = gerarNumeroAleatorio();
        if (numero % 2 !== 0 && !impares.includes(numero)) {
            impares.push(numero);
        }
    }

    // Combina pares e ímpares
    const resultado = [...pares, ...impares];

    // Embaralha os números para garantir que não fiquem ordenados
    return resultado.sort(() => Math.random() - 0.5);
}

// Exibe os números sorteados
console.log(gerarNumeros( ));