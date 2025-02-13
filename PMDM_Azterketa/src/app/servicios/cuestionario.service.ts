import { HttpClient } from '@angular/common/http';
import { AlertController } from '@ionic/angular';
import { IPregunta } from './../interfaces/interfaces';
import { Observable } from 'rxjs';
import { Injectable, input } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CuestionarioService {
  // Array bat gordetzeko json-ean dauden galdera guztiak. Gogoratu array-a abiarazten arazoak ekiditzeko
  preguntas:IPregunta[] = [];

  // Gehitu beharrezkoak diren konponenteak eta zerbitzuak
  constructor(private http: HttpClient, private alertCtrl: AlertController) {
    this.datuak_cargatu();
    //Datuak kargatu
  }

  // IPregunta array-a bueltatuko duen metodoa, hau da, galdetegiko galdera guztiak array batean
  public getPreguntas()
  {
    return this.preguntas;
  }

  // Fitxategia irakurtzeko metodoa
  // Gogoratu asinkronoa dela.
  // Fitxategitik irakurtzen ditu datuak eta arrayan gordetzen ditu
  async datuak_cargatu()
  {
    let datuakFitx:Observable<IPregunta[]>;
    datuakFitx = this.http.get<IPregunta[]>("assets/datos/datos.json");
    datuakFitx.subscribe(datuak => {
      this.preguntas.push(...datuak);
      this.preguntas.forEach(element => {
        element.respuestasIncorrectas = [];
        element.intentos = 0;
        element.acierto = false;
      });
    });
    
  }

  // Ireki alerta bat galderaren enuntziatuarekin eta konprobatu erantzuna
  // 1 - Erantzun zuzena ala okerra denaren arabera eguneratzen du egoera
  // 2 - Ez ba du asmatzen:
  // 2.1 Saiakera kopuruari kendu bat
  // 2.2 Gordeko du erantzuna erantzunen array-an
  public async preguntar(pregunta:any): Promise<boolean> {
    return new Promise(async (resolve) => {
      const alert = await this.alertCtrl.create({
        header: "De que marca es este logotipo?",
        inputs: [
          {
            type:"text",
            placeholder: "Atencion a la ortografia"
          }
        ],
        buttons: [
          {
            text: "enviar",
            handler: (input) => this.comprobatu(input[0], pregunta),
          }
        ]
      });
      await alert.present();
    });
  }

  comprobatu(saiakera:string, pregunta:any){
    if (pregunta.respuesta == saiakera) {
      pregunta.acierto = true;
    }else{
      pregunta.intentos--;
      pregunta.respuestasIncorrectas.push(saiakera);
    }
  }

}
