class Persona {
    constructor(persona = {
        Nombres: "undefined",
        FechaNacimiento: "",
        Direccion: ""
    }) {
        for (const prop in persona) {
            this[prop] = persona[prop];
        }
    }
    Nombres = "undefined";
    FechaNacimiento = new Date();
    Direccion = "undefined";
    Codigo = "0001";
    // GetPersonas = async () => {
    //     const persona1 = new Persona({Nombres: "Marlon Aguilar"});
    //     return [
    //        persona1,
    //        (new Persona({Nombres: "Marlon Aguilar"}))
    //     ];
    // }
}
export { Persona }