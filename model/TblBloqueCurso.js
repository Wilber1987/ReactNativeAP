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
    IdBloque = "6";
    NombreBloque = "Unidad I = Diseño y Modelado de Objeto Basado en UML";
    Estado = "1";
    IdCurso = "4";
    OrdenPosicion = "2";
    TblContenidos = {
        val: this,
        async get() {
            const Contenidos = new TblContenidos();
            return await Contenidos.GetByProps("IdBloque", this.val.IdBloque);
        },
        set(newValue) {
            this.val = newValue;
        }
    }
}
export {TblBloqueCurso}