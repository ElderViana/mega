
const submit = document.getElementById('submit');
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

let g = document.getElementById('g');
let h = document.getElementById('h');
let i = document.getElementById('i');
let j = document.getElementById('j');
let k = document.getElementById('k');

let l = document.getElementById('l');
let m = document.getElementById('m');
let n = document.getElementById('n');
let o = document.getElementById('o');
let p = document.getElementById('p');

let q = document.getElementById('q');
let r = document.getElementById('r');
let s = document.getElementById('s');
let t = document.getElementById('t');
let u = document.getElementById('u');



let listDiv2 = [g, h, i, j, k, l, m, n, o, p, q, r, s, t, u];
let listP2 = [p7, p8, p9, p10, p11, p12, p13, p14, p15, p16, p17, p18, p19, p20, p21];

const createRandomNumbers2 = () => Math.floor(Math.random() * 25) + 1;

const createNumbers2 = () => {

    switch(selectFilter2.value){
       
        case '':
           
        //Criar 15 números aleatórios
        let fifteenNumbers = [];
        while (fifteenNumbers.length < 15){

            let number = createRandomNumbers2();
            if(!fifteenNumbers.includes(number)){
                fifteenNumbers.push(number);
            }
        }
       
        let result1 = fifteenNumbers;
        for(i = 0; i < fifteenNumbers.length; i++){
            listDiv2[i].style.backgroundColor = '#d629d6	';
            console.log(listDiv2[i])
            listP2[i].textContent = result1[i];
            console.log(listP2[i])
        }
        break;

        //7 números ímpares 8 números pares
         case  'sevenEight':  
         const oddNumberSeven = [];            
         const evenNumberEight = [];
         const listNumber1 = [];
     
         while (oddNumberSeven.length < 7) {
             let number = createRandomNumbers2();
             if (number % 2 !== 0 && !oddNumberSeven.includes(number)) {
                oddNumberSeven.push(number);
                 listNumber1.push(number);
             }
         }
     
         while (evenNumberEight.length < 8) {
             let number = createRandomNumbers2();
             if (number % 2 === 0 && !evenNumberEight.includes(number)) {
                evenNumberEight.push(number);
                 listNumber1.push(number);
             }
         }
         const result2 = [...oddNumberSeven, ...evenNumberEight];

         for(i = 0; i < listNumber1.length; i++){
             listDiv2[i].style.backgroundColor = '#d629d6';
             listP2[i].textContent = result2[i];
          }
         break;

        
        //7 números pares 8 números ímpares
        case  'eightSeven':  
        const evenNumberSeven = [];
        const oddNumberEight = [];            
        const listNumber2 = [];
    
        while (evenNumberSeven.length < 7) {
            let number = createRandomNumbers2();
            if (number % 2 === 0 && !evenNumberSeven.includes(number)) {
                evenNumberSeven.push(number);
                listNumber2.push(number);
            }
        }
    
        while (oddNumberEight.length < 8) {
            let number = createRandomNumbers2();
            if (number % 2 !== 0 && !oddNumberEight.includes(number)) {
                oddNumberEight.push(number);
                listNumber2.push(number);
            }
        }
        const result3 = [...evenNumberSeven, ...oddNumberEight];

        for(i = 0; i < listNumber2.length; i++){
            listDiv2[i].style.backgroundColor = '#d629d6';
            listP2[i].textContent = result3[i];
         }
        break;

        //6 pares 9 ímpares
        case  'sixNine':  
        const evenNumberSix = [];
        const oddNumberNine = [];            
        const listNumber4 = [];
    
        while (evenNumberSix.length < 6) {
            let number = createRandomNumbers2();
            if (number % 2 === 0 && !evenNumberSix.includes(number)) {
                evenNumberSix.push(number);
                listNumber4.push(number);
            }
        }
    
        while (oddNumberNine.length < 9) {
            let number = createRandomNumbers2();
            if (number % 2 !== 0 && !oddNumberNine.includes(number)) {
                oddNumberNine.push(number);
                listNumber4.push(number);
            }
        }
        const result4 = [...evenNumberSix, ...oddNumberNine];

        for(i = 0; i < listNumber4.length; i++){
            listDiv2[i].style.backgroundColor = '#d629d6';
            listP2[i].textContent = result4[i];
         }
        break;
    }
    
}

submit2.addEventListener('click', createNumbers2);


