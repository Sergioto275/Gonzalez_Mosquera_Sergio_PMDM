//Zenbaki oso bat erabiltzaen da galderaren egoera kontrolatzeko:
// 0 - Erantzun gabe
// 1 - Erantzun zuzena
// <0 - Erantzun okerra (zenbatzeko akatsak)
// respuestasIncorrectas - array bat izan duena bidalitako erantzun okerren balioak
// intentos - egindako saiakerak
// acierto - true erantzuna asmatu izatekotan
export interface IPregunta {
  logotipo: string;
  respuesta: string;
  //Ez dira json-ean existitzen
  respuestasIncorrectas: string[];
  intentos: number;
  acierto: boolean;
}
