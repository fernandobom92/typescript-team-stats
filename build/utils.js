"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateStringToDate = void 0;
const dateStringToDate = (dateString) => {
    //entrada seria 28/10/2018
    //const dateParts = dateString.split('/') >>>>>> saida seria ['28','10','2018']
    const dateParts = dateString
        .split('/')
        .map((value) => {
        return parseInt(value); //converte string em numeros
    });
    //retorna ano, mes e dia
    //mes possui -1 porque janeiro é index[0]
    return new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
};
exports.dateStringToDate = dateStringToDate;
