import { teachers } from "../data.js";
export const teachersData = {
  name: `Huseyin`,
  content: `
        <h1>Teachers</h1>
${teachers.map((teacher) => {
  return `<div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title"> ${teacher.name}</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
`;
})}
    `,
};