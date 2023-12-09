// import {students} from "./students.js"
import {header} from "./header.js"
import{render} from "./render.js"
import {footer} from "./footer.js"
import {teachersData} from "./teachers.js"
render ("#script",header,teachersData,footer)


document.querySelector("#home-link").addEventListener("click",()=> {render("#content",content)}) 