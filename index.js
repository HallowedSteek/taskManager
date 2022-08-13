//dynamic margin
let tBarHeight = document.getElementById("taskBar").offsetHeight;
let tList = document.getElementById("taskList");
let underList = document.getElementById("underList");

underList.style.marginTop = `-${(underList.offsetHeight / 2)}px`;

tList.style.marginTop = `-${(tBarHeight / 2)}px`;
tList.style.paddingTop = `${(tBarHeight / 2)+10}px`;

//add


let removeBtn = document.getElementById("remove");
let addBtn = document.getElementById("add");
let list = document.getElementById("listaMain");

let bool = true;

let ulArr = [];
let cbArr = [];

let auxUl = [];
let auxCb = [];

let index = 0;

function add() {

    auxUl = [];

    let task = document.getElementById("typeTask");

    if(task.value==0){
        alert("Introduceti un task!");
    }else{
        list.innerHTML += ` 
        <li id="newList${index}" class="list-group-item d-flex mt-1 border border-dark border-2 ">
            <label class="form-check-label me-auto w-100 d-flex" > 
                ${task.value}
                <input id="checkbox${index}" class="form-check-input ms-auto border border-dark border-1" type="checkbox" value="${index}">
            </label>
        </li> 
        `;    


        auxUl.push(`newList${index}`);
        cbArr.push(`checkbox${index}`);
        index++;

        task.value=null;
        console.log(index + ' ' + auxUl);
    }

   ulArr = ulArr.concat(auxUl);
   console.log(ulArr);
};

addBtn.addEventListener('click', add);

//remove

function remove(){

    console.log(ulArr);

    auxUl = [];
    auxCb = [];

    for (let i = 0; i < ulArr.length; i++) {
        let aux1 = document.getElementById(ulArr[i]);
        let aux2 = document.getElementById(cbArr[i]);
        

        if (aux2.checked != 0) {
            list.removeChild(aux1);
            bool=false;
        }else{
            auxUl.push(aux1.id);
            auxCb.push(aux2.id);
        }
    }


    if (bool) {
        alert("Selectati ce task-uri doriti sa eliminati!");
    }

    cbArr = auxCb;
    ulArr = auxUl;
    console.log(ulArr);   
    console.log(cbArr);
}   

removeBtn.addEventListener('click',remove);

//clear all

let clearAll = document.getElementById("clearAll");


function removeAll(){
    // debugger;
    console.log(ulArr);
    for (let i = 0; i < ulArr.length; i++) {
        let aux1 = document.getElementById(ulArr[i]);
            list.removeChild(aux1);
    }   
    index=0;
    ulArr=[];
    cbArr=[];
    console.log(index);
    console.log(ulArr);

}

clearAll.addEventListener('click',removeAll)

//finish day

let finishDay = document.getElementById("finishDay");
let cheer = new Audio("cheer.mp3");

function finish(){
    removeAll();
    cheer.play();
    setTimeout(() => {
        alert("gg man");
    }, 250); 
}

finishDay.addEventListener('click',finish);