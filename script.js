import {teachersData} from "./teachers.js"
// import {students} from "./students.js"
import {header} from "./header.js"
import{render} from "./render.js"

render ("#script",header,teachersData)


document.querySelector("#home-link").addEventListener("click",()=> {render("#content",content)})