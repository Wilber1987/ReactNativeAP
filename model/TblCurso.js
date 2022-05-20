import { Entity } from "./core/Entity";
import { TblBloqueCurso } from "./TblBloqueCurso";

class TblCurso extends Entity{
    constructor(curso =  {}){
        super();
        for (const prop in curso) {
            this[prop] = curso[prop];
        }
    }
    ApiMethods = {
        Get: "TblCurso",
    }
    IdCurso = "4";
    NombreCurso = "Diseño de Sistemas Orientado a Objetos";
    RutaImagenCurso = "";
    FechaCreacion = "6/8/2015 12:57:20.647";
    Estado = "1";
    PassCurso = "";
    ResumenCurso = "Resumen";
    IdCreadorVideo = "1";
    FechaInicio = "";
    Finalizado = "1";
    NumVisitas = "481";
    TblBloqueCurso = {
        val: this,
        async get() {
            const Bloques = new TblBloqueCurso();
            return await Bloques.GetByProps("IdCurso", this.val.IdCurso);
        },
        set(newValue) {
            this.val = newValue;
        }
    }
}
export {TblCurso}