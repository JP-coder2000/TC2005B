
//Ejercicio 1

// Pedimos al usuario que ingrese un número
let numero = prompt("Ingresa un número para el ejericio 1:");
let tablaHTML = "<table>";
tablaHTML += "<tr><th>Valor</th><th>Cuadrado</th><th>Cubo</th></tr>";


for (let i = 1; i <= numero; i++) {
  // Calculamos el cuadrado y el cubo para el valor actual
  let cuadrado = i * i;
  let cubo = i * i * i;
  tablaHTML += "<tr><td>" + i + "</td><td>" + cuadrado + "</td><td>" + cubo + "</td></tr>";
}
tablaHTML += "</table>";

// Agregamos la tabla al documento HTML
document.getElementById("tabla").innerHTML = tablaHTML;


//Ejercicio 2
document.write(`<h3> Ejercicio 2</h3>`)
// Pedimos al usuario que ingrese un número

let a = Math.floor(Math.random() * 50);
let b = Math.floor(Math.random() * 50);
let correcto = a + b



const start = Date.now();
let respuesta = prompt(`La suma de los numeros ${a} y ${b} es igual a = `);


if (respuesta == correcto ){
    document.write(`<p> Respondiste correctamente que la suma de los dos numeros aleatorios ${a} y ${b} es ${respuesta} </p>`)
}
else{
    document.write(`<p> No puede ser que no sepas sumar </p>`)
}


const final = Date.now();
const tiempo = (final-start)/1000
document.write(`Te tardaste ${tiempo} segundos en responder la pregunta`)



//Ejercicio 3
document.write(`<h3>Ejercicio 3</h3>`)

function contarElementos(array, elemento) {
    let contador = 0;
    for (let i = 0; i < array.length; i++) {
      if (array[i] === elemento) {
        contador++;
      }
    }
    return contador;
  }
  
  function contarNumeros(array) {
    let ceros = contarElementos(array, 0);
    let negativos = 0;
    let positivos = 0;
  
    for (let i = 0; i < array.length; i++) {
      if (array[i] < 0) {
        negativos++;
      } else if (array[i] > 0) {
        positivos++;
      }
    }
  
    return { ceros, negativos, positivos };
}
  
let miArray = [1, 0, -2, 3, -4, 0, 5, 6, -7, 0];
let resultado = contarNumeros(miArray);
document.write(`En tu arreglo ${miArray}, hay ${resultado.ceros} ceros, ${resultado.negativos} negativos y ${resultado.positivos} positivos `);


document.write(`<h3> Ejercicio 4 </h3>`)

let promedios = () => {
    let suma = 0;
    matriz = [    [21, 5, 5],
      [2, 90, 7],
      [1, 2, 9]
    ];
  
    for (let index = 0; index < matriz.length; index++) {
      let row = matriz[index];
      for (let i = 0; i < row.length; i++) {
        suma += row[i];
      }
      suma = suma/matriz.length;
      document.write(`<p> Promedio de suma de columa ${index + 1}: ${suma} </p>`);
      suma = 0;
    }
  }
  
promedios();

document.write(`<h3> Ejercicio 5 </h3>`)

let inverso = () => {
    let numero_inverso = prompt("Ingresa el número que quieras poner al inverso: ");
    let convertAndReverse = numero_inverso.toString().split("").reverse().join("");
    document.write(`El inverso de ${numero_inverso} es ${convertAndReverse}`);
    return convertAndReverse;
  }
  
inverso();


class CuentaBancaria {
    constructor(saldoInicial) {
      this.saldo = saldoInicial;
    }
  
    depositar(monto) {
      this.saldo += monto;
    }
  
    retirar(monto) {
      if (monto > this.saldo) {
        alert("No hay suficiente dinero en la cuenta");
      } else {
        this.saldo -= monto;
      }
    }
  }
  
  const saldoElement = document.getElementById("saldo");
  const montoElement = document.getElementById("monto");
  const depositarButton = document.getElementById("depositar");
  const retirarButton = document.getElementById("retirar");
  
  let miCuenta = new CuentaBancaria(1000);
  
  saldoElement.innerText = miCuenta.saldo;
  
  depositarButton.addEventListener("click", () => {
    const monto = Number(montoElement.value);
    miCuenta.depositar(monto);
    saldoElement.innerText = miCuenta.saldo;
  });
  
  retirarButton.addEventListener("click", () => {
    const monto = Number(montoElement.value);
    miCuenta.retirar(monto);
    saldoElement.innerText = miCuenta.saldo;
  });
  
  





