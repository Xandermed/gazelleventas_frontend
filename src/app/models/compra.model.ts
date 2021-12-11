export interface Compra {
    id: string;
    fecha: string;
    cliente: Cliente;
    producto: Producto[];
}

export interface Cliente {
    id: string;
    nombre: string;
    apellido: string;
    telefono: string;
    ciudad: string;
    correo: string;
    nick: string;
    hash: string;
}

export interface Producto {
    id: string;
    nombreProducto: string;
    precio: number;
    cantidad: number;
}
