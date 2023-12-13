import {studentsData} from "./data.js"
const saveBtn=document.querySelector("#savebtn")
saveBtn.addEventListener

const inputFirstName=document.getElementById("firstName")
const inputLastName=document.getElementById("lastName")
const inputDepartment=document.getElementById("depart")
const inputAverage=document.getElementById("average")

function getValues(){
const dataObject={
name:inputFirstName.value,
surName:inputLastName.value,
department:inputDepartment.value,
average:inputAverage.value
}
}

function cardCreater(){
   document.getElementById("student").innerHTML=
   studentsData.forEach(pStudent =>{
    
   })
const card=document.getElementById("card")
card.innerHTML
}