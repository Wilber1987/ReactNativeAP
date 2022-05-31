import { Entity } from "./core/Entity";
import { TblContenidos } from "./TblContenidos";

class TblBloqueCurso extends Entity {
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
        val: [],
        get: async () => {
            if (this.IdBloque != "") {
                const Contenidos = new TblContenidos();
                return await Contenidos.GetByProps("IdBloque", this.IdBloque);
            }else {
                return this.TblContenidos.val
            }
        },
        set: (newValue) => {
            this.TblContenidos.val = newValue;
        }
    }
}
export { TblBloqueCurso }