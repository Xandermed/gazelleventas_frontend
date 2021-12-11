export interface Cliente {
    id: string;
    nombre: string;
    apellido: string;
    telefono: string;
    ciudad: string;
    correo: string;
    nick: string;
    password?: string;
    hash?: string;
}