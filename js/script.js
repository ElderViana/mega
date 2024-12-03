
const exerciseList = [
    {group: 'Peito', name: 'Supino reto com barra', series: '3 ou 4', repetitions: '8 a 15'},
    {group: 'Peito', name: 'Supino reto com halteres', series: '3 ou 4', repetitions: '8 a 15'},
    {group: 'Peito', name: 'Supino inclinado com barra', series: '3 ou 4', repetitions: '8 a 15'},
    {group: 'Peito', name: 'Supino inclinado com halteres', series: '3 ou 4', repetitions: '8 a 15'},
    {group: 'Peito', name: 'Supino declinado com barra', series: '3 ou 4', repetitions: '8 a 15'},
    {group: 'Peito', name: 'Supino declinado com halteres', series: '3 ou 4', repetitions: '8 a 15'},
    {group: 'Tríceps', name: 'Tríceps testa', series: '3 ou 4', repetitions: '8 a 15'},
    {group: 'Tríceps', name: 'Tríceps corda', series: '3 ou 4', repetitions: '8 a 15'},
    {group: 'Tríceps', name: 'Mergulho em barras paralelas', series: '3 ou 4', repetitions: '8 a 15'},
    {group: 'Tríceps', name: 'Pulley', series: '3 ou 4', repetitions: '8 a 15'},
    {group: 'Tríceps', name: 'Tríceps coice', series: '3 ou 4', repetitions: '8 a 15'},
    {group: 'Tríceps', name: 'Tríceps francês', series: '3 ou 4', repetitions: '8 a 15'},
    {group: 'Tríceps', name: 'Mergulho no banco', series: '3 ou 4', repetitions: '8 a 15'},
    {group: 'Tríceps', name: 'Mergulho no banco', series: '3 ou 4', repetitions: '8 a 15'},
    {group: 'Antebraço', name: 'Rosca de punho', series: '3 ou 4', repetitions: '8 a 15'},
    {group: 'Antebraço', name: 'Rosca de punho ivertido', series: '3 ou 4', repetitions: '8 a 15'},
    {group: 'Antebraço', name: 'Rosca de punho ivertido com halteres', series: '3 ou 4', repetitions: '8 a 15'},
    {group: 'Antebraço', name: 'Rosca de punho com halteres', series: '3 ou 4', repetitions: '8 a 15'},
    {group: 'Ombro', name: 'Elevação lateral', series: '3 ou 4', repetitions: '8 a 15'},
    {group: 'Ombro', name: 'Elevação frontal', series: '3 ou 4', repetitions: '8 a 15'},
    {group: 'Ombro', name: 'Desenvolvimento com halteres', series: '3 ou 4', repetitions: '8 a 15'},
    {group: 'Ombro', name: 'Desenvolvimento na máquina', series: '3 ou 4', repetitions: '8 a 15'},
    {group: 'Ombro', name: 'Elevação lateral no cross', series: '3 ou 4', repetitions: '8 a 15'},
    {group: 'Ombro', name: 'Desenvolvimento frontal com barra', series: '3 ou 4', repetitions: '8 a 15'},
    {group: 'Trapézio', name: 'Encolhimento de ombro com barra', series: '3 ou 4', repetitions: '8 a 15'},
    {group: 'Trapézio', name: 'Encolhimento de ombro com halteres', series: '3 ou 4', repetitions: '8 a 15'},
    {group: 'Perna', name: 'Leg press', series: '3 ou 4', repetitions: '8 a 15'},
    {group: 'Perna', name: 'Agachamento barra solta', series: '3 ou 4', repetitions: '8 a 15'},
    {group: 'Perna', name: 'Agachamento sumô', series: '3 ou 4', repetitions: '8 a 15'},
    {group: 'Perna', name: 'Agachamento búlgaro', series: '3 ou 4', repetitions: '8 a 15'},
    {group: 'Perna', name: 'Cadeira extensora', series: '3 ou 4', repetitions: '8 a 15'},
    {group: 'Perna', name: 'Cadeira flexora', series: '3 ou 4', repetitions: '8 a 15'},
    {group: 'Perna', name: 'Mesa flexora', series: '3 ou 4', repetitions: '8 a 15'},
    {group: 'Perna', name: 'Cadeira abdutora', series: '3 ou 4', repetitions: '8 a 15'},
    {group: 'Perna', name: 'Elevação de quadril', series: '3 ou 4', repetitions: '8 a 15'},
    {group: 'Perna', name: 'Stiff', series: '3 ou 4', repetitions: '8 a 15'},
    {group: 'Perna', name: 'Elevação de panturrilha em pé', series: '3 ou 4', repetitions: '8 a 15'},
    {group: 'Perna', name: 'Agachamento livre', series: '3 ou 4', repetitions: '8 a 15'},
    {group: 'Perna', name: 'Elevação de panturrilha em pé no smith', series: '3 ou 4', repetitions: '8 a 15'},
    {group: 'Perna', name: 'Afundo com halteres', series: '3 ou 4', repetitions: '8 a 15'},
    {group: 'Abdominal', name: 'Elevação de pernas', series: '3 ou 4', repetitions: '8 a 15'},
    {group: 'Abdominal', name: 'Prancha', series: '3 ou 4', repetitions: '8 a 15'},
    {group: 'Abdominal', name: 'Prancha lateral', series: '3 ou 4', repetitions: '8 a 15'},
    {group: 'Abdominal', name: 'Prancha lateral', series: '3 ou 4', repetitions: '8 a 15'},
    {group: 'Abdominal', name: 'Elevação de quadril', series: '3 ou 4', repetitions: '8 a 15'},
    {group: 'Abdominal', name: 'Abdominal bicicleta', series: '3 ou 4', repetitions: '8 a 15'},
    {group: 'Abdominal', name: 'Rotação russa', series: '3 ou 4', repetitions: '8 a 15'},

];



const div = document.getElementById('list');
const submit = document.getElementById('submit');
const select = document.getElementById('muscleGroup');



ftp.wp10f07.kinghost.net c6f9x2j8
const createList = (event) => {
    event.preventDefault();
    for (i = 0; i < exerciseList.length; i++){
        console.log(select[i].value)
    
            if(exerciseList[i].group == 'Peito') {
                let muscleGroup = document.createElement('input');
                //let muscleGroup2 = document.createElement('input');
                let br = document.createElement('br');
                
                
                let lable = document.createElement('lable');
            // let lable2 = document.createElement('lable');
                
                lable.textContent = exerciseList[i].name
                //lable2.textContent = 'Rosca direta'
                
                muscleGroup.type = 'checkbox';
            // muscleGroup2.type = 'checkbox';
                
                div.appendChild(muscleGroup);
                div.appendChild(lable);
                div.appendChild(br);
            // div.appendChild(muscleGroup2);
            // div.appendChild(lable2);
            }
        
    }

}
submit.addEventListener('click', createList);