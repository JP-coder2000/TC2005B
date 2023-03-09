const pinturas = [
    { 
        nombre: "Bauer en la cena" ,
        autor: "Randi Renata" , 
        imagen: "https://www.albat.com/__export/1605215759731/sites/debate/img/2020/11/12/trevor_bauer.jpg_976912859.jpg", 
        fecha: "ayer :D" ,
    }, 
    {
        nombre: "Bauer en la comida" ,
        autor: "Frix BG" , 
        imagen: "https://m.media-amazon.com/images/I/61BiQ+UsfGL._AC_SL1200_.jpg", 
        fecha: "05/06/999" ,
    }, 
    { 
        nombre: "Bauer en el desayuno" ,
        autor: "Ranix RG" , 
        imagen: "https://media-cdn.tripadvisor.com/media/photo-s/0c/11/05/8a/desayuno-tipico.jpg", 
        fecha: "hoy :D" ,
    },

];


module.exports = class Pintura {

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(nuevo_pintura) {
        this.nombre = nuevo_pintura.nombre || 'Firulais';
        this.autor = nuevo_pintura.autor || 'Delmer';
        this.imagen = nuevo_pintura.imagen || 'https://bulma.io/images/placeholders/1280x960.png';
        this.fecha = nuevo_pintura.fecha || 'Un perro muy cool';
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        pinturas.push(this);
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAll() {
        return pinturas;
    }

}
