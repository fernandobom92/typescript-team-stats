import { MatchReader } from "./MatchReader";
import { Summary } from "./Summary";

//cria uma instancia de MatchReader
const matchReader = MatchReader.fromCsv('football.csv');
const summary = Summary.analiseDeJogosReport('Liverpool', 'report.html');

matchReader.load();
summary.buildAndPrintReport(matchReader.matches);