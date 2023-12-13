const saveBtn=document.querySelector("#saveStudentBtn")
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
function cardCreater() {
   const studentsData = [
     { name: "Max Hermann", department: "Computer Science", text: "Some details about Max Hermann." , average:" Average:50"},
     { name: "Azra Iffet Gökhan",department : "Full stack developer", text: "Some details about Azra Iffet Gökhan.", average:" Avergae:80" },
     { name: "Anthony Egbe", department: "Full stack developer", text: "Some details about Anthony Egbe.", average:" Average:50" }
   ];

   const studentContainer = document.getElementById("student");

   studentsData.forEach(pStudent => {
     const card = document.createElement("div");
     card.className = "card";
     card.style.width = "18rem";

     card.innerHTML = `
       <div class="card-body">
         <h5 class="card-title">${pStudent.name}</h5>
         <h6 class="card-subtitle mb-2 text-body-secondary">${pStudent.department}</h6>
         <p class="card-text">${pStudent.text}</p>
         <a href="#" class="card-link">${pStudent.average}</a>
         <a href="#" class="card-link">Students</a>
         <a href="#" class="card-link">Classes</a>
       </div>
     `;

     studentContainer.appendChild(card);
   });
 }

 cardCreater();