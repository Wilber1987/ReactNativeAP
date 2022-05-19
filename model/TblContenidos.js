import { Entity } from "./core/Entity"

class TblContenidos extends Entity{
    constructor(props) {
        super();
        for (const prop in props) {
            this[prop] = props[prop];
        }
    }
    IdContenido= "37";
    Nombre= "7 PELO CORTO";
    DuracionVideo= "";
    IdTipoContenido= "";
    RutaContenido= "";
    NumVistas= "";
    FechaSubida= "15/10/2019 16:17:55";
    Activo= "1";
    Descripcion= "";
    FormatoVideo= "";
    IdBloque= "9";
    Visible= "";
    IdCategoria= "";
    IdUsuario= "";
    Photo= "https://i.ytimg.com/vi/higHEcltg90/hqdefault.jpg";
  
}
export {TblContenidos}