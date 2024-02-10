//Tienda Virtual//
//Mercadería
let mercaderia =[
    {"id":1,
    "nombre":"manzana",
    "precio":100},

    {"id":2,
    "nombre":"platano",
    "precio":800},

    {"id":3,
    "nombre":"arandano",
    "precio":500},

    {"id":4,
    "nombre":"kiwi",
    "precio":300},

    {"id":5,
    "nombre":"naranja",
    "precio":350},

    {"id":6,
    "nombre":"frutilla",
    "precio":25}
]
let mercaderiaStorage= JSON.stringify(mercaderia)
sessionStorage.setItem("mercaderia",mercaderiaStorage)
//Funciones
//Funcion Agregar producto
function respuestabotonx(numero){
    let carritoUpdate = JSON.parse(sessionStorage.getItem("carrito"))
    carritoUpdate.push({"id": numero})
    sessionStorage.clear
    sessionStorage.setItem("carrito",JSON.stringify(carritoUpdate))
    Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Se agregó al carrito el elemento",
        showConfirmButton: false,
        timer: 1000
    });
}
//Funcion Vaciar
function vaciarcarrito(){
    sessionStorage.clear()
    carrito=[]
    let carritoStorage= JSON.stringify(carrito)
    sessionStorage.setItem("carrito",carritoStorage)
    sessionStorage.setItem("mercaderia",mercaderiaStorage)
}
//Funcion Pagar
function pagarcarrito(){
    let precio=0
    carritoUpdate= JSON.parse(sessionStorage.getItem("carrito"))
    mercaderia= JSON.parse(sessionStorage.getItem("mercaderia"))
    for (let i = 0; i < carritoUpdate.length; i++) {
        let productoCarrito = carritoUpdate[i];
        let productoMercaderia = mercaderia.find(producto => producto.id === productoCarrito.id);
        precio =precio + productoMercaderia.precio;
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
            confirmButtonText: "Ver recetas con estos artículos"
          });
    }

}
//Carrito
let carrito=[]
let carritoStorage= JSON.stringify(carrito)
sessionStorage.setItem("carrito",carritoStorage)

//Botones
let btn1=document.getElementById("boton1")
btn1.addEventListener("click",() => respuestabotonx(1))

let btn2=document.getElementById("boton2")
btn2.addEventListener("click",() =>respuestabotonx(2))

let btn3=document.getElementById("boton3")
btn3.addEventListener("click",() =>respuestabotonx(3))

let btn4=document.getElementById("boton4")
btn4.addEventListener("click",() =>respuestabotonx(4))

let btn5=document.getElementById("boton5")
btn5.addEventListener("click",() =>respuestabotonx(5))

let btn6=document.getElementById("boton6")
btn6.addEventListener("click",() =>respuestabotonx(6))
//Vaciar el carrito
let vacio=document.getElementById("vaciar")
vacio.addEventListener("click",() =>vaciarcarrito())
//"Pagar"
let pagar=document.getElementById("pagar")
pagar.addEventListener("click",pagarcarrito)

//API
let queryUrl='https://api.spoonacular.com/recipes/findByIngredients?apiKey=8ee72d39a6f54e4682fc513f5867f4ec&ingredients=apples'
console.log(fetch(queryUrl))