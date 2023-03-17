import ecommerce from "../assets/e-commerceImg.png";
import pokedex from "../assets/pokedexImg.png";
import rickAndMorty from "../assets/rick and morty.png";
import weatherApp from "../assets/weaderAppImg.png";

const projects = [
  {
    id: 1,
    img: ecommerce,
    projectName: "Ecommerce",
    typeProject: "practice",
    imgs: {},
    API: "yes",
    icons: ["boxicons"],
    technologies: ["react"],
    bookstores: ["axios ", "redux ", "react-hooks-form ", "react-router-dom ", "thunk "],
    summary: "Complete ecommerce where you can register a user, add products to the cart and buy.",
    details: "Project carried out to consume a complete API, where we streng then our knowledge in GitHub and teamwork. It was quite a complex project because we put into practice advanced concepts of asynchronous requests that we made in order to obtain the products that were displayed. We also implement concepts of protected routes with the Token Bearer. We managed to complete 100% of the project.",
    url: "https://ms-shop.netlify.app",
  },
  {
    id: 2,
    img: pokedex,
    projectName: "Pokedex",
    typeProject: "practice",
    imgs: {},
    API: "yes",
    icons: ["boxicons"],
    technologies: ["react"],
    bookstores: ["axios", "redux", "react-hooks-form", "react-router-dom"],
    summary: "Web site that shows all the information of the pokemons and filters them by their type.",
    details: "Project made to implement asynchronous requests and global states using redux. Adding the dark-mode I tried to give a more complex and complete touch to the project.",
    url: "https://mspokedex.netlify.app",
  },
  {
    id: 3,
    img: rickAndMorty,
    projectName: "Rick and Morty App",
    typeProject: "practice",
    imgs: {},
    API: "yes",
    icons: ["boxicons"],
    technologies: ["react"],
    bookstores: ["axios"],
    summary: "Web site that shows all the information on the animated series Rick & Morty.",
    details: "ProyeProject carried out in a team of 3 people to strengthen knowledge in GitHub and teamwork. With this project we reinforce knowledge of asynchronous request.",
    url: "https://hilarious-dango-45fd34.netlify.app",
  },
  {
    id: 4,
    img: weatherApp,
    projectName: "Weather app",
    typeProject: "practice",
    imgs: {},
    API: "yes",
    icons: ["boxicons"],
    technologies: ["react"],
    bookstores: ["axios"],
    summary: "Web site that shows the temperature and weather status depending on the user's location.",
    details: "Project carried out to reinforce knowledge in asynchronous requests.",
    url: "https://entregable2mjsc-weatherapp.netlify.app",
  },
];

export default projects;
