console.log("hola mundo desde node");
console.info("Este script se está ejecutando desde una computadora y no desde el navegador");
console.warn("document, alert, confirm y prompt, no existen en el entorno de ejecución de node");
console.error("Así se ve un error");

//fs es el módulo para trabajar con el sistema de archivos
const filesystem = require('fs');
filesystem.writeFileSync('hola.txt', 'Hola desde node');
console.log("Terminamos de escribir el archivo");


const arreglo = [7000, 5000, 60, 90, 100, 10, 20, 10000, 0, 120, 2000, 340, 1000, 50];

for (let item of arreglo) {
    setTimeout(() => {console.log(item);}, item);
} 

console.log("Este log está después de imprimir el arreglo");

setTimeout(() => {console.log("Ya te hackié");}, 12000);

//http es el módulo que permite crear un servidor que pueda atender peticiones http
const http = require('http');

const server = http.createServer( (request, response) => {    

    console.log(request.url);

    if(request.url === "/") {
        response.setHeader('Content-Type', 'text/html');
        response.write('<!DOCTYPE html>');
        response.write('<html>');
        response.write('<head><meta charset="utf-8"></head><body>');
        response.write("<h1>Chilaquiles</h1>");
        response.write('<a href="/ordenar">Ordena tus chilaquiles aquí</a>');
        response.end();
    } else if (request.url === "/ordenar" && request.method === "GET") {
        response.setHeader('Content-Type', 'text/html');
        response.write('<!DOCTYPE html>');
        response.write('<html>');
        response.write('<head><meta charset="utf-8"></head><body>');
        response.write("<h1>Chilaquiles</h1>");
        response.write('<form action="/ordenar" method="POST">');

        let radios = '<fieldset><legend>¿Con qué salsa quieres tus chilaquiles?</legend>';
        radios += '<div><input type="radio" id="rojos" name="tipo_chilaquiles" value="rojos" checked>'
        radios += '<label for="rojos">Salsa roja</label></div>';
        radios += '<div><input type="radio" id="verdes" name="tipo_chilaquiles" value="verdes">';
        radios += '<label for="verdes">Salsa verde</label></div></fieldset><br>';

        response.write(radios);

        response.write('<label for="extras">¿Con qué deseas tus chilaquiles?</label>');
        response.write('<input type="text" id="extras" name="extras"><br><br>');

        response.write('<input type="submit" value="Ordenar">');

        response.write("</form>");
        response.write('</body></html>');
        response.end();
    } else if (request.url === "/ordenar" && request.method === "POST") {

        const datos = [];

        request.on('data', (dato) => {
            console.log(dato);
            datos.push(dato);
        });

        return request.on('end', () => {
            const datos_completos = Buffer.concat(datos).toString();
            console.log(datos_completos);
            const tipo_chilaquiles = datos_completos.split('&')[0].split('=')[1];
            console.log(tipo_chilaquiles);
            if(tipo_chilaquiles === "rojos") {
                response.setHeader('Content-Type', 'text/html');
                response.write('<!DOCTYPE html>');
                response.write("Gracias por tu orden");
                response.write('<img alt="chilaquiles rojos" src="https://sazondemama.com/wp-content/uploads/2022/09/Como-hacer-la-receta-de-chilaquiles-rojos-y-cuantas-calorias-tiene-768x432.jpg">');
                return response.end();
            } else {
                response.setHeader('Content-Type', 'text/html');
                response.write('<!DOCTYPE html>');
                response.write("Gracias por tu orden");
                response.write('<img alt="chilaquiles verdes" src="https://i.pinimg.com/736x/9a/c3/2b/9ac32b9b26902dc6708d835d6b8d0954.jpg">');
                return response.end();
            }
            
        });

        
    } else {
        response.statusCode = 404;
        response.write("Lo sentimos, de esos chilaquiles no tenemos");
        response.end();
    }

    
    
});

server.listen(3000);