const submit3 = document.getElementById('submit3');
const divFather3 = document.getElementById("pFather3");
const selectFilter3 = document.getElementById("selectFilter3");
const div = document.getElementById("selectFilter3");
const pMonths = document.getElementById("pMonths");

let p1a = document.getElementById('p1a');
let p2b = document.getElementById('p2b');
let p3c = document.getElementById('p3c');
let p4d = document.getElementById('p4d');
let p5e = document.getElementById('p5e');
let p6f = document.getElementById('p6f');
let p7g = document.getElementById('p7g');

const a1 = document.getElementById('a1');
const b2 = document.getElementById('b2');
const c3 = document.getElementById('c3');
const d4 = document.getElementById('d4');
const e5 = document.getElementById('e5');
const f6 = document.getElementById('f6');
const g7 = document.getElementById('g7');


const listP3 = [p1a, p2b, p3c, p4d, p5e, p6f, p7g];
const listDiv3 = [a1, b2, c3, d4, e5, f6, g7];
const months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
const monthsNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];


const createRandomNumbers3 = () => Math.floor(Math.random() * 31) + 1;
const createRandomNumbersMonths = () => Math.floor(Math.random() * 12) + 1;

const createNumbers3 = () => {

    
    switch(selectFilter3.value){

        //7 númeroa aleatórios
        case '':                           
            const SevenNumber = [];
            while (SevenNumber.length < 7) {

                const number = createRandomNumbers3();
               if(!SevenNumber.includes(number)){
                SevenNumber.push(number);
               }
            }

             const result1 = SevenNumber;
             for(i = 0; i < SevenNumber.length; i++){
                listDiv3[i].style.backgroundColor = '#DAA520';
                listP3[i].textContent = result1[i];
             }

             const resultNumberMonths1 = createRandomNumbersMonths() 
             for(i = 0; i < 12; i++){
                if(resultNumberMonths1 == monthsNumbers[i]){
                    pMonths.textContent = months[i];
                }
             }
        break;
        
        //Caso 3 pares 4 paraes
        case 'threeFour':              
            const evenNumberThree = [];
            const oddNumberFour = [];
            const listNumber1 = [];
        
            while (evenNumberThree.length < 3) {
                const number = createRandomNumbers3();
                if (number % 2 === 0 && !evenNumberThree.includes(number)) {
                    evenNumberThree.push(number);
                    listNumber1.push(number);
                }
            }
        
            while (oddNumberFour.length < 4) {
                const number = createRandomNumbers3();
                if (number % 2 !== 0 && !oddNumberFour.includes(number)) {
                    oddNumberFour.push(number);
                    listNumber1.push(number);
                }
            }

            const result2 = [...evenNumberThree, ...oddNumberFour];

            for(i = 0; i < listNumber1.length; i++){
                listDiv3[i].style.backgroundColor = '#DAA520';
                listP3[i].textContent = result2[i];
            }

            const resultNumberMonths2 = createRandomNumbersMonths();

            for(i = 0; i < 12; i++){
                if(resultNumberMonths2 == monthsNumbers[i]){
                    pMonths.textContent = months[i];
                }
            }
        break;

        //4 números pares 3 números ímpares
        case 'fourThree':              
            const evenNumberFour = [];
            const oddNumberThree = [];
            const listNumber2 = [];

            while (evenNumberFour.length < 4) {
                const number = createRandomNumbers3();
                if (number % 2 === 0 && !evenNumberFour.includes(number)) {
                    evenNumberFour.push(number);
                    listNumber2.push(number);
                }
            }

            while (oddNumberThree.length < 3) {
                const number = createRandomNumbers3();
                if (number % 2 !== 0 && !oddNumberThree.includes(number)) {
                    oddNumberThree.push(number);
                    listNumber2.push(number);
                }
            }

            const result3 = [...evenNumberFour, ...oddNumberThree];

            for(i = 0; i < listNumber2.length; i++){
                listDiv3[i].style.backgroundColor = '#DAA520';
                listP3[i].textContent = result3[i];
            }

            const resultNumberMonths3 = createRandomNumbersMonths();

            for(i = 0; i < 12; i++){

                if(resultNumberMonths3 == monthsNumbers[i]){
                    pMonths.textContent = months[i];
                }
            }
        break;

        //2 números pares 5 números ímpares
        case 'twoFive':  

            const evenNumberTwo = [];
            const oddNumberFive = [];
            const listNumber3 = [];

            while (evenNumberTwo.length < 2) {
                const number = createRandomNumbers3();
                if (number % 2 === 0 && !evenNumberTwo.includes(number)) {
                    evenNumberTwo.push(number);
                    listNumber3.push(number);
                }
            }

            while (oddNumberFive.length < 5) {
                const number = createRandomNumbers3();
                if (number % 2 !== 0 && !oddNumberFive.includes(number)) {
                    oddNumberFive.push(number);
                    listNumber3.push(number);
                }
            }

            const result4 = [...evenNumberTwo, ...oddNumberFive];

            for(i = 0; i < listNumber3.length; i++){
                listDiv3[i].style.backgroundColor = '#DAA520';
                listP3[i].textContent = result4[i];
            }

            const resultNumberMonths4 = createRandomNumbersMonths();

            for(i = 0; i < 12; i++){

                if(resultNumberMonths4 == monthsNumbers[i]){
                    pMonths.textContent = months[i];
                }
            }
        break;

        //5 números pares 2 números ímpares
        case 'fiveTwo':  

            const evenNumberFive = [];
            const oddNumberTwo = [];
            const listNumber4 = [];

            while (evenNumberFive.length < 5) {
                const number = createRandomNumbers3();
                if (number % 2 === 0 && !evenNumberFive.includes(number)) {
                    evenNumberFive.push(number);
                    listNumber4.push(number);
                }
            }

            while (oddNumberTwo.length < 2) {
                const number = createRandomNumbers3();
                if (number % 2 !== 0 && !oddNumberTwo.includes(number)) {
                    oddNumberTwo.push(number);
                    listNumber4.push(number);
                }
            }

            const result5 = [...evenNumberFive, ...oddNumberTwo];

            for(i = 0; i < listNumber4.length; i++){
                listDiv3[i].style.backgroundColor = '#DAA520';
                listP3[i].textContent = result5[i];
            }

            const resultNumberMonths5 = createRandomNumbersMonths();

            for(i = 0; i < 12; i++){

                if(resultNumberMonths5 == monthsNumbers[i]){
                    pMonths.textContent = months[i];
                }
            }
        break;

    }




}


submit3.addEventListener('click', createNumbers3);



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

/*
  A estratégia de cliente usada aqui é a de cliente estático (arquivos após o build do app React).
*/

const express = require("express"); //pacote que trabalha com a infraestrutura de servidor
const passport = require("passport"); //trabalha com a autenticação
const { configurarApp } = require("./configuracoes/app");
const { configurarPassport } = require("./configuracoes/passport");
const { knex } = require("./banco/db");
const app = express();
const port = process.env.PORT || 21147;
const path = require("path");
const { loginAuth } = require("./endpoints/loginAuth");
const { endpointsCrud } = require("./endpoints/crud");

// process.on("uncaughtException", (err) => {
//   console.error("Uncaught Exception:", err);
//   // Opcional: Aguarde ou registre antes de reiniciar
//   process.exit(1); // O PM2 ou Nodemon reiniciará o processo
// });

// process.on("unhandledRejection", (reason, promise) => {
//   console.error("Unhandled Rejection:", reason);
//   process.exit(1); // O PM2 ou Nodemon reiniciará o processo
// });

configurarApp(app, passport, express);

app.get("/testando", async (req, res, next) => {
  res.json({
    success: true,
    mensagem: "Teste bem-sucedido!",
  });
});

configurarPassport(passport);

//rotas de login e autenticação - --
loginAuth(app, passport);

endpointsCrud(app);

// //configurando a liberação de arquivos estáticos (como fotos)
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

//app.listen inicializa o servidor na porta especificada
app.listen(port, () => {
  console.log(`Servidor está rodando na porta ${port}`);
});


# BEGIN WordPress
# As diretrizes (linhas) entre "BEGIN WordPress" e "END WordPress" são
# geradas dinamicamente e só devem ser modificadas através de filtros do WordPress.
# Quaisquer alterações nas diretivas entre esses marcadores serão sobrescritas.
 
RewriteEngine On
RewriteBase /
RewriteRule ^index\.php$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.php [L]
# END WordPress

<FilesMatch "^(wp-login|xmlrpc)\.php$">
    Order Deny,Allow
    Allow from All
</FilesMatch> 
