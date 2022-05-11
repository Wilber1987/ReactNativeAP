import { Entity } from "./core/Entity";
import { TblCurso } from "./TblCurso";
import { TblUsuario } from "./TblUsuario";

class TblMatriculadosCursos extends Entity {
    constructor(props) {
        super();
        for (const prop in props) {
            this[prop] = props[prop];
        }
    }
    IdMatricula = "4";
    IdCurso = "5";
    Carnet = "11327";
    Activo = "1";
    FechaMatricula = "20/8/2015 10:39:40.933";
    UltimoAcceso = "";
    TblUsuario = {
        val : this,
        async get() {
            const usuario = new TblUsuario();
            return await usuario.FindByProps("Carnet", this.val.Carnet);
        },
        set(newValue) {
            this.val = newValue;
        }
    };
    TblCurso = {
        val: this,
        async get() {
            const curso = new TblCurso();
            return await curso.FindByProps("IdCurso", this.val.IdCurso);
        },
        set(newValue) {
            this.val = newValue;
        }
    }
}
export { TblMatriculadosCursos }