import { Entity } from "./core/Entity";
import { TblContenidos } from "./TblContenidos";

class TblBloqueCurso extends Entity{
    constructor(props) {
        super();
        for (const prop in props) {
            this[prop] = props[prop];
        }
    }
    ApiMethods = {
        Get: "TblBloqueCurso",
    }
    IdBloque = "";
    NombreBloque = "";
    Estado = "";
    IdCurso = "";
    OrdenPosicion = "";
    TblContenidos = {
        val: this.IdBloque, Data: [],
        async get() {
            if (this.val.IdBloque != "") {
                const Contenidos = new TblContenidos();
                return await Contenidos.GetByProps("IdBloque", this.val);
            } else {
                return this.Data;
            }            
        },
        set(newValue) {
            this.Data = newValue;
        }
    }
}
export {TblBloqueCurso}