const divFather = document.getElementById('divFather');

let listNumberOne = [];
let listDiv = [];



const createGame = () => {
    if (!divFather) {
        console.error("O elemento 'divFather' não foi encontrado no DOM.");
        return;
    }

    for (let i = 1; i <= 60; i++) {
        
        const divChild = document.createElement('div');
        const p = document.createElement('p');

        if(i < 10){
            p.textContent =  '0' + i;
          
        }
        if(i >= 10){
            p.textContent = i;
      
        }
        
        divChild.className = 'div-child';
        p.className = 'number-text';
        divChild.id = 'b' + i;

        listDiv.push(divChild);

        divChild.appendChild(p);
        divFather.appendChild(divChild);

        listNumberOne.push(i);
     
    }
};

createGame();

        
//const submit = document.getElementById('submit11');
const selectFilter = document.getElementById('selectFilter11');
const pFather4 = document.getElementById('pFather4');


const listP2 = [];
const listDiv2 = [];


const createElements = () => {

    for( i = 1; i <= 6; i++){

        const pChild = document.createElement('div');
        const p = document.createElement('p');

        pChild.className = 'pChild';
        pChild.id = 'a' + i;
     
        listDiv2.push(pChild);

        p.id = 'a' + i;
        listP2.push(p);

        pChild.appendChild(p);
        pFather4.appendChild(pChild);

    }





}

createElements()


const createRandomNumbers = () => Math.floor(Math.random() * 60) + 1;

const createNumbers = () => {


    let submit = document.querySelector('#submit11');
    submit.value = "Limpar";


    const clean = (event) => {
        
        submit.value = 'Gerar';
        document.querySelector('#submit11').removeEventListener('click', clean);
        document.querySelector('#submit11').addEventListener('click', createNumbers);
        console.log('oi')
        location.reload()
        
    }
    document.querySelector('#submit11').removeEventListener('click', createNumbers);
    document.querySelector('#submit11').addEventListener('click', clean);

   let selectFilter3 = selectFilter.value
   localStorage.setItem('selectFilter', JSON.stringify(selectFilter3));


   
    switch(selectFilter.value){

        //6 númeroa aleatórios
        case '' || 'sixNumber':                           
            const SixNumber = [];
            while (SixNumber.length < 6) {

                const number = createRandomNumbers();
               if(!SixNumber.includes(number)){
                SixNumber.push(number);
               }
            }

             const result1 = SixNumber;

             for(i = 0; i < SixNumber.length; i++){

                listDiv2[i].style.backgroundColor = '#00CED1';
                listDiv2[i].style.border = '1px solid black';

                if(result1[i] < 10){
                    listP2[i].textContent = '0' + result1[i];
                }

                if(result1[i] >= 10){
                    listP2[i].textContent = result1[i];
    
                }
             }

             for(i = 0; i <= 60; i++){

                for(a = 0; a <= 60; a++){
                    if(result1[i] == listNumberOne[a]){
                        listDiv[a].style.backgroundColor = '#00CED1';
                    }
        
                }
                  
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

                listDiv2[i].style.backgroundColor = '#00CED1';
                listDiv2[i].style.border = '1px solid black';

                if(result2[i] < 10){
                    listP2[i].textContent = '0' + result2[i];
                }

                if(result2[i] >= 10){
                    listP2[i].textContent = result2[i];
    
                }
             }

             for(i = 0; i <= 60; i++){

                for(a = 0; a <= 60; a++){
                    if(result2[i] == listNumberOne[a]){
                        listDiv[a].style.backgroundColor = '#00CED1';
                    }
        
                }
                  
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

                listDiv2[i].style.backgroundColor = '#00CED1';
                listDiv2[i].style.border = '1px solid black';

                if(result3[i] < 10){
                    listP2[i].textContent = '0' + result3[i];
                }

                if(result3[i] >= 10){
                    listP2[i].textContent = result3[i];
    
                }
             }

             for(i = 0; i <= 60; i++){

                for(a = 0; a <= 60; a++){
                    if(result3[i] == listNumberOne[a]){
                        listDiv[a].style.backgroundColor = '#00CED1';
                    }
        
                }
                  
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

                listDiv2[i].style.backgroundColor = '#00CED1';
                listDiv2[i].style.border = '1px solid black';

                if(result4[i] < 10){
                    listP2[i].textContent = '0' + result4[i];
                }

                if(result4[i] >= 10){
                    listP2[i].textContent = result4[i];
    
                }
             }

             for(i = 0; i <= 60; i++){

                for(a = 0; a <= 60; a++){
                    if(result4[i] == listNumberOne[a]){
                        listDiv[a].style.backgroundColor = '#00CED1';
                    }
        
                }
                  
             }
           

        break;

        }


 
        
    }
    const select = () => {
            document.getElementById('selectFilter11').value =  JSON.parse(localStorage.getItem('selectFilter'));
        
            
        
    
    }







    const init = () => {
        document.querySelector('#submit11').addEventListener('click', createNumbers);
        select();
           
    }

    init()

    let selectFilter2 = JSON.parse(localStorage.getItem('selectFilter'));

    console.log(selectFilter2);

    