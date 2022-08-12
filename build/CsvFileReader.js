"use strict";
//a classe CsvFileReader possui código reutilizável
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CsvFileReader = void 0;
const fs_1 = __importDefault(require("fs"));
class CsvFileReader {
    //recebe filename como o primeiro argumento vindo da linha 3 em index.ts
    constructor(filename) {
        this.filename = filename;
        this.data = []; //inicia um array do tipo MatchData com a propriedade 'data'
    }
    //formata os dados usando a variavel filename vinda do constructor
    //acessamos através de read.data
    read() {
        this.data = fs_1.default.readFileSync(this.filename, {
            encoding: 'utf-8'
        }).split('\n')
            .map((row) => {
            return row.split(',');
        });
    }
}
exports.CsvFileReader = CsvFileReader;
