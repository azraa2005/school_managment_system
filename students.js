// const saveBtn=document.querySelector("#saveStudentBtn")
// saveBtn.addEventListener

// const inputFirstName=document.getElementById("firstName")
// const inputLastName=document.getElementById("lastName")
// const inputDepartment=document.getElementById("depart")
// const inputAverage=document.getElementById("average")

// export function getValuesStudents(){
// const dataObject={
// name:inputFirstName.value,
// surName:inputLastName.value,
// department:inputDepartment.value,
// average:inputAverage.value
// }
// studentsData.push(dataObject)
// }
// export function cardStudentsCreater() {
//    const studentContainer = document.getElementById("student");

//    studentsData.forEach(pStudent => {
//      const card = document.createElement("div");
//      card.className = "card";
//      card.style.width = "18rem";

//      card.innerHTML = `
//        <div class="card-body">
//          <h5 class="card-title">${pStudent.name}</h5>
//          <h6 class="card-subtitle mb-2 text-body-secondary">${pStudent.department}</h6>
//          <p class="card-text">${pStudent.text}</p>
//          <a href="#" class="card-link">${pStudent.average}</a>
//          <a href="#" class="card-link">Students</a>
//          <a href="#" class="card-link">Classes</a>
//        </div>
//      `;

//      studentContainer.appendChild(card);
//    });
//  }

//  cardStudentsCreater()

export function getValuesStudents() {
   const inputFirst= document.getElementById("firstName");
   const inputLast = document.getElementById("lastName");
   const inputDepart = document.getElementById("depart");
   const inputAverage = document.getElementById("average");
 
   const dataObject = {
       name: inputFirst.value,
       surName: inputLast.value,
       department: inputDepart.value,
       average: inputAverage.value
   };
 
   return dataObject;
 }
 export function cardStudentsCreater(studentsData) {
   const studentContainer = document.getElementById("student");

   const card = document.createElement("div");
   card.className = "card";
   card.style.width = "18rem";

   card.innerHTML = `
       <div class="card-body">
           <h5 class="card-title">${studentsData.name}</h5>
           <h6 class="card-subtitle mb-2 text-body-secondary">${studentsData.department}</h6>
           <p class="card-text">${studentsData.description}</p>
           <p class="card-text">${studentsData.average}</p>
           <a href="#" class="card-link">Students</a>
           <a href="#" class="card-link">Classes</a>
       </div>
   `;

   studentContainer.appendChild(card);
}
