import ecommerce from '../assets/e-commerceImg.png'
import pokedex from '../assets/pokedexImg.png'
import rickAndMorty from '../assets/rick and morty.png'
import weatherApp from '../assets/weaderAppImg.png'

const projects = [
  {
    id: 1,
    img: ecommerce, 
    proyecto: "Ecommerce",
    videos: {},
    API: "si",
    icons: ["boxicons"],
    tecnologias: ["react"],
    librerias: ["axios", "redux", "react-hooks-form","react-router-dom", "thunk"],
    resumen: "Ecommerce completo donde puedes registrar usuario, agregar productos al carrito y comprar.",
    detalles: "Proyecto realizado para consumir un API completa, donde afianzamos nuestro conocimiento en GitHub y trabajo en quipo. Fue un proyecto bastante complejo porque pusimos en practica conceptos avanzados de peticiones asincrónicas que realizamos para poder obtener los productos que fueron mostrados. Además implementamos conceptos de rutas protegidas con el Token Bearer. Logramos cumplir con el 100% del proyecto.",
    url: "https://ms-shop.netlify.app"
  },
  {
    id: 2,
    img: pokedex,
    proyecto: "Pokedex",
    videos: {},
    API: "si",
    icons: ["boxicons"],
    tecnologias: ["react"],
    librerias: ["axios", "redux", "react-hooks-form","react-router-dom"],
    resumen: "Sitio web que muestra toda la info de los pokemones y los filtra por su tipo.",
    detalles: "Proyecto realizado para poner en práctica peticiones asincrónicas y estados globales utilizando redux. Añadiendo el dark-mode intenté darle un toque más complejo y completo al proyecto.",
    url: ""
  },
  {
    id: 3,
    img: rickAndMorty, 
    proyecto: "Rick and Morty App",
    videos: {},
    API: "si",
    icons: ["boxicons"],
    tecnologias: ["react"],
    librerias: ["axios"],
    resumen: "Sitio web que muestra toda la info de la serie animada Rick&Morty. Cuenta con Dark Mode.",
    detalles: "Proyecto realizado en equipo de 4 personas para afianzar conocimientos en GitHub y trabajo en equipo. Con este proyecto reforzamos conocimiento de peticiones asincrónicas",
    url: ""
  },
  {
    id: 4,
    img: weatherApp, 
    proyecto: "Weather app",
    videos: {},
    API: "si",
    icons: ["boxicons"],
    tecnologias: ["react"],
    librerias: ["axios"],
    resumen: "Sitio web que muestra la temperatura y estado de clima dependiendo de la ubicación del usuario.",
    detalles: "Proyecto realizado para reforzar conocimiento en peticiones asincrónicas.",
    url: ""
  },
];

export default projects