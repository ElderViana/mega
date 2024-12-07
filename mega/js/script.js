let btnAdd = document.querySelector('#submit');
//let p1 = document.querySelector('#p');


const createNumbers = () => {


    

//4 números pares 2 números ímpares
    const evenNumberFour = [];
    const oddNumberTwo = [];

//2 números pares 4 números ímpares
    const evenNumberTwo = [];
    const oddNumberFour = [];
    

} 

const createRandomNumbers = () => Math.floor(Math.random() * 60) + 1;

//6 número aleatórios
const createSixNumber = () => {  

    const SixNumber = [];
    while (SixNumber.length < 6) {
        const number = createRandomNumbers();
        if (number % 2 === 0 && !SixNumber.includes(number)) {
            SixNumber.push(number);
        }
    }

    const result = SixNumber;
    p.textContent = result;
}

//3 números pares 3 números ímpares
const createThreeThree = () => {

    const evenNumberThree = [];
    const oddNumberThree = [];

    while (evenNumberThree.length < 3) {
        const number = createRandomNumbers();
        if (number % 2 === 0 && !evenNumberThree.includes(number)) {
            evenNumberThree.push(number);
        }
    }

    while (oddNumberThree.length < 3) {
        const number = createRandomNumbers();
        if (number % 2 !== 0 && !oddNumberThree.includes(number)) {
            oddNumberThree.push(number);
        }
    }


    const result1 = [...evenNumberThree, ...oddNumberThree];
    p1.textContent = result1;

}
/*

//3 números pares 3 números ímpares
    while (evenNumberThree.length < 3) {
        const number = createRandomNumbers();
        if (number % 2 === 0 && !evenNumberThree.includes(number)) {
            evenNumberThree.push(number);
        }
    }

    while (oddNumberThree.length < 3) {
        const number = createRandomNumbers();
        if (number % 2 !== 0 && !oddNumberThree.includes(number)) {
            oddNumberThree.push(number);
        }
    }


    const result1 = [...evenNumberThree, ...oddNumberThree];
    p1.textContent = result1;



    
    //4 números pares 2 números ímpares
    while (evenNumberFour.length < 4) {
        const number = createRandomNumbers();
        if (number % 2 === 0 && !evenNumberFour.includes(number)) {
            evenNumberFour.push(number);
        }
      }
      
      while (oddNumberTwo.length < 2) {
        const number = createRandomNumbers();
        if (number % 2 !== 0 && !oddNumberTwo.includes(number)) {
            oddNumberTwo.push(number);
        }
      }
      
      
      const result2 = [...evenNumberFour, ...oddNumberTwo];
      p1.textContent = result2;
      
    


    //2 números pares 4 números ímpares
    
    while (evenNumberTwo.length < 2) {
        const number = createRandomNumbers();
        if (number % 2 === 0 && !evenNumberTwo.includes(number)) {
            evenNumberTwo.push(number);
        }
    }
    
    while (oddNumberFour.length < 4) {
        const number = createRandomNumbers();
        if (number % 2 !== 0 && !oddNumberFour.includes(number)) {
            oddNumberFour.push(number);
        }
    }
    
    
    const result3 = [...evenNumberTwo, ...oddNumberFour];
    p1.textContent = result3;
    
   



}
*/
btnAdd.addEventListener('click', createSixNumber);












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
    const result1ado = [...pares, ...impares];

    // Embaralha os números para garantir que não fiquem ordenados
    return result1ado.sort(() => Math.random() - 0.5);
}

// Exibe os números sorteados
console.log(gerarNumeros( ));