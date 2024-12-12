const selectFilter = document.getElementById('selectFilter');
let p1 = document.getElementById('p1');
let p2 = document.getElementById('p2');
let p3 = document.getElementById('p3');
let p4 = document.getElementById('p4');
let p5 = document.getElementById('p5');
let p6 = document.getElementById('p6');

const a = document.getElementById('a');
const b = document.getElementById('b');
const c = document.getElementById('c');
const d = document.getElementById('d');
const e = document.getElementById('e');
const f = document.getElementById('f');


const listP = [p1, p2, p3, p4, p5, p6];
const listDiv = [a, b, c, d, e, f];

const submit = document.getElementById('submit');
const div = document.getElementById('a');


const createRandomNumbers = () => Math.floor(Math.random() * 60) + 1;

const createNumbers = () => {


    switch(selectFilter.value){

        //6 númeroa aleatórios
        case '':                           
            const SixNumber = [];
            while (SixNumber.length < 6) {

                const number = createRandomNumbers();
               if(!SixNumber.includes(number)){
                SixNumber.push(number);
               }
            }

             const result1 = SixNumber;
             for(i = 0; i < SixNumber.length; i++){
                listDiv[i].style.backgroundColor = '#38bd72';
                listP[i].textContent = result1[i];
             }
        break;
        
        //3 números pares 3 números ímpares
        case  'threeThree':              
            const evenNumberThree = [];
            const oddNumberThree = [];
            const listNumber1 = [];
        
            while (evenNumberThree.length < 3) {
                const number = createRandomNumbers();
                if (number % 2 === 0 && !evenNumberThree.includes(number)) {
                    evenNumberThree.push(number);
                    listNumber1.push(number);
                }
            }
        
            while (oddNumberThree.length < 3) {
                const number = createRandomNumbers();
                if (number % 2 !== 0 && !oddNumberThree.includes(number)) {
                    oddNumberThree.push(number);
                    listNumber1.push(number);
                }
            }
            const result2 = [...evenNumberThree, ...oddNumberThree];
            for(i = 0; i < listNumber1.length; i++){
                listDiv[i].style.backgroundColor = '#38bd72';
                listP[i].textContent = result2[i];
             }
        break;

         //4 números pares 2 números ímpares
        case 'fourTwo':        
            const evenNumberFour = [];
            const oddNumberTwo = [];
            const listNumber2 = [];
        
            while (evenNumberFour.length < 4) {
                const number = createRandomNumbers();
                if (number % 2 === 0 && !evenNumberFour.includes(number)) {
                    evenNumberFour.push(number);
                    listNumber2.push(number);
                }
            }
            
            while (oddNumberTwo.length < 2) {
                const number = createRandomNumbers();
                if (number % 2 !== 0 && !oddNumberTwo.includes(number)) {
                    oddNumberTwo.push(number);
                    listNumber2.push(number);
                }
            }
            
            
            const result3 = [...evenNumberFour, ...oddNumberTwo];
            for(i = 0; i < listNumber2.length; i++){
                listDiv[i].style.backgroundColor = '#38bd72';
                listP[i].textContent = result3[i];
             }
        break;

        //2 números pares 4 números ímpares
        case 'twoFour':   
            const evenNumberTwo = [];
            const oddNumberFour = [];
            const listNumber3 = [];
            
            while (evenNumberTwo.length < 2) {
                const number = createRandomNumbers();
                if (number % 2 === 0 && !evenNumberTwo.includes(number)) {
                    evenNumberTwo.push(number);
                    listNumber3.push(number);
                }
            }
            
            while (oddNumberFour.length < 4) {
                const number = createRandomNumbers();
                if (number % 2 !== 0 && !oddNumberFour.includes(number)) {
                    oddNumberFour.push(number);
                    listNumber3.push(number);
                }
            }
            
            
            const result4 = [...evenNumberTwo, ...oddNumberFour];
            for(i = 0; i < listNumber3.length; i++){
                listDiv[i].style.backgroundColor = '#38bd72';
                listP[i].textContent = result4[i];
             }
        break;

        }

    }

submit.addEventListener('click', createNumbers);
    


const submit2 = document.getElementById('submit2');
const divFather2 = document.getElementById("pFather2");
const selectFilter2 = document.getElementById("selectFilter2");

