const express = require('express');

const router = express.Router();

router.use('/pizza', (request, response, next) => {
    let html = `<h3> Has entrado al área de comida, específicamente pizza </h3>
    <img alt="Pizza Margarita" src="http://s3-eu-west-1.amazonaws.com/verema/images/valoraciones/0011/7628/Pizza-Margarita.png?1366124625" style="width: 300px; height: 166px;" loading="lazy">
    <p>La pizza es: Como muchos se podrán imaginar, la pizza tiene un origen muy antiguo ya que este plato, formaba parte de la cocina etrusca, aunque con forma e ingredientes bastante diferentes. Esto hace que el origen exacto sea bastante incierto.

    No obstante la pizza es una comida extendida por todo el mundo. Se considera originaria de Italia, más concretamente de Nápoles, de hecho se dice que las mejores pizzas y los mejores “pizzaiolo” son las de los napolitanos.
    
    La pizza nació como un plato “pobre”, ya que para su preparación hacen falta ingredientes baratos: harina, aceite, levadura, sal y un horno a leña. Antiguamente era más bien un alimento que servía de acompañante a otra comida principal (como si fuera pan).
    
    </p>`
    response.send(html);
});
router.use('/hamburguesa', (request, response, next) => {
    let html = `<h3> Has entrado al área de comida, específicamente Hambuerguesa</h3>
    <img decoding="async" src="https://definicion.de/wp-content/uploads/2018/03/hamburguesa.jpg" alt="Hamburguesa" width="206" height="164" class="alignright size-full wp-image-53167" align="right">
    <p>En el inglés es donde podemos establecer que se encuentra el origen del término hamburguesa. En concreto, deriva de la palabra “hamburguer”. Esta fue utilizada, por primera vez, en la segunda mitad del siglo XIX. En concreto, fue en el año 1884 cuando se usó para hacer mención a “hamburguer steak”, que era como se denominaba a la carne picada que los inmigrantes alemanes de Estados unidos, procedentes de Hamburgo, comían.
    </p>`
    response.send(html);
});



module.exports = router;