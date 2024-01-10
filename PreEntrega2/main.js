//Tienda Virtual//
//Mercadería
let mercaderia =[{"id":1,"nombre":"manzana","precio":10},{"id":2,"nombre":"iphone","precio":1000},{"id":3,"nombre":"cocacola","precio":100},{"id":4,"nombre":"tomate","precio":50},{"id":5,"nombre":"perro","precio":1000},{"id":6,"nombre":"queso","precio":70}]

//Carrito
let carrito=[{"id":1,"cantidad":0},{"id":2,"cantidad":0},{"id":3,"cantidad":0},{"id":4,"cantidad":0},{"id":5,"cantidad":0},{"id":6,"cantidad":0}]

//Agregar productos al carrito
//Manzana
let botonmzn=document.getElementById("btnmzn")
botonmzn.addEventListener("click",respuestabtnmzn)
function respuestabtnmzn(){
    carrito[0].cantidad=carrito[0].cantidad+1
}
//Iphone
let botoniph=document.getElementById("btniph")
botoniph.addEventListener("click",respuestabtniph)
function respuestabtniph(){
    carrito[1].cantidad=carrito[1].cantidad+1
}
//Cocacola
let botoncoca=document.getElementById("btncoca")
botoncoca.addEventListener("click",respuestabtncoca)
function respuestabtncoca(){
    carrito[2].cantidad=carrito[2].cantidad+1
}
//Tomate
let botontmt=document.getElementById("btntmt")
botontmt.addEventListener("click",respuestabtntmt)
function respuestabtntmt(){
    carrito[3].cantidad=carrito[3].cantidad+1
}
//Perro
let botonperro=document.getElementById("btnperro")
botonperro.addEventListener("click",respuestabtnperro)
function respuestabtnperro(){
    carrito[4].cantidad=carrito[4].cantidad+1
}
//Queso
let botonqso=document.getElementById("btnqso")
botonqso.addEventListener("click",respuestabtnqso)
function respuestabtnqso(){
    carrito[5].cantidad=carrito[5].cantidad+1
}
//Vaciar el carrito
let vaciar=document.getElementById("vaciar")
vaciar.addEventListener("click",vaciarcarrito)
function vaciarcarrito(){
    for (let i = 0; i < carrito.length ; i++) {
    carrito[i].cantidad=0
}
}
//"Pagar"
let pagar=document.getElementById("pagar")
pagar.addEventListener("click",pagarcarrito)
function pagarcarrito(){
    let precio=0
    for (let i = 0; i < carrito.length ; i++) {
        precio= precio+carrito[i].cantidad*mercaderia[i].precio
    }
    if (precio==0){
        alert("Por favor agregue al menos un producto al carrito")
    }
    else{
        alert("Debe pagar "+precio)
    }

}
