const container = document.querySelector(".contenedor");

const words = [
  "Bienvenido a Este Sitio de Prueba",
  "Este es un texto de prueba",
  "Welcome to this Web Site",
  "This is a Text Test"
];

let index = 0;

let characters = 0;

updateText();

function updateText() {
  characters++;
  container.innerHTML = `
   <h1>${words[index].slice(0, characters)}</h1>
  `;
  if (characters === words[index].length) {
    index++;
    characters = 0;
  }

  if (index === words.length) {
    index = 0;
  }

  setTimeout(updateText, 300);
}
