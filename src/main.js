import "./style.css";
import data from "./data/data";
import { createThreeScene } from "./threeScene";

const cubes = [
  "./cubeDrawings/cube1.webp",
  "./cubeDrawings/cube2.webp",
  "./cubeDrawings/cube3.webp",
  "./cubeDrawings/cube4.webp",
];

const trees = [
  "./treeDrawings/tree1.jpg",
  "./treeDrawings/tree2.jpg",
  "./treeDrawings/tree3.jpg",
  "./treeDrawings/tree4.jpg",
];

const grounds = [
  "./Assignment 01/ground1.png",
  "./Assignment 01/ground2.png",
  "./Assignment 01/ground3.png",
];

document.querySelector("#app").innerHTML = `
  <main id="container">
    <section id="heading">
      <h1>${data.name}</h1>
      <p>${data.bio}</p>
    </section>

    <section id="projects">
      <div id="project-row">
      Constructivism Within the Urban Fabric
        <div class="three-model">
        <a href="./DSGN 311_A1.png" target="_blank"> 
        <img src="./DSGN 311_A1.png" id="model1" alt="Model 1 Image" />
          </a>
        </div>
          <div id="images">
           <div>
           <a href="./Assignment 01/ground1.png" target="_blank">
           <img src="./Assignment 01/ground1.png" alt="ground1" />
          </a>
          <a href="./Assignment 01/ground2.png" target="_blank">
           <img src="./Assignment 01/ground2.png" alt="ground2" />
          </a>
          <a href="./Assignment 01/ground3.png" target="_blank">
           <img src="./Assignment 01/ground3.png" alt="ground3" />
          </a>
          </div>
          <h4 id="description">My “Cadavre Exquis” is an exploration of Constructivism within the Urban Fabric. Constructivism, a design movement that originated in Russia in the 1920s, is characterized by the combination of mechanical objects into abstract, mobile structural forms. This style prioritizes functionality, rejecting the notion of art as a solitary practice, and instead envisions art as a tool for social change. It is defined by bold colors, geometric shapes, and an emphasis on industrial themes.</h4>
        </div>
      </div>

      ${/* Model 2 commented out
      <div id="project-row">
      Model 2
        <div class="three-model">
          <div id="model2"></div>
        </div>
        <div id="images-description">
          <div id="images">
            ${trees
              .map(
                (trees, index) =>
                  `<img src="${trees}" alt="tree${index + 1}" />`
              )
              .join("")}
          </div>
          <h4 id="description">A 3D tree model is a geometric representation of a tree, featuring a trunk, branches, and foliage. The trunk is typically cylindrical, with textured bark, while the branches extend outward to support leaves or a canopy. It may include roots or flowers for added detail.</h4>
        </div>
      </div>
      */""}

     ${/* Model 3 commented out
      <div id="project-row">
      Model 3
        <div class="three-model">
          <div id="model3"></div>
        </div>
        <div id="images-description">
          <div id="images">
            ${houses
              .map(
                (house, index) => 
                  `<img src="${house}" alt="house${index + 1}" />`
              )
              .join("")}
          </div>
          <h4 id="description">A 3D house model is a geometric representation of a house, featuring walls, a roof, and windows. It often includes additional details such as doors, chimneys, and balconies, with textures like brick, wood, or stucco to enhance realism. The interior may also feature rooms, furniture, and lighting for a more detailed design.</h4>
        </div>
      </div>
      */""}
    </section>

    <ul id="footer-items">
      <li>Email: ${data.contact.email}</li>
      <li>Phone: ${data.contact.phone}</li>
      <li>LinkedIn: <a href="${data.contact.linkedin}">${
  data.contact.linkedin
}</a></li>
      <li>GitHub: <a href="${data.contact.github}">${
  data.contact.github
}</a></li>
    </ul>
  </main>
`;

// Create three.js scenes for each
createThreeScene("#model1", "/3DModels/project1/cube.obj");
// createThreeScene("#model2", "/3DModels/project2/tree.obj");
// createThreeScene("#model3", "/3DModels/project3/cottage.obj");
