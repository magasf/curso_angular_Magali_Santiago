// Ejemplo de clase con métodos encapsulados utilizando getter y setter
// Cuando un método público se hace grande es mejor desglosarlo en métodos más manejables, esos métodos más pequeños pueden
// ser privados para que no se accedan de forma directa.


class Ecommerce {
    
    enviarProductos() { // metodo público
        // comprobar si el envio es gratis
        let esAptoPorUbicacion = this.#comprobarUbicacion();
        let esAptoPorPrecioTotal = this.#comprobarPrecioTotal();
        //  continuar lógica de negocio de envío
        // ....
        console.log("Productos enviados");
    }

    // métodos privados para que no accedan desde fuera, solo desde otros métodos de la misma clase
    #comprobarUbicacion() {
        console.log("comprobando ubicacion del cliente");
    }

    #comprobarPrecioTotal() {
        console.log("comprobando precio total del carrito de la compra");
    }

}

// Creación de objetos

let tiendaDeBarrio = new Ecommerce();
tiendaDeBarrio.enviarProductos();
// tiendaDeBarrio.#comprobarPrecioTotal(); // Property '#comprobarPrecioTotal' is not accessible outside class 'Ecommerce' because it has a private identifier.


