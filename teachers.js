const saveBtn=document.querySelector("#saveTeacherBtn")
saveBtn.addEventListener

const inputFirstName=document.getElementById("first")
const inputLastName=document.getElementById("last")
const inputDepartment=document.getElementById("department")
const inputAverage=document.getElementById("description")

function getValues(){
const dataObject={
name:inputFirstName.value,
surName:inputLastName.value,
department:inputDepartment.value,
average:inputAverage.value
}
}
function cardCreater() {
   const studentsData = [
     { name: "Max Hermann", department: "Computer Science", text: "Some details about Max Hermann." , Description:"Description"},
     { name: "Azra Iffet Gökhan",department : "Full stack developer", text: "Some details about Azra Iffet Gökhan.",Description:"Description" },
     { name: "Anthony Egbe", department: "Full stack developer", text: "Some details about Anthony Egbe.", Description:" Description" }
   ];

   const studentContainer = document.getElementById("teacher");

   studentsData.forEach(pStudent => {
     const card = document.createElement("div");
     card.className = "card";
     card.style.width = "18rem";

     card.innerHTML = `
       <div class="card-body">
         <h5 class="card-title">${pStudent.name}</h5>
         <h6 class="card-subtitle mb-2 text-body-secondary">${pStudent.department}</h6>
         <p class="card-text">${pStudent.text}</p>
        <p class="card-text"> ${pStudent.Description} </p>
         <a href="#" class="card-link">Students</a>
         <a href="#" class="card-link">Classes</a>
       </div>
     `;

     studentContainer.appendChild(card);
   });
 }

 cardCreater();