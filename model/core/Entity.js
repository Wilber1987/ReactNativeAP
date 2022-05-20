import AsyncStorage from '@react-native-async-storage/async-storage';
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
        let Data = await this.TakeData();
        Data = Data.filter(ent => {
            let flag = false;
            for (const prop in ent) {
                if (ent[prop].__proto__ != Array.prototype &&
                    ent[prop].__proto__ != Object.prototype &&
                    ent[prop].__proto__ != Function.prototype &&
                    ent[prop].toString().toUpperCase().includes(Param.toUpperCase())) {
                    flag = true;
                }
            }
            return flag;
        });
        return Data.map(ent => new this.constructor(ent));
    }

    GetByProps = async (paramName, paramValue) => {
        let Data = await this.TakeData();
        Data = Data.filter(ent => ent[paramName].includes(paramValue));
        return Data.map(ent => new this.constructor(ent));
    }
    FindByProps = async (paramName, paramValue) => {
        let Data = await this.TakeData();
        const FindObject = Data.find(ent => ent[paramName].includes(paramValue));
        if (FindObject) {
            return (new this.constructor(FindObject));
        }
    }
    Save = async ()=>{
        let Data = await this.Get();
        Data.push(this);
        await this.SaveData(Data);
        return true;
    }
    async TakeData() {
        let Data = [];
        //const DataBase = localStorage.getItem(this.ApiMethods.Get);
        const DataBase = await AsyncStorage.getItem('@' + this.ApiMethods.Get);
        //console.log(DataBase);
        if (DataBase == null) {
            //Data = await import("../../APIDatabase/" + this.ApiMethods.Get + ".json");
            Data = await fetch("../../APIDatabase/" + this.ApiMethods.Get + ".json");
            console.log(Data);  
            console.log(Data.json); 
            Data = await Data.json();
            console.log(Data);
            //Data = require("../../APIDatabase/" + this.ApiMethods.Get + ".json");
            Data = Data.default;
            //localStorage.setItem(this.ApiMethods.Get, JSON.stringify(Data));
            await AsyncStorage.setItem('@' + this.ApiMethods.Get, JSON.stringify(Data));
        } else {
            Data = JSON.parse(DataBase);
        }
        return Data;
    }
    SaveData = async (Data)=>{
        //localStorage.setItem(this.ApiMethods.Get, JSON.stringify(Data));
        await AsyncStorage.setItem('@' + this.ApiMethods.Get, JSON.stringify(Data));
    }
}
export { Entity }