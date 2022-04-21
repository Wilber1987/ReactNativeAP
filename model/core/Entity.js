class Entity {
    ApiRoute = "";
    ApiMethods = {
        Get: this.__proto__.constructor.name,
        Set: "ApiSet",
        Update: "ApiUpdate"
    }
    Get = async (Param = "") => {
        // let Data = await fetch(this.ApiRoute + + this.ApiMethods.Get, {
        //     method: 'GET'
        // });
        //Data = await Data.json();
        //return Data;
        let Data = await import("../../APIDatabase/" + this.ApiMethods.Get + ".json");
        Data = Data.default.filter(ent => {
            let flag = false;
            for (const prop in ent) {
                if (ent[prop].toUpperCase().toString().includes(Param.toUpperCase())) {
                    flag = true;
                }
            }
            return flag;
        });
        return Data.map(ent => new this.constructor(ent));
    }
}
export { Entity }