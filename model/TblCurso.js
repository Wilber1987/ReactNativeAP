class TblCurso {
    constructor(curso =  {
        "IdCurso": undefined,
        "NombreCurso": undefined,
        "RutaImagenCurso": undefined,
        "FechaCreacion": undefined,
        "Estado": undefined,
        "PassCurso": undefined,
        "ResumenCurso": undefined,
        "IdCreadorVideo": undefined,
        "FechaInicio": undefined,
        "Finalizado": undefined,
        "NumVisitas": undefined
    }){
        for (const prop in curso) {
            this[prop] = curso[prop];
        }
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
    Get = async (param)=>{
        const Cursos = await import("../APIDatabase/TblCurso.json");
        const CursosFilt = Cursos.default.filter(c => 
            c.NombreCurso.toUpperCase().includes(param.toUpperCase()))
        return CursosFilt.map(c => (new TblCurso(c)));
    }
}
export {TblCurso}