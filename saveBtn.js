import { cardTeachersCreater } from "./teachers.js"
import { getValuesTeachers } from "./teachers.js"
import { cardStudentsCreater } from "./students.js"
import { getValuesStudents } from "./students.js"
// const addTeacher=document.querySelector("#saveTeacherBtn")
const addTeacher = document.querySelector("#saveTeacherBtn");
const addStudent=document.querySelector("#saveStudentBtn")

addTeacher.addEventListener("click", function() {
    const teacherData = getValuesTeachers();
    cardTeachersCreater(teacherData);
});
addStudent.addEventListener("click", function() {
    const studentsData= getValuesStudents();
    cardStudentsCreater(studentsData);
});

addStudent=document.querySelector("#saveStudentBtn")
addTeacher.addEventListener("click", function(){
getValuesTeachers()
cardTeachersCreater()
})
addStudent.addEventListener("click", function(){
    getValuesStudents()
    cardStudentsCreater
   })