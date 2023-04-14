const url = 'https://aws.random.cat/meow';

const newImageButton = document.querySelector('#new-image-button');
const catImage = document.querySelector('#cat-image');

newImageButton.addEventListener('click', () => {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      catImage.src = data.file;
      catImage.alt = 'Imagen de gato aleatoria';
    })
    .catch((error) => console.error('Error:', error));
});
