import { Entity } from "./core/Entity";

class TblUsuario extends Entity {
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
    ApiMethods = {
        Get: "TblUsuario",
    }  
    Carnet = "10001";
    Nombres = "MARITZA";
    RutaFotoUsuario = "~/images/profile.png";
    ApellidoPaterno = "ZAVALA";
    ApellidoMaterno = "PARRALES";
    NombreUsuario = "c10032802";
    Activo = "1";
    CodigoSexo = "Femenino";
    Email = "usav_10032802@usav.edu.ni";
    FechaNac = new Date();
    Acercademi = "";
    Ciudad = "";
}
export { TblUsuario }