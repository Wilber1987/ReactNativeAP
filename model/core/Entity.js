class Entity {
    ApiRoute = "";
    ApiMethods = {
        Get: this.__proto__.constructor.name,
        Set: "ApiSet",
        Update: "ApiUpdate"
    }
    Get = async () => {
        // let Data = await fetch(this.ApiRoute + + this.ApiMethods.Get, {
        //     method: 'GET'
        // });
        //Data = await Data.json();
        //return Data;
        let Data = await import("../../APIDatabase/" + this.ApiMethods.Get + ".json");
        return Data.default.map(ent => {
            const name = new this.constructor(ent);
            console.log(name);
            return (new this.constructor(ent))
        });
    }
}
export { Entity }