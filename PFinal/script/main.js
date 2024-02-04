//Tienda Virtual//
//Mercadería
let mercaderia =[{"id":1,"nombre":"manzana","precio":10},{"id":2,"nombre":"iphone","precio":1000},{"id":3,"nombre":"cocacola","precio":100},{"id":4,"nombre":"tomate","precio":50},{"id":5,"nombre":"perro","precio":1000},{"id":6,"nombre":"queso","precio":70}]

//Carrito
let carrito=[{"id":1,"cantidad":0},{"id":2,"cantidad":0},{"id":3,"cantidad":0},{"id":4,"cantidad":0},{"id":5,"cantidad":0},{"id":6,"cantidad":0}]

//Agregar producto
function respuestabotonx(numero){
    carrito.push({id: numero})
    Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Se agregó al carrito",
        showConfirmButton: false,
        timer: 1000
    });
}
//Botones
let boton1=document.getElementById("boton1")
boton1.addEventListener("click",    Swal.fire({
    title: "Su total a pagar es de:",
    text: precio,
    confirmoButtonText: "Ir a pagar"
  }))
let boton2=document.getElementById("boton2")
boton2.addEventListener("click",respuestabotonx(2))
let boton3=document.getElementById("boton3")
boton3.addEventListener("click",respuestabotonx(3))
let boton4=document.getElementById("boton4")
boton4.addEventListener("click",respuestabotonx(4))
let boton5=document.getElementById("boton5")
boton5.addEventListener("click",respuestabotonx(5))
let boton6=document.getElementById("boton6")
boton6.addEventListener("click",respuestabotonx(6))
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
