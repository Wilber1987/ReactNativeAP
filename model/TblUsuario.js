import { Entity } from "./core/Entity";

class TblUsuario extends Entity{
    constructor(usuario = {
        Nombres: "undefined",
        FechaNacimiento: "",
        Direccion: ""
    }) {
        super();
        for (const prop in usuario) {
            this[prop] = usuario[prop];
        }        
    }
    Nombres = "undefined";
    FechaNacimiento = new Date();
    Direccion = "undefined";
    Codigo = "0001";
}
export { TblUsuario }