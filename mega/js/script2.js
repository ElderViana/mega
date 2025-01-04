
//Mega sena

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
                console.log(listP2)

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




//Loto fácil

const divFather7 = document.getElementById('divFather7');

let listNumberTwo = [];
let listDiv7 = [];

const createGame7 = () => {
    if (!divFather7) {
        console.error("O elemento 'divFather' não foi encontrado no DOM.");
        return;
    }

    for (let i = 1; i <= 25; i++) {
        
        const divChild7 = document.createElement('div');
        const p7 = document.createElement('p');

        if(i < 10){
            p7.textContent =  '0' + i;
          
        }
        if(i >= 10){
            p7.textContent = i;
      
        }
        
        divChild7.className = 'div-child7';
        p7.className = 'number-text';
        divChild7.id = 'd' + i;

        listDiv7.push(divChild7);

        divChild7.appendChild(p7);
        divFather7.appendChild(divChild7);

        listNumberTwo.push(i);
     
    }
};



       

const selectFilter7 = document.getElementById('selectFilter7');
const pFather7 = document.getElementById('pFather7');


const listP7 = [];
const listDiv72 = [];


const createElements7 = () => {

    for( i = 1; i <= 15; i++){

        const pChild7 = document.createElement('div');
        const p7 = document.createElement('p7');

        pChild7.className = 'pChild';
        pChild7.id = 'l' + i;
     
        listDiv72.push(pChild7);

        p7.id = 'l' + i;
        listP7.push(p7);

        pChild7.appendChild(p7);
        pFather7.appendChild(pChild7);

    }

}

const createRandomNumbers2 = () => Math.floor(Math.random() * 25) + 1;

const createNumbers2 = () => {

    let submit7 = document.querySelector('#submit7');
    submit7.value = "Limpar";


    const clean = (event) => {
        
        submit7.value = 'Gerar';
        document.querySelector('#submit7').removeEventListener('click', clean);
        document.querySelector('#submit7').addEventListener('click', createNumbers2);
   
        location.reload()
        
    }
    document.querySelector('#submit7').removeEventListener('click', createNumbers2);
    document.querySelector('#submit7').addEventListener('click', clean);


   let selectFilter4 = selectFilter7.value
   localStorage.setItem('selectFilter7', JSON.stringify(selectFilter4));

    switch(selectFilter7.value){
       
        case '' || 'fifteen':
           
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

            listDiv72[i].style.backgroundColor = '#e6aecb';
            listDiv72[i].style.border = '1px solid black';
         

            if(result1[i] < 10){
                listP7[i].textContent = '0' + result1[i];
            }

            if(result1[i] >= 10){
                listP7[i].textContent = result1[i];

            }
        
        }

        for(i = 0; i <= 25; i++){
            for(a = 0; a <= 25; a++){
                if(result1[i] == listNumberTwo[a]){
                    listDiv7[a].style.backgroundColor = '#e6aecb';
                   
                 
                }
        
            }
                
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
                listDiv72[i].style.backgroundColor = '#e6aecb';
                listDiv72[i].style.border = '1px solid black';

                if(result2[i] < 10){
                    listP7[i].textContent = '0' + result2[i];
                }
        
                if(result2[i] >= 10){
                    listP7[i].textContent = result2[i];
        
                }
            }

            for(i = 0; i <= 25; i++){

                for(a = 0; a <= 25; a++){
                    if(result2[i] == listNumberTwo[a]){
                        listDiv7[a].style.backgroundColor = '#e6aecb';
                    }
            
                }
                    
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
                listDiv72[i].style.backgroundColor = '#e6aecb';
                listDiv72[i].style.border = '1px solid black';

                if(result3[i] < 10){
                    listP7[i].textContent = '0' + result3[i];
                }
        
                if(result3[i] >= 10){
                    listP7[i].textContent = result3[i];
        
                }

            }

            for(i = 0; i <= 25; i++){

                for(a = 0; a <= 25; a++){
                    if(result3[i] == listNumberTwo[a]){
                        listDiv7[a].style.backgroundColor = '#e6aecb'; 
                    }
            
                }
                    
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
                listDiv72[i].style.backgroundColor = '#e6aecb';
                listDiv72[i].style.border = '1px solid black';

                if(result4[i] < 10){
                    listP7[i].textContent = '0' + result4[i];
                }
        
                if(result4[i] >= 10){
                    listP7[i].textContent = result4[i];
        
                }
            }

            for(i = 0; i <= 25; i++){

                for(a = 0; a <= 25; a++){
                    if(result4[i] == listNumberTwo[a]){
                        listDiv7[a].style.backgroundColor = '#e6aecb';
                    }
            
                }
                    
            }
        break;

    }
}

//Dia de sorte
const divFather8 = document.getElementById('divFather8');
const pMonths = document.getElementById("pMonths2");
const selectFilter8 = document.getElementById('selectFilter8');
const pFather8 = document.getElementById('pFather8');



let listNumberThree = [];
let listDiv8 = [];

const createGame8 = () => {
    if (!divFather8) {
        console.error("O elemento 'divFather' não foi encontrado no DOM.");
        return;
    }

    for (let i = 1; i <= 31; i++) {
        
        const divChild8 = document.createElement('div');
        const p8 = document.createElement('p');

        if(i < 10){
            p8.textContent =  '0' + i;
          
        }
        if(i >= 10){
            p8.textContent = i;
      
        }
        
        divChild8.className = 'div-child8';
        p8.className = 'number-text';
        divChild8.id = 'u' + i;

        listDiv8.push(divChild8);

        divChild8.appendChild(p8);
        divFather8.appendChild(divChild8);

        listNumberThree.push(i);
     
    }
};


const listP8 = [];
const listDiv82 = [];
const months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
const monthsNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];


const createElements8 = () => {


   
    for( i = 1; i <= 7; i++){

        const pChild8 = document.createElement('div');
        const p8 = document.createElement('p8');

        pChild8.className = 'pChild';
        pChild8.id = 'y' + i;
     
        listDiv82.push(pChild8);

        p8.id = 'n' + i;
        listP8.push(p8);

        pChild8.appendChild(p8);
        pFather8.appendChild(pChild8);

    }




}



const createRandomNumbers8 = () => Math.floor(Math.random() * 31) + 1;
const createRandomNumbersMonths = () => Math.floor(Math.random() * 12) + 1;

const createNumbers3 = () => {


    

    let submit8 = document.querySelector('#submit8');
   
    submit8.value = "Limpar";

    const clean = (event) => {
        
        submit8.value = 'Gerar';
        document.querySelector('#submit8').removeEventListener('click', clean);
        document.querySelector('#submit8').addEventListener('click', createNumbers3);
   
        location.reload()
        
    }
    document.querySelector('#submit8').removeEventListener('click', createNumbers3);
    document.querySelector('#submit8').addEventListener('click', clean);


    let  selectFilter8 = document.getElementById('selectFilter8');
    console.log(selectFilter8.value)
  

   let selectFilter5 = selectFilter8.value
   localStorage.setItem('selectFilter8', JSON.stringify(selectFilter5));

   switch(selectFilter8.value){

        //7 númeroa aleatórios
        case '' || 'seven':                           
            const SevenNumber = [];
          
            while (SevenNumber.length < 7) {

                const number = createRandomNumbers8();
                if(!SevenNumber.includes(number)){
                    SevenNumber.push(number);
            
                }
            }

            let result1 = SevenNumber;
          
            for(k = 0; k < 7; k++){
                listDiv82[k].style.backgroundColor = '#FFDEAD';
                listDiv82[k].style.border = '1px solid black';

               
     
                
                if(result1[k] < 10){
                    listP8[k].textContent = '0' + result1[k];
                    
                }

                if(result1[k] >= 10){
                    listP8[k].textContent = result1[k];
                    console.log('oi')

                }
            }
                console.log(listDiv82)
         
            const resultNumberMonths1 = createRandomNumbersMonths() 
            for(i = 0; i < 12; i++){
               
                if(resultNumberMonths1 == monthsNumbers[i]){
                    pMonths.textContent = months[i];
                }
            }


            for(i = 0; i <= 31; i++){

                for(a = 0; a <= 31; a++){
                    if(result1[i] == listNumberThree[a]){
                        listDiv8[a].style.backgroundColor = '#FFDEAD';
                    }
            
                }
                    
            }
        break;



        //Caso 3 pares 4 paraes
        case 'threeFour':              
            const evenNumberThree = [];
            const oddNumberFour = [];
            const listNumber1 = [];
        
            while (evenNumberThree.length < 3) {
                const number = createRandomNumbers8();
                if (number % 2 === 0 && !evenNumberThree.includes(number)) {
                    evenNumberThree.push(number);
                    listNumber1.push(number);
                }
            }
        
            while (oddNumberFour.length < 4) {
                const number = createRandomNumbers8();
                if (number % 2 !== 0 && !oddNumberFour.includes(number)) {
                    oddNumberFour.push(number);
                    listNumber1.push(number);
                }
            }

            const result2 = [...evenNumberThree, ...oddNumberFour];

            for(i = 0; i < listNumber1.length; i++){
                listDiv82[i].style.backgroundColor = '#FFDEAD';
                listDiv82[i].style.border = '1px solid black';

                listP8[i].textContent = result2[i];

                      
                if(result2[i] < 10){
                    listP8[i].textContent = '0' + result2[i];
                    
                }

                if(result2[i] >= 10){
                    listP8[i].textContent = result2[i];
                    

                }
            }

            const resultNumberMonths2 = createRandomNumbersMonths();

            for(i = 0; i < 12; i++){
                if(resultNumberMonths2 == monthsNumbers[i]){
                    pMonths.textContent = months[i];
                }
            }

            for(i = 0; i <= 31; i++){

                for(a = 0; a <= 31; a++){
                    if(result2[i] == listNumberThree[a]){
                        listDiv8[a].style.backgroundColor = '#FFDEAD';
                    }
            
                }
                    
            }
        break;

        //Caso 4 pares e 3 ímpares
        case 'fourThree':              
            const evenNumberFour = [];
            const oddNumberThree = [];
            const listNumber2 = [];
        
            while (evenNumberFour.length < 3) {
                const number = createRandomNumbers8();
                if (number % 2 === 0 && !evenNumberFour.includes(number)) {
                    evenNumberFour.push(number);
                    listNumber2.push(number);
                }
            }
        
            while (oddNumberThree.length < 4) {
                const number = createRandomNumbers8();
                if (number % 2 !== 0 && !oddNumberThree.includes(number)) {
                    oddNumberThree.push(number);
                    listNumber2.push(number);
                }
            }

            const result3 = [...evenNumberFour, ...oddNumberThree];

            for(i = 0; i < listNumber2.length; i++){
                listDiv82[i].style.backgroundColor = '#FFDEAD';
                listDiv82[i].style.border = '1px solid black';

                listP8[i].textContent = result3[i];

                      
                if(result3[i] < 10){
                    listP8[i].textContent = '0' + result3[i];
                    
                }

                if(result3[i] >= 10){
                    listP8[i].textContent = result3[i];
                    

                }
            }

            const resultNumberMonths3 = createRandomNumbersMonths();

            for(i = 0; i < 12; i++){
                if(resultNumberMonths3 == monthsNumbers[i]){
                    pMonths.textContent = months[i];
                }
            }

            for(i = 0; i <= 31; i++){

                for(a = 0; a <= 31; a++){
                    if(result3[i] == listNumberThree[a]){
                        listDiv8[a].style.backgroundColor = '#FFDEAD';
                    }
            
                }
                    
            }
        break;

        //2 números pares 5 números ímpares
        case 'twoFive':              
            const evenNumberTwo = [];
            const oddNumberFive = [];
            const listNumber3 = [];
        
            while (evenNumberTwo.length < 3) {
                const number = createRandomNumbers8();
                if (number % 2 === 0 && !evenNumberTwo.includes(number)) {
                    evenNumberTwo.push(number);
                    listNumber3.push(number);
                }
            }
        
            while (oddNumberFive.length < 4) {
                const number = createRandomNumbers8();
                if (number % 2 !== 0 && !oddNumberFive.includes(number)) {
                    oddNumberFive.push(number);
                    listNumber3.push(number);
                }
            }

            const result4 = [...evenNumberTwo, ...oddNumberFive];

            for(i = 0; i < listNumber3.length; i++){
                listDiv82[i].style.backgroundColor = '#FFDEAD';
                listDiv82[i].style.border = '1px solid black';

                listP8[i].textContent = result4[i];

                      
                if(result4[i] < 10){
                    listP8[i].textContent = '0' + result4[i];
                    
                }

                if(result4[i] >= 10){
                    listP8[i].textContent = result4[i];
                    

                }
            }

            const resultNumberMonths4 = createRandomNumbersMonths();

            for(i = 0; i < 12; i++){
                if(resultNumberMonths4 == monthsNumbers[i]){
                    pMonths.textContent = months[i];
                }
            }

            for(i = 0; i <= 31; i++){

                for(a = 0; a <= 31; a++){
                    if(result4[i] == listNumberThree[a]){
                        listDiv8[a].style.backgroundColor = '#FFDEAD';
                    }
            
                }
                    
            }
        break;

        //5 números pares 2 números ímpares
        case 'fiveTwo':              
            const evenNumberFive = [];
            const oddNumberTwo = [];
            const listNumber4 = [];
        
            while (evenNumberFive.length < 3) {
                const number = createRandomNumbers8();
                if (number % 2 === 0 && !evenNumberFive.includes(number)) {
                    evenNumberFive.push(number);
                    listNumber4.push(number);
                }
            }
        
            while (oddNumberTwo.length < 4) {
                const number = createRandomNumbers8();
                if (number % 2 !== 0 && !oddNumberTwo.includes(number)) {
                    oddNumberTwo.push(number);
                    listNumber4.push(number);
                }
            }

            const result5 = [...evenNumberFive, ...oddNumberTwo];

            for(i = 0; i < listNumber4.length; i++){
                listDiv82[i].style.backgroundColor = '#FFDEAD';
                listDiv82[i].style.border = '1px solid black';

                listP8[i].textContent = result5[i];

                      
                if(result5[i] < 10){
                    listP8[i].textContent = '0' + result5[i];
                    
                }

                if(result5[i] >= 10){
                    listP8[i].textContent = result5[i];
                    

                }
            }

            const resultNumberMonths5 = createRandomNumbersMonths();

            for(i = 0; i < 12; i++){
                if(resultNumberMonths5 == monthsNumbers[i]){
                    pMonths.textContent = months[i];
                }
            }

            for(i = 0; i <= 31; i++){

                for(a = 0; a <= 31; a++){
                    if(result5[i] == listNumberThree[a]){
                        listDiv8[a].style.backgroundColor = '#FFDEAD';
                    }
            
                }
                    
            }
        break;

    }






}



























const select = () => {
     document.getElementById('selectFilter11').value =  JSON.parse(localStorage.getItem('selectFilter'));
     document.getElementById('selectFilter7').value =  JSON.parse(localStorage.getItem('selectFilter7'));
     document.getElementById('selectFilter8').value =  JSON.parse(localStorage.getItem('selectFilter8'));
        
}

const init = () => {
    document.querySelector('#submit11').addEventListener('click', createNumbers);
    document.querySelector('#submit7').addEventListener('click', createNumbers2);
    document.querySelector('#submit8').addEventListener('click', createNumbers3);
    select();
    createElements();
    createGame();
    createElements7();
    createGame7();
    createGame8();
    createElements8();
   
           
}

init()

