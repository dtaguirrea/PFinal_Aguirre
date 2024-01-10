function calcpromedio(suma,numnota){
    return suma/numnota;
} //Esta funcion calcula el promedio con la cantidad de notas y la suma de las notas
let sumadenotas = 0;
let respuesta = prompt("¿Quieres calcular tu ponderación? (Si/No)").toLowerCase();
if (respuesta=="si"){
    let numnotas = parseInt(prompt("¿Cuantas notas son?"));
    if (numnotas<=0){
        alert("No puedo calcular un promedio si no hay ninguna nota");
    } //Se evalua si el numero de notas es positivo y disinto a cero, para que se calcule la nota
    else {
        for (let i = 0; i < numnotas ; i++) { //Se hace un bucle for, que pida la nota tantas veces como notas hay
            let notaingresada = parseInt(prompt("Ingrese su nota numero "+String(i+1)));
            sumadenotas = sumadenotas+notaingresada; //Se va sumando el valor ingresado a sumadenotas
        }
        let promedio = calcpromedio(sumadenotas,numnotas); //Se calcula el promedio con la funcion
        alert("El promedio obtenido es de "+ promedio);
    }
}
else if (respuesta=="no") {
    alert("Entiendo, ten un lindo dia!");
} else {
    alert("Lo siento, esta respuesta no es valida");
}
