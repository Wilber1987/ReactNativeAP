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
        val: this.IdCurso, Data: [],
        async get() {    
            console.log(this.val);        
            if (this.val != "") {               
                const Bloques = new TblBloqueCurso();
                return await Bloques.GetByProps("IdCurso", this.val);
            } else {
                return this.Data;
            }
        },
        set(newValue) {
            this.val = newValue;
        }
    }
}
export { TblCurso }