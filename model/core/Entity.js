class Entity {
    constructor(props) {
        for (const prop in props) {
            this[prop] = curso[prop];
        }
    }
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
        const DataBase = localStorage.getItem(this.ApiMethods.Get);
        let Data = [];
        if (DataBase == null) {
            Data = await import("../../APIDatabase/" + this.ApiMethods.Get + ".json");
            localStorage.setItem(this.ApiMethods.Get, JSON.stringify(Data.default));
            Data = Data.default.filter(ent => {
                let flag = false;
                for (const prop in ent) {
                    if (ent[prop].toUpperCase().toString().includes(Param.toUpperCase())) {
                        flag = true;
                    }
                }
                return flag;
            });
        } else {
            Data = JSON.parse(DataBase).filter(ent => {
                let flag = false;
                for (const prop in ent) {
                    if (ent[prop].__proto__ != Object.prototype
                        && ent[prop].__proto__ != Function.prototype
                        && ent[prop].toUpperCase().toString().includes(Param.toUpperCase())) {
                        flag = true;
                    }
                }
                return flag;
            });
        }
        return Data.map(ent => new this.constructor(ent));
    }

    GetByProps = async (paramName, paramValue) => {
        const DataBase = localStorage.getItem(this.ApiMethods.Get);
        let Data = [];
        if (DataBase == null) {
            Data = await import("../../APIDatabase/" + this.ApiMethods.Get + ".json");
            Data = Data.default;
            localStorage.setItem(this.ApiMethods.Get, JSON.stringify(Data));
        } else {
            Data = JSON.parse(DataBase);
        }
        Data = Data.filter(ent => ent[paramName].includes(paramValue));
        return Data.map(ent => new this.constructor(ent));
    }
    FindByProps = async (paramName, paramValue) => {
        const DataBase = localStorage.getItem(this.ApiMethods.Get);
        let Data = [];
        if (DataBase == null) {
            Data = await import("../../APIDatabase/" + this.ApiMethods.Get + ".json");
            Data = Data.default;
            localStorage.setItem(this.ApiMethods.Get, JSON.stringify(Data));
        } else {
            Data = JSON.parse(DataBase);
        }
        const FindObject = Data.default.find(ent => ent[paramName].includes(paramValue));
        if (FindObject) {
            return (new this.constructor(FindObject));
        }
    }
    Save = async () => {
        try {
            const DataBase = await this.Get();// localStorage.getItem(this.ApiMethods.Get);
            DataBase.push(this);
            localStorage.setItem(this.ApiMethods.Get, JSON.stringify(DataBase));
            return true;
        } catch (error) {
            return false;
        }
    }
}
export { Entity }