//Tienda Virtual//
//Mercadería
let mercaderia =[{"id":1,"nombre":"manzana","precio":10},{"id":2,"nombre":"iphone","precio":1000},{"id":3,"nombre":"cocacola","precio":100},{"id":4,"nombre":"tomate","precio":50},{"id":5,"nombre":"perro","precio":1000},{"id":6,"nombre":"queso","precio":70}]

//Carrito
let carrito=[{"id":1,"cantidad":0},{"id":2,"cantidad":0},{"id":3,"cantidad":0},{"id":4,"cantidad":0},{"id":5,"cantidad":0},{"id":6,"cantidad":0}]
let carritoStorage= JSON.stringify(carrito)
sessionStorage.setItem("carrito",carritoStorage)
//Agregar productos al carrito
//Manzana
let botonmzn=document.getElementById("btnmzn")
botonmzn.addEventListener("click",respuestabtnmzn)
function respuestabtnmzn(){
    let carritoUpdate = JSON.parse(sessionStorage.getItem("carrito"))
    carritoUpdate[0].cantidad=carritoUpdate[0].cantidad+1
    sessionStorage.clear
    sessionStorage.setItem("carrito",JSON.stringify(carritoUpdate))
}
//Iphone
let botoniph=document.getElementById("btniph")
botoniph.addEventListener("click",respuestabtniph)
function respuestabtniph(){
    let carritoUpdate = JSON.parse(sessionStorage.getItem("carrito"))
    carritoUpdate[1].cantidad=carritoUpdate[1].cantidad+1
    sessionStorage.clear
    sessionStorage.setItem("carrito",JSON.stringify(carritoUpdate))
}
//Cocacola
let botoncoca=document.getElementById("btncoca")
botoncoca.addEventListener("click",respuestabtncoca)
function respuestabtncoca(){
    let carritoUpdate = JSON.parse(sessionStorage.getItem("carrito"))
    carritoUpdate[2].cantidad=carritoUpdate[2].cantidad+1
    sessionStorage.clear
    sessionStorage.setItem("carrito",JSON.stringify(carritoUpdate))
}
//Tomate
let botontmt=document.getElementById("btntmt")
botontmt.addEventListener("click",respuestabtntmt)
function respuestabtntmt(){
    let carritoUpdate = JSON.parse(sessionStorage.getItem("carrito"))
    carritoUpdate[3].cantidad=carritoUpdate[3].cantidad+1
    sessionStorage.clear
    sessionStorage.setItem("carrito",JSON.stringify(carritoUpdate))
}
//Perro
let botonperro=document.getElementById("btnperro")
botonperro.addEventListener("click",respuestabtnperro)
function respuestabtnperro(){
    let carritoUpdate = JSON.parse(sessionStorage.getItem("carrito"))
    carritoUpdate[4].cantidad=carritoUpdate[4].cantidad+1
    sessionStorage.clear
    sessionStorage.setItem("carrito",JSON.stringify(carritoUpdate))
}
//Queso
let botonqso=document.getElementById("btnqso")
botonqso.addEventListener("click",respuestabtnqso)
function respuestabtnqso(){
    let carritoUpdate = JSON.parse(sessionStorage.getItem("carrito"))
    carritoUpdate[5].cantidad=carritoUpdate[5].cantidad+1
    sessionStorage.clear
    sessionStorage.setItem("carrito",JSON.stringify(carritoUpdate))
}
//Vaciar el carrito
let vaciar=document.getElementById("vaciar")
vaciar.addEventListener("click",vaciarcarrito)
function vaciarcarrito(){
    sessionStorage.clear
    sessionStorage.setItem("carrito",carritoStorage)
}
//"Pagar"
let pagar=document.getElementById("pagar")
pagar.addEventListener("click",pagarcarrito)
function pagarcarrito(){
    let precio=0
    carritoUpdate= JSON.parse(sessionStorage.getItem("carrito"))
    for (let i = 0; i < carritoUpdate.length ; i++) {
        precio= precio+carritoUpdate[i].cantidad*mercaderia[i].precio
    }
    if (precio==0){
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Por favor agregue al menos un elemento a su carrito",
          });
    }
    else{
        Swal.fire({
            title: "Su total a pagar es de:",
            text: precio,
            confirmoButtonText: "Ir a pagar"
          });
    }

}