let p7 = document.getElementById('p7');
let p8 = document.getElementById('p8');
let p9 = document.getElementById('p9');
let p10 = document.getElementById('p10');
let p11 = document.getElementById('p11');

let p12 = document.getElementById('p12');
let p13 = document.getElementById('p13');
let p14 = document.getElementById('p14');
let p15 = document.getElementById('p15');
let p16 = document.getElementById('p16');

let p17 = document.getElementById('p17');
let p18 = document.getElementById('p18');
let p19 = document.getElementById('p19');
let p20 = document.getElementById('p20');
let p21 = document.getElementById('p21');

const g = document.getElementById('g');
const h = document.getElementById('h');
const i = document.getElementById('i');
const j = document.getElementById('j');
const k = document.getElementById('k');

const l = document.getElementById('l');
const l = document.getElementById('l');
const g = document.getElementById('g');
const h = document.getElementById('h');
const i = document.getElementById('i');

const j = document.getElementById('j');
const k = document.getElementById('k');
const l = document.getElementById('l');
const l = document.getElementById('l');
const l = document.getElementById('l');



const listDiv2 = [];
const listP2 = [];

const createRandomNumbers2 = () => Math.floor(Math.random() * 25) + 1;
   /*
for(i = 1; i <= 15; i++){

    let div = document.createElement('div');
    let p = document.createElement('p');
    div.id = 'd' + i;
    div.style.backgroundColor = '#38bd72';
    listDiv2.push(div.id);
    p.id = 'p' + i;
    p.textContent = 'r'
    listP2.push(p.id);
    
    divFather2.appendChild(div);
    div.appendChild(p);
}
    */
const createNumbers2 = () => {

    switch(selectFilter2.value){
       
        case '':
           
        //Criar 15 números aleatórios
        const fifteenNumbers = [];

        while (fifteenNumbers.length < 15){

            const number = createRandomNumbers2();
            if(!fifteenNumbers.includes(number)){
                fifteenNumbers.push(number);
            }
        }
       
        const result1 = fifteenNumbers;
        console.log(result1)
       
 

        for(i = 0; i <= fifteenNumbers.length; i++){

            var div = document.createElement('div');
            let p = document.createElement('p');
            div.style.backgroundColor = '#38bd72';
           
            div.style.padding =  '10px';
            div.style.border.radius = '80%';
            div.class = 'pChild';
            p.textContent = result1[i];
     
            listP2.push(p.id);
            
            divFather2.appendChild(div);
            div.appendChild(p);
            
        }
    
        break;


      

        //7 números pares 8 números ímpares
        //8 números pares 7 números ímpares
        //6 pares 9 ímpares
    }
    






}

console.log(div.class)
    




submit2.addEventListener('click', createNumbers2);




/*

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














let submit1 = document.querySelector('#submit1');
let submit2 = document.querySelector('#submit2');
let submit3 = document.querySelector('#submit3');
let submit4 = document.querySelector('#submit4');
//let p1 = document.querySelector('#p1');
let p2 = document.querySelector('#p2');
let p3 = document.querySelector('#p3');









//6 número aleatórios
const createSixNumber = () => {  

    const SixNumber = [];
    while (SixNumber.length < 6) {
        const number = createRandomNumbers();
        if (number % 2 === 0 && !SixNumber.includes(number)) {
            SixNumber.push(number);
        }
    }

    const result1 = SixNumber;
    p1.textContent = result1;
}
 //3 números pares 3 números ímpares
const createThreeEvenThreeOdd = () => {

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


    const result2 = [...evenNumberThree, ...oddNumberThree];
    p2.textContent = result2;

}

//4 números pares 2 números ímpares
const createFourEvenTwoOdd = () => {

    const evenNumberFour = [];
    const oddNumberTwo = [];

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
      
      
      const result3 = [...evenNumberFour, ...oddNumberTwo];
      p3.textContent = result3;
    
}

//2 números pares 4 números ímpares
const createTwoEvenFourOdd = () => {

    const evenNumberTwo = [];
    const oddNumberFour = [];
    
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
    
    
    const result4 = [...evenNumberTwo, ...oddNumberFour];
    p4.textContent = result4;
    
}
    
submit1.addEventListener('click', createSixNumber);
submit2.addEventListener('click', createThreeEvenThreeOdd);
submit3.addEventListener('click', createFourEvenTwoOdd);
submit4.addEventListener('click', createTwoEvenFourOdd);
*/