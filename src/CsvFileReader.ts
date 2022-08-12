//a classe CsvFileReader possui código reutilizável

import fs from 'fs';

export class CsvFileReader {
  data: string[][] = []; //inicia um array do tipo MatchData com a propriedade 'data'
  
  //recebe filename como o primeiro argumento vindo da linha 3 em index.ts
  constructor(public filename: string) {}
  
  //formata os dados usando a variavel filename vinda do constructor
  //acessamos através de read.data
  read(): void {
    this.data = fs.readFileSync(this.filename, {
      encoding: 'utf-8'
    }).split('\n')
      .map(
        (row: string): string[] => { 
          return row.split(','); 
        }
      );
  }
}