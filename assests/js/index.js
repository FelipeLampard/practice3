const dutys = [
    { id: 1, name: "Hacer lista de mercado.", completed: false},
    { id: 2, name: "Estudiar para Examen.", completed: false},
    { id: 3, name: "Sacar a pasear a Boby.", completed: false},
    { id: 4, name: "Jugar en el computador.", completed: false},
];

const addTarea = document.getElementById("addValue");
const taskList = document.getElementById("results");
const addButton = document.getElementById("addButton");
const total = document.getElementById("total");
const ready = document.getElementById("realized");
   
const addDuty = () => {
    const dutyName = addTarea.value
    if(!dutyName){
        alert("Agrega Información")
        return;
    }
    const lastDuty = dutys[dutys.length-1]
    const newDuty ={
        id: lastDuty? lastDuty.id + 1 : 1,
        name: dutyName,
        completed: false,
    };
dutys.push(newDuty);
console.log(dutys);
};

addButton.addEventListener("click", addDuty)


const changeTask =(id) =>{
    const taskDuty = dutys.findIndex((duty) => duty.id === id)
    if(dutys[taskDuty].completed == false){
        const newTask ={
            id: dutys[taskDuty].id,
            name: dutys[taskDuty].name,
            completed: true
        };
        dutys.splice(taskDuty, 1,newTask );
    }else{
        const newTask ={
            id: dutys[taskDuty].id,
            name: dutys[taskDuty].name,
            completed: false
        };
        dutys.splice(taskDuty, 1,newTask );
    }
    addButton.addEventListener("click", changeTask);
    renderDutys();
};

const renderDutys = () => {
    let html = "";
    let inputCheck = "";
    let readyCount = [] ;
    dutys.forEach((duty) =>{
        inputCheck = duty.completed ? `<span class="new" <input type="checkbox" onclick="changeTask(${duty.id})"></span>`
        : `<input type="checkbox" onclick="changeTask(${duty.id})">`;
        html+=`
        <div class="check"> 
        <p>${duty.id} ${duty.name} <input type="checkbox" onclick="changeTask(${duty.id})"></p>
        </div>
       
        `;
        if(duty.completed === true){
            readyCount.push(duty);
        }
    });
    taskList.innerHTML = html
    total.innerHTML = dutys.length
    ready.innerHTML = readyCount.length
};


addButton.addEventListener("click", renderDutys)
renderDutys();
    

            
