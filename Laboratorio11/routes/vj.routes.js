const express = require('express');

const router = express.Router();

router.use('/destiny2', (request, response, next) => {
    let html = `<h3>Has entrado al video juego destiny 2</h3>
    <img class="cover" src="https://img.zonared.com/images/caratulas/5800/5828-th1.jpg" alt="Destiny 2">
    <p>'Destiny 2' es la secuela de conocidísimo MMORPG de Activision y Bungie, el cual viene a dar continuación a los hechos ocurridos en su antecesor centrándose en la historia de los Guardianes, unos guerreros encargados de preservar el Universo de las amenazas que puedan suponer la destrucción más absoluta. En 'Destiny 2' los jugadores tendrán que enfrentar a la Legión Roja, una raza de invasores liderados por Ghaul. La llegada de estos guerreros ha supuesto la caída de La Torre, el bastión de los Guardianes en la Tierra y también la caída de La Ciudad, el que se suponía era el lugar más seguro de La Tierra. El juego ha confirmado su lanzamiento para el próximo 8 de septiembre y, al contrario que la primera entrega, esta sí llegará a PC, algo que ya pedían muchos jugadores anteriormente. 'Destiny 2' tendrá un total de 5 ediciones diferentes de compra que incluirán todo tipo de incentivos y regalos.</p>`
    response.send(html);
});

router.use('/minecraft', (request, response, next) => {
    let html = `<h3>Has entrado al video juego minecraft</h3>
    <img width="225" height="172" src="https://www.conmasfuturo.com/wp-content/uploads/2015/09/Minecraftprincipal.png" data-lazy-type="image" data-lazy-src="https://www.conmasfuturo.com/wp-content/uploads/2015/09/Minecraftprincipal.png" class="lazy attachment-full size-full wp-post-image lazy-loaded" alt="" decoding="async" draggable="false">
    Minecraft es un videojuego de mundo abierto donde la exploración y las construcciones son fundamentales. Creado por Markus Persson, nos permite desarrollar nuestros propios universos fantásticos y artísticos, mediante la colocación y destrucción de bloques.  Al ser un videojuego de mundo abierto, no tiene una misión concreta (salvo alguno de sus modos de juego) y consiste en la construcción libre mediante el uso de cubos con texturas tridimensionales. Los bloques representan distintos elementos de la naturaleza y el jugador puede desplazarse por su entorno y modificarlo mediante la creación, recolección y transporte de esos bloques. Nunca se generan dos mundos iguales, pues se crean mediante el uso de algoritmos.`
    response.send(html);
});

router.use('/r6', (request, response, next) => {
    let html = `<img src="https://img.asmedia.epimg.net/resizer/R2yGuktfnYJ5hehaFsIdTXnFzrU=/480x250/as01.epimg.net/meristation/imagenes/2020/06/09/header_image/48383421591728569.jpg" alt="Rainbow Six Siege" height="250" width="480" sizes="
    (min-width: 996px) 996px,
    (min-width: 768px) 680px,
    100vw" srcset="https://img.asmedia.epimg.net/resizer/R2yGuktfnYJ5hehaFsIdTXnFzrU=/480x250/as01.epimg.net/meristation/imagenes/2020/06/09/header_image/48383421591728569.jpg 480w,https://img.asmedia.epimg.net/resizer/oyEJ1YO3vxzYINPguzVAz-tYZN4=/680x340/as01.epimg.net/meristation/imagenes/2020/06/09/header_image/48383421591728569.jpg 680w,https://img.asmedia.epimg.net/resizer/bRg6wWAxnh5Aum-o6-46qXPg7S0=/996x340/as01.epimg.net/meristation/imagenes/2020/06/09/header_image/48383421591728569.jpg 996w,https://img.asmedia.epimg.net/resizer/QU0tF1uQzRyBKeA8Rnea9_tFbYA=/1360x680/as01.epimg.net/meristation/imagenes/2020/06/09/header_image/48383421591728569.jpg 1360w" loading="lazy">
    Rainbow Six Siege, desarrollado por Ubisoft Montreal y editado por Ubisoft para PC, PlayStation 4 y Xbox One, es un título de acción first person shooter en el que podremos tomar parte en arriesgadas operaciones antiterroristas en modalidades multijugador cooperativas y competitivas. Combates intensos y altamente letales en entornos cerrados, tácticas, juego en equipo, acción explosiva... son lo que define la experiencia de juego. El juego establece un nuevo referente en cuando a enfrentamientos de rango cercano y planteamiento estratégico, dentro del legado Tom Clancy's Rainbow Six.`
    response.send(html);
});


module.exports = router;