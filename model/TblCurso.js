import { Entity } from "./core/Entity";
import { TblBloqueCurso } from "./TblBloqueCurso";

class TblCurso extends Entity {
    constructor(curso = {}) {
        super();
        for (const prop in curso) {
            this[prop] = curso[prop];
        }
    }
    ApiMethods = {
        Get: "TblCurso",
    }
    IdCurso = "";
    NombreCurso = "";
    RutaImagenCurso = "";
    FechaCreacion = "";
    Estado = "";
    PassCurso = "";
    ResumenCurso = "";
    IdCreadorVideo = "";
    FechaInicio = "";
    Finalizado = "";
    NumVisitas = "";
    TblBloqueCurso = {
        val: [],
        get: async ()=> {
            if (this.IdCurso != "") {
                const Bloques = new TblBloqueCurso();
                return await Bloques.GetByProps("IdCurso", this.IdCurso);
            }else{
                return this.TblBloqueCurso.val;
            }            
        }, set(newValue) {
            this.TblBloqueCurso.val = newValue;
        }
    }
}
export { TblCurso }